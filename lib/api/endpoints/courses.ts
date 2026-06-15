import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateCategoryPayload {
  title: string;
}

export interface CreateCoursePayload {
  title: string;
  description?: string;
  category: string;
  price?: number;
  courseLevel: string;
  thumbnail: string | File | Blob; // Can be string or File depending on form
}

export interface EditCoursePayload extends Partial<CreateCoursePayload> {
  courseId: string;
  status?: string;
}

export interface AssignInstructorCoursePayload {
  courseId: string;
  instructorId: string;
}

export const coursesApi = {
  createCategory: (payload: CreateCategoryPayload) =>
    apiClient<ApiResponse>("/api/v1/course/category", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  createCourse: (payload: CreateCoursePayload) =>
    apiClient<ApiResponse>("/api/v1/course/create", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  editCourse: (payload: EditCoursePayload) =>
    apiClient<ApiResponse>("/api/v1/course/edit", {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  assignInstructor: (payload: AssignInstructorCoursePayload) =>
    apiClient<ApiResponse>("/api/v1/course/assign", {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),
};
