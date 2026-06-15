import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { announcementsApi, CreateAnnouncementPayload } from "@/lib/api/endpoints/announcements";
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
