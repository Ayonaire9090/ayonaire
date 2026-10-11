import { QueryClient } from "@tanstack/react-query";
import {
  SAMPLE_USERS,
  SAMPLE_COURSES,
  SAMPLE_INSTRUCTOR_PROFILES,
  SAMPLE_ENROLLMENTS,
  SAMPLE_ATTENDANCE_SESSIONS,
  SAMPLE_ATTENDANCE_SESSION_DETAIL,
  SAMPLE_ATTENDANCE_REPORT,
  SAMPLE_QUIZZES,
  SAMPLE_QUIZ_RESULTS,
  SAMPLE_ANNOUNCEMENTS,
  SAMPLE_ASSIGNMENTS,
  SAMPLE_COHORTS,
  SAMPLE_SUBMISSIONS,
  SAMPLE_PAYMENTS,
  SAMPLE_PAYMENT_ANALYTICS,
  SAMPLE_PAYMENT_GATEWAYS,
  SAMPLE_NOTIFICATIONS,
  SAMPLE_EMAIL_BROADCASTS,
  SAMPLE_SUPPORT_TICKETS,
  SAMPLE_CERTIFICATES,
  SAMPLE_TEAM_MEMBERS,
  SAMPLE_WORKSHOPS,
  SAMPLE_PRICING_PLANS,
  SAMPLE_STUDENT_PURCHASES,
} from "./sample-data";

