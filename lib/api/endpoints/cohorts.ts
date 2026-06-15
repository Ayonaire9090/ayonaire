import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateCohortPayload {
  name: string;
  course: string;
  description?: string;
  isActive?: boolean;
}

export interface AssignStudentPayload {
  cohortId: string;
  studentId: string;
}

export interface AssignInstructorPayload {
  cohortId: string;
  instructorId: string;
}

export const cohortsApi = {
  create: (payload: CreateCohortPayload) =>
    apiClient<ApiResponse>("/api/v1/cohort/create", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  assignStudent: (payload: AssignStudentPayload) =>
    apiClient<ApiResponse>("/api/v1/cohort/assign", {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  assignInstructor: (payload: AssignInstructorPayload) =>
    apiClient<ApiResponse>("/api/v1/cohort/assign-instrutor", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),
};
