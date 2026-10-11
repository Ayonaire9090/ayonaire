import { AssignmentRecord } from "@/lib/api/endpoints/assignments";

export type AssignmentType = "Project" | "Quiz" | "File";
export type AssignmentStatus = "Published" | "Closed" | "Draft" | "Archived";

export interface Assignment {
  id: string;
  title: string;
  course: string;
  cohort: string;
  type: AssignmentType;
  dueDate: string;
  totalStudents: number;
  submittedCount: number;
  expectedCount: number;
  status: AssignmentStatus;
}

function normalizeAssignmentType(type: string): AssignmentType {
  if (type.toLowerCase().includes("project")) return "Project";
  if (type.toLowerCase().includes("quiz")) return "Quiz";
  return "File";
}

export function mapAssignmentRecordToAssignment(record: AssignmentRecord): Assignment {
  return {
    id: record._id,
    title: record.title,
    course: record.course?.title ?? "Uncategorized",
    cohort: record.cohort?.name ?? "All Students",
    type: normalizeAssignmentType(record.assignmentType),
    dueDate: record.dueDate ? new Date(record.dueDate).toLocaleDateString() : "-",
    totalStudents: record.totalStudents,
    submittedCount: record.submissionsCount,
    expectedCount: record.totalStudents,
    status: record.status === "published" ? "Published" : "Draft",
  };
}

