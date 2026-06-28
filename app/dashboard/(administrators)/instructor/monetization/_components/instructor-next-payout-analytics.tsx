"use client";

import React from "react";
import { History, SlidersHorizontal, Check, Key } from "lucide-react";

export const InstructorNextPayoutAnalytics = () => {
  return (
    <div className="bg-white rounded-[16px] p-6 border border-gray-100/50 my-6">
      {/* Header Row */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-[#FFEBE6] flex items-center justify-center text-[#FF7A59]">
            <History className="size-5" />
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold text-sm">Next Payout</h4>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-0.5">
              $1,250.75 USD
            </h3>
          </div>
        </div>

        <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:border-gray-300 rounded-[10px] text-gray-700 bg-white text-sm font-semibold transition-all">
          <SlidersHorizontal className="size-4 text-gray-500" />
          <span>Filter Logs</span>
        </button>
      </div>

      {/* Timeline with Cards */}
      <div className="relative flex flex-col gap-5 pl-14">
        {/* Vertical Line */}
        <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-gray-100" />

        {/* Step 1: Scheduled */}
        <div className="relative flex items-center w-full">
          {/* Circle Icon */}
          <div className="absolute -left-[54px] size-10 rounded-full bg-[#E8F8F0] border border-[#10B981]/20 flex items-center justify-center text-[#10B981] z-10 shadow-xs">
            <Check className="size-5 stroke-3" />
          </div>
          {/* Content Card */}
          <div className="flex-1 bg-[#F6F6F6] rounded-xl px-5 py-4 flex items-center justify-between">
            <span className="font-bold text-gray-900 text-[15px]">
              Scheduled for
            </span>
            <span className="text-gray-400 font-semibold text-[13px]">
              March 15, 2024
            </span>
          </div>
        </div>

        {/* Step 2: Method */}
        <div className="relative flex items-center w-full">
          {/* Circle Icon */}
          <div className="absolute -left-[54px] size-10 rounded-full bg-[#EBF3FF] border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] z-10 shadow-xs">
            <Key className="size-5" />
          </div>
          {/* Content Card */}
          <div className="flex-1 bg-[#F6F6F6] rounded-xl px-5 py-4 flex items-center justify-between">
            <span className="font-bold text-gray-900 text-[15px]">Method</span>
            <span className="text-gray-400 font-semibold text-[13px]">
              Bank Transfer (**** 4242)
            </span>
          </div>
        </div>
      </div>

      {/* Manage Button */}
      <button className="w-full mt-8 h-14 bg-[#FF7A59] hover:bg-[#FF7A59]/90 rounded-[14px] text-white text-[16px] font-bold transition-all shadow-sm shadow-[#FF7A59]/10 cursor-pointer">
        Manage Payout Method
      </button>
    </div>
  );
};
