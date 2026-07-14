import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Shape returned by the backend for a single feed post. NOTE: field names
// are a best-effort guess (no feed GET response has been confirmed against
// the backend yet) - adjust once confirmed.
export interface FeedComment {
  _id: string;
  text: string;
  user?: string | { _id: string; name: string };
  createdAt?: string;
}

export interface FeedRecord {
  _id: string;
  text?: string;
  image?: string;
  tags?: string[];
  createdBy?: string | { _id: string; name: string };
  likes?: string[];
  comments?: FeedComment[];
  createdAt?: string;
}

export const feedsApi = {
  create: (formData: FormData) =>
    apiClient<ApiResponse>("/api/v1/feed", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": undefined as any },
      requireAuth: true,
    }),

  getAll: () =>
    apiClient<ApiResponse<FeedRecord[]>>("/api/v1/feed", {
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
