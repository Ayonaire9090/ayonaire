import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Confirmed 2026-07-14 against the live Swagger spec
// (https://ayonaire.onrender.com/api-docs/). Corrections from the earlier
// guess: thumbnail is an {url, publicId} object, not a plain string; there's
// no enrollmentCount field (use enrollments.length or completionCount
// instead); status is lowercase draft/published/archived only (no
// pending/private); category/instructor are plain ID strings per the
// schema, though still handled defensively in case a populated response
// comes back; there is no slug field.
export interface Course {
  _id: string;
  title: string;
  description?: string;
  category: string | { _id: string; title: string };
  instructor?: string | { _id: string; name: string };
  price?: number;
  courseLevel?: "beginner" | "intermediate" | "advanced";
  status?: "draft" | "published" | "archived";
  thumbnail?: { url: string; publicId: string };
  enrollments?: string[];
  completionCount?: number;
  createdAt?: string;
}

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
    apiClient<ApiResponse>("/api/v1/course/cat", {
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

  // Path corrected 2026-07-14: real route is GET /api/v1/course (no "/all"
  // suffix, that was a guess).
  getAll: (page?: number, limit?: number) => {
    const queryParams = new URLSearchParams();
    if (page) queryParams.append("page", page.toString());
    if (limit) queryParams.append("limit", limit.toString());

    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

    return apiClient<ApiResponse<Course[]>>(`/api/v1/course${queryString}`, {
      method: "GET",
      requireAuth: true,
    });
  },

  getById: (courseId: string) =>
    apiClient<ApiResponse<Course>>(`/api/v1/course/${courseId}`, {
      method: "GET",
      requireAuth: true,
    }),
};
