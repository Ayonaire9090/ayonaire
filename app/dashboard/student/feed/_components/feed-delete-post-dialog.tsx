"use client";

import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useDeleteFeedMutation } from "@/hooks/api/use-feeds";

interface FeedDeletePostDialogProps {
  feedId: string | null;
  onClose: () => void;
}

export const FeedDeletePostDialog = ({ feedId, onClose }: FeedDeletePostDialogProps) => {
  const deleteFeedMutation = useDeleteFeedMutation();

  const handleDelete = () => {
    if (!feedId || deleteFeedMutation.isPending) return;
    deleteFeedMutation.mutate(feedId, {
      onSuccess: () => {
        toast.success("Post deleted");
        onClose();
      },
      onError: (error: Error) => toast.error(error.message || "Failed to delete post"),
    });
  };

  return (
    <AlertDialog open={!!feedId} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this post?</AlertDialogTitle>
          <AlertDialogDescription>
            This can&apos;t be undone. The post and its comments will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={deleteFeedMutation.isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deleteFeedMutation.isPending}
            className="bg-red-600 hover:bg-red-700"
          >
            {deleteFeedMutation.isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
