import { apiClient } from "../client";
import { ApiResponse } from "../types";
import { UserProfile } from "../types";

export interface Enrollment {
  _id: string;
  course:
    | string
    | {
        _id: string;
        title: string;
        thumbnail?: { url: string; publicId: string };
        status?: string;
        instructor?: { name: string } | null;
      };
  student: string | { _id: string; name: string; email?: string };
  status: string;
  comletedLessons?: string[];
  progress: number;
  completed: boolean;
  lastLesson?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EnrolledCourseDetail {
  _id: string;
  title: string;
  description?: string;
  thumbnail?: { url: string; publicId: string };
  category?: string;
  instructor?: { id: string; name: string } | null;
  price: number;
  courseLevel: string;
  status: string;
  progress: number;
  completed: boolean;
  completedLessons: string[];
  lastLesson: string | null;
  enrolledAt: string;
}

export interface GetAllEnrollmentsParams {
  course?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export interface EnrollStudentsPayload {
  courseId: string;
  studentIds: string[];
}

export interface GetAssignableStudentsParams {
  page?: number;
  limit?: number;
  search?: string;
}

export const enrollmentApi = {
  getEnrolledCourses: () =>
    apiClient<ApiResponse<Enrollment[]>>("/api/v1/enrollment/enrolled-courses", {
      method: "GET",
      requireAuth: true,
    }),

  getCompletedCourses: () =>
    apiClient<ApiResponse<Enrollment[]>>("/api/v1/enrollment/completed-courses", {
      method: "GET",
      requireAuth: true,
    }),

  getCourseDetail: (courseId: string) =>
    apiClient<ApiResponse<EnrolledCourseDetail>>(
      `/api/v1/enrollment/course/${courseId}`,
      {
        method: "GET",
        requireAuth: true,
      },
    ),

  // Admin-only listing across all students/courses (restrictTo("admin") on
  // the backend route).
  getAllEnrollments: (params: GetAllEnrollmentsParams = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) query.append(key, String(value));
    });
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<
      ApiResponse & {
        enrollments: Enrollment[];
        pagination: { total: number; page: number; limit: number; totalPages: number };
      }
    >(`/api/v1/enrollment/admin/all${qs}`, { method: "GET", requireAuth: true });
  },

  getAssignableStudents: (params: GetAssignableStudentsParams = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "") query.append(key, String(value));
    });
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<
      ApiResponse & {
        students: UserProfile[];
        pagination: { total: number; page: number; limit: number; totalPages: number };
      }
    >(`/api/v1/enrollment/admin/students${qs}`, {
      method: "GET",
      requireAuth: true,
    }).catch(async (error) => {
      if (error?.status !== 404) throw error;

      const fallback = await apiClient<
        ApiResponse<UserProfile[]> & {
          users?: UserProfile[];
          pagination?: { total: number; page: number; limit: number; totalPages: number };
        }
      >(`/api/v1/auth/non-admin-users${qs}`, {
        method: "GET",
        requireAuth: true,
      });
      const students = fallback.users ?? fallback.data ?? [];

      return {
        ...fallback,
        students,
        pagination: fallback.pagination ?? {
          total: students.length,
          page: params.page ?? 1,
          limit: params.limit ?? students.length,
          totalPages: 1,
        },
      };
    });
  },

  enrollStudents: (payload: EnrollStudentsPayload) =>
    apiClient<ApiResponse>("/api/v1/enrollment/admin/enroll", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  enrollStudentsCsv: (courseId: string, file: File) => {
    const formData = new FormData();
    formData.append("courseId", courseId);
    formData.append("file", file);
    return apiClient<ApiResponse>("/api/v1/enrollment/admin/enroll-csv", {
      method: "POST",
      body: formData,
      requireAuth: true,
    });
  },
};
