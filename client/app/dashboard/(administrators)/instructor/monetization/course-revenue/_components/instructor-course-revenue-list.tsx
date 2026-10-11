"use client";

import { DataList } from "@/components/ui/data-list";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreVertical } from "lucide-react";
import { useCourseRevenueRows } from "./instructor-course-revenue-table";

const statusStyle: Record<string, string> = {
  Active: "bg-[#DBEAFE] text-[#3B82F6]",
  Draft: "bg-[#FEE2E2] text-[#EF4444]",
  Archived: "bg-[#F3E8FF] text-[#A855F7]",
};

export const InstructorCourseRevenueList = () => {
  const { rows, isLoading } = useCourseRevenueRows();

  if (isLoading) {
    return <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>;
  }
  if (rows.length === 0) {
    return <p className="text-sm text-gray-400 py-6 text-center">No courses yet</p>;
  }

  return (
    <div className="my-6 p-4 bg-white rounded-xl">
      <DataList
        data={rows}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <div className="flex flex-col w-full gap-3">
            {/* Top row */}
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                <span className="text-[#333333] text-[15px] font-medium">
                  {item.courseName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#333333] text-[17px]">
                  ${item.totalRevenue.toLocaleString()}
                </span>
                <button className="text-gray-800 hover:text-black transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Middle row */}
            <div className="flex justify-between items-center w-full pl-8">
              <span
                className={`px-3 py-1 w-fit text-[13px] rounded-full font-medium ${
                  statusStyle[item.status ?? ""] ?? "bg-gray-100 text-gray-600"
                }`}
              >
                {item.status ?? "-"}
              </span>
              <span className="text-gray-600 text-[17px]">
                {item.studentsEnrolled}
              </span>
            </div>

            {/* Bottom row */}
            <div className="w-full pl-8 mt-1">
              <span className="text-[15px] font-medium text-black">
                Price{" "}
                <span className="text-gray-500 font-normal ml-1">
                  ${item.price}
                </span>
              </span>
            </div>
          </div>
        )}
      />
    </div>
  );
};
