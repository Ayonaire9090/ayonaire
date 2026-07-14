import { apiClient } from "../client";
import { PaginatedResponse } from "../types";

// NOTE: course/student are typed loosely since it's unconfirmed whether the
// backend returns populated objects or bare ObjectId strings - handle both.
export interface Enrollment {
  _id: string;
  course:
    | string
    | {
        _id: string;
        title: string;
        description?: string;
        thumbnail?: string;
        slug?: string;
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

export const enrollmentApi = {
  // NOTE: named "enrolled-coures" (their typo, kept verbatim) and originally
  // written for a student's own "my enrolled courses" view. Reused here for
  // the Admin Enrollments page on the assumption an admin-role token returns
  // all platform enrollments rather than just the caller's own - unconfirmed,
  // needs backend verification. If it turns out to be scoped to the caller,
  // this page will need a genuinely separate "list all enrollments" endpoint.
  getEnrolledCourses: () =>
    apiClient<{ success: boolean; count: number; enrollments: Enrollment[] }>(
      "/api/v1/enroll/enrolled-coures",
      {
        method: "GET",
        requireAuth: true,
      }
    ),
};
