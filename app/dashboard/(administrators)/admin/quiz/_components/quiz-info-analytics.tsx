import { QuizInfoAnalyticsCard } from "./quiz-info-analytics-card";

const STATS_DATA = [
  {
    heading: "Total Quizzes",
    title: "12",
    rate: "+2 vs yesterday ↑",
    statusBadge: { label: "Info", variant: "info" as const },
  },
  {
    heading: "Drafts",
    title: "3",
    rate: "steady →",
    statusBadge: { label: "Info", variant: "info" as const },
  },
  {
    heading: "Published",
    title: "4",
    rate: "-4% ↓",
    statusBadge: { label: "Normal", variant: "normal" as const },
  },
  {
    heading: "Closed",
    title: "3",
    rate: "+1% ↑",
    statusBadge: { label: "Normal", variant: "normal" as const },
  },
  {
    heading: "Archived",
    title: "2",
    rate: "+1% ↑",
    statusBadge: { label: "Normal", variant: "normal" as const },
  },
];

export const QuizInfoAnalytics = () => {
  return (
    <div className="flex overflow-x-auto gap-4 w-full -mt-2 hide-scrollbar">
      {STATS_DATA.map((stat, i) => (
        <QuizInfoAnalyticsCard key={i} {...stat} />
      ))}
    </div>
  );
};
