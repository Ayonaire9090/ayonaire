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
import { tableData } from "./instructor-student-analytics-overview-table";

export const InstructorStudentAnalyticsOverviewList = () => {
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
                    {item.col1.text}
                  </span>
                  {item.col1.badge && (
                    <Badge
                      className={`w-max rounded-full px-2.5 py-0.5 text-[10px] font-medium border-transparent ${
                        item.col1.badge.color === "purple"
                          ? "bg-purple-100 text-purple-600 hover:bg-purple-100"
                          : "bg-red-100 text-red-600 hover:bg-red-100"
                      }`}
                    >
                      {item.col1.badge.text}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium text-[15px]">
                    {item.type === "course" ? item.col5.text : null}
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
                      <DropdownMenuItem className="cursor-pointer text-[15px] py-2 rounded-lg hover:bg-gray-50">
                        Grade now
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full ${
                      item.type === "course" && item.col3.type === "progress"
                        ? item.col3.color === "orange"
                          ? "bg-[#f97316]"
                          : item.col3.color === "purple"
                            ? "bg-[#a855f7]"
                            : "bg-[#ef4444]"
                        : item.type === "assignment" &&
                            item.col5.type === "progress_badge"
                          ? item.col5.progressColor === "purple"
                            ? "bg-[#a855f7]"
                            : "bg-[#ef4444]"
                          : "bg-gray-200"
                    }`}
                    style={{
                      width: `${
                        item.type === "course" && item.col3.type === "progress"
                          ? item.col3.value
                          : item.type === "assignment" &&
                              item.col5.type === "progress_badge"
                            ? item.col5.progress
                            : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <span
                  className={`text-[15px] font-medium ${
                    item.type === "course" && item.col3.type === "progress"
                      ? item.col3.color === "orange"
                        ? "text-[#f97316]"
                        : item.col3.color === "purple"
                          ? "text-[#a855f7]"
                          : "text-[#ef4444]"
                      : item.type === "assignment" &&
                          item.col5.type === "progress_badge"
                        ? item.col5.progressColor === "purple"
                          ? "text-[#a855f7]"
                          : "text-[#ef4444]"
                        : "text-gray-500"
                  }`}
                >
                  {item.type === "course" && item.col3.type === "progress"
                    ? `${item.col3.value}%`
                    : item.type === "assignment" &&
                        item.col5.type === "progress_badge"
                      ? `${item.col5.progress}%`
                      : ""}
                </span>
                {item.type === "assignment" &&
                  item.col5.type === "progress_badge" &&
                  item.col5.badge && (
                    <Badge
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium border-transparent ${
                        item.col5.badge.color === "purple"
                          ? "bg-purple-100 text-purple-600 hover:bg-purple-100"
                          : "bg-red-100 text-red-600 hover:bg-red-100"
                      }`}
                    >
                      {item.col5.badge.text}
                    </Badge>
                  )}
              </div>

              <div className="flex justify-between items-center text-[13px] text-gray-500 mt-1">
                <div className="flex gap-1.5 items-center">
                  <span className="font-semibold text-gray-900">
                    {item.col4}
                  </span>
                  <span>Avg Score</span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="font-semibold text-gray-900">
                    {item.type === "course" ? item.col2 : item.col3.value}
                  </span>
                  <span>
                    {item.type === "course" ? "Total Students" : "Total Points"}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
};
