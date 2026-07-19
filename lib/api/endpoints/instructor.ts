import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Confirmed 2026-07-14 against the live Swagger spec
// (https://ayonaire.onrender.com/api-docs/) - real routes are under
// /api/v1/instructor-management/*, not /api/v1/instructor/*, and the real
// "Instructor" schema has no name/email - it references a user via
// instructorId, and the application-state field is applicationStatus, not
// status. instructorId is typed as string | populated object since it's
// unconfirmed whether responses populate it.
export interface InstructorProfile {
  _id: string;
  instructorId: string | { _id: string; name: string; email: string };
  bio?: string;
  expertise?: string[];
  instructorCourseCategory?: string;
  applicationStatus?: "pending" | "approved" | "rejected";
  courses?: string[];
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
    apiClient<ApiResponse>("/api/v1/instructor-management/apply", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  approve: (applicationId: string) =>
    apiClient<ApiResponse>("/api/v1/instructor-management/approve", {
      method: "POST",
      body: JSON.stringify({ applicationId }),
      requireAuth: true,
    }),

  reject: (payload: RejectInstructorPayload) =>
    apiClient<ApiResponse>("/api/v1/instructor-management/reject", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getProfile: (instructorId: string) =>
    apiClient<ApiResponse<InstructorProfile>>(`/api/v1/instructor-management/profile?instructorId=${instructorId}`, {
      method: "GET",
      requireAuth: true,
    }),

  getAllProfiles: () =>
    apiClient<ApiResponse<InstructorProfile[]>>("/api/v1/instructor-management/profiles", {
      method: "GET",
      requireAuth: true,
    }),
};
