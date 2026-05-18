"use client";

import React, { useState } from "react";
import { DataList } from "@/components/ui/data-list";
import { useAttendanceReportsContext } from "./attendance-reports-context";
import {
  AttendanceReportData,
  getProgressColor,
} from "./attendance-reports-data";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AttendanceStatusBadge } from "../../list/_components/attendance-data";

export const AttendanceReportsList = () => {
  const { filteredReports } = useAttendanceReportsContext();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderCard = (item: AttendanceReportData) => (
    <div className="flex flex-col w-full">
      {/* Top Header Row */}
      <div className="flex items-start justify-between w-full">
        <div className="flex items-start gap-3">
          {/* Custom Checkbox */}
          <button
            onClick={() => toggleSelection(item.id)}
            className="mt-1 size-5 shrink-0 rounded-[5px] border-2 border-gray-300 flex items-center justify-center bg-white transition-colors aria-checked:bg-primary aria-checked:border-primary"
            aria-checked={selectedIds.has(item.id)}
          >
            {selectedIds.has(item.id) && (
              <svg
                className="size-3 text-white"
                viewBox="0 0 12 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="1 5 4.5 8.5 11 1" />
              </svg>
            )}
          </button>

          {/* User & Class Info */}
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold text-gray-900 leading-tight">
              {item.studentName}
            </span>
            <span className="text-[13px] text-gray-500 mt-0.5">
              {item.className}
            </span>
          </div>
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-2 shrink-0 pl-2">
          <AttendanceStatusBadge status={item.status} />
          <div className="-mr-2">
            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-gray-400 hover:text-gray-600 focus-visible:ring-0"
            >
              <MoreVertical className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid Specs */}
      <div className="mt-5 grid grid-cols-2 gap-y-4 gap-x-4">
        {/* Course */}
        <div className="flex flex-col gap-1">
          <span className="text-[13px] font-medium text-gray-900">Course</span>
          <span className="text-[13px] text-gray-500 leading-tight">
            {item.courseName}
          </span>
        </div>

        {/* Instructor */}
        <div className="flex flex-col gap-1 text-right">
          <span className="text-[13px] font-medium text-gray-900">
            Instructor
          </span>
          <span className="text-[13px] text-gray-500">{item.instructor}</span>
        </div>

        {/* Date Range */}
        <div className="flex flex-col gap-1">
          <span className="text-[13px] font-medium text-gray-900">
            Date Range
          </span>
          <span className="text-[13px] text-gray-500 leading-tight">
            {item.dateRange}
          </span>
        </div>

        {/* Sessions Assessed */}
        <div className="flex flex-col gap-1 text-right items-end">
          <span className="text-[13px] font-medium text-gray-900 mb-0.5">
            Sessions
          </span>
          <div className="flex items-center gap-1.5 bg-white/60 border border-gray-100 rounded-full px-2 py-0.5 w-fit">
            <span className="text-[#24A164] text-[12px] font-semibold">
              {item.sessionsAttended}
            </span>
            <span className="text-gray-400 text-[12px]">/</span>
            <span className="text-[#FF7A1A] text-[12px] font-semibold">
              {item.sessionsMissed}
            </span>
          </div>
        </div>
      </div>

      {/* Attendance Progress bar */}
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-200/60">
        <span className="text-[13px] font-medium text-gray-900 shrink-0">
          Attendance
        </span>
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
          <div
            className={`h-full rounded-full ${getProgressColor(
              item.attendancePercent,
            )}`}
            style={{ width: `${item.attendancePercent}%` }}
          />
        </div>
        <span
          className={`text-[13px] font-bold shrink-0 ${
            item.attendancePercent >= 80
              ? "text-[#24A164]"
              : item.attendancePercent >= 70
                ? "text-[#F59E0B]"
                : "text-[#E5383B]"
          }`}
        >
          {item.attendancePercent}%
        </span>
      </div>
    </div>
  );

  return (
    <div className="md:hidden mt-6">
      <DataList
        data={filteredReports}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        itemClassName="bg-white border border-gray-100 shadow-sm"
      />
    </div>
  );
};
