import { apiClient } from "../client";
import { ApiResponse } from "../types";

export const feedsApi = {
  create: (formData: FormData) =>
    apiClient<ApiResponse>("/api/v1/feed", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": undefined as any },
      requireAuth: true,
    }),

  getAll: () =>
    apiClient<ApiResponse>("/api/v1/feed", {
      method: "GET",
      requireAuth: true,
    }),

  edit: (formData: FormData) =>
    apiClient<ApiResponse>("/api/v1/feed", {
      method: "PUT",
      body: formData,
      headers: { "Content-Type": undefined as any },
      requireAuth: true,
    }),

  delete: (feedId: string) =>
    apiClient<ApiResponse>("/api/v1/feed", {
      method: "DELETE",
      body: JSON.stringify({ feedId }),
      requireAuth: true,
    }),

  like: (feedId: string) =>
    apiClient<ApiResponse>("/api/v1/feed/like", {
      method: "POST",
      body: JSON.stringify({ feedId }),
      requireAuth: true,
    }),

  comment: (feedId: string, text: string) =>
    apiClient<ApiResponse>("/api/v1/feed/comment", {
      method: "POST",
      body: JSON.stringify({ feedId, text }),
      requireAuth: true,
    }),

  deleteComment: (feedId: string, commentId: string) =>
    apiClient<ApiResponse>("/api/v1/feed/comment", {
      method: "DELETE",
      body: JSON.stringify({ feedId, commentId }),
      requireAuth: true,
    }),
};
