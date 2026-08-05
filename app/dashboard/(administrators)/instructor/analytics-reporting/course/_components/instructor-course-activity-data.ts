import { useMemo } from "react";
import { useQueries } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth.store";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";
import { useGetAllSubmissions } from "@/hooks/api/use-assignments";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { quizApi } from "@/lib/api/endpoints/quiz";

export type ActivityStatus = "Read" | "Unread";
export type ActivityStatusColor = "blue" | "orange" | "red";

export interface ActivityEvent {
  id: string;
  course: string;
  notification: string;
  student: string;
  date: string;
  time: string;
  status: ActivityStatus;
  statusColor: ActivityStatusColor;
  at: number; // epoch ms, for sorting
}

function formatDateTime(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    time: d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
  };
}

// There's no per-instructor "activity feed" endpoint, so this merges three
// real sources scoped to this instructor's courses: new enrollments,
// assignment submissions, and quiz completions. getAllSubmissions and
// enrolled-courses have no instructor-scoping param on the backend (same
// unconfirmed assumption already made in instructor-student-data.ts), so
// both are filtered down client-side by this instructor's course IDs.
export function useInstructorCourseActivity(limit = 20) {
  const user = useAuthStore((state) => state.user);
  const instructorId = user?._id;

  const coursesQuery = useGetCourses({ instructor: instructorId, limit: 200 });
  const enrollmentsQuery = useGetEnrolledCourses();
  const submissionsQuery = useGetAllSubmissions({ limit: 100 });
  const quizzesQuery = useGetQuizzes({ createdBy: instructorId, limit: 20 });

  const courses = coursesQuery.data?.courses ?? [];
  const courseIds = useMemo(() => new Set(courses.map((c) => c._id)), [courses]);
  const courseTitleById = useMemo(
    () => new Map(courses.map((c) => [c._id, c.title])),
    [courses],
  );
  const quizzes = quizzesQuery.data?.quizzes ?? [];

  const quizResultsQueries = useQueries({
    queries: quizzes.map((quiz) => ({
      queryKey: ["quiz-results-for-activity", quiz._id],
      queryFn: () => quizApi.getResults(quiz._id),
      enabled: !!quiz._id,
    })),
  });

  const events: ActivityEvent[] = useMemo(() => {
    const list: ActivityEvent[] = [];

    (enrollmentsQuery.data?.data ?? []).forEach((enrollment) => {
      const courseId =
        typeof enrollment.course === "string" ? enrollment.course : enrollment.course?._id;
      if (!courseId || !courseIds.has(courseId)) return;
      const student =
        typeof enrollment.student === "string" ? null : enrollment.student;
      const { date, time } = formatDateTime(enrollment.createdAt);
      list.push({
        id: `enrollment-${enrollment._id}`,
        course: courseTitleById.get(courseId) ?? "Unknown Course",
        notification: "New Student Enrolled",
        student: student?.name ?? "Unknown Student",
        date,
        time,
        status: "Read",
        statusColor: "blue",
        at: new Date(enrollment.createdAt).getTime(),
      });
    });

    (submissionsQuery.data?.submissions ?? []).forEach((submission) => {
      const courseId = submission.course?._id;
      if (!courseId || !courseIds.has(courseId)) return;
      const { date, time } = formatDateTime(submission.createdAt);
      list.push({
        id: `submission-${submission._id}`,
        course: courseTitleById.get(courseId) ?? submission.course?.title ?? "Unknown Course",
        notification: "Assignment Submitted",
        student: submission.student?.name ?? "Unknown Student",
        date,
        time,
        status: submission.status === "graded" ? "Read" : "Unread",
        statusColor: "orange",
        at: new Date(submission.createdAt).getTime(),
      });
    });

    quizResultsQueries.forEach((result, index) => {
      const quiz = quizzes[index];
      const courseId = quiz?.course?._id;
      const attempts = result.data?.data?.attempts ?? [];
      attempts
        .filter((attempt) => attempt.completed && attempt.submittedAt)
        .forEach((attempt, attemptIndex) => {
          if (!courseId || !courseIds.has(courseId)) return;
          const { date, time } = formatDateTime(attempt.submittedAt as string);
          list.push({
            id: `quiz-${quiz._id}-${attemptIndex}`,
            course: courseTitleById.get(courseId) ?? quiz.course?.title ?? "Unknown Course",
            notification: `Quiz Completed (${attempt.score}%)`,
            student: attempt.student.name,
            date,
            time,
            status: "Unread",
            statusColor: "red",
            at: new Date(attempt.submittedAt as string).getTime(),
          });
        });
    });

    return list.sort((a, b) => b.at - a.at).slice(0, limit);
  }, [
    enrollmentsQuery.data,
    submissionsQuery.data,
    quizResultsQueries,
    quizzes,
    courseIds,
    courseTitleById,
    limit,
  ]);

  return {
    events,
    isLoading:
      coursesQuery.isLoading ||
      enrollmentsQuery.isLoading ||
      submissionsQuery.isLoading ||
      quizzesQuery.isLoading,
  };
}
