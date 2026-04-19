"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  StudentAttendanceData,
  StudentStatusBadge,
  StudentAttendanceActions,
  mockStudentAttendance,
} from "./attendance-view-data";

export const AttendanceViewTable = () => {
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

  const tableColumns: ColumnDef<StudentAttendanceData>[] = [
    {
      key: "name",
      header: "Student Name",
      cell: (item) => (
        <span className="text-gray-900 text-[14px] font-medium whitespace-nowrap">
          {item.name}
        </span>
      ),
    },
    {
      key: "studentId",
      header: "Student ID",
      cell: (item) => (
        <span className="text-gray-500 text-[13px] whitespace-nowrap">
          {item.studentId}
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
      key: "sessions",
      header: "Sessions",
      cell: (item) => (
        <span className="text-gray-600 text-[13px]">
          {item.sessionsPresent}/{item.sessionsAbsent}
        </span>
      ),
    },
    {
      key: "attendancePercent",
      header: "Attendance %",
      cell: (item) => (
        <div className="flex items-center gap-3 w-fit">
          <div className="w-[80px] h-1.5 bg-gray-100 rounded-full overflow-hidden flex shrink-0">
            <div
              className={`h-full rounded-full ${getProgressColor(
                item.attendancePercent,
              )}`}
              style={{ width: `${item.attendancePercent}%` }}
            />
          </div>
          <span
            className={`text-[14px] font-bold ${getTextColor(
              item.attendancePercent,
            )}`}
          >
            {item.attendancePercent}%
          </span>
        </div>
      ),
    },
    {
      key: "lastAttended",
      header: "Last Attended",
      cell: (item) => (
        <span className="text-gray-500 text-[13px] whitespace-nowrap">
          {item.lastAttended}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => <StudentStatusBadge status={item.status} />,
    },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => <StudentAttendanceActions id={item.id} />,
    },
  ];

  return (
    <div className="bg-white rounded-2xl hidden md:block w-full overflow-x-auto p-4 lg:p-6">
      <DataTable
        data={mockStudentAttendance}
        columns={tableColumns}
        keyExtractor={(o) => o.id}
        selectable
      />
    </div>
  );
};
