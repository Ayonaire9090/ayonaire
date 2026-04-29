"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  GradingStatusBadge,
  GradingActions,
  mockGradingData,
} from "./grading-data";

export const GradingList = ({ searchQuery }: { searchQuery: string }) => {
  const filteredData = mockGradingData.filter(
    (item) =>
      item.student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.assignment.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="md:hidden mt-2 flex flex-col gap-0 w-full">
      <div className="flex flex-col gap-4 w-full">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col px-4 py-4 rounded-xl bg-[#F6F6F6]"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 shrink-0">
                <Checkbox className="rounded-[4px] border-gray-300" />
              </div>
              
              <div className="flex-1 flex flex-col">
                {/* Header Row */}
                <div className="flex items-start justify-between w-full">
                  <span className="text-[16px] font-semibold text-gray-900 leading-tight">
                    {item.student.name}
                  </span>
                  <div className="flex items-center gap-1">
                    <GradingStatusBadge status={item.status} />
                    <div className="-mr-2">
                       <GradingActions id={item.id} />
                    </div>
                  </div>
                </div>

                {/* Course & Assignment */}
                <div className="flex justify-between items-start mt-1 relative">
                  <span className="text-[14px] text-gray-600">
                    {item.course}
                  </span>
                  {item.grade !== "-" && (
                     <span className="text-[18px] text-gray-500 font-medium absolute right-1">
                       {item.grade}
                     </span>
                  )}
                </div>

                {/* Submission details */}
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center gap-1.5 text-[15px] font-medium text-gray-700">
                    {item.submission}
                    {item.score !== "-" && (
                      <span className="text-[#24A164]">{item.score}</span>
                    )}
                  </div>
                  <span className="text-[13px] text-gray-400 text-right max-w-[200px]">
                    {item.feedback}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
