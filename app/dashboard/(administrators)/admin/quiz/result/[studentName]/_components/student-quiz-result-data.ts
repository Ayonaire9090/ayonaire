export type AttemptStatus = "Graded" | "Submitted" | "Late" | "Critical";
export type PassFail = "Pass" | "Fail" | "-";

export interface StudentQuizResult {
  id: string;
  studentName: string;
  studentId: string;
  class: string;
  attemptStatus: AttemptStatus;
  score: string;
  percentage: string;
  timeTaken: string;
  passFail: PassFail;
  submittedOn: string;
}

export const mockQuizResults: StudentQuizResult[] = [
  {
    id: "1",
    studentName: "Sarah Ahmed",
    studentId: "STU-2024-001",
    class: "Cohort A",
    attemptStatus: "Graded",
    score: "22 / 25",
    percentage: "88%",
    timeTaken: "14 min",
    passFail: "Pass",
    submittedOn: "2024-03-01 10:30 AM",
  },
  {
    id: "2",
    studentName: "Ali Hassan",
    studentId: "STU-2024-002",
    class: "Cohort A",
    attemptStatus: "Submitted",
    score: "12 / 25",
    percentage: "48%",
    timeTaken: "22 min",
    passFail: "Fail",
    submittedOn: "2024-03-01 10:30 AM",
  },
  {
    id: "3",
    studentName: "Fatima Khan",
    studentId: "STU-2024-003",
    class: "Cohort A",
    attemptStatus: "Late",
    score: "19 / 25",
    percentage: "76%",
    timeTaken: "18 min",
    passFail: "Pass",
    submittedOn: "2024-03-01 09:45 AM",
  },
  {
    id: "4",
    studentName: "Omar Siddiqui",
    studentId: "STU-2024-004",
    class: "Cohort A",
    attemptStatus: "Critical",
    score: "-",
    percentage: "-",
    timeTaken: "-",
    passFail: "-",
    submittedOn: "-",
  },
  {
    id: "5",
    studentName: "Sarah Ahmed",
    studentId: "STU-2024-005",
    class: "Cohort A",
    attemptStatus: "Submitted",
    score: "-",
    percentage: "-",
    timeTaken: "-",
    passFail: "-",
    submittedOn: "-",
  },
  {
    id: "6",
    studentName: "Ali Hassan",
    studentId: "STU-2024-002",
    class: "Cohort A",
    attemptStatus: "Submitted",
    score: "12 / 25",
    percentage: "48%",
    timeTaken: "22 min",
    passFail: "Fail",
    submittedOn: "2024-03-01 10:30 AM",
  },
  {
    id: "7",
    studentName: "Fatima Khan",
    studentId: "STU-2024-003",
    class: "Cohort A",
    attemptStatus: "Late",
    score: "19 / 25",
    percentage: "76%",
    timeTaken: "18 min",
    passFail: "Pass",
    submittedOn: "2024-03-01 09:45 AM",
  },
];
