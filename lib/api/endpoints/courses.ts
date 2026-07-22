import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Verified directly against backend source (backend/src/models/course.model.ts,
// backend/src/types/course.types.ts) on 2026-07-16 - status/courseLevel are
// exactly these capitalized values, there is no "published" status, and
// enrollmentCount (not "enrollments") is what /course/all actually returns.
export interface Course {
  _id: string;
  title: string;
  description?: string;
  category: string | { _id: string; title: string };
  instructor?: string | { _id: string; name: string; email?: string };
  price?: number;
  courseLevel?: "Beginner" | "Intermediate" | "Advanced";
  status?: "Draft" | "Active" | "Archived";
  thumbnail?: { url: string; publicId: string };
  enrollmentCount?: number;
  completionCount?: number;
  completionCertificate?: boolean;
  createdAt?: string;
}

export interface CourseCategory {
  _id: string;
  title: string;
}

export interface CreateCategoryPayload {
  title: string;
}

export interface CreateCoursePayload {
  title: string;
  description?: string;
  category: string; // CourseCategory _id
  price?: number;
  courseLevel: "Beginner" | "Intermediate" | "Advanced";
  status?: "Draft" | "Active" | "Archived";
  thumbnail: File;
  introVideo?: File;
  instructorId?: string;
  completionCertificate?: boolean;
}

export interface EditCoursePayload extends Partial<Omit<CreateCoursePayload, "thumbnail">> {
  courseId: string;
  thumbnail?: File;
}

export interface AssignInstructorCoursePayload {
  courseId: string;
  instructorId: string;
}

export interface GetCoursesParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  category?: string;
  instructor?: string;
}

function buildCourseFormData(
  payload: Partial<CreateCoursePayload>,
): FormData {
  const formData = new FormData();
  if (payload.title !== undefined) formData.append("title", payload.title);
  if (payload.description !== undefined)
    formData.append("description", payload.description);
  if (payload.category !== undefined)
    formData.append("category", payload.category);
  if (payload.price !== undefined) formData.append("price", String(payload.price));
  if (payload.courseLevel !== undefined)
    formData.append("courseLevel", payload.courseLevel);
  if (payload.status !== undefined) formData.append("status", payload.status);
  if (payload.instructorId !== undefined)
    formData.append("instructorId", payload.instructorId);
  if (payload.completionCertificate !== undefined)
    formData.append("completionCertificate", String(payload.completionCertificate));
  if (payload.thumbnail) formData.append("thumbnail", payload.thumbnail);
  if (payload.introVideo) formData.append("introVideo", payload.introVideo);
  return formData;
}

export const coursesApi = {
  createCategory: (payload: CreateCategoryPayload) =>
    apiClient<ApiResponse>("/api/v1/course/cat", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getCategories: () =>
    apiClient<ApiResponse<CourseCategory[]>>("/api/v1/course/cat", {
      method: "GET",
      requireAuth: true,
    }),

  createCourse: (payload: CreateCoursePayload) =>
    apiClient<ApiResponse<Course>>("/api/v1/course/create", {
      method: "POST",
      body: buildCourseFormData(payload),
      requireAuth: true,
    }),

  editCourse: ({ courseId, ...payload }: EditCoursePayload) =>
    apiClient<ApiResponse<Course>>(`/api/v1/course/edit?courseId=${courseId}`, {
      method: "PUT",
      body: buildCourseFormData(payload),
      requireAuth: true,
    }),

  assignInstructor: ({ courseId, instructorId }: AssignInstructorCoursePayload) =>
    apiClient<ApiResponse>(
      `/api/v1/course/assign?courseId=${courseId}&instructorId=${instructorId}`,
      {
        method: "PUT",
        requireAuth: true,
      },
    ),

  // Backend spreads { success, courses, pagination } directly at the
  // response root (res.json({ success, ...data })) rather than nesting
  // under "data", so `courses`/`pagination` are top-level, not response.data.
  getAll: (params: GetCoursesParams = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) query.append(key, String(value));
    });
    const qs = query.toString() ? `?${query.toString()}` : "";

    return apiClient<
      ApiResponse & {
        courses: Course[];
        pagination: { total: number; page: number; limit: number; totalPages: number };
      }
    >(`/api/v1/course/all${qs}`, { method: "GET", requireAuth: true });
  },

  getById: (courseId: string) =>
    apiClient<ApiResponse<Course>>(`/api/v1/course/${courseId}`, {
      method: "GET",
      requireAuth: true,
    }),

  deleteCourse: (courseId: string) =>
    apiClient<ApiResponse>(`/api/v1/course/${courseId}`, {
      method: "DELETE",
      requireAuth: true,
    }),

  togglePublish: (courseId: string) =>
    apiClient<ApiResponse<Course>>(`/api/v1/course/${courseId}/publish`, {
      method: "PUT",
      requireAuth: true,
    }),
};
