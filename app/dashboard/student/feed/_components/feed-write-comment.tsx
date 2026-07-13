"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useCommentFeedMutation } from "@/hooks/api/use-feeds";

interface FeedWriteCommentProps {
  feedId?: string;
}

export const FeedWriteComment = ({ feedId }: FeedWriteCommentProps) => {
  const [text, setText] = useState("");
  const commentMutation = useCommentFeedMutation();

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!feedId || !trimmed || commentMutation.isPending) return;
    commentMutation.mutate(
      { feedId, text: trimmed },
      { onSuccess: () => setText("") },
    );
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-1 lg:gap-2">
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full hover:bg-gray-100 transition-colors shrink-0 text-gray-900">
          <Image
            src="/assets/icons/smile-icon.svg"
            alt="Smile"
            width={20} // Smaller icon for mobile
            height={20}
            className="cursor-pointer lg:w-6 lg:h-6" // Larger icon for desktop
          />
        </button>
        <button className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full hover:bg-gray-100 transition-colors shrink-0 text-gray-900">
          <Image
            src="/assets/icons/gallery-icon.svg"
            alt="Gallery"
            width={20} // Smaller icon for mobile
            height={20}
            className="cursor-pointer lg:w-6 lg:h-6" // Larger icon for desktop
          />
        </button>
        <button className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full hover:bg-gray-100 transition-colors shrink-0 text-gray-900">
          <Image
            src="/assets/icons/link-2.svg"
            alt="Link"
            width={20} // Smaller icon for mobile
            height={20}
            className="cursor-pointer lg:w-6 lg:h-6" // Larger icon for desktop
          />
        </button>
      </div>
      <div className="flex items-center gap-1 lg:gap-2 w-full">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="Write a comment..."
          className="flex-1 flex items-center bg-[#F6F6F6] rounded-full px-4 h-11 border border-gray-100 border-none min-h-[30px] max-h-[80px] overflow-auto shadow-none focus-visible:ring-0 placeholder:text-gray-500 text-[15px]"
        />
        <button
          onClick={handleSubmit}
          disabled={!feedId || !text.trim() || commentMutation.isPending}
          className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 transition-colors shrink-0 text-gray-900 disabled:opacity-50 disabled:cursor-default"
        >
          <Image
            src="/assets/icons/send-icon.svg"
            alt="Send"
            width={20} // Smaller icon for mobile
            height={20}
            className="cursor-pointer lg:w-6 lg:h-6" // Larger icon for desktop
          />
        </button>
      </div>
    </div>
  );
};
