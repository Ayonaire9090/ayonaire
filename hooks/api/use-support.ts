import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supportApi, CreateTicketPayload } from "@/lib/api/endpoints/support";

const supportKey = ["support"] as const;

export const useGetSupportTickets = (params?: {
  status?: string;
  priority?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [...supportKey, "list", params ?? {}] as const,
    queryFn: () => supportApi.getAll(params),
  });
};

export const useGetSupportTicketById = (ticketId: string) => {
  return useQuery({
    queryKey: [...supportKey, "detail", ticketId] as const,
    queryFn: () => supportApi.getById(ticketId),
    enabled: !!ticketId,
  });
};

export const useCreateSupportTicketMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateTicketPayload) => supportApi.create(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: supportKey }),
  });
};

export const useReplyToTicketMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ ticketId, message }: { ticketId: string; message: string }) =>
      supportApi.reply(ticketId, message),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: supportKey });
      queryClient.invalidateQueries({ queryKey: [...supportKey, "detail", variables.ticketId] });
    },
  });
};

export const useUpdateTicketStatusMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ ticketId, status }: { ticketId: string; status: string }) =>
      supportApi.updateStatus(ticketId, status),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: supportKey }),
  });
};
