import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateAnnouncementPayload {
  title: string;
  summary: string;
  cohortId?: string;
  courseId?: string;
  students?: string[];
}

export const announcementsApi = {
  create: (payload: CreateAnnouncementPayload) =>
    apiClient<ApiResponse>("/api/v1/announcement", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getAll: () =>
    apiClient<ApiResponse>("/api/v1/announcement", {
      method: "GET",
      requireAuth: true,
    }),
};
