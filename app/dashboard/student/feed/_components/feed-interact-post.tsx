"use client";

import { ThumbsUp, MessageCircle } from "lucide-react";
import { IoArrowRedoOutline } from "react-icons/io5";
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

  const handleShare = () => {
    if (!feedId || shareMutation.isPending) return;
    shareMutation.mutate(feedId, { onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all }), onError: () => toast.error("Could not share this post.") });

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(`${window.location.origin}${window.location.pathname}?post=${feedId}`)
        .then(() => toast.success("Post link copied"))
        .catch(() => toast.error("Could not copy the post link"));
    }
  };

  return (
    <div className="flex justify-between items-center border-t border-[#f0eeeb] pt-3">
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
              ? "text-[#e65c32] bg-[#fff2ec]"
              : "text-[#77736f] hover:bg-[#f7f5f2] hover:text-[#282421]"
          }`}
        >
          <ThumbsUp
            size={20}
            strokeWidth={2}
            fill={liked ? "currentColor" : "none"}
            className="cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-sm font-semibold">{likeCount} <span className="hidden sm:inline">{likeCount === 1 ? "Like" : "Likes"}</span></span>
        </motion.button>
        <button type="button" onClick={onComment} aria-expanded={commentsOpen} className="flex gap-2 items-center rounded-lg px-2 py-2 text-[#77736f] hover:bg-[#f7f5f2] hover:text-[#282421] transition-colors">
          <MessageCircle size={20} strokeWidth={2} className="opacity-90" />
          <span className="text-sm font-semibold">{comments} <span className="hidden sm:inline">{comments === 1 ? "Comment" : "Comments"}</span></span>
        </button>
      </div>

      {/* Right Share Button */}
      <div className="flex items-center gap-4 text-gray-400">
        <button
          onClick={handleShare}
          disabled={!feedId || shareMutation.isPending}
          title="Share post"
          className="flex items-center gap-1.5 hover:text-gray-900 transition-colors disabled:cursor-default"
        >
          <IoArrowRedoOutline size={22} className="cursor-pointer" />
          {shares > 0 && (
            <span className="text-[15px] font-medium">{shares}</span>
          )}
        </button>
      </div>
    </div>
  );
};
