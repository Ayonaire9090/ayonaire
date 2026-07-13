"use client";

import { QuizInfoAnalyticsCard } from "./quiz-info-analytics-card";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { mapQuizRecordToQuiz } from "./quiz-data";

export const QuizInfoAnalytics = () => {
  const { data } = useGetQuizzes();
  const quizzes = (data?.data ?? []).map(mapQuizRecordToQuiz);

  const count = (status: string) =>
    quizzes.filter((q) => q.status === status).length;

  // "rate" (day-over-day change) has no known backend source yet, so it's
  // omitted rather than guessed.
  const statsData = [
    {
      heading: "Total Quizzes",
      title: String(quizzes.length),
      statusBadge: { label: "Info", variant: "info" as const },
    },
    {
      heading: "Drafts",
      title: String(count("Draft")),
      statusBadge: { label: "Info", variant: "info" as const },
    },
    {
      heading: "Published",
      title: String(count("Published")),
      statusBadge: { label: "Normal", variant: "normal" as const },
    },
    {
      heading: "Closed",
      title: String(count("Closed")),
      statusBadge: { label: "Normal", variant: "normal" as const },
    },
    {
      heading: "Archived",
      title: String(count("Archived")),
      statusBadge: { label: "Normal", variant: "normal" as const },
    },
  ];

  return (
    <div className="flex overflow-x-auto gap-4 w-full -mt-2 hide-scrollbar">
      {statsData.map((stat, i) => (
        <QuizInfoAnalyticsCard key={i} {...stat} />
      ))}
    </div>
  );
};
