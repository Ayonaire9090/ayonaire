"use client";

import { GraduationCap } from "lucide-react";
import { useGetAllSubmissions } from "@/hooks/api/use-assignments";

export const AssignmentsSubmissionsStats = () => {
  const { data } = useGetAllSubmissions();
  const submissions = data?.submissions ?? [];
  const graded = submissions.filter((s) => s.status === "graded").length;

  return (
    <div className="w-full bg-white rounded-2xl p-5 md:p-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-x-auto">
      <div className="flex flex-col gap-2.5 shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-tight">
            All Submissions
          </h2>
        </div>

        <div className="flex items-center gap-4 text-[14px] text-gray-700 font-medium">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="size-5" />
            <span>Across all your assignments</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-px h-[50px] bg-gray-200 shrink-0 mx-2 lg:mx-4" />

      <div className="flex items-center justify-center gap-8 lg:gap-16 shrink-0 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        <div className="flex flex-col gap-1 items-center md:items-start shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Submitted
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#1E73E8] text-center md:text-left">
            {submissions.length}
          </span>
        </div>

        <div className="flex flex-col gap-1 items-center md:items-start shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Graded
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#24A164] text-center md:text-left">
            {graded}
          </span>
        </div>
      </div>
    </div>
  );
};
