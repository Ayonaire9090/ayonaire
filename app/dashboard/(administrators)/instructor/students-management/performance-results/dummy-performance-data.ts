export type AssignmentStatus = "Completed" | "Submitted";

export interface AssignmentData {
  id: string;
  lesson: string;
  grade: string;
  submissionDate: string;
  status: AssignmentStatus;
}

export const DUMMY_ASSIGNMENTS: AssignmentData[] = [
  {
    id: "1",
    lesson: "Data Science",
    grade: "85/100",
    submissionDate: "Mar 10, 2024",
    status: "Completed",
  },
  {
    id: "2",
    lesson: "Data Analytics",
    grade: "Pending",
    submissionDate: "Mar 12, 2024",
    status: "Submitted",
  },
];

export const getAssignmentStatusColor = (status: AssignmentStatus) => {
  switch (status) {
    case "Completed":
      return "bg-[#d1fae5] text-[#10b981]"; // light green bg, green text
    case "Submitted":
      return "bg-[#ffe4e6] text-[#f43f5e]"; // light red bg, red text
    default:
      return "bg-gray-100 text-gray-800";
  }
};
