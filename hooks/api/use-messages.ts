import { useMutation, useQuery } from "@tanstack/react-query";
import { messagesApi } from "@/lib/api/endpoints/messages";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetMessages = (roomId: string) => {
  return useQuery({
    queryKey: queryKeys.messages.forRoom(roomId),
    queryFn: () => messagesApi.getForRoom(roomId),
    enabled: !!roomId,
  });
};

// The sender also receives their own message back over the socket
// (io.to(roomId).emit includes the sender), which patches both the room's
// message list and the room list's preview/ordering - see
// hooks/socket/use-messaging-realtime-sync.ts. So this mutation only needs
// to report success/failure back to the composer.
export const useSendMessageMutation = () => {
  return useMutation({
    mutationFn: (formData: FormData) => messagesApi.send(formData),
  });
};
