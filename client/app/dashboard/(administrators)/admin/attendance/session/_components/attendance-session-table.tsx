"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  SessionAttendanceData,
  SessionStatusBadge,
  SessionAttendanceAction,
} from "./attendance-session-data";
import { AttendanceSessionFilters } from "./attendance-session-filters";
import { useAttendanceSessionContext } from "./attendance-session-context";

export const AttendanceSessionTable = () => {
  const { filteredAttendance } = useAttendanceSessionContext();

  const tableColumns: ColumnDef<SessionAttendanceData>[] = [
    {
      key: "studentName",
      header: "Student Name",
      cell: (item) => (
        <span className="text-gray-900 text-[14px] font-medium whitespace-nowrap">
          {item.name}
        </span>
      ),
    },
    {
      key: "email",
      header: "Email",
      cell: (item) => (
        <span className="text-gray-600 text-[13px] whitespace-nowrap">
          {item.email}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => <SessionStatusBadge status={item.status} />,
    },
    {
      key: "timeIn",
      header: "Time In",
      cell: (item) => (
        <span className="text-gray-500 text-[13px] whitespace-nowrap">
          {item.timeIn}
        </span>
      ),
    },
    {
      key: "timeOut",
      header: "Time Out",
      cell: (item) => (
        <span className="text-gray-500 text-[13px] whitespace-nowrap">
          {item.timeOut}
        </span>
      ),
    },
    {
      key: "notes",
      header: "Notes",
      cell: (item) => (
        <span className="text-gray-500 text-[13px] line-clamp-1 max-w-[150px]">
          {item.notes}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      cell: () => <SessionAttendanceAction />,
    },
  ];

  return (
    <div className="hidden md:block w-full overflow-x-auto bg-white rounded-2xl p-4 lg:p-6 pb-0">
      {/* Filter Row */}
      <AttendanceSessionFilters />
      {/* Table */}
      <div className="overflow-x-auto -mx-4 lg:-mx-6 px-4 lg:px-6">
        <DataTable
          data={filteredAttendance}
          columns={tableColumns}
          keyExtractor={(o) => o.id}
          selectable
        />
      </div>
    </div>
  );
};
