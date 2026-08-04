import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface AskForHelpAnswer {
  id?: string;
  user: {
    id: string;
    name: string;
  };
  text: string;
  createdAt: string;
}

export interface AskForHelpQuestionRecord {
  id: string;
  content: string;
  media?: {
    url: string;
    publicId: string;
  };
  tags: string[];
  resolved: boolean;
  user: {
    id: string;
    name: string;
    profile?: {
      url: string;
      publicId: string;
    } | null;
  };
  likes: string[];
  answers: AskForHelpAnswer[];
  shares: number;
  createdAt: string;
}

export interface GetAskForHelpQuestionsParams {
  resolved?: boolean;
  page?: number;
  limit?: number;
}

export const askForHelpApi = {
  create: (formData: FormData) =>
    apiClient<ApiResponse<AskForHelpQuestionRecord>>("/api/v1/ask-for-help", {
      method: "POST",
      body: formData,
      requireAuth: true,
    }),

  edit: (formData: FormData) =>
    apiClient<ApiResponse<AskForHelpQuestionRecord>>("/api/v1/ask-for-help", {
      method: "PUT",
      body: formData,
      requireAuth: true,
    }),

  delete: (questionId: string) =>
    apiClient<ApiResponse<string>>("/api/v1/ask-for-help", {
      method: "DELETE",
      body: JSON.stringify({ questionId }),
      requireAuth: true,
    }),

  getAll: (params?: GetAskForHelpQuestionsParams) => {
    const query = new URLSearchParams();
    if (params?.resolved !== undefined)
      query.append("resolved", String(params.resolved));
    if (params?.page) query.append("page", String(params.page));
    if (params?.limit) query.append("limit", String(params.limit));
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse<AskForHelpQuestionRecord[]>>(
      `/api/v1/ask-for-help${qs}`,
      { method: "GET", requireAuth: true },
    );
  },

  like: (questionId: string) =>
    apiClient<ApiResponse<AskForHelpQuestionRecord>>(
      "/api/v1/ask-for-help/like",
      {
        method: "POST",
        body: JSON.stringify({ questionId }),
        requireAuth: true,
      },
    ),

  answer: (questionId: string, text: string) =>
    apiClient<ApiResponse<AskForHelpQuestionRecord>>(
      "/api/v1/ask-for-help/answer",
      {
        method: "POST",
        body: JSON.stringify({ questionId, text }),
        requireAuth: true,
      },
    ),

  deleteAnswer: (questionId: string, answerId: string) =>
    apiClient<ApiResponse<string>>("/api/v1/ask-for-help/answer", {
      method: "DELETE",
      body: JSON.stringify({ questionId, answerId }),
      requireAuth: true,
    }),

  share: (questionId: string) =>
    apiClient<ApiResponse<{ questionId: string; shares: number }>>(
      "/api/v1/ask-for-help/share",
      {
        method: "POST",
        body: JSON.stringify({ questionId }),
        requireAuth: true,
      },
    ),

  resolve: (questionId: string, resolved: boolean) =>
    apiClient<ApiResponse<AskForHelpQuestionRecord>>(
      "/api/v1/ask-for-help/resolve",
      {
        method: "POST",
        body: JSON.stringify({ questionId, resolved }),
        requireAuth: true,
      },
    ),
};
