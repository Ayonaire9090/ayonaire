import React from "react";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface StudentAttendanceData {
  id: string;
  name: string;
  studentId: string;
  email: string;
  sessionsPresent: number;
  sessionsAbsent: number;
  attendancePercent: number;
  lastAttended: string;
  status: "Good Standing" | "At Risk" | "Critical" | "Inactive";
}

export const mockStudentAttendance: StudentAttendanceData[] = [
  {
    id: "1",
    name: "Sarah Ahmed",
    studentId: "STU-2024-001",
    email: "sarah.ahmed@example.com",
    sessionsPresent: 11,
    sessionsAbsent: 1,
    attendancePercent: 92,
    lastAttended: "Feb 28, 2026",
    status: "Good Standing",
  },
  {
    id: "2",
    name: "Ali Hassan",
    studentId: "STU-2024-002",
    email: "ali.hassan@example.com",
    sessionsPresent: 10,
    sessionsAbsent: 2,
    attendancePercent: 83,
    lastAttended: "Feb 25, 2026",
    status: "Good Standing",
  },
  {
    id: "3",
    name: "Fatima Khan",
    studentId: "STU-2024-003",
    email: "fatima.khan@example.com",
    sessionsPresent: 9,
    sessionsAbsent: 3,
    attendancePercent: 75,
    lastAttended: "Feb 26, 2026",
    status: "At Risk",
  },
  {
    id: "4",
    name: "Omar Siddiqui",
    studentId: "STU-2024-004",
    email: "omar.siddiqui@example.com",
    sessionsPresent: 7,
    sessionsAbsent: 5,
    attendancePercent: 58,
    lastAttended: "Feb 27, 2026",
    status: "Critical",
  },
  {
    id: "5",
    name: "Sarah Ahmed",
    studentId: "STU-2024-005",
    email: "sarah.ahmed@example.com",
    sessionsPresent: 12,
    sessionsAbsent: 0,
    attendancePercent: 100,
    lastAttended: "Feb 28, 2026",
    status: "Good Standing",
  },
];

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
    case "Inactive":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-[12px] font-medium text-gray-600">
          Inactive
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
