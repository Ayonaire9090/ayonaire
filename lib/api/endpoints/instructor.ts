import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface ApplyInstructorPayload {
  bio?: string;
  expertise?: string[];
  instructorCourseCategory?: string;
}

export interface RejectInstructorPayload {
  applicationId: string;
  reason: string;
}

export const instructorApi = {
  apply: (payload: ApplyInstructorPayload) =>
    apiClient<ApiResponse>("/api/v1/instructor/apply", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  approve: (applicationId: string) =>
    apiClient<ApiResponse>("/api/v1/instructor/approve", {
      method: "POST",
      body: JSON.stringify({ applicationId }),
      requireAuth: true,
    }),

  reject: (payload: RejectInstructorPayload) =>
    apiClient<ApiResponse>("/api/v1/instructor/reject", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getProfile: (instructorId: string) =>
    apiClient<ApiResponse>(`/api/v1/instructor/profile?instructorId=${instructorId}`, {
      method: "GET",
      requireAuth: true,
    }),

  getAllProfiles: () =>
    apiClient<ApiResponse>("/api/v1/instructor/profiles", {
      method: "GET",
      requireAuth: true,
    }),
};
