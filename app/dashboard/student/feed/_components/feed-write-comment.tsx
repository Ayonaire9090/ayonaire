"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/api/query-keys";
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
  const queryClient = useQueryClient();

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!feedId || !trimmed || commentMutation.isPending) return;
    commentMutation.mutate(
      { feedId, text: trimmed },
      { onSuccess: () => { setText(""); queryClient.invalidateQueries({ queryKey: queryKeys.feeds.all }); }, onError: () => toast.error("Could not post your comment. Please try again.") },
    );
  };

  return (
    <div className="flex items-start gap-2">
      <div className="relative shrink-0">
        <Avatar className="w-9 h-9">
          <AvatarImage src={user?.profile?.url} alt={user?.name ?? "You"} />
          <AvatarFallback className="bg-gray-200 text-gray-500">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : "U"}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-1 flex items-center bg-[#F6F6F6] rounded-full pl-4 pr-2 min-h-11">
        <Textarea
          aria-label="Write a comment"
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
            onClick={handleSubmit}
            disabled={!text.trim() || commentMutation.isPending}
            aria-label="Post comment"
            className="flex items-center justify-center w-8 h-8 rounded-full text-[#e65c32] hover:bg-orange-100 transition-colors disabled:opacity-40"
          >
            <Send className="w-[17px] h-[17px]" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
};
