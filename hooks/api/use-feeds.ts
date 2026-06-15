import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { feedsApi } from "@/lib/api/endpoints/feeds";
import { queryKeys } from "@/lib/api/query-keys";

export const useCreateFeedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => feedsApi.create(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all });
    },
  });
};

export const useGetFeeds = () => {
  return useQuery({
    queryKey: queryKeys.feeds.all,
    queryFn: () => feedsApi.getAll(),
  });
};

export const useEditFeedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => feedsApi.edit(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all });
    },
  });
};

export const useDeleteFeedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (feedId: string) => feedsApi.delete(feedId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all });
    },
  });
};

export const useLikeFeedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (feedId: string) => feedsApi.like(feedId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all });
    },
  });
};

export const useCommentFeedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ feedId, text }: { feedId: string; text: string }) => feedsApi.comment(feedId, text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all });
    },
  });
};

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ feedId, commentId }: { feedId: string; commentId: string }) => 
      feedsApi.deleteComment(feedId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all });
    },
  });
};
