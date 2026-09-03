import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { messagesApi } from "@/lib/api/endpoints/messages";
import { queryKeys } from "@/lib/api/query-keys";
import { ApiResponse } from "@/lib/api/types";
import { GetMessagesResult, MessageRecord } from "@/lib/api/endpoints/messages";
import { useAuthStore } from "@/store/auth.store";

const sortMessagesByCreatedAt = (messages: MessageRecord[]) =>
  [...messages].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );

const firstFile = (formData: FormData, key: "media" | "file") => {
  const value = formData.get(key);
  return typeof File !== "undefined" && value instanceof File && value.size > 0
    ? value
    : null;
};

export const useGetMessages = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.messages.forRoom(roomId),
    queryFn: () => messagesApi.getForRoom(roomId),
    enabled: !!roomId,
  });
};

export const useSendMessageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => messagesApi.send(formData),
    onMutate: async (formData) => {
      const roomId = String(formData.get("roomId") ?? "");
      const text = String(formData.get("text") ?? "");
      const replyTo = String(formData.get("replyTo") ?? "");
      const media = firstFile(formData, "media");
      const file = firstFile(formData, "file");
      const user = useAuthStore.getState().user;
      if (!roomId || !user || (!text.trim() && !media && !file)) return {};

      const now = Date.now();

      await queryClient.cancelQueries({
        queryKey: queryKeys.messages.forRoom(roomId),
      });

      const optimisticMessage: MessageRecord = {
        id: `optimistic-${now}`,
        roomId,
        text: text.trim(),
        senderId: {
          id: user._id,
          name: user.name,
          profile: user.profile ?? null,
        },
        replyTo: undefined,
        media: media
          ? { url: URL.createObjectURL(media), publicId: `local-${now}` }
          : undefined,
        file: file
          ? { url: URL.createObjectURL(file), publicId: `local-${now}` }
          : undefined,
        reactions: [],
        createdAt: new Date().toISOString(),
      };

      const existingMessages =
        queryClient.getQueryData<ApiResponse<GetMessagesResult>>(
          queryKeys.messages.forRoom(roomId),
        )?.data?.messages ?? [];
      const repliedMessage = existingMessages.find(
        (message) => message.id === replyTo,
      );
      if (repliedMessage) {
        optimisticMessage.replyTo = {
          id: repliedMessage.id,
          text: repliedMessage.text,
          senderId: repliedMessage.senderId,
        };
      }

      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(roomId),
        (old) => {
          if (!old?.data) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: sortMessagesByCreatedAt([
                ...old.data.messages,
                optimisticMessage,
              ]),
            },
          };
        },
      );

      return { roomId, optimisticId: optimisticMessage.id };
    },
    onSuccess: (response, _variables, context) => {
      if (!context?.roomId || !context.optimisticId || !response.data) return;
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(context.roomId),
        (old) => {
          if (!old?.data) return old;
          const serverMessageAlreadyArrived = old.data.messages.some(
            (message) => message.id === response.data!.id,
          );
          if (serverMessageAlreadyArrived) {
            return {
              ...old,
              data: {
                ...old.data,
                messages: old.data.messages.filter(
                  (message) => message.id !== context.optimisticId,
                ),
              },
            };
          }
          return {
            ...old,
            data: {
              ...old.data,
              messages: sortMessagesByCreatedAt(
                old.data.messages.map((message) =>
                  message.id === context.optimisticId ? response.data! : message,
                ),
              ),
            },
          };
        },
      );
    },
    onError: (_error, _variables, context) => {
      if (!context?.roomId || !context.optimisticId) return;
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(context.roomId),
        (old) => {
          if (!old?.data) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: old.data.messages.filter(
                (message) => message.id !== context.optimisticId,
              ),
            },
          };
        },
      );
    },
  });
};

export const useReactToMessageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: messagesApi.react,
    onMutate: async ({ messageId, emoji }) => {
      const user = useAuthStore.getState().user;
      if (!user) return {};

      await queryClient.cancelQueries({ queryKey: queryKeys.messages.all });
      const touchedRooms = new Set<string>();

      queryClient.setQueriesData<ApiResponse<GetMessagesResult>>(
        { queryKey: queryKeys.messages.all },
        (old) => {
          if (!old?.data) return old;
          let changed = false;
          const messages = old.data.messages.map((message) => {
            if (message.id !== messageId) return message;
            changed = true;
            touchedRooms.add(message.roomId);

            const reactions = [...(message.reactions ?? [])];
            const reactionIndex = reactions.findIndex(
              (reaction) => reaction.emoji === emoji,
            );

            if (reactionIndex >= 0) {
              const reaction = reactions[reactionIndex];
              const hasReacted = reaction.users.some((item) => item.id === user._id);
              const users = hasReacted
                ? reaction.users.filter((item) => item.id !== user._id)
                : [
                    ...reaction.users,
                    {
                      id: user._id,
                      name: user.name,
                      profile: user.profile ?? null,
                    },
                  ];

              if (users.length === 0) {
                reactions.splice(reactionIndex, 1);
              } else {
                reactions[reactionIndex] = {
                  ...reaction,
                  users,
                  count: users.length,
                };
              }
            } else {
              reactions.push({
                emoji,
                users: [
                  {
                    id: user._id,
                    name: user.name,
                    profile: user.profile ?? null,
                  },
                ],
                count: 1,
              });
            }

            return { ...message, reactions };
          });

          return changed ? { ...old, data: { ...old.data, messages } } : old;
        },
      );

      return { touchedRooms: Array.from(touchedRooms) };
    },
    onSuccess: (response) => {
      if (!response.data) return;
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(response.data.roomId),
        (old) => {
          if (!old?.data) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: old.data.messages.map((message) =>
                message.id === response.data!.id ? response.data! : message,
              ),
            },
          };
        },
      );
    },
    onError: (_error, _variables, context) => {
      context?.touchedRooms?.forEach((roomId) => {
        queryClient.invalidateQueries({
          queryKey: queryKeys.messages.forRoom(roomId),
        });
      });
    },
  });
};

export const useDeleteMessageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: messagesApi.delete,
    onMutate: async (messageId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.messages.all });
      let deletedMessage: MessageRecord | undefined;

      queryClient.setQueriesData<ApiResponse<GetMessagesResult>>(
        { queryKey: queryKeys.messages.all },
        (old) => {
          if (!old?.data) return old;
          const nextMessages = old.data.messages.filter((message) => {
            if (message.id === messageId) deletedMessage = message;
            return message.id !== messageId;
          });
          if (nextMessages.length === old.data.messages.length) return old;
          return { ...old, data: { ...old.data, messages: nextMessages } };
        },
      );

      return { deletedMessage };
    },
    onSuccess: (response) => {
      if (!response.data) return;
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(response.data.roomId),
        (old) => {
          if (!old?.data) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: old.data.messages.filter(
                (message) => message.id !== response.data!.id,
              ),
            },
          };
        },
      );
    },
    onError: (_error, _messageId, context) => {
      const message = context?.deletedMessage;
      if (!message) return;
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(message.roomId),
        (old) => {
          if (!old?.data) return old;
          if (old.data.messages.some((item) => item.id === message.id)) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: sortMessagesByCreatedAt([...old.data.messages, message]),
            },
          };
        },
      );
    },
  });
};