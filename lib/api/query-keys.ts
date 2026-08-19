// Centralized query keys factory for React Query

export const queryKeys = {
  auth: {
    all: ["auth"] as const,
    profile: () => [...queryKeys.auth.all, "profile"] as const,
  },
  users: {
    all: ["users"] as const,
    list: (filters?: Record<string, any>) => [...queryKeys.users.all, "list", filters] as const,
    detail: (id: string) => [...queryKeys.users.all, "detail", id] as const,
    activity: (id: string) => [...queryKeys.users.detail(id), "activity"] as const,
    loginHistory: (id: string) => [...queryKeys.users.detail(id), "login-history"] as const,
  },
  admin: {
    all: ["admin"] as const,
    users: (params?: Record<string, any>) => [...queryKeys.admin.all, "users", params] as const,
  },
  instructor: {
    all: ["instructor"] as const,
    profiles: () => [...queryKeys.instructor.all, "profiles"] as const,
    profile: (id: string) => [...queryKeys.instructor.all, "profile", id] as const,
  },
  leaderboard: {
    all: ["leaderboard"] as const,
  },
  announcements: {
    all: ["announcements"] as const,
  },
  cohorts: {
    all: ["cohorts"] as const,
  },
  courses: {
    all: ["courses"] as const,
    detail: (id: string) => [...queryKeys.courses.all, "detail", id] as const,
  },
  enrollment: {
    all: ["enrollment"] as const,
    enrolledCourses: () => [...queryKeys.enrollment.all, "enrolled-courses"] as const,
  },
  feeds: {
    all: ["feeds"] as const,
  },
  rooms: {
    all: ["rooms"] as const,
  },
  messages: {
    all: ["messages"] as const,
    forRoom: (roomId: string) => [...queryKeys.messages.all, roomId] as const,
  },
  lessons: {
    all: ["lessons"] as const,
    resumeLast: (courseId: string) => [...queryKeys.lessons.all, "resume-last", courseId] as const,
    content: (lessonId: string) => [...queryKeys.lessons.all, "content", lessonId] as const,
    courseContent: (courseId: string) => [...queryKeys.lessons.all, "course-content", courseId] as const,
    instructorCourseContent: (courseId: string) => [...queryKeys.lessons.all, "instructor-course-content", courseId] as const,
  },
  modules: {
    all: ["modules"] as const,
    forCourse: (courseId: string) => ["modules", "course", courseId] as const,
  },
  quiz: {
    all: ["quiz"] as const,
  },
  workshops: {
    all: ["workshops"] as const,
    detail: (id: string) => [...queryKeys.workshops.all, "detail", id] as const,
  },
  career: {
    all: ["career"] as const,
    jobs: (params?: Record<string, any>) => [...queryKeys.career.all, "jobs", params] as const,
    marketplace: (params?: Record<string, any>) => [...queryKeys.career.all, "marketplace", params] as const,
  },
  payments: {
    all: ["payments"] as const,
    list: (params?: Record<string, any>) => [...queryKeys.payments.all, "list", params] as const,
    detail: (id: string) => [...queryKeys.payments.all, "detail", id] as const,
    analytics: () => [...queryKeys.payments.all, "analytics"] as const,
    studentPurchases: (params?: Record<string, any>) =>
      [...queryKeys.payments.all, "student-purchases", params] as const,
    gateways: () => [...queryKeys.payments.all, "gateways"] as const,
    pricingPlans: (params?: Record<string, any>) =>
      [...queryKeys.payments.all, "pricing-plans", params] as const,
  },
};

