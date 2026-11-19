"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon, BubbleChatIcon, Share01Icon } from "@hugeicons/core-free-icons";
import { useLikeFeedMutation, useShareFeedMutation } from "@/hooks/api/use-feeds";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/api/query-keys";

interface FeedInteractPostProps {
  feedId?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  isLikedByMe?: boolean;
  onComment?: () => void;
  commentsOpen?: boolean;
}

export const FeedInteractPost = ({
  feedId,
  likes = 0,
  comments = 0,
  shares = 0,
  isLikedByMe = false,
  onComment,
  commentsOpen,
}: FeedInteractPostProps) => {
  const likeMutation = useLikeFeedMutation();
  const shareMutation = useShareFeedMutation();
  const queryClient = useQueryClient();
  const reducedMotion = useReducedMotion();
  const [liked, setLiked] = useState(isLikedByMe);
  const [likeCount, setLikeCount] = useState(likes);
  useEffect(() => { setLiked(isLikedByMe); setLikeCount(likes); }, [isLikedByMe, likes]);

  const handleLike = () => {
    if (!feedId || likeMutation.isPending) return;
    const wasLiked = liked;
    setLiked(!wasLiked);
    setLikeCount((count) => Math.max(0, count + (wasLiked ? -1 : 1)));
    likeMutation.mutate(feedId, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all }),
      onError: () => { setLiked(wasLiked); setLikeCount(likes); toast.error("Could not update your like. Please try again."); },
    });
  };

  const handleShare = async () => {
    if (!feedId || shareMutation.isPending) return;
    const url = `${window.location.origin}/dashboard/student/feed?post=${feedId}`;
    try {
      if (navigator.share) await navigator.share({ url });
      else if (navigator.clipboard) { await navigator.clipboard.writeText(url); toast.success("Post link copied"); }
      else { toast.error("Sharing is unavailable in this browser"); return; }
      shareMutation.mutate(feedId, { onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all }), onError: () => toast.error("The link was shared, but the share count could not be updated.") });
    } catch (error) { if (!(error instanceof Error && error.name === "AbortError")) toast.error("Could not share the post"); }
  };

  return (
    <div className="flex items-center justify-between border-t border-border pt-3">
      {/* Left Stats */}
      <div className="flex items-center gap-5">
        <motion.button
          whileTap={reducedMotion ? undefined : { scale: 0.92 }}
          onClick={handleLike}
          aria-label={liked ? "Unlike post" : "Like post"}
          aria-pressed={liked}
          disabled={!feedId || likeMutation.isPending}
          className={`flex gap-2 items-center rounded-lg px-2 py-2 transition-colors group disabled:cursor-default ${
            liked
              ? "text-primary bg-primary/5"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <HugeiconsIcon icon={FavouriteIcon}
            size={20}
            strokeWidth={1.8}
            className="cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-sm font-semibold">{likeCount} <span className="hidden sm:inline">{likeCount === 1 ? "Like" : "Likes"}</span></span>
        </motion.button>
        <button type="button" onClick={onComment} aria-expanded={commentsOpen} className="flex items-center gap-2 rounded-lg px-2 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <HugeiconsIcon icon={BubbleChatIcon} size={20} strokeWidth={1.8} className="opacity-90" />
          <span className="text-sm font-semibold">{comments} <span className="hidden sm:inline">{comments === 1 ? "Comment" : "Comments"}</span></span>
        </button>
      </div>

      {/* Right Share Button */}
      <div className="flex items-center gap-4 text-gray-400">
        <button
          onClick={() => void handleShare()}
          disabled={!feedId || shareMutation.isPending}
          title="Share post"
          aria-label="Share post"
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-default"
        >
          <HugeiconsIcon icon={Share01Icon} size={20} strokeWidth={1.8} />
          {shares > 0 && (
            <span className="text-[15px] font-medium">{shares}</span>
          )}
        </button>
      </div>
    </div>
  );
};
