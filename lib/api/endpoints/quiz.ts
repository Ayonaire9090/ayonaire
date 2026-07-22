import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Verified directly against backend source (quiz.service.ts listQuizzes) on
// 2026-07-16 - real fields include dueDate/course/questionsCount/
// totalPoints/attemptsCount/avgScore, all backed by a real quizAttempt
// aggregation (not guesses).
export interface QuizRecord {
  _id: string;
  title: string;
  module?: string;
  course?: { _id: string; title: string } | null;
  randomizeQuestions?: boolean;
  showCorrectAnswers?: boolean;
  allowRetakes?: boolean;
  questionsCount?: number;
  totalPoints?: number;
  status?: "draft" | "published" | string;
  dueDate?: string;
  attemptsCount?: number;
  avgScore?: number | null;
  createdBy?: string | { _id: string; name: string } | null;
  createdAt?: string;
}

export interface QuizResults {
  quizId: string;
  title: string;
  attempts: {
    student: { _id: string; name: string; email?: string };
    score: number;
    completed: boolean;
    submittedAt?: string;
  }[];
}

export interface CreateQuizQuestionPayload {
  quiz: string;
  question: string;
  options: { text: string; isCorrect?: boolean }[];
  multipleCorrectAnswer?: boolean;
  randomizeChoice?: boolean;
  points?: number;
}

export interface SubmitQuizPayload {
  quiz: string;
  answers: {
    question: string;
    selectedOptions: string[];
  }[];
}

export interface CreateQuizPayload {
  title: string;
  module: string;
  randomizeQuestions?: boolean;
  showCorrectAnswers?: boolean;
  allowRetakes?: boolean;
}

export interface UpdateQuizPayload {
  quizId: string;
  title?: string;
  randomizeQuestions?: boolean;
  showCorrectAnswers?: boolean;
  allowRetakes?: boolean;
  status?: "draft" | "published";
  dueDate?: string;
}

export interface GetQuizzesParams {
  status?: string;
  module?: string;
  createdBy?: string;
  page?: number;
  limit?: number;
}

export const quizApi = {
  createQuestion: (payload: CreateQuizQuestionPayload) =>
    apiClient<ApiResponse>("/api/v1/quiz/question", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  submitQuiz: (payload: SubmitQuizPayload) =>
    apiClient<ApiResponse>("/api/v1/quiz/quiz/submit", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  createQuiz: (payload: CreateQuizPayload) =>
    apiClient<ApiResponse<QuizRecord>>("/api/v1/quiz/quiz", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  // Backend spreads { success, quizzes, pagination } at the response root
  // (res.json({ success, ...data })), not nested under "data".
  getAll: (params: GetQuizzesParams = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) query.append(key, String(value));
    });
    const qs = query.toString() ? `?${query.toString()}` : "";

    return apiClient<
      ApiResponse & {
        quizzes: QuizRecord[];
        pagination: { total: number; page: number; limit: number; totalPages: number };
      }
    >(`/api/v1/quiz/quiz${qs}`, { method: "GET", requireAuth: true });
  },

  getById: (quizId: string) =>
    apiClient<ApiResponse<QuizRecord>>(`/api/v1/quiz/quiz/${quizId}`, {
      method: "GET",
      requireAuth: true,
    }),

  update: ({ quizId, ...payload }: UpdateQuizPayload) =>
    apiClient<ApiResponse<QuizRecord>>(`/api/v1/quiz/quiz/${quizId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  delete: (quizId: string) =>
    apiClient<ApiResponse>(`/api/v1/quiz/quiz/${quizId}`, {
      method: "DELETE",
      requireAuth: true,
    }),

  getResults: (quizId: string) =>
    apiClient<ApiResponse<QuizResults>>(`/api/v1/quiz/quiz/${quizId}/results`, {
      method: "GET",
      requireAuth: true,
    }),
};
