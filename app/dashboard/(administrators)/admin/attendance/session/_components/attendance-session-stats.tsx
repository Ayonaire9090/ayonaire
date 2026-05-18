import React from "react";

export const AttendanceSessionViewStats = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-5 md:p-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-x-auto">
      {/* Left side: Course Info */}
      <div className="flex flex-col gap-2.5 shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-tight">
            AI Automation – Cohort 3
          </h2>
          <span className="inline-flex items-center justify-center rounded-full bg-[#FFF4E5] px-3 py-1 text-[13px] font-medium text-[#F59E0B]">
            Pending Approval
          </span>
        </div>

        <div className="text-[14px] text-gray-900 font-medium">
          Machine Learning Basics
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px h-[50px] bg-gray-200 shrink-0 mx-2 lg:mx-4" />

      {/* Middle: Date & Time */}
      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[16px] md:text-[18px] font-bold text-gray-900">
          Date&Time
        </span>
        <span className="text-[14px] text-gray-500 font-medium">
          Mar 10, 2026 6:00 PM – 8:00 PM
        </span>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px h-[50px] bg-gray-200 shrink-0 mx-2 lg:mx-4" />

      {/* Right side: Stats */}
      <div className="flex items-center justify-center gap-8 lg:gap-16 shrink-0 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        {/* Stat 1 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Total Students
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-gray-900 text-center md:text-left">
            30
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Marked
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#24A164] text-center md:text-left">
            7
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Unmarked
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#EF4444] text-center md:text-left">
            3
          </span>
        </div>
      </div>
    </div>
  );
};
