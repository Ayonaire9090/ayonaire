"use client";

import React, { useEffect, useState } from "react";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { X } from "lucide-react";

const CRITERIA_ITEMS = [
  { text: "Daily activity on the platform", points: "9Leader" },
  { text: "10% course completion", points: "9Leader" },
  { text: "50% course completion", points: "9Leader" },
  { text: "100% course completion", points: "9Leader" },
];

export const FeedCriteriaModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds delay for testing

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 outline-none"
        >
          <X className="size-4 text-gray-900" strokeWidth={2.5} />
        </button>
      </div>

      {/* Criteria List */}
      <div className="flex flex-col gap-4 pt-3">
        {CRITERIA_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-[#F9FAFB] border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-sm"
          >
            {/* Left: Description */}
            <span className="font-semibold text-gray-950 text-sm sm:text-base pr-4">
              {item.text}
            </span>

            {/* Right: Point Badge */}
            <div className="flex items-center gap-1.5 shrink-0 select-none">
              <div className="w-5 h-5 bg-[#F86432] rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-3 h-3 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
                </svg>
              </div>
              <span className="text-[#F86432] font-semibold text-xs sm:text-sm tracking-tight">
                {item.points}
              </span>
            </div>
          </div>
        ))}
      </div>
    </AppSimpleModal>
  );
};
