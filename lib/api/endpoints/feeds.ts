import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Confirmed 2026-07-14 against the live Swagger spec: fields are content/
// media, not text/image, and there's no tags or createdBy field on a Feed.
// comments is documented only as a generic object array with no defined
// sub-shape - kept loosely typed until that's confirmed.
//
// NOTE: per the CTO (2026-07-14), feed has since moved to sockets "for fast
// response" - this REST getAll() may only cover initial/fallback loading
// going forward. Real-time socket integration is a separate, bigger task
// not covered by this fix.
export interface FeedComment {
  _id: string;
  text?: string;
  user?: string | { _id: string; name: string };
  createdAt?: string;
  [key: string]: unknown;
}

export interface FeedRecord {
  _id: string;
  content?: string;
  media?: string;
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
