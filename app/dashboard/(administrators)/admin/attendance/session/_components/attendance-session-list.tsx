"use client";

import React, { useState } from "react";
import {
  SessionStatusBadge,
  SessionAttendanceAction,
} from "./attendance-session-data";
import { AttendanceSessionFilters } from "./attendance-session-filters";
import { useAttendanceSessionContext } from "./attendance-session-context";

export const AttendanceSessionList = () => {
  const { filteredAttendance } = useAttendanceSessionContext();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="md:hidden flex flex-col gap-4 w-full">
      {/* Filter Row */}
      <AttendanceSessionFilters />
      {filteredAttendance.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl p-5 flex flex-col w-full shadow-sm"
        >
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

              {/* User Info */}
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold text-gray-900 leading-tight">
                  {item.name}
                </span>
                <span className="text-[13px] text-gray-500 mt-0.5">
                  {item.email}
                </span>
              </div>
            </div>

            {/* Right side Actions */}
            <div className="flex items-center gap-2 shrink-0 pl-2">
              <SessionStatusBadge status={item.status} />
              <div className="-mr-2">
                <SessionAttendanceAction />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-6 grid grid-cols-2 gap-y-5 gap-x-4">
            {/* Time In */}
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-medium text-gray-900">
                Time In
              </span>
              <span className="text-[14px] text-gray-500">{item.timeIn}</span>
            </div>

            {/* Time Out */}
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[14px] font-medium text-gray-900">
                Time Out
              </span>
              <span className="text-[14px] text-gray-500">{item.timeOut}</span>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-1 items-start col-span-2">
              <span className="text-[14px] font-medium text-gray-900 mb-0.5">
                Notes
              </span>
              <span className="text-[14px] text-gray-500">{item.notes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
