import { QuizRecord } from "@/lib/api/endpoints/quiz";

export type QuizStatus = "Published" | "Closed" | "Draft" | "Archived";

export interface Quiz {
  id: string;
  title: string;
  course: string;
  class: string;
  createdBy: string;
  questions: number;
  totalStudents: number;
  submissions: number;
  avgScore: string;
  status: QuizStatus;
}

const VALID_QUIZ_STATUSES: QuizStatus[] = [
  "Published",
  "Closed",
  "Draft",
  "Archived",
];

function normalizeQuizStatus(status?: string): QuizStatus {
  if (!status) return "Draft";
  const match = VALID_QUIZ_STATUSES.find(
    (s) => s.toLowerCase() === status.toLowerCase(),
  );
  return match ?? "Draft";
}

// totalStudents/submissions/avgScore have no known backend source yet (no
// results/analytics endpoint exists) so they fall back to 0/"-" rather than
// guessed numbers.
export function mapQuizRecordToQuiz(quiz: QuizRecord): Quiz {
  const moduleObj = typeof quiz.module === "object" ? quiz.module : undefined;
  const course = moduleObj?.course?.title ?? "Uncategorized";
  const cls = moduleObj?.title ?? "-";

  const createdBy =
    typeof quiz.createdBy === "string"
      ? quiz.createdBy
      : quiz.createdBy?.name ?? "-";

  return {
    id: quiz._id,
    title: quiz.title,
    course,
    class: cls,
    createdBy,
    questions: quiz.questions?.length ?? 0,
    totalStudents: 0,
    submissions: 0,
    avgScore: "-",
    status: normalizeQuizStatus(quiz.status),
  };
}
