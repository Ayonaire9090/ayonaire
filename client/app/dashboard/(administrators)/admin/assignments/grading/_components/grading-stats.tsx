"use client";

import { useGetAllSubmissions } from "@/hooks/api/use-assignments";

export const GradingStats = () => {
  const { data } = useGetAllSubmissions();
  const submissions = data?.submissions ?? [];

  const uniqueStudents = new Set(submissions.map((s) => s.student?._id).filter(Boolean)).size;
  const graded = submissions.filter((s) => s.status === "graded").length;

  return (
    <div className="flex items-center gap-6 p-4 lg:pb-8 overflow-x-auto hide-scrollbar">
      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[14px] text-gray-500 font-medium">
          Total Students
        </span>
        <span className="text-[24px] font-bold text-gray-900 leading-none">
          {uniqueStudents}
        </span>
      </div>

      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[14px] text-gray-500 font-medium">
          Submissions
        </span>
        <span className="text-[24px] font-bold text-[#1E73E8] leading-none">
          {submissions.length}
        </span>
      </div>

      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[14px] text-gray-500 font-medium">Graded</span>
        <span className="text-[24px] font-bold text-[#24A164] leading-none">
          {graded}
        </span>
      </div>

      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[14px] text-gray-500 font-medium">Ungraded</span>
        <span className="text-[24px] font-bold text-[#FF6A3D] leading-none">
          {submissions.length - graded}
        </span>
      </div>
    </div>
  );
};
