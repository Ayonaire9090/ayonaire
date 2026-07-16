import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateAnnouncementPayload {
  title: string;
  summary: string;
  cohortId?: string;
  courseId?: string;
  students?: string[];
}

// Confirmed 2026-07-14 against the live Swagger spec: fields are courseId/
// cohortId (plain ID strings), not course/cohort - and there's no status
// field on an Announcement at all.
export interface Announcement {
  _id: string;
  title: string;
  summary: string;
  courseId?: string;
  cohortId?: string;
  students?: string[];
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
