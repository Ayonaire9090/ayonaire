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
        reactions: [],
        createdAt: new Date().toISOString(),
      };

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
  return useMutation({
    mutationFn: messagesApi.react,
  });
};
