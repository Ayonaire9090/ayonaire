"use client";

import { X } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDeleteCommentMutation } from "@/hooks/api/use-feeds";
import { FeedCommentData } from "./feed-data";

interface FeedCommentListProps {
  feedId?: string;
  comments: FeedCommentData[];
  currentUserId?: string;
}

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  const initials = parts.length > 1 ? `${parts[0][0]}${parts[1][0]}` : parts[0].slice(0, 2);
  return initials.toUpperCase();
};

export const FeedCommentList = ({ feedId, comments, currentUserId }: FeedCommentListProps) => {
  const deleteCommentMutation = useDeleteCommentMutation();

  const handleDelete = (commentId: string) => {
    if (!feedId || deleteCommentMutation.isPending) return;
    deleteCommentMutation.mutate(
      { feedId, commentId },
      {
        onError: (error: Error) => toast.error(error.message || "Failed to delete comment"),
      },
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {comments.map((comment, index) => {
        const canDelete = !!comment.id && !!currentUserId && comment.authorId === currentUserId;
        return (
          <div key={comment.id ?? index} className="flex items-start gap-2.5 group">
            <Avatar className="w-8 h-8 shrink-0 bg-[#F6F6F6]">
              <AvatarFallback className="text-xs">{getInitials(comment.authorName)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0 flex items-start justify-between gap-2 bg-[#F6F6F6] rounded-2xl px-3.5 py-2.5">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-gray-900">{comment.authorName}</span>
                  {comment.timeAgo && (
                    <span className="text-xs text-gray-400">{comment.timeAgo}</span>
                  )}
                </div>
                <p className="text-[15px] text-gray-700 break-words">{comment.text}</p>
              </div>
              {canDelete && (
                <button
                  onClick={() => handleDelete(comment.id!)}
                  disabled={deleteCommentMutation.isPending}
                  className="shrink-0 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50"
                  aria-label="Delete comment"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
