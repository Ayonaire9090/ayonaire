import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateAnnouncementPayload {
  title: string;
  summary: string;
  cohortId?: string;
  courseId?: string;
  students?: string[];
}

// Best-effort guess at the raw backend shape, based on CreateAnnouncementPayload.
// Confirm field names/casing against the real response and adjust the mapper in
// announcements-data.tsx if they differ.
export interface Announcement {
  _id: string;
  title: string;
  summary: string;
  course?: string | { _id: string; title: string };
  cohort?: string | { _id: string; title: string };
  students?: string[];
  status?: string;
  createdAt?: string;
}

// Confirmed live 2026-07-14: GET /api/v1/announcement returns
// { success, data: { announcement: [...], pagination: {...} } } - the list
// is nested one level deeper than a typical ApiResponse<T[]>.
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
};
