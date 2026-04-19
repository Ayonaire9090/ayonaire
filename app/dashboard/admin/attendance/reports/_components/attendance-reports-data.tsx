export type ReportStatus = "Good Standing" | "At Risk" | "Critical";

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


