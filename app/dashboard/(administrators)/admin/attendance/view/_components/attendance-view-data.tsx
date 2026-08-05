import React from "react";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AttendanceReportEntry } from "@/lib/api/endpoints/attendance";

export interface StudentAttendanceData {
  id: string;
  name: string;
  email: string;
  sessionsPresent: number;
  sessionsAbsent: number;
  attendancePercent: number;
  status: "Good Standing" | "At Risk" | "Critical";
}

const STATUS_MAP: Record<AttendanceReportEntry["status"], StudentAttendanceData["status"]> = {
  "good-standing": "Good Standing",
  "at-risk": "At Risk",
  critical: "Critical",
};

// "Last Attended" isn't in the report response (only aggregate counts), so
// it's intentionally dropped rather than faked.
export function mapReportEntryToStudentAttendanceData(
  entry: AttendanceReportEntry,
  index: number,
): StudentAttendanceData {
  return {
    id: entry.student._id || String(index),
    name: entry.student.name,
    email: entry.student.email,
    sessionsPresent: entry.sessionsAttended,
    sessionsAbsent: entry.sessionsMissed,
    attendancePercent: entry.attendanceRate,
    status: STATUS_MAP[entry.status] ?? "At Risk",
  };
}

export const StudentStatusBadge = ({ status }: { status: StudentAttendanceData["status"] }) => {
  switch (status) {
    case "Good Standing":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-[#E6F6EC] px-2.5 py-0.5 text-[12px] font-medium text-[#24A164]">
          Good Standing
        </span>
      );
    case "At Risk":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-[#FFF4E5] px-2.5 py-0.5 text-[12px] font-medium text-[#F59E0B]">
          At Risk
        </span>
      );
    case "Critical":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-[#FEE2E2] px-2.5 py-0.5 text-[12px] font-medium text-[#EF4444]">
          Critical
        </span>
      );
    default:
      return null;
  }
};

export const StudentAttendanceActions = ({ id }: { id?: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex size-8 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <MoreVertical className="size-[18px] text-gray-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[220px] rounded-[16px] border-none shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] p-2"
      >
        <DropdownMenuItem className="text-[14px] text-gray-700 py-2.5 px-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer rounded-xl">
          Attendance History
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[14px] text-gray-700 py-2.5 px-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer rounded-xl">
          View Session Breakdown
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[14px] text-gray-700 py-2.5 px-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer rounded-xl border-b border-gray-100 mb-1 pb-3">
          Open Student Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[14px] text-gray-700 py-2.5 px-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer rounded-xl mt-1">
          Send Warning Notification
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[14px] text-gray-700 py-2.5 px-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer rounded-xl">
          Send Reminder
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[14px] text-gray-700 py-2.5 px-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer rounded-xl">
          Flag Student
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[14px] text-gray-700 py-2.5 px-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer rounded-xl">
          View Reports
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
