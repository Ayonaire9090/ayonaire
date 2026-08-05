import React from "react";
import { Edit } from "lucide-react";
import { AttendanceSessionDetail } from "@/lib/api/endpoints/attendance";

export interface SessionAttendanceData {
  id: string;
  name: string;
  email: string;
  status: "Present" | "Absent" | "Late" | "Unmarked";
  timeIn: string;
  timeOut: string;
  notes: string;
}

const STATUS_MAP: Record<string, SessionAttendanceData["status"]> = {
  present: "Present",
  absent: "Absent",
  late: "Late",
  unmarked: "Unmarked",
};

// The backend record model has no "source" (Device/Manual) or "markedBy"
// field - only present/absent/late/unmarked + optional time/notes - so
// those columns are dropped rather than faked.
export function mapSessionRecordsToAttendanceData(
  records: AttendanceSessionDetail["records"],
): SessionAttendanceData[] {
  return records.map((record, index) => ({
    id: record.student._id || String(index),
    name: record.student.name,
    email: record.student.email,
    status: STATUS_MAP[record.status] ?? "Unmarked",
    timeIn: record.timeIn ?? "-",
    timeOut: record.timeOut ?? "-",
    notes: record.notes ?? "-",
  }));
}

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

export const SessionAttendanceAction = () => {
  return (
    <button className="flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
      <Edit className="size-4 text-gray-500" />
    </button>
  );
};
