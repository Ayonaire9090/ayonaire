import { apiClient } from "../client";
import { ApiResponse } from "../types";

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
};
