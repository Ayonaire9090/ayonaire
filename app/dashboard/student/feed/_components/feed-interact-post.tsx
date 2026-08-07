"use client";

import { ThumbsUp, MessageCircle } from "lucide-react";
import { IoArrowRedoOutline } from "react-icons/io5";
import { useLikeFeedMutation, useShareFeedMutation } from "@/hooks/api/use-feeds";

interface FeedInteractPostProps {
  feedId?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  isLikedByMe?: boolean;
}

export const FeedInteractPost = ({
  feedId,
  likes = 0,
  comments = 0,
  shares = 0,
  isLikedByMe = false,
}: FeedInteractPostProps) => {
  const likeMutation = useLikeFeedMutation();
  const shareMutation = useShareFeedMutation();

  const handleLike = () => {
    if (!feedId || likeMutation.isPending) return;
    likeMutation.mutate(feedId);
  };

  const handleShare = () => {
    if (!feedId || shareMutation.isPending) return;
    shareMutation.mutate(feedId);

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(`${window.location.origin}${window.location.pathname}?post=${feedId}`)
        .catch(() => {});
    }
  };

  return (
    <div className="flex justify-between items-center border-t border-b border-gray-100 py-3">
      {/* Left Stats */}
      <div className="flex items-center gap-5">
        <button
          onClick={handleLike}
          disabled={!feedId || likeMutation.isPending}
          className={`flex gap-2 items-center transition-colors group disabled:cursor-default ${
            isLikedByMe
              ? "text-[#1877F2]"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <ThumbsUp
            size={20}
            strokeWidth={2}
            fill={isLikedByMe ? "#1877F2" : "none"}
            className="cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[15px] font-medium">{likes}</span>
        </button>
        <div className="flex gap-2 items-center text-gray-500">
          <MessageCircle size={20} strokeWidth={2} className="opacity-90" />
          <span className="text-[15px] font-medium">{comments}</span>
        </div>
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
