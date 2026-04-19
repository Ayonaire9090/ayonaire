import React from "react";
import { Edit } from "lucide-react";

export interface SessionAttendanceData {
  id: string;
  name: string;
  studentId: string;
  email: string;
  status: "Present" | "Absent" | "Late" | "Unmarked";
  timeIn: string;
  timeOut: string;
  source: "Device" | "Manual";
  markedBy: string;
  notes: string;
}

export const mockSessionAttendance: SessionAttendanceData[] = [
  {
    id: "1",
    name: "Sarah Ahmed",
    studentId: "STU-2024-001",
    email: "sarah.ahmed@example.com",
    status: "Present",
    timeIn: "6:02 PM",
    timeOut: "8:00 PM",
    source: "Device",
    markedBy: "System",
    notes: "-",
  },
  {
    id: "2",
    name: "Ali Hassan",
    studentId: "STU-2024-002",
    email: "ali.hassan@example.com",
    status: "Present",
    timeIn: "6:02 PM",
    timeOut: "8:00 PM",
    source: "Manual",
    markedBy: "System",
    notes: "-",
  },
  {
    id: "3",
    name: "Fatima Khan",
    studentId: "STU-2024-003",
    email: "fatima.khan@example.com",
    status: "Late",
    timeIn: "6:02 PM",
    timeOut: "8:00 PM",
    source: "Manual",
    markedBy: "Dr. Ahmed",
    notes: "Informed about de",
  },
  {
    id: "4",
    name: "Omar Siddiqui",
    studentId: "STU-2024-004",
    email: "omar.siddiqui@example.com",
    status: "Absent",
    timeIn: "6:02 PM",
    timeOut: "8:00 PM",
    source: "Device",
    markedBy: "Dr. Ahmed",
    notes: "Medical emergency",
  },
  {
    id: "5",
    name: "Sarah Ahmed",
    studentId: "STU-2024-005",
    email: "sarah.ahmed@example.com",
    status: "Present",
    timeIn: "6:02 PM",
    timeOut: "8:00 PM",
    source: "Device",
    markedBy: "System",
    notes: "-",
  },
];

export const SessionStatusBadge = ({
  status,
}: {
  status: SessionAttendanceData["status"];
}) => {
  switch (status) {
    case "Present":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-[#E6F6EC] px-2.5 py-0.5 text-[12px] font-medium text-[#24A164]">
          Present
        </span>
      );
    case "Late":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-[#FFF4E5] px-2.5 py-0.5 text-[12px] font-medium text-[#F59E0B]">
          Late
        </span>
      );
    case "Absent":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-[#FEE2E2] px-2.5 py-0.5 text-[12px] font-medium text-[#EF4444]">
          Absent
        </span>
      );
    case "Unmarked":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-[12px] font-medium text-gray-600">
          Unmarked
        </span>
      );
    default:
      return null;
  }
};

export const SessionSourceBadge = ({
  source,
}: {
  source: SessionAttendanceData["source"];
}) => {
  switch (source) {
    case "Device":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-[#E6F6EC] px-2.5 py-0.5 text-[12px] font-medium text-[#24A164]">
          Device
        </span>
      );
    case "Manual":
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-[#FFF4E5] px-2.5 py-0.5 text-[12px] font-medium text-[#F59E0B]">
          Manual
        </span>
      );
    default:
      return null;
  }
};

export const SessionAttendanceAction = () => {
  return (
    <button className="flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
      <Edit className="size-4 text-gray-500" />
    </button>
  );
};
