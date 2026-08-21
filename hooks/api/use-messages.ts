import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { messagesApi } from "@/lib/api/endpoints/messages";
import { queryKeys } from "@/lib/api/query-keys";
import { ApiResponse } from "@/lib/api/types";
import { GetMessagesResult, MessageRecord } from "@/lib/api/endpoints/messages";
import { useAuthStore } from "@/store/auth.store";

export const useGetMessages = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.messages.forRoom(roomId),
    queryFn: () => messagesApi.getForRoom(roomId),
    enabled: !!roomId,
  });
};

// Optimistically inserts text messages so the composer feels instant. The
// server response and socket event are reconciled by id below.
export const useSendMessageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => messagesApi.send(formData),
    onMutate: async (formData) => {
      const roomId = String(formData.get("roomId") ?? "");
      const text = String(formData.get("text") ?? "");
      const replyTo = String(formData.get("replyTo") ?? "");
      const user = useAuthStore.getState().user;
      if (!roomId || !user || !text.trim()) return {};

      await queryClient.cancelQueries({
        queryKey: queryKeys.messages.forRoom(roomId),
      });

      const optimisticMessage: MessageRecord = {
        id: `optimistic-${Date.now()}`,
        roomId,
        text: text.trim(),
        senderId: {
          id: user._id,
          name: user.name,
          profile: user.profile ?? null,
        },
        replyTo: undefined,
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
              messages: [...old.data.messages, optimisticMessage],
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
              messages: old.data.messages.map((message) =>
                message.id === context.optimisticId ? response.data! : message,
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
