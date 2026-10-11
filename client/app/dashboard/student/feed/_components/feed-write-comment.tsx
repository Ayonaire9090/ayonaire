"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, Smile, Camera } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCommentFeedMutation } from "@/hooks/api/use-feeds";
import { useAuthStore } from "@/store/auth.store";

interface FeedWriteCommentProps {
  feedId?: string;
}

export const FeedWriteComment = ({ feedId }: FeedWriteCommentProps) => {
  const [text, setText] = useState("");
  const commentMutation = useCommentFeedMutation();
  const user = useAuthStore((s) => s.user);

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!feedId || !trimmed || commentMutation.isPending) return;
    commentMutation.mutate(
      { feedId, text: trimmed },
      { onSuccess: () => setText("") },
    );
  };

  const notAvailable = (feature: string) =>
    toast.info(`${feature} isn't available yet.`);

  return (
    <div className="flex items-start gap-2">
      <button
        onClick={() => notAvailable("Switching comment identity")}
        className="relative shrink-0"
      >
        <Avatar className="w-9 h-9">
          <AvatarImage src={user?.profile?.url} alt={user?.name ?? "You"} />
          <AvatarFallback className="bg-gray-200 text-gray-500">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : "U"}
          </AvatarFallback>
        </Avatar>
        <span className="absolute -bottom-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-gray-900 border-2 border-white">
          <ChevronDown className="w-2.5 h-2.5 text-white" strokeWidth={3} />
        </span>
      </button>

      <div className="flex-1 flex items-center bg-[#F6F6F6] rounded-full pl-4 pr-2 min-h-11">
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
          className="flex-1 flex items-center bg-transparent px-0 h-9 border-none min-h-[24px] max-h-[80px] overflow-auto shadow-none resize-none focus-visible:ring-0 placeholder:text-gray-500 text-[15px] py-2"
        />

        <div className="flex items-center gap-0.5 shrink-0">
          <button
            onClick={() => notAvailable("Emoji")}
            title="Emoji"
            className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-200 transition-colors text-gray-500"
          >
            <Smile className="w-[18px] h-[18px]" strokeWidth={1.75} />
          </button>
          <button
            onClick={() => notAvailable("Photo attachments")}
            title="Photo"
            className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-200 transition-colors text-gray-500"
          >
            <Camera className="w-[18px] h-[18px]" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
};
