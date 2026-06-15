import { apiClient } from "../client";
import { ApiResponse } from "../types";

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
};
