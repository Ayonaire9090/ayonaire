"use client";

import { useState } from "react";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { Textarea } from "@/components/ui/textarea";
import { useReportFeedMutation } from "@/hooks/api/use-feeds";

interface FeedReportModalProps {
  feedId: string | null;
  onClose: () => void;
}

const REASON_OPTIONS = ["Spam", "Harassment", "Inappropriate content", "Misinformation"];

export const FeedReportModal = ({ feedId, onClose }: FeedReportModalProps) => {
  const [reason, setReason] = useState("");
  const reportMutation = useReportFeedMutation();

  const handleClose = () => {
    setReason("");
    reportMutation.reset();
    onClose();
  };

  const handleSubmit = () => {
    const trimmed = reason.trim();
    if (!feedId || !trimmed || reportMutation.isPending) return;
    reportMutation.mutate(
      { feedId, reason: trimmed },
      { onSuccess: handleClose },
    );
  };

  return (
    <AppSimpleModal
      isOpen={!!feedId}
      onClose={handleClose}
      title="Report post"
      className="max-w-[440px]"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">
          Tell us why you&apos;re reporting this post. Our team will review it.
        </p>

        <div className="flex flex-wrap gap-2">
          {REASON_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setReason(option)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                reason === option
                  ? "bg-[#F86432] text-white border-[#F86432]"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <Textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Describe the issue..."
          className="min-h-[100px] bg-gray-50 border-gray-200"
        />

        {reportMutation.isError && (
          <p className="text-sm text-red-500">
            {(reportMutation.error as Error)?.message || "Failed to report post."}
          </p>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!reason.trim() || reportMutation.isPending}
            className="px-4 py-2.5 rounded-xl bg-[#ff4d4d] hover:bg-[#ff4d4d]/90 text-white font-medium transition-colors disabled:opacity-60"
          >
            {reportMutation.isPending ? "Submitting..." : "Submit report"}
          </button>
        </div>
      </div>
    </AppSimpleModal>
  );
};
