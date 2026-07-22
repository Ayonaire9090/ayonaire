import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  announcementsApi,
  CreateAnnouncementPayload,
  UpdateAnnouncementPayload,
} from "@/lib/api/endpoints/announcements";
import { queryKeys } from "@/lib/api/query-keys";

export const useCreateAnnouncementMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateAnnouncementPayload) => announcementsApi.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.announcements.all });
    },
  });
};

export const useGetAnnouncements = () => {
  return useQuery({
    queryKey: queryKeys.announcements.all,
    queryFn: () => announcementsApi.getAll(),
  });
};

export const useUpdateAnnouncementMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateAnnouncementPayload) => announcementsApi.update(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.announcements.all });
    },
  });
};

export const useDeleteAnnouncementMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (announcementId: string) => announcementsApi.delete(announcementId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.announcements.all });
    },
  });
};
