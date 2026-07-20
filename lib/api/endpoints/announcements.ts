import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateAnnouncementPayload {
  title: string;
  summary: string;
  cohortId?: string;
  courseId?: string;
  students?: string[];
  status?: "draft" | "scheduled" | "published";
  scheduledAt?: string;
}

export interface UpdateAnnouncementPayload {
  announcementId: string;
  title?: string;
  summary?: string;
  status?: "draft" | "scheduled" | "published";
  scheduledAt?: string;
}

// Verified directly against backend source (announcement.model.ts,
// announcement.service.ts getAllAnnounceMents) on 2026-07-16 - the list
// response uses `id` (not `_id`), `course`/`cohort` (not courseId/cohortId),
// and a real `status` enum (draft|scheduled|published) + `views` do exist.
export interface Announcement {
  id: string;
  title: string;
  summary: string;
  audience: string;
  course?: string | null;
  cohort?: string | null;
  createdBy?: string | null;
  status: "draft" | "scheduled" | "published";
  views: number;
  createdAt?: string;
}

export interface AnnouncementListData {
  announcement: Announcement[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const announcementsApi = {
  create: (payload: CreateAnnouncementPayload) =>
    apiClient<ApiResponse>("/api/v1/announcement", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getAll: () =>
    apiClient<ApiResponse<AnnouncementListData>>("/api/v1/announcement", {
      method: "GET",
      requireAuth: true,
    }),

  update: ({ announcementId, ...payload }: UpdateAnnouncementPayload) =>
    apiClient<ApiResponse<Announcement>>(`/api/v1/announcement/${announcementId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  delete: (announcementId: string) =>
    apiClient<ApiResponse>(`/api/v1/announcement/${announcementId}`, {
      method: "DELETE",
      requireAuth: true,
    }),
};
