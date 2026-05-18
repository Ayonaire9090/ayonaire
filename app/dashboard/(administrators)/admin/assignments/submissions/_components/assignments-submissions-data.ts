export type SubmissionStatus = "Submitted" | "Graded" | "Late" | "Critical";
export type GradeStatus = "Graded" | "Pending";

export interface SubmissionRecord {
  id: string;
  studentName: string;
  studentId: string;
  cohort: string;
  submissionStatus: SubmissionStatus;
  submittedOn: string;
  fileLink: string | null;
  gradeStatus: GradeStatus;
  score: string;
}

export const mockSubmissions: SubmissionRecord[] = [
  {
    id: "sub-1",
    studentName: "Sarah Ahmed",
    studentId: "STU-2024-001",
    cohort: "Cohort A",
    submissionStatus: "Graded",
    submittedOn: "2026-02-25 09:30 AM",
    fileLink: "document.pdf",
    gradeStatus: "Graded",
    score: "85/100",
  },
  {
    id: "sub-2",
    studentName: "Ali Hassan",
    studentId: "STU-2024-002",
    cohort: "Cohort A",
    submissionStatus: "Submitted",
    submittedOn: "2026-02-26 11:15 AM",
    fileLink: "document.pdf",
    gradeStatus: "Pending",
    score: "-",
  },
  {
    id: "sub-3",
    studentName: "Fatima Khan",
    studentId: "STU-2024-003",
    cohort: "Cohort A",
    submissionStatus: "Late",
    submittedOn: "2026-02-28 04:20 PM",
    fileLink: "document.pdf",
    gradeStatus: "Graded",
    score: "-",
  },
  {
    id: "sub-4",
    studentName: "Omar Siddiqui",
    studentId: "STU-2024-004",
    cohort: "Cohort A",
    submissionStatus: "Critical",
    submittedOn: "2026-02-24 10:00 AM",
    fileLink: "document.pdf",
    gradeStatus: "Pending",
    score: "92/100",
  },
  {
    id: "sub-5",
    studentName: "Sarah Ahmed",
    studentId: "STU-2024-005",
    cohort: "Cohort A",
    submissionStatus: "Submitted",
    submittedOn: "2026-02-26 02:45 PM",
    fileLink: "document.pdf",
    gradeStatus: "Graded",
    score: "78/100",
  },
];
