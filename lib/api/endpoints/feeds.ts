import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface FeedComment {
  user: {
    id: string;
    name?: string;
  };
  text: string;
  createdAt: string;
}

export interface FeedRecord {
  id: string;
  content: string;
  media?: {
    url: string;
    publicId: string;
  };
  tag?: string[];
  user: {
    id: string;
    name: string;
    profile?: {
      url: string;
      publicId: string;
    } | null;
  };
  likes: string[];
  comments: FeedComment[];
  shares: number;
  createdAt: string;
}

export interface GetFeedsParams {
  tag?: string;
  page?: number;
  limit?: number;
}

export interface ShareFeedResult {
  feedId: string;
  shares: number;
}

export const feedsApi = {
  create: (formData: FormData) =>
    apiClient<ApiResponse>("/api/v1/feed", {
      method: "POST",
      body: formData,
      requireAuth: true,
    }),

  getAll: (params?: GetFeedsParams) => {
    const query = new URLSearchParams();
    if (params?.tag) query.set("tag", params.tag);
    if (params?.page) query.set("page", String(params.page));
    if (params?.limit) query.set("limit", String(params.limit));
    const qs = query.toString();

    return apiClient<ApiResponse<FeedRecord[]>>(
      `/api/v1/feed${qs ? `?${qs}` : ""}`,
      {
        method: "GET",
        requireAuth: true,
      },
    );
  },

  edit: (formData: FormData) =>
    apiClient<ApiResponse>("/api/v1/feed", {
      method: "PUT",
      body: formData,
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

  share: (feedId: string) =>
    apiClient<ApiResponse<ShareFeedResult>>("/api/v1/feed/share", {
      method: "POST",
      body: JSON.stringify({ feedId }),
      requireAuth: true,
    }),

  report: (feedId: string, reason: string) =>
    apiClient<ApiResponse>("/api/v1/feed/report", {
      method: "POST",
      body: JSON.stringify({ feedId, reason }),
      requireAuth: true,
    }),
};
