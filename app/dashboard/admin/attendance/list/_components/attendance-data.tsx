"use client";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export type AttendanceStatus = "Recorded" | "Edited" | "Missing" | "Good Standing" | "At Risk" | "Critical";
export type ApprovalStatus = "Pending" | "Approved" | "Rejected";

export interface AttendanceData {
  id: string;
  className: string;
  course: string;
  session: string;
  date: string;
  time: string;
  instructor: {
    name: string;
    avatar: string;
  };
  present: number;
  absent: number;
  attendancePercent: number;
  status: AttendanceStatus;
  approval: ApprovalStatus;
}

export const mockAttendance: AttendanceData[] = [
  {
    id: "1",
    className: "1.0",
    course: "AI Engineering",
    session: "Introduction to Algorit",
    date: "2024-05-20",
    time: "09:00 AM",
    instructor: {
      name: "Dr. Sarah Ahmed",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    present: 28,
    absent: 2,
    attendancePercent: 93,
    status: "Recorded",
    approval: "Pending",
  },
  {
    id: "2",
    className: "2.0",
    course: "Data Science",
    session: "Partial Derivatives",
    date: "2024-05-20",
    time: "11:00 AM",
    instructor: {
      name: "Prof. James Wilson",
      avatar: "https://i.pravatar.cc/150?u=james",
    },
    present: 22,
    absent: 8,
    attendancePercent: 73,
    status: "Edited",
    approval: "Pending",
  },
  {
    id: "3",
    className: "2.0",
    course: "Data Analytics",
    session: "Introduction to Algorit",
    date: "2024-05-20",
    time: "09:00 AM",
    instructor: {
      name: "Dr. Sarah Ahmed",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    present: 30,
    absent: 0,
    attendancePercent: 100,
    status: "Recorded",
    approval: "Approved",
  },
  {
    id: "4",
    className: "2.0",
    course: "Project Management",
    session: "Introduction to Algorit",
    date: "2024-05-20",
    time: "09:00 AM",
    instructor: {
      name: "Dr. Sarah Ahmed",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    present: 15,
    absent: 10,
    attendancePercent: 60,
    status: "Missing",
    approval: "Rejected",
  },
  {
    id: "5",
    className: "3.0",
    course: "Cyber Security",
    session: "Introduction to Algorit",
    date: "2024-05-20",
    time: "09:00 AM",
    instructor: {
      name: "Dr. Sarah Ahmed",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    present: 28,
    absent: 2,
    attendancePercent: 93,
    status: "Recorded",
    approval: "Pending",
  },
];

const attendanceStatusStyles: Record<AttendanceStatus, string> = {
  Recorded: "bg-[#EAF0FF] text-[#3B6EF5]",
  Edited: "bg-[#FFF5EA] text-[#F59E0B]",
  Missing: "bg-[#FFEBE9] text-[#E5383B]",
  "Good Standing": "bg-[#E6F6EC] text-[#24A164]",
  "At Risk": "bg-[#FFF5EA] text-[#F59E0B]",
  "Critical": "bg-[#FFEBE9] text-[#E5383B]",
};

export const AttendanceStatusBadge = ({
  status,
}: {
  status: AttendanceStatus;
}) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[13px] font-medium whitespace-nowrap ${attendanceStatusStyles[status]}`}
    >
      {status}
    </span>
  );
};

const approvalStatusStyles: Record<ApprovalStatus, string> = {
  Pending: "bg-[#FFF5EA] text-[#F59E0B]",
  Approved: "bg-[#E6F6EC] text-[#24A164]",
  Rejected: "bg-[#FFEBE9] text-[#E5383B]",
};

export const ApprovalStatusBadge = ({ status }: { status: ApprovalStatus }) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[13px] font-medium whitespace-nowrap ${approvalStatusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export const AttendanceActions = ({ id }: { id?: string }) => {
  const router = useRouter();

  return (
    <AppDropdown
      variant="white"
      align="end"
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-transparent"
        >
          <MoreVertical className="size-[18px] text-black" />
        </Button>
      }
    >
      <AppDropdownItem
        variant="menu"
        onClick={() => id && router.push(`/dashboard/admin/attendance/${id}`)}
      >
        View Details
      </AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem
        variant="menu"
        onClick={() => id && router.push(`/dashboard/admin/attendance/${id}`)}
      >
        Edit Info
      </AppDropdownItem>
    </AppDropdown>
  );
};
