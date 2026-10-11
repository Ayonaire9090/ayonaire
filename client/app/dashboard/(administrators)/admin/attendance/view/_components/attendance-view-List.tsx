"use client";

import React, { useState } from "react";
import {
  StudentAttendanceData,
  StudentStatusBadge,
  StudentAttendanceActions,
} from "./attendance-view-data";

export const AttendanceViewList = ({ data }: { data: StudentAttendanceData[] }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getProgressColor = (percent: number) => {
    if (percent >= 80) return "bg-[#24A164]";
    if (percent >= 70) return "bg-[#F59E0B]";
    return "bg-[#EF4444]";
  };

  const getTextColor = (percent: number) => {
    if (percent >= 80) return "text-[#24A164]";
    if (percent >= 70) return "text-[#F59E0B]";
    return "text-[#EF4444]";
  };

  return (
    <div className="md:hidden flex flex-col gap-4 w-full">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl p-5 flex flex-col w-full"
        >
          {/* Top Header Row */}
          <div className="flex items-start justify-between w-full">
            <div className="flex items-start gap-3">
              {/* Custom Checkbox */}
              <button
                onClick={() => toggleSelection(item.id)}
                className="mt-0.5 size-5 shrink-0 rounded-[5px] border-2 border-gray-300 flex items-center justify-center bg-white transition-colors aria-checked:bg-primary aria-checked:border-primary"
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

              {/* User Info */}
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold text-gray-900 leading-tight">
                  {item.name}
                </span>
                <span className="text-[13px] text-gray-500 line-clamp-1">
                  {item.email}
                </span>
              </div>
            </div>

            {/* Right side Actions */}
            <div className="flex items-center gap-1.5 shrink-0 pl-2">
              <StudentStatusBadge status={item.status} />
              <div className="-mr-2">
                <StudentAttendanceActions id={item.id} />
              </div>
            </div>
          </div>

          {/* Progress Bar Row */}
          <div className="mt-5 flex items-center gap-4 w-full">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${getProgressColor(
                  item.attendancePercent,
                )}`}
                style={{ width: `${item.attendancePercent}%` }}
              />
            </div>
            <span
              className={`text-[20px] font-bold shrink-0 ${getTextColor(
                item.attendancePercent,
              )}`}
            >
              {item.attendancePercent}%
            </span>
          </div>

          {/* Bottom Stats Row */}
          <div className="flex items-center mt-5 w-full">
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-medium text-gray-900">
                Sessions
              </span>
              <span className="text-[14px] text-gray-500">
                {item.sessionsPresent}/{item.sessionsAbsent}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
