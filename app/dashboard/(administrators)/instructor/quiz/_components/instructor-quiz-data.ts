import { QuizRecord } from "@/lib/api/endpoints/quiz";

export interface InstructorQuiz {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  questions: number;
  attempts: number;
  status?: string;
}

export function isOwnQuiz(quiz: QuizRecord, instructorId?: string): boolean {
  if (!instructorId) return false;
  const createdBy =
    typeof quiz.createdBy === "string" ? quiz.createdBy : quiz.createdBy?._id;
  return createdBy === instructorId;
}

export function mapQuizRecordToInstructorQuiz(
  quiz: QuizRecord,
): InstructorQuiz {
  return {
    id: quiz._id,
    title: quiz.title,
    course: quiz.course?.title ?? "Uncategorized",
    dueDate: quiz.dueDate ? new Date(quiz.dueDate).toLocaleDateString() : "-",
    questions: quiz.questionsCount ?? 0,
    attempts: quiz.attemptsCount ?? 0,
    status: quiz.status,
  };
}
