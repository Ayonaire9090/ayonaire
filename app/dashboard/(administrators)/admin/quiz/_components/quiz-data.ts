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

function normalizeQuizStatus(status?: string): QuizStatus {
  return status === "published" ? "Published" : "Draft";
}

// totalStudents (course enrollment count) has no cheap source from this
// endpoint - only real attempt data (submissions/avgScore) is available.
export interface QuizFilterState {
  search: string;
  statuses: string[];
  courses: string[];
}

export const emptyQuizFilters: QuizFilterState = {
  search: "",
  statuses: [],
  courses: [],
};

export function applyQuizFilters(
  quizzes: Quiz[],
  filters: QuizFilterState,
): Quiz[] {
  const search = filters.search.trim().toLowerCase();

  return quizzes.filter((quiz) => {
    if (
      search &&
      ![quiz.title, quiz.course, quiz.createdBy].some((field) =>
        field.toLowerCase().includes(search),
      )
    ) {
      return false;
    }
    if (filters.statuses.length > 0 && !filters.statuses.includes(quiz.status)) {
      return false;
    }
    if (filters.courses.length > 0 && !filters.courses.includes(quiz.course)) {
      return false;
    }
    return true;
  });
}

export function mapQuizRecordToQuiz(quiz: QuizRecord): Quiz {
  const createdBy =
    typeof quiz.createdBy === "string"
      ? quiz.createdBy
      : quiz.createdBy?.name ?? "-";

  return {
    id: quiz._id,
    title: quiz.title,
    course: quiz.course?.title ?? "Uncategorized",
    class: "-",
    createdBy,
    questions: quiz.questionsCount ?? 0,
    totalStudents: 0,
    submissions: quiz.attemptsCount ?? 0,
    avgScore: quiz.avgScore != null ? `${quiz.avgScore}%` : "-",
    status: normalizeQuizStatus(quiz.status),
  };
}
