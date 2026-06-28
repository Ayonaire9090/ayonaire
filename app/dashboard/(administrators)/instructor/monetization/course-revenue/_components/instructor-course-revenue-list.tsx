"use client";

import { DataList } from "@/components/ui/data-list";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreVertical } from "lucide-react";
import { dummyRevenueData } from "./instructor-course-revenue-table";

export const InstructorCourseRevenueList = () => {
  return (
    <div className="my-6 p-4 bg-white rounded-xl">
      <DataList
        data={dummyRevenueData}
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
                  item.courseName === "AI for Beginners"
                    ? "bg-[#F3E8FF] text-[#A855F7]"
                    : item.courseName === "Data Science Bootcamp"
                      ? "bg-[#DBEAFE] text-[#3B82F6]"
                      : "bg-[#FEE2E2] text-[#EF4444]"
                }`}
              >
                {item.status}
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
