import { QuizRecord, QuizResults } from "@/lib/api/endpoints/quiz";
import { ApiResponse } from "@/lib/api/types";

// The backend sometimes nests payloads under `data` and sometimes spreads
// them at the response root (res.json({ success, ...data })) — accept both.
export function extractQuizRecord(
  res?: ApiResponse<QuizRecord>,
): QuizRecord | undefined {
  if (!res) return undefined;
  return res.data ?? res.quiz ?? undefined;
}

export function extractQuizResults(
  res?: ApiResponse<QuizResults>,
): QuizResults | undefined {
  if (!res) return undefined;
  if (res.data?.attempts) return res.data;
  if (Array.isArray(res.attempts)) return res as unknown as QuizResults;
  return undefined;
}

export type AttemptStatus = "Graded" | "Pending" | "Submitted" | "Late" | "Critical";
export type PassFail = "Pass" | "Fail" | "-";

// The backend has no per-quiz pass mark; 50% is the product-wide default.
export const PASS_MARK_PERCENT = 50;

export interface QuizResult {
  id: string; // student _id — the results endpoint returns one attempt per student
  studentName: string;
  email: string;
  attemptStatus: AttemptStatus;
  score: string;
  percentage: string;
  timeTaken: string;
  passFail: PassFail;
  submittedOn: string;
}

export type QuizAttempt = QuizResults["attempts"][number];

export function getPercentage(
  score: number,
  totalPoints?: number,
): number | null {
  if (!totalPoints || totalPoints <= 0) return null;
  return Math.round((score / totalPoints) * 100);
}

export function formatSubmittedOn(submittedAt?: string): string {
  if (!submittedAt) return "-";
  const date = new Date(submittedAt);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export interface QuizResultFilterState {
  search: string;
  statuses: string[];
  passFail: string[];
}

export const emptyQuizResultFilters: QuizResultFilterState = {
  search: "",
  statuses: [],
  passFail: [],
};

export function applyQuizResultFilters(
  results: QuizResult[],
  filters: QuizResultFilterState,
): QuizResult[] {
  const search = filters.search.trim().toLowerCase();

  return results.filter((result) => {
    if (
      search &&
      ![result.studentName, result.email].some((field) =>
        field.toLowerCase().includes(search),
      )
    ) {
      return false;
    }
    if (
      filters.statuses.length > 0 &&
      !filters.statuses.includes(result.attemptStatus)
    ) {
      return false;
    }
    if (
      filters.passFail.length > 0 &&
      !filters.passFail.includes(result.passFail)
    ) {
      return false;
    }
    return true;
  });
}

// timeTaken is "-" because the backend doesn't record attempt duration.
export function mapAttemptToQuizResult(
  attempt: QuizAttempt,
  totalPoints?: number,
): QuizResult {
  const pct = getPercentage(attempt.score, totalPoints);

  return {
    id: attempt.student._id,
    studentName: attempt.student.name,
    email: attempt.student.email ?? "-",
    attemptStatus: attempt.completed ? "Graded" : "Pending",
    score: totalPoints
      ? `${attempt.score} / ${totalPoints}`
      : String(attempt.score),
    percentage: pct === null ? "-" : `${pct}%`,
    timeTaken: "-",
    passFail:
      !attempt.completed || pct === null
        ? "-"
        : pct >= PASS_MARK_PERCENT
          ? "Pass"
          : "Fail",
    submittedOn: formatSubmittedOn(attempt.submittedAt),
  };
}
