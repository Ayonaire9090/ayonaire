import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  notificationsApi,
  emailBroadcastApi,
  CreateNotificationPayload,
  UpdateNotificationPayload,
} from "@/lib/api/endpoints/notifications";

const notificationsKey = ["notifications"] as const;

export const useGetNotifications = (params?: {
  type?: string;
  status?: string;
  channel?: string;
  isRecurringTemplate?: string;
}) => {
  return useQuery({
    queryKey: [...notificationsKey, "list", params ?? {}] as const,
    queryFn: () => notificationsApi.getAll(params),
  });
};

export const useGetNotificationById = (id: string) => {
  return useQuery({
    queryKey: [...notificationsKey, "detail", id] as const,
    queryFn: () => notificationsApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateNotificationPayload) => notificationsApi.create(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: notificationsKey }),
  });
};

export const useUpdateNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateNotificationPayload }) =>
      notificationsApi.update(id, payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: notificationsKey }),
  });
};

export const useDeleteNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => notificationsApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: notificationsKey }),
  });
};

export const useSendNotificationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => notificationsApi.send(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: notificationsKey }),
  });
};

export const useSendEmailBroadcastMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: Omit<CreateNotificationPayload, "channel" | "type">) =>
      emailBroadcastApi.send(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: notificationsKey }),
  });
};

export const useGetEmailBroadcastHistory = () => {
  return useQuery({
    queryKey: [...notificationsKey, "email-history"] as const,
    queryFn: () => emailBroadcastApi.getHistory(),
  });
};
