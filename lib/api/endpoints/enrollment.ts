import { apiClient } from "../client";
import { ApiResponse } from "../types";

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
        thumbnail?: { url: string; publicId: string };
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
  // Path corrected 2026-07-14 against the live Swagger spec - real base is
  // /api/v1/enrollment (not /api/v1/enroll), and there's a clean, non-typo
  // path (enrolled-courses) alongside a deprecated "enrolled-coures" one;
  // using the non-deprecated one.
  //
  // Originally written for a student's own "my enrolled courses" view.
  // Reused here for the Admin Enrollments page on the assumption an
  // admin-role token returns all platform enrollments rather than just the
  // caller's own - unconfirmed, needs backend verification. If it turns out
  // to be scoped to the caller, this page will need a genuinely separate
  // "list all enrollments" endpoint.
  //
  // Response shape confirmed live 2026-07-14: { success, data: [...] } -
  // not { success, count, enrollments: [...] } as previously guessed.
  getEnrolledCourses: () =>
    apiClient<ApiResponse<Enrollment[]>>(
      "/api/v1/enrollment/enrolled-courses",
      {
        method: "GET",
        requireAuth: true,
      }
    ),
};
