"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  mapCourseAnalyticsToTableData,
  TableData,
} from "./instructor-student-analytics-overview-table";
import { useInstructorAnalytics } from "./instructor-analytics-data";

const completionBarColor: Record<TableData["completionColor"], string> = {
  orange: "bg-[#f97316]",
  purple: "bg-[#a855f7]",
  red: "bg-[#ef4444]",
};
const completionTextColor: Record<TableData["completionColor"], string> = {
  orange: "text-[#f97316]",
  purple: "text-[#a855f7]",
  red: "text-[#ef4444]",
};

export const InstructorStudentAnalyticsOverviewList = () => {
  const { perCourse, isLoading } = useInstructorAnalytics();
  const tableData = perCourse.map(mapCourseAnalyticsToTableData);

  if (isLoading) {
    return <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>;
  }
  if (tableData.length === 0) {
    return <p className="text-sm text-gray-400 py-6 text-center">No courses yet</p>;
  }

  return (
    <div className="w-full my-6 bg-white rounded-2xl p-4">
      <DataList
        data={tableData}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <>
            <div className="self-start pt-1">
              <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col gap-1 pr-2">
                  <span className="text-gray-900 text-[15px] font-medium leading-tight">
                    {item.courseName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium text-[15px]">
                    {item.revenue}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1 hover:bg-gray-200 rounded-full transition-colors outline-none -mr-2">
                        <MoreVertical className="size-5 text-gray-400" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-36 rounded-xl shadow-lg border-gray-100 p-2"
                    >
                      <DropdownMenuItem className="cursor-pointer text-[15px] py-2 rounded-lg hover:bg-gray-50">
                        View
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full ${completionBarColor[item.completionColor]}`}
                    style={{ width: `${item.completion}%` }}
                  ></div>
                </div>
                <span
                  className={`text-[15px] font-medium ${completionTextColor[item.completionColor]}`}
                >
                  {item.completion}%
                </span>
              </div>

              <div className="flex justify-between items-center text-[13px] text-gray-500 mt-1">
                <div className="flex gap-1.5 items-center">
                  <span className="font-semibold text-gray-900">
                    {item.avgScore}
                  </span>
                  <span>Avg Score</span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="font-semibold text-gray-900">
                    {item.totalStudents}
                  </span>
                  <span>Total Students</span>
                </div>
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
};