// Pre-loads a fresh QueryClient with realistic sample data at the EXACT
// query keys the real admin pages use, matching each hook's response shape
// byte-for-byte (see lib/api/endpoints/*.ts + hooks/api/use-*.ts). Since
// data is already cached and refetching is disabled, the real hooks resolve
// instantly without ever calling the live backend - no auth token needed.
//
// Mutations (create/edit/delete/publish) are intentionally NOT intercepted -
// they still call the real API and fail with the normal error toast, since
// there's no backend session behind this preview. That's expected.
export function createSeededAdminQueryClient(): QueryClient {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

  // Users
  queryClient.setQueryData(["admin", "users"], {
    success: true,
    count: SAMPLE_USERS.length,
    users: SAMPLE_USERS,
  });

  // Courses (shared by Courses module + Assignments create form + every
  // course-picker dropdown across notifications/certificates/pricing plans,
  // each of which calls useGetCourses with a different `limit`)
  const coursesPayload = {
    success: true,
    courses: SAMPLE_COURSES,
    pagination: { total: SAMPLE_COURSES.length, page: 1, limit: 10, totalPages: 1 },
  };
  queryClient.setQueryData(["courses", "list", {}], coursesPayload);
  queryClient.setQueryData(["courses", "list", { limit: 1 }], coursesPayload);
  queryClient.setQueryData(["courses", "list", { limit: 100 }], coursesPayload);
  queryClient.setQueryData(["courses", "list", { limit: 200 }], coursesPayload);

  // Instructors + Instructor Approvals (same key)
  queryClient.setQueryData(["instructor", "profiles"], {
    success: true,
    data: SAMPLE_INSTRUCTOR_PROFILES,
  });

  // Enrollments
  queryClient.setQueryData(["enrollment", "enrolled-courses"], {
    success: true,
    data: SAMPLE_ENROLLMENTS,
  });

  // Attendance dashboard + list (two distinct keys, same underlying data)
  const attendancePayload = { success: true, sessions: SAMPLE_ATTENDANCE_SESSIONS };
  queryClient.setQueryData(["attendance", "list", { limit: 100 }], attendancePayload);
  queryClient.setQueryData(["attendance", "list", {}], attendancePayload);

  // Attendance reports
  queryClient.setQueryData(["attendance", "report", {}], {
    success: true,
    data: SAMPLE_ATTENDANCE_REPORT,
  });

  // Attendance session detail (single session roster)
  queryClient.setQueryData(["attendance", "detail", "att-1"], {
    success: true,
    data: SAMPLE_ATTENDANCE_SESSION_DETAIL,
  });

  // Quiz list (desktop table passes {page:1}, others pass {})
  const quizListPayload = {
    success: true,
    quizzes: SAMPLE_QUIZZES,
    pagination: { total: SAMPLE_QUIZZES.length, page: 1, limit: 10, totalPages: 1 },
  };
  queryClient.setQueryData(["quiz", "list", {}], quizListPayload);
  queryClient.setQueryData(["quiz", "list", { page: 1 }], quizListPayload);

  // Quiz detail + results (quiz-1 is the one linked from the preview list/nav)
  queryClient.setQueryData(["quiz", "detail", "quiz-1"], {
    success: true,
    data: SAMPLE_QUIZZES[0],
  });
  queryClient.setQueryData(["quiz", "results", "quiz-1"], {
    success: true,
    data: SAMPLE_QUIZ_RESULTS,
  });

  // Announcements
  queryClient.setQueryData(["announcements"], {
    success: true,
    data: {
      announcement: SAMPLE_ANNOUNCEMENTS,
      pagination: { total: SAMPLE_ANNOUNCEMENTS.length, page: 1, limit: 10, totalPages: 1 },
    },
  });

  // Assignments list
  queryClient.setQueryData(["assignments", "list", {}], {
    success: true,
    assignments: SAMPLE_ASSIGNMENTS,
  });

  // Cohorts (assignments create form)
  queryClient.setQueryData(["cohorts", "list", undefined], {
    success: true,
    cohorts: SAMPLE_COHORTS,
  });

  // Submissions (grading + submissions pages share this key)
  queryClient.setQueryData(["assignments", "all-submissions", {}], {
    success: true,
    submissions: SAMPLE_SUBMISSIONS,
    pagination: { total: SAMPLE_SUBMISSIONS.length, page: 1, limit: 20, totalPages: 1 },
  });

  // Payments list (shared by Orders list + Payments overview)
  queryClient.setQueryData(["payments", "list", {}], {
    success: true,
    data: {
      data: SAMPLE_PAYMENTS,
      total: SAMPLE_PAYMENTS.length,
      page: 1,
      limit: 20,
    },
  });

  // Payment analytics
  queryClient.setQueryData(["payments", "analytics"], {
    success: true,
    data: SAMPLE_PAYMENT_ANALYTICS,
  });

  // Payment gateways
  queryClient.setQueryData(["payments", "gateways"], {
    success: true,
    data: SAMPLE_PAYMENT_GATEWAYS,
  });

  // Payments list - extra limit/sort variants used by the dashboard-home
  // widgets and analytics cards (each is a distinct cache key)
  const paymentsListPayload = {
    success: true,
    data: { data: SAMPLE_PAYMENTS, total: SAMPLE_PAYMENTS.length, page: 1, limit: 20 },
  };
  queryClient.setQueryData(["payments", "list", { limit: 10 }], paymentsListPayload);
  queryClient.setQueryData(["payments", "list", { limit: 200 }], paymentsListPayload);
  queryClient.setQueryData(
    ["payments", "list", { limit: 3, sortBy: "createdAt", order: "desc" }],
    paymentsListPayload,
  );

  // Single order detail (Order detail page, keyed by payment _id)
  for (const payment of SAMPLE_PAYMENTS) {
    queryClient.setQueryData(["payments", "detail", payment._id], {
      success: true,
      data: { ...payment, notes: [] },
    });
  }

  // Pricing plans
  queryClient.setQueryData(["payments", "pricing-plans", undefined], {
    success: true,
    data: SAMPLE_PRICING_PLANS,
  });

  // Student purchases
  queryClient.setQueryData(["payments", "student-purchases", undefined], {
    success: true,
    purchases: SAMPLE_STUDENT_PURCHASES,
  });

  // Enrollments (admin-wide listing) - dashboard-home widgets + Analytics
  // page each request a different `limit`
  const enrollmentsPayload = {
    success: true,
    enrollments: SAMPLE_ENROLLMENTS,
    pagination: { total: SAMPLE_ENROLLMENTS.length, page: 1, limit: 20, totalPages: 1 },
  };
  for (const limit of [10, 20, 200, 500]) {
    queryClient.setQueryData(["enrollment", "admin-all", { limit }], enrollmentsPayload);
  }
  queryClient.setQueryData(["enrollment", "admin-all", {}], enrollmentsPayload);

  // Notifications (list, recurring templates, email broadcast history)
  queryClient.setQueryData(["notifications", "list", {}], {
    success: true,
    notifications: SAMPLE_NOTIFICATIONS,
  });
  queryClient.setQueryData(
    ["notifications", "list", { isRecurringTemplate: "true" }],
    {
      success: true,
      notifications: SAMPLE_NOTIFICATIONS.filter((n) => n.isRecurringTemplate),
    },
  );
  queryClient.setQueryData(["notifications", "email-history"], {
    success: true,
    notifications: SAMPLE_EMAIL_BROADCASTS,
  });

  // Support tickets (list + per-ticket detail so the ticket drawer works)
  const supportListPayload = { success: true, tickets: SAMPLE_SUPPORT_TICKETS };
  queryClient.setQueryData(["support", "list", { limit: 100 }], supportListPayload);
  queryClient.setQueryData(["support", "list", { limit: 200 }], supportListPayload);
  for (const ticket of SAMPLE_SUPPORT_TICKETS) {
    queryClient.setQueryData(["support", "detail", ticket._id], {
      success: true,
      data: ticket,
    });
  }

  // Certificates
  queryClient.setQueryData(["certificates", "list", { limit: 200 }], {
    success: true,
    certificates: SAMPLE_CERTIFICATES,
  });

  // Team members
  queryClient.setQueryData(["team"], {
    success: true,
    data: SAMPLE_TEAM_MEMBERS,
  });

  // Workshops (System Health card on the dashboard home)
  queryClient.setQueryData(["workshops", "list", { page: 1, limit: 200 }], {
    success: true,
    data: {
      workshops: SAMPLE_WORKSHOPS,
      pagination: { total: SAMPLE_WORKSHOPS.length, page: 1, limit: 200, totalPages: 1 },
    },
  });

  return queryClient;
}
