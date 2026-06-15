import { apiClient } from "../client";
import { PaginatedResponse } from "../types";

export interface Enrollment {
  _id: string;
  course: string;
  student: string;
  status: string;
  comletedLessons?: string[];
  progress: number;
  completed: boolean;
  lastLesson?: string;
  createdAt: string;
  updatedAt: string;
}

export const enrollmentApi = {
  getEnrolledCourses: () =>
    apiClient<{ success: boolean; count: number; enrollments: Enrollment[] }>(
      "/api/v1/enroll/enrolled-coures",
      {
        method: "GET",
        requireAuth: true,
      }
    ),
};
