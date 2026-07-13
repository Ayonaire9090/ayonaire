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

export const announcementsApi = {
  create: (payload: CreateAnnouncementPayload) =>
    apiClient<ApiResponse>("/api/v1/announcement", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getAll: () =>
    apiClient<ApiResponse<Announcement[]>>("/api/v1/announcement", {
      method: "GET",
      requireAuth: true,
    }),
};
