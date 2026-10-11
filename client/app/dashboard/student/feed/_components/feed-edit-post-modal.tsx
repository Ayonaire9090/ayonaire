"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { X } from "lucide-react";
import { useEditFeedMutation } from "@/hooks/api/use-feeds";

interface FeedEditPostModalProps {
  feedId: string | null;
  initialContent: string;
  onClose: () => void;
}

export const FeedEditPostModal = ({ feedId, initialContent, onClose }: FeedEditPostModalProps) => {
  const [text, setText] = useState(initialContent);
  const editFeedMutation = useEditFeedMutation();

  useEffect(() => {
    setText(initialContent);
  }, [feedId, initialContent]);

  const handleSave = () => {
    const trimmed = text.trim();
    if (!feedId || !trimmed || editFeedMutation.isPending) return;

    const formData = new FormData();
    formData.append("feedId", feedId);
    formData.append("content", trimmed);

    editFeedMutation.mutate(formData, {
      onSuccess: () => onClose(),
      onError: (error: Error) => toast.error(error.message || "Failed to update post"),
    });
  };

  return (
    <AppSimpleModal
      isOpen={!!feedId}
      onClose={onClose}
      showCloseButton={false}
      className="max-w-[560px] w-[96%] flex flex-col p-6 gap-0 bg-white rounded-3xl"
    >
      <div className="flex items-center justify-between relative pb-4 border-b border-gray-100 w-full shrink-0">
        <div className="w-8 h-8" />
        <h3 className="text-xl font-bold text-gray-900 mx-auto">Edit post</h3>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 outline-none"
        >
          <X className="size-4 text-gray-900" />
        </button>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full min-h-[140px] resize-none border-0 focus:ring-0 placeholder-gray-400 text-gray-700 text-base py-4 focus-visible:ring-0 focus-visible:outline-none outline-none bg-transparent"
      />

      <div className="flex justify-end pt-2">
        <button
          onClick={handleSave}
          disabled={!text.trim() || editFeedMutation.isPending}
          className="bg-[#F86432] hover:bg-[#F86432]/90 text-white font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer border-none disabled:opacity-60 disabled:cursor-default"
        >
          {editFeedMutation.isPending ? "Saving..." : "Save changes"}
        </button>
      </div>
    </AppSimpleModal>
  );
};
