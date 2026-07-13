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

// Enrollment can only be verified when module.course is populated. If the
// backend returns module as a bare id string, we can't confirm the student
// is enrolled, so the quiz is excluded rather than shown unverified.
export function isEnrolledQuiz(
  quiz: QuizRecord,
  enrolledCourseIds: Set<string>,
): boolean {
  const moduleObj = typeof quiz.module === "object" ? quiz.module : undefined;
  const courseId = moduleObj?.course?._id;
  if (!courseId) return false;
  return enrolledCourseIds.has(courseId);
}

// marks/dueDate/status have no known backend source yet (no marks field on
// QuizRecord, no due-date field, no per-student submission-status endpoint)
// so they fall back to "-"/"Available" rather than guessed values.
export function mapQuizRecordToStudentQuiz(quiz: QuizRecord): StudentQuiz {
  const moduleObj = typeof quiz.module === "object" ? quiz.module : undefined;
  const course = moduleObj?.course?.title ?? "Uncategorized";

  return {
    id: quiz._id,
    title: quiz.title,
    type: "Quiz",
    course,
    marks: "-",
    dueDate: "-",
    status: "Available",
  };
}
