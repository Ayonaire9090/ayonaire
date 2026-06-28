"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { detailedAnalyticsData } from "./instructor-student-course-detailed-analytics-table";

export const InstructorCourseDetailedAnalyticsList = () => {
  return (
    <div className="w-full my-6 bg-white rounded-2xl p-4 lg:p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">
        Course Detailed Analytics
      </h2>
      <DataList
        data={detailedAnalyticsData}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <>
            <div className="self-start pt-1">
              <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
            </div>
            <div className="flex flex-col w-full gap-5">
              <div className="flex justify-between items-start w-full gap-4">
                <span className="text-gray-900 text-[15px] font-medium leading-tight max-w-[60%]">
                  {item.course}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-900 font-medium text-[15px]">
                    {item.student}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1 hover:bg-gray-200 rounded-full transition-colors outline-none -mr-2">
                        <MoreVertical className="size-5 text-gray-400" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-36 rounded-xl border-gray-100 p-2 shadow-lg"
                    >
                      <DropdownMenuItem className="cursor-pointer text-[15px] py-2 rounded-lg hover:bg-gray-50">
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-[15px] py-2 rounded-lg hover:bg-gray-50">
                        Grade Now
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex justify-between items-end w-full gap-4">
                <div className="flex flex-col gap-2">
                  <Badge
                    className={`w-max rounded-full px-3 py-1 text-xs font-medium border-transparent ${
                      item.statusColor === "blue"
                        ? "bg-blue-50 text-blue-500 hover:bg-blue-50"
                        : item.statusColor === "orange"
                        ? "bg-orange-50 text-orange-500 hover:bg-orange-50"
                        : "bg-red-50 text-red-500 hover:bg-red-50"
                    }`}
                  >
                    {item.status}
                  </Badge>
                  <span className="text-gray-500 text-[15px]">
                    {item.notification}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1 text-[13px] text-gray-500 text-right">
                  <span>{item.date} ·</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
};
