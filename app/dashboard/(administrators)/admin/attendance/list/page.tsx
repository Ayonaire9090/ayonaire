"use client";

import { useState } from "react";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus, Upload } from "lucide-react";
import { AttendanceList } from "./_components/attendance-list";
import { AttendanceTable } from "./_components/attendance-table";
import { CreateAttendanceSessionModal } from "../_components/create-attendance-session-modal";
import { useGetAttendanceSessions } from "@/hooks/api/use-attendance";
import { mapAttendanceSessionToData } from "./_components/attendance-data";

function exportAttendanceCsv(rows: ReturnType<typeof mapAttendanceSessionToData>[]) {
  const header = ["Course", "Session", "Date", "Time", "Instructor", "Present", "Absent", "Attendance %", "Approval"];
  const lines = rows.map((r) =>
    [r.course, r.session, r.date, r.time, r.instructor.name, r.present, r.absent, `${r.attendancePercent}%`, r.approval]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(","),
  );
  const csv = [header.join(","), ...lines].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "attendance.csv";
  link.click();
  URL.revokeObjectURL(url);
}

export default function AdminAttendanceListPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { data } = useGetAttendanceSessions();
  const sessions = (data?.sessions ?? []).map(mapAttendanceSessionToData);

  return (
    <div className="flex flex-col gap-5 pb-4 lg:pb-8">
      <DashboardHeader
        title="Attendance List"
        subTitle="Manage and monitor student attendance records"
      />

      <div className="flex justify-between items-center mt-2">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2.5 px-4 h-11 bg-white border-0 hover:bg-gray-50 rounded-2xl text-gray-500 font-medium text-[14px] transition-colors outline-none w-fit">
              <CalendarIcon className="size-4.5 text-gray-400" />
              <span>Feb 28, 2026</span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-auto p-0 bg-white border-none rounded-xl shadow-lg"
          >
            <Calendar mode="single" />
          </PopoverContent>
        </Popover>

        <div className="flex items-center gap-3">
          <AdminDashboardButton
            title="Export Attendance"
            icon={Upload}
            onClick={() => exportAttendanceCsv(sessions)}
          />
          <AdminDashboardButton title="Add New Log" icon={Plus} onClick={() => setIsCreateOpen(true)} />
        </div>
      </div>

      <AttendanceTable />
      <AttendanceList />

      <CreateAttendanceSessionModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
    </div>
  );
}
