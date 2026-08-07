import { AssignmentRecord } from "@/lib/api/endpoints/assignments";

export interface StudentAssignment {
  id: string;
  title: string;
  course: string;
  points: string;
  dueDate: string;
  status: string;
}

export function isEnrolledAssignment(
  assignment: AssignmentRecord,
  enrolledCourseIds: Set<string>,
): boolean {
  const courseId = assignment.course?._id;
  if (!courseId) return false;
  return enrolledCourseIds.has(courseId);
}

export function mapAssignmentRecordToStudentAssignment(
  assignment: AssignmentRecord,
): StudentAssignment {
  const isOverdue =
    !!assignment.dueDate && new Date(assignment.dueDate).getTime() < Date.now();

  return {
    id: assignment._id,
    title: assignment.title,
    course: assignment.course?.title ?? "Uncategorized",
    points: String(assignment.totalPoints ?? "-"),
    dueDate: assignment.dueDate
      ? new Date(assignment.dueDate).toLocaleDateString()
      : "-",
    status: assignment.status === "published" ? (isOverdue ? "Overdue" : "Open") : "Draft",
  };
}
