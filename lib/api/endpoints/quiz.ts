import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Shape returned by the backend for a single quiz. NOTE: field names are a
// best-effort guess based on CreateQuizPayload plus common conventions —
// confirm against the real GET response and adjust once the backend
// confirms it. Submission/analytics fields (totalStudents, submissions,
// avgScore) have no known source at all yet.
export interface QuizRecord {
  _id: string;
  title: string;
  module?: string | { _id: string; title: string; course?: { _id: string; title: string } };
  randomizeQuestions?: boolean;
  showCorrectAnswers?: boolean;
  allowRetakes?: boolean;
  questions?: unknown[];
  status?: string;
  createdBy?: string | { _id: string; name: string };
  createdAt?: string;
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
    apiClient<ApiResponse>("/api/v1/quiz/quiz", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  // NOTE: no list/detail endpoint existed before this change. Path guessed
  // to share the same base path as createQuiz (POST), following the same
  // convention already used by workshopsApi. Confirm with the backend team.
  getAll: () =>
    apiClient<ApiResponse<QuizRecord[]>>("/api/v1/quiz/quiz", {
      method: "GET",
      requireAuth: true,
    }),

  getById: (quizId: string) =>
    apiClient<ApiResponse<QuizRecord>>(`/api/v1/quiz/quiz/${quizId}`, {
      method: "GET",
      requireAuth: true,
    }),
};
