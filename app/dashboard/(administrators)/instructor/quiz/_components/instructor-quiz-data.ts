import { QuizRecord } from "@/lib/api/endpoints/quiz";

export interface InstructorQuiz {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  questions: number;
  attempts: number;
}

export function isOwnQuiz(quiz: QuizRecord, instructorId?: string): boolean {
  if (!instructorId) return false;
  const createdBy =
    typeof quiz.createdBy === "string" ? quiz.createdBy : quiz.createdBy?._id;
  return createdBy === instructorId;
}

// dueDate/attempts have no known backend source yet (no due-date field on
// QuizRecord, no results/analytics endpoint) so they fall back to "-"/0
// rather than guessed values.
export function mapQuizRecordToInstructorQuiz(
  quiz: QuizRecord,
): InstructorQuiz {
  const moduleObj = typeof quiz.module === "object" ? quiz.module : undefined;
  const course = moduleObj?.course?.title ?? "Uncategorized";

  return {
    id: quiz._id,
    title: quiz.title,
    course,
    dueDate: "-",
    questions: quiz.questions?.length ?? 0,
    attempts: 0,
  };
}
