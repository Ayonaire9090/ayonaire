import { AttendanceReportEntry } from "@/lib/api/endpoints/attendance";

export type ReportStatus = "Good Standing" | "At Risk" | "Critical";

const reportStatusStyles: Record<ReportStatus, string> = {
  "Good Standing": "bg-[#E6F6EC] text-[#24A164]",
  "At Risk": "bg-[#FFF5EA] text-[#F59E0B]",
  Critical: "bg-[#FFEBE9] text-[#E5383B]",
};

export function ReportStatusBadge({ status }: { status: ReportStatus }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[13px] font-medium whitespace-nowrap ${reportStatusStyles[status]}`}
    >
      {status}
    </span>
  );
}

function toReportStatus(status: AttendanceReportEntry["status"]): ReportStatus {
  if (status === "at-risk") return "At Risk";
  if (status === "critical") return "Critical";
  return "Good Standing";
}

// courseName/className/instructor/dateRange have no per-entry backend
// source (the report endpoint scopes by course/cohort query params, not a
// value carried on each row), so they fall back to placeholders.
export function mapReportEntryToData(entry: AttendanceReportEntry): AttendanceReportData {
  return {
    id: entry.student._id,
    className: "-",
    courseName: "-",
    studentName: entry.student.name,
    instructor: "-",
    dateRange: "-",
    sessionsAttended: entry.sessionsAttended,
    sessionsMissed: entry.sessionsMissed,
    attendancePercent: entry.attendanceRate,
    status: toReportStatus(entry.status),
  };
}

export interface AttendanceReportData {
  id: string;
  className: string;
  courseName: string;
  studentName: string;
  instructor: string;
  dateRange: string;
  sessionsAttended: number;
  sessionsMissed: number;
  attendancePercent: number;
  status: ReportStatus;
}

export const mockAttendanceReports: AttendanceReportData[] = [
  {
    id: "REP-001",
    className: "AI Automation – Cohort 3",
    courseName: "Machine Learning Fundamentals",
    studentName: "Sarah Ahmed",
    instructor: "Dr. Ahmed",
    dateRange: "Jan 1 – Mar 1, 2026",
    sessionsAttended: 42,
    sessionsMissed: 2,
    attendancePercent: 92,
    status: "Good Standing",
  },
  {
    id: "REP-002",
    className: "AI Automation – Cohort 3",
    courseName: "Machine Learning Fundamentals",
    studentName: "Ali Hassan",
    instructor: "Dr. Ahmed",
    dateRange: "Jan 1 – Mar 1, 2026",
    sessionsAttended: 34,
    sessionsMissed: 10,
    attendancePercent: 74,
    status: "Critical",
  },
  {
    id: "REP-003",
    className: "AI Automation – Cohort 3",
    courseName: "Machine Learning Fundamentals",
    studentName: "Fatima Khan",
    instructor: "Dr. Ahmed",
    dateRange: "Jan 1 – Mar 1, 2026",
    sessionsAttended: 24,
    sessionsMissed: 20,
    attendancePercent: 54,
    status: "At Risk",
  },
  {
    id: "REP-004",
    className: "AI Automation – Cohort 3",
    courseName: "Machine Learning Fundamentals",
    studentName: "Omar Siddiqui",
    instructor: "Dr. Ahmed",
    dateRange: "Jan 1 – Mar 1, 2026",
    sessionsAttended: 11,
    sessionsMissed: 1,
    attendancePercent: 92,
    status: "Good Standing",
  },
];

export const getProgressColor = (percent: number) => {
  if (percent >= 80) return "bg-[#24A164]";
  if (percent >= 70) return "bg-[#F59E0B]";
  return "bg-[#E5383B]";
};


