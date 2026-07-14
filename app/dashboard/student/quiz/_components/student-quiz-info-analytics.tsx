"use client";

import { StudentQuizInfoAnalyticsCard } from "./student-quiz-info-analytics-card";
import { isEnrolledQuiz } from "./student-quiz-data";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";

// Only "Total Quizzes" has a real backend source. Drafts/Published/Closed/
// Archived have no per-quiz workflow-status breakdown available yet, and
// day-over-day rate has no historical source at all, so both fall back to
// "-" rather than guessed values.
export const StudentQuizInfoAnalytics = () => {
  const { data: quizzesData } = useGetQuizzes();
  const { data: enrollmentData } = useGetEnrolledCourses();

  const enrolledCourseIds = new Set(
    (enrollmentData?.enrollments ?? [])
      .map((enrollment) =>
        typeof enrollment.course === "string" ? enrollment.course : enrollment.course?._id,
      )
      .filter((id): id is string => !!id),
  );

  const totalQuizzes = (quizzesData?.data ?? []).filter((quiz) =>
    isEnrolledQuiz(quiz, enrolledCourseIds),
  ).length;

  const STATS_DATA = [
    {
      heading: "Total Quizzes",
      title: totalQuizzes.toLocaleString(),
      rate: "-",
      statusBadge: { label: "Info", variant: "info" as const },
    },
    {
      heading: "Drafts",
      title: "-",
      rate: "-",
      statusBadge: { label: "Info", variant: "info" as const },
    },
    {
      heading: "Published",
      title: "-",
      rate: "-",
      statusBadge: { label: "Normal", variant: "normal" as const },
    },
    {
      heading: "Closed",
      title: "-",
      rate: "-",
      statusBadge: { label: "Normal", variant: "normal" as const },
    },
    {
      heading: "Archived",
      title: "-",
      rate: "-",
      statusBadge: { label: "Normal", variant: "normal" as const },
    },
  ];

  return (
    <div className="flex overflow-x-auto gap-4 w-full -mt-2 hide-scrollbar">
      {STATS_DATA.map((stat, i) => (
        <StudentQuizInfoAnalyticsCard key={i} {...stat} />
      ))}
    </div>
  );
};
