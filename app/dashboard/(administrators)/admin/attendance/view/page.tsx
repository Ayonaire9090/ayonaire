"use client";

import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { ChevronRight, Plus } from "lucide-react";
import { toast } from "sonner";
import { AttendanceViewStats } from "./_components/attendance-view-stats";
import { AttendanceViewTable } from "./_components/attendance-view-table";
import { AttendanceViewList } from "./_components/attendance-view-List";
import { mapReportEntryToStudentAttendanceData } from "./_components/attendance-view-data";
import { useGetAttendanceReport } from "@/hooks/api/use-attendance";

export default function AdminClassAttendanceView() {
  const { data, isLoading, isError } = useGetAttendanceReport();
  const entries = data?.data ?? [];
  const students = entries.map((entry, index) =>
    mapReportEntryToStudentAttendanceData(entry, index),
  );

  return (
    <div className="flex flex-col gap-5 pb-4 lg:pb-8">
      <DashboardHeader
        title="Class Attendance View"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Attendance Management <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-600 font-medium">Class View</span>
          </div>
        }
      />
      <div className="w-full flex justify-between items-start">
        <DashboardSearch />
        <AdminDashboardButton
          title="Add New Log"
          icon={Plus}
          onClick={() =>
            toast.info(
              "Manual attendance-log entry isn't available yet - needs a backend endpoint.",
            )
          }
        />
      </div>
      {/* Stats */}
      <AttendanceViewStats entries={entries} />
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="bg-white rounded-2xl p-8 text-center text-sm text-red-500">
          Couldn&apos;t load attendance data. Please try again.
        </div>
      ) : students.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 text-center text-sm text-gray-400">
          No attendance records yet.
        </div>
      ) : (
        <>
          <AttendanceViewTable data={students} />
          <AttendanceViewList data={students} />
        </>
      )}
    </div>
  );
}
