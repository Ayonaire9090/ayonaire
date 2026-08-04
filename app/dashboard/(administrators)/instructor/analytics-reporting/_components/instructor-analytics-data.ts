import { useMemo } from "react";
import { useQueries } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth.store";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetAllPayments } from "@/hooks/api/use-payments";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";
import { Course } from "@/lib/api/endpoints/courses";
import { Payment } from "@/lib/api/endpoints/payments";
import { quizApi } from "@/lib/api/endpoints/quiz";

function getPaymentCourseId(payment: Payment) {
  return typeof payment.course === "string" ? payment.course : payment.course?._id;
}

export interface InstructorCourseAnalytics {
  course: Course;
  enrollmentCount: number;
  completionCount: number;
  completionRate: number; // 0-100
  avgQuizScore: number | null;
  revenue: number;
}

// There is no dedicated instructor-analytics backend endpoint (same as the
// admin analytics page - see analytics-course-breakdown.tsx), so this
// composes already-working hooks and derives every figure client-side.
// Payments/quizzes have no "instructor" query param, so both are fetched
// with a high limit and filtered down to this instructor's courses.
export function useInstructorAnalytics() {
  const user = useAuthStore((state) => state.user);
  const instructorId = user?._id;

  const coursesQuery = useGetCourses({ instructor: instructorId, limit: 200 });
  const paymentsQuery = useGetAllPayments({ limit: 500 });
  const quizzesQuery = useGetQuizzes({ createdBy: instructorId, limit: 200 });

  const courses = coursesQuery.data?.courses ?? [];
  const courseIds = useMemo(() => new Set(courses.map((c) => c._id)), [courses]);
  const quizzes = quizzesQuery.data?.quizzes ?? [];

  const payments = useMemo(
    () =>
      (paymentsQuery.data?.data?.data ?? []).filter((payment) => {
        const courseId = getPaymentCourseId(payment);
        return payment.status === "success" && !!courseId && courseIds.has(courseId);
      }),
    [paymentsQuery.data, courseIds],
  );

  const perCourse: InstructorCourseAnalytics[] = useMemo(
    () =>
      courses.map((course) => {
        const enrollmentCount = course.enrollmentCount ?? 0;
        const completionCount = course.completionCount ?? 0;
        const scoredQuizzes = quizzes.filter(
          (quiz) => quiz.course?._id === course._id && quiz.avgScore != null,
        );
        const avgQuizScore = scoredQuizzes.length
          ? scoredQuizzes.reduce((sum, quiz) => sum + (quiz.avgScore ?? 0), 0) /
            scoredQuizzes.length
          : null;
        const revenue = payments
          .filter((payment) => getPaymentCourseId(payment) === course._id)
          .reduce((sum, payment) => sum + (payment.amount ?? 0), 0);

        return {
          course,
          enrollmentCount,
          completionCount,
          completionRate:
            enrollmentCount > 0 ? Math.round((completionCount / enrollmentCount) * 100) : 0,
          avgQuizScore,
          revenue,
        };
      }),
    [courses, quizzes, payments],
  );

  const totalStudents = perCourse.reduce((sum, c) => sum + c.enrollmentCount, 0);
  const totalCompletions = perCourse.reduce((sum, c) => sum + c.completionCount, 0);
  const totalRevenue = payments.reduce((sum, payment) => sum + (payment.amount ?? 0), 0);
  const activeCourses = courses.filter((course) => course.status === "Active").length;
  const scoredQuizzes = quizzes.filter((quiz) => quiz.avgScore != null);
  const avgQuizScore = scoredQuizzes.length
    ? scoredQuizzes.reduce((sum, quiz) => sum + (quiz.avgScore ?? 0), 0) / scoredQuizzes.length
    : null;

  return {
    courses,
    perCourse,
    payments,
    quizzes,
    totalStudents,
    totalCompletions,
    completionRate: totalStudents > 0 ? Math.round((totalCompletions / totalStudents) * 100) : 0,
    totalRevenue,
    activeCourses,
    avgQuizScore,
    isLoading: coursesQuery.isLoading || paymentsQuery.isLoading || quizzesQuery.isLoading,
    isError: coursesQuery.isError || paymentsQuery.isError || quizzesQuery.isError,
  };
}

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getTrailingMonthLabels(months: number) {
  const now = new Date();
  const labels: string[] = [];
  for (let i = months - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    labels.push(MONTH_LABELS[d.getMonth()]);
  }
  return labels;
}

