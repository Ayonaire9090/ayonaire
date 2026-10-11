import { QuizRecord } from "@/lib/api/endpoints/quiz";

export type QuizType = "Quiz" | "Assignment" | "Exam";

export interface StudentQuiz {
  id: string;
  title: string;
  type: QuizType;
  course: string;
  marks: string;
  dueDate: string;
  status: string;
}

export function isEnrolledQuiz(
  quiz: QuizRecord,
  enrolledCourseIds: Set<string>,
): boolean {
  const courseId = quiz.course?._id;
  if (!courseId) return false;
  return enrolledCourseIds.has(courseId);
}

// "marks" (points earned) has no per-student source yet (no submission
// status endpoint scoped to the current student) so it stays "-".
export function mapQuizRecordToStudentQuiz(quiz: QuizRecord): StudentQuiz {
  return {
    id: quiz._id,
    title: quiz.title,
    type: "Quiz",
    course: quiz.course?.title ?? "Uncategorized",
    marks: "-",
    dueDate: quiz.dueDate ? new Date(quiz.dueDate).toLocaleDateString() : "-",
    status: quiz.status === "published" ? "Available" : "Draft",
  };
}
