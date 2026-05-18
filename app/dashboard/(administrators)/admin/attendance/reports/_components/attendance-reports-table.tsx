"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { useAttendanceReportsContext } from "./attendance-reports-context";
import {
  AttendanceReportData,
  getProgressColor,
} from "./attendance-reports-data";
import { AttendanceStatusBadge } from "../../list/_components/attendance-data";
import { MoreVertical, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";

export const AttendanceReportsTable = () => {
  const { filteredReports } = useAttendanceReportsContext();

  const tableColumns: ColumnDef<AttendanceReportData>[] = [
    {
      key: "className",
      header: "Class Name",
      cell: (item) => (
        <span className="text-gray-900 text-[14px] font-medium whitespace-nowrap">
          {item.className}
        </span>
      ),
    },
    {
      key: "courseName",
      header: "Course Name",
      cell: (item) => (
        <span className="text-gray-600 text-[13px] leading-tight block truncate max-w-sm">
          {item.courseName}
        </span>
      ),
    },
    {
      key: "studentName",
      header: "Student Name",
      cell: (item) => (
        <span className="text-gray-900 text-[13px] font-medium whitespace-nowrap">
          {item.studentName}
        </span>
      ),
    },
    {
      key: "instructor",
      header: "Instructor",
      cell: (item) => (
        <span className="text-gray-600 text-[13px] whitespace-nowrap">
          {item.instructor}
        </span>
      ),
    },
    {
      key: "dateRange",
      header: "Date Range",
      cell: (item) => (
        <span className="text-gray-500 text-[13px] whitespace-nowrap">
          {item.dateRange}
        </span>
      ),
    },
    {
      key: "sessions",
      header: "Sessions",
      cell: (item) => (
        <div className="flex items-center gap-1.5 bg-[#F6F6F6] rounded-full px-2 py-1 w-fit">
          <span className="text-[#24A164] text-[13px] font-semibold">
            {item.sessionsAttended}
          </span>
          <span className="text-gray-400 text-[13px]">/</span>
          <span className="text-[#FF7A1A] text-[13px] font-semibold">
            {item.sessionsMissed}
          </span>
        </div>
      ),
    },
    {
      key: "attendancePercent",
      header: "Attendance %",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-1.5 bg-gray-200 rounded-full overflow-hidden flex shrink-0">
            <div
              className={`h-full rounded-full ${getProgressColor(
                item.attendancePercent,
              )}`}
              style={{ width: `${item.attendancePercent}%` }}
            />
          </div>
          <span
            className={`text-[14px] font-bold ${
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
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => <AttendanceStatusBadge status={item.status} />,
    },
    {
      key: "actions",
      header: "",
      className: "w-8 text-right pr-4",
      cell: () => (
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-gray-400 hover:text-gray-600"
        >
          <MoreVertical className="size-4" />
        </Button>
      ),
    },
  ];

  return (
    <div className="hidden lg:block w-full bg-white rounded-2xl p-4 lg:p-6 pb-0 shadow-sm mt-6">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl font-bold">Report Results</h1>
        <AdminDashboardButton title="Export Report" icon={Upload} />
      </div>
      <div className="overflow-x-auto -mx-4 lg:-mx-6 px-4 lg:px-6">
        <DataTable
          data={filteredReports}
          columns={tableColumns}
          keyExtractor={(o) => o.id}
          selectable
        />
      </div>
    </div>
  );
};
