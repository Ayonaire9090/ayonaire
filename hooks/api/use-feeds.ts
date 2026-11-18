import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { feedsApi, GetFeedsParams } from "@/lib/api/endpoints/feeds";
import { queryKeys } from "@/lib/api/query-keys";

// Cache updates for reads no longer rely on invalidate-then-refetch after a
// mutation - the /feed socket namespace broadcasts the authoritative,
// already-updated record to every connected client (see
// hooks/socket/use-feed-realtime-sync.ts, mounted on the feed page), so the
// mutations below only need to report success/failure back to their caller.

export const useCreateFeedMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => feedsApi.create(formData),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["community"] }); },
  });
};

export const useGetFeeds = (params?: GetFeedsParams) => {
  return useQuery({
    queryKey: [...queryKeys.feeds.all, params],
    queryFn: () => feedsApi.getAll(params),
  });
};

export const useEditFeedMutation = () => {
  return useMutation({
    mutationFn: (formData: FormData) => feedsApi.edit(formData),
  });
};

export const useDeleteFeedMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (feedId: string) => feedsApi.delete(feedId),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["community"] }); },
  });
};

export const useLikeFeedMutation = () => {
  return useMutation({
    mutationFn: (feedId: string) => feedsApi.like(feedId),
  });
};

export const useCommentFeedMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ feedId, text }: { feedId: string; text: string }) => feedsApi.comment(feedId, text),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["community"] }); },
  });
};

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ feedId, commentId }: { feedId: string; commentId: string }) =>
      feedsApi.deleteComment(feedId, commentId),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["community"] }); },
  });
};

export const useShareFeedMutation = () => {
  return useMutation({
    mutationFn: (feedId: string) => feedsApi.share(feedId),
  });
};

export const useReportFeedMutation = () => {
  return useMutation({
    mutationFn: ({ feedId, reason }: { feedId: string; reason: string }) =>
      feedsApi.report(feedId, reason),
  });
};
