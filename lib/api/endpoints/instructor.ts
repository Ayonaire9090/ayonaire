import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Best-effort guess at the shape of an instructor profile, based on
// ApplyInstructorPayload plus the base UserProfile fields. The "status"
// field is assumed to double as the application state (pending/approved/
// rejected) since there's no separate "list applications" endpoint -
// needs backend confirmation.
export interface InstructorProfile {
  _id: string;
  name: string;
  email: string;
  bio?: string;
  expertise?: string[];
  instructorCourseCategory?: string;
  status?: string;
  createdAt?: string;
}

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
    apiClient<ApiResponse<InstructorProfile>>(`/api/v1/instructor/profile?instructorId=${instructorId}`, {
      method: "GET",
      requireAuth: true,
    }),

  getAllProfiles: () =>
    apiClient<ApiResponse<InstructorProfile[]>>("/api/v1/instructor/profiles", {
      method: "GET",
      requireAuth: true,
    }),
};
