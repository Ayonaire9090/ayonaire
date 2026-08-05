"use client";

import React from "react";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { X } from "lucide-react";

const CRITERIA_ITEMS = [
  "Daily activity on the platform",
  "10% course completion",
  "50% course completion",
  "100% course completion",
];

interface FeedCriteriaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedCriteriaModal = ({ isOpen, onClose }: FeedCriteriaModalProps) => {
  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={false}
      className="max-w-[480px] w-[92%] p-6 bg-white rounded-3xl gap-0 animate__animated animate__fadeIn"
    >
      {/* Header */}
      <div className="flex items-center justify-between relative pb-5 w-full shrink-0">
        <div className="w-8 h-8" /> {/* spacer to balance */}
        <h3 className="text-xl font-bold text-gray-950 mx-auto tracking-tight">
          Leaderboard Criteria
        </h3>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 outline-none"
        >
          <X className="size-4 text-gray-900" strokeWidth={2.5} />
        </button>
      </div>

      {/* Criteria List */}
      <div className="flex flex-col gap-4 pt-3">
        {CRITERIA_ITEMS.map((text, idx) => (
          <div
            key={idx}
            className="flex items-center p-4 bg-[#F9FAFB] border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-sm"
          >
            <span className="font-semibold text-gray-950 text-sm sm:text-base">{text}</span>
          </div>
        ))}
      </div>
    </AppSimpleModal>
  );
};
