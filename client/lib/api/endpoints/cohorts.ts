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
  userId: string;
}

export interface AssignInstructorPayload {
  cohortId: string;
  instructorId: string;
}

export interface Cohort {
  _id: string;
  name: string;
  description?: string;
  course: string | { _id: string; title: string };
  isActive?: boolean;
  createdAt?: string;
}

export const cohortsApi = {
  create: (payload: CreateCohortPayload) =>
    apiClient<ApiResponse>("/api/v1/cohort/create", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  // Path/field name corrected against backend/src/routes/cohort.route.ts and
  // cohort.controller.ts - the real route is POST /assign-student (was
  // PUT /assign) and the body key is `userId` (was `studentId`).
  assignStudent: (payload: AssignStudentPayload) =>
    apiClient<ApiResponse>("/api/v1/cohort/assign-student", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  assignInstructor: (payload: AssignInstructorPayload) =>
    apiClient<ApiResponse>("/api/v1/cohort/assign-instrutor", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getAll: (course?: string) => {
    const qs = course ? `?course=${course}` : "";
    return apiClient<ApiResponse & { cohorts: Cohort[] }>(`/api/v1/cohort${qs}`, {
      method: "GET",
      requireAuth: true,
    });
  },

  getById: (cohortId: string) =>
    apiClient<ApiResponse<Cohort>>(`/api/v1/cohort/${cohortId}`, {
      method: "GET",
      requireAuth: true,
    }),
};