// How many whole calendar months ago `dateStr` falls, relative to now (0 =
// this month). Negative/out-of-range results mean it's outside the window.
function monthsAgo(dateStr: string) {
  const now = new Date();
  const date = new Date(dateStr);
  return (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
}

// Buckets this instructor's successful payments into the trailing N months
// (oldest first) using paidAt/createdAt - there is no monthlyRevenue field
// scoped to a single instructor (PaymentAnalytics.monthlyRevenue is
// platform-wide), so it's derived from the raw payment rows instead.
export function getMonthlyRevenue(payments: Payment[], months = 6) {
  const buckets = getTrailingMonthLabels(months).map((name) => ({ name, value: 0 }));

  payments.forEach((payment) => {
    const dateStr = payment.paidAt ?? payment.createdAt;
    if (!dateStr) return;
    const ago = monthsAgo(dateStr);
    if (ago < 0 || ago >= months) return;
    buckets[months - 1 - ago].value += payment.amount ?? 0;
  });

  return buckets;
}

// Buckets new enrollments into this instructor's courses by month - the
// closest real proxy for "engagement trend" available, since there's no
// daily/weekly activity event log to derive engagement from directly.
export function useInstructorEngagementTrend(months = 6) {
  const user = useAuthStore((state) => state.user);
  const instructorId = user?._id;

  const coursesQuery = useGetCourses({ instructor: instructorId, limit: 200 });
  const enrollmentsQuery = useGetEnrolledCourses();

  const courseIds = useMemo(
    () => new Set((coursesQuery.data?.courses ?? []).map((c) => c._id)),
    [coursesQuery.data],
  );

  const trend = useMemo(() => {
    const buckets = getTrailingMonthLabels(months).map((name) => ({ name, value: 0 }));
    (enrollmentsQuery.data?.data ?? []).forEach((enrollment) => {
      const courseId =
        typeof enrollment.course === "string" ? enrollment.course : enrollment.course?._id;
      if (!courseId || !courseIds.has(courseId) || !enrollment.createdAt) return;
      const ago = monthsAgo(enrollment.createdAt);
      if (ago < 0 || ago >= months) return;
      buckets[months - 1 - ago].value += 1;
    });
    return buckets;
  }, [enrollmentsQuery.data, courseIds, months]);

  return {
    trend,
    isLoading: coursesQuery.isLoading || enrollmentsQuery.isLoading,
  };
}

// Buckets this instructor's quiz attempts by completion month and averages
// the score per bucket - there's no per-instructor score-trend endpoint, so
// this re-fetches per-quiz results (same pattern as the course activity
// feed in analytics-reporting/course) and derives the trend from raw
// attempts client-side.
export function useInstructorQuizScoreTrend(months = 6) {
  const user = useAuthStore((state) => state.user);
  const instructorId = user?._id;

  const quizzesQuery = useGetQuizzes({ createdBy: instructorId, limit: 200 });
  const quizzes = quizzesQuery.data?.quizzes ?? [];

  const quizResultsQueries = useQueries({
    queries: quizzes.map((quiz) => ({
      queryKey: ["quiz-results-for-trend", quiz._id],
      queryFn: () => quizApi.getResults(quiz._id),
      enabled: !!quiz._id,
    })),
  });

  const trend = useMemo(() => {
    const labels = getTrailingMonthLabels(months);
    const sums = new Array(months).fill(0);
    const counts = new Array(months).fill(0);

    quizResultsQueries.forEach((result) => {
      (result.data?.data?.attempts ?? []).forEach((attempt) => {
        if (!attempt.completed || !attempt.submittedAt) return;
        const ago = monthsAgo(attempt.submittedAt);
        if (ago < 0 || ago >= months) return;
        const index = months - 1 - ago;
        sums[index] += attempt.score ?? 0;
        counts[index] += 1;
      });
    });

    return labels.map((name, i) => ({
      name,
      value: counts[i] > 0 ? Math.round(sums[i] / counts[i]) : 0,
    }));
  }, [quizResultsQueries, months]);

  return {
    trend,
    isLoading: quizzesQuery.isLoading || quizResultsQueries.some((q) => q.isLoading),
  };
}
