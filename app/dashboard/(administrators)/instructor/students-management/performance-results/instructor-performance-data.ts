import { useMemo } from "react";
import { useQueries } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth.store";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetAllSubmissions } from "@/hooks/api/use-assignments";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { quizApi } from "@/lib/api/endpoints/quiz";

export type SubmissionStatus = "Completed" | "Submitted";

export interface SubmissionRow {
  id: string;
  studentId: string | null;
  student: string;
  lesson: string;
  grade: string;
  submissionDate: string;
  status: SubmissionStatus;
}

export const getSubmissionStatusColor = (status: SubmissionStatus) => {
  switch (status) {
    case "Completed":
      return "bg-[#d1fae5] text-[#10b981]";
    case "Submitted":
      return "bg-[#ffe4e6] text-[#f43f5e]";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// There's no per-student "performance results" endpoint. getAllSubmissions
// has no instructor-scoping param, so it's fetched with a high limit and
// filtered client-side to this instructor's courses (same unconfirmed
// assumption already made in instructor-student-data.ts). An optional
// studentId further narrows the rows to one student for the per-student view.
export function useInstructorSubmissions(studentId?: string) {
  const user = useAuthStore((state) => state.user);
  const instructorId = user?._id;

  const coursesQuery = useGetCourses({ instructor: instructorId, limit: 200 });
  const submissionsQuery = useGetAllSubmissions({ limit: 100 });

  const courseIds = useMemo(
    () => new Set((coursesQuery.data?.courses ?? []).map((c) => c._id)),
    [coursesQuery.data],
  );

  const rows: SubmissionRow[] = useMemo(
    () =>
      (submissionsQuery.data?.submissions ?? [])
        .filter((submission) => !!submission.course?._id && courseIds.has(submission.course._id))
        .filter((submission) => !studentId || submission.student?._id === studentId)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .map((submission) => ({
          id: submission._id,
          studentId: submission.student?._id ?? null,
          student: submission.student?.name ?? "Unknown Student",
          lesson: submission.assignment?.title ?? "Untitled Assignment",
          grade: submission.grade != null ? `${submission.grade}/100` : "Pending",
          submissionDate: new Date(submission.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          status: submission.status === "graded" ? "Completed" : "Submitted",
        })),
    [submissionsQuery.data, courseIds, studentId],
  );

  return {
    rows,
    isLoading: coursesQuery.isLoading || submissionsQuery.isLoading,
  };
}

export interface QuizResultCard {
  id: string;
  title: string;
  attempts: number;
  percentage: string;
}

// QuizRecord already carries attemptsCount/avgScore from a real backend
// aggregation (see quiz.ts), so no extra per-attempt fetch is needed here.
export function useInstructorQuizResultCards() {
  const user = useAuthStore((state) => state.user);
  const quizzesQuery = useGetQuizzes({ createdBy: user?._id, limit: 20 });
  const quizzes = quizzesQuery.data?.quizzes ?? [];

  const cards: QuizResultCard[] = quizzes
    .filter((quiz) => (quiz.attemptsCount ?? 0) > 0)
    .map((quiz) => ({
      id: quiz._id,
      title: quiz.title,
      attempts: quiz.attemptsCount ?? 0,
      percentage: quiz.avgScore != null ? `${Math.round(quiz.avgScore)}%` : "-",
    }));

  return { cards, isLoading: quizzesQuery.isLoading };
}

export interface StudentQuizAttemptRow {
  id: string;
  quizTitle: string;
  score: number;
  submissionDate: string;
  status: SubmissionStatus;
}

// There's no per-student quiz-attempt endpoint, so this fetches per-quiz
// results (same pattern used for the course activity feed) and picks out
// this one student's completed attempts. Only meaningful when a studentId
// is passed - without one this fetches nothing.
export function useInstructorStudentQuizAttempts(studentId?: string) {
  const user = useAuthStore((state) => state.user);
  const quizzesQuery = useGetQuizzes({ createdBy: user?._id, limit: 200 });
  const quizzes = quizzesQuery.data?.quizzes ?? [];

  const quizResultsQueries = useQueries({
    queries: quizzes.map((quiz) => ({
      queryKey: ["quiz-results-for-student", quiz._id],
      queryFn: () => quizApi.getResults(quiz._id),
      enabled: !!quiz._id && !!studentId,
    })),
  });

  const rows: StudentQuizAttemptRow[] = useMemo(() => {
    if (!studentId) return [];
    const list: StudentQuizAttemptRow[] = [];
    quizResultsQueries.forEach((result, index) => {
      const quiz = quizzes[index];
      (result.data?.data?.attempts ?? [])
        .filter((attempt) => attempt.student._id === studentId)
        .forEach((attempt, attemptIndex) => {
          list.push({
            id: `${quiz._id}-${attemptIndex}`,
            quizTitle: quiz.title,
            score: attempt.score,
            submissionDate: attempt.submittedAt
              ? new Date(attempt.submittedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "-",
            status: attempt.completed ? "Completed" : "Submitted",
          });
        });
    });
    return list.sort(
      (a, b) => new Date(b.submissionDate).getTime() - new Date(a.submissionDate).getTime(),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizResultsQueries, quizzes, studentId]);

  return {
    rows,
    isLoading: quizzesQuery.isLoading || quizResultsQueries.some((q) => q.isLoading),
  };
}
