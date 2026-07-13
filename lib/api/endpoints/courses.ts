import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Shape returned by the backend for a single course.
// NOTE: field names are a best-effort guess based on `CreateCoursePayload` below
// and the conventions used by `workshopsApi`/`instructorApi`. Confirm against the
// real `/api/v1/course/all` response and adjust once the backend team confirms it.
export interface Course {
  _id: string;
  title: string;
  description?: string;
  category: string | { _id: string; title: string };
  instructor?: string | { _id: string; name: string };
  price?: number;
  courseLevel?: string;
  status?: string;
  thumbnail?: string;
  enrollmentCount?: number;
  createdAt?: string;
  // Unconfirmed whether the backend exposes a public-page slug for courses -
  // if present, dashboard "view course" links can use it; otherwise fall
  // back to the course id.
  slug?: string;
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

  // NOTE: no list/detail endpoint existed before this change — path guessed to
  // follow the same `/api/v1/course/<action>` convention as create/edit/assign.
  // Confirm with the backend team and update if the real path differs.
  getAll: (page?: number, limit?: number) => {
    const queryParams = new URLSearchParams();
    if (page) queryParams.append("page", page.toString());
    if (limit) queryParams.append("limit", limit.toString());

    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

    return apiClient<ApiResponse<Course[]>>(`/api/v1/course/all${queryString}`, {
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
