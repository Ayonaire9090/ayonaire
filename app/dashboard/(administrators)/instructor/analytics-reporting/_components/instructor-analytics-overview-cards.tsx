"use client";

import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  BookOpen,
  Star,
  CircleHelp,
  BarChart,
  LucideIcon,
} from "lucide-react";
import { useInstructorAnalytics } from "./instructor-analytics-data";

interface CardData {
  title: string;
  value: string;
  badge?: string;
  badgeColor?: string;
  icon: LucideIcon;
  iconColor: string;
}

export const InstructorAnalyticsOverviewCards = () => {
  const { totalStudents, activeCourses, completionRate, avgQuizScore, totalRevenue, isLoading } =
    useInstructorAnalytics();

  // No historical snapshots exist for these figures yet, so the trend
  // badges from the mockup are dropped rather than filled with guessed
  // percentages.
  const cards: CardData[] = [
    {
      title: "Total Students",
      value: isLoading ? "-" : totalStudents.toLocaleString(),
      icon: GraduationCap,
      iconColor: "text-orange-500",
    },
    {
      title: "Active Courses",
      value: isLoading ? "-" : String(activeCourses),
      icon: BookOpen,
      iconColor: "text-blue-500",
    },
    {
      title: "Completion Rate",
      value: isLoading ? "-" : `${completionRate}%`,
      icon: Star,
      iconColor: "text-red-500",
    },
    {
      title: "Avg. Quiz Score",
      value: isLoading || avgQuizScore == null ? "-" : `${Math.round(avgQuizScore)}/100`,
      icon: CircleHelp,
      iconColor: "text-orange-500",
    },
    {
      title: "Revenue",
      value: isLoading ? "-" : `$${totalRevenue.toLocaleString()}`,
      icon: BarChart,
      iconColor: "text-purple-500",
    },
  ];

  return (
    <div className="flex w-full overflow-x-auto hide-scrollbar gap-4 pb-2">
      {cards.map((card, index) => (
        <InstructorAnalyticsOverviewCard key={index} {...card} />
      ))}
    </div>
  );
};

const InstructorAnalyticsOverviewCard = ({
  title,
  value,
  badge,
  badgeColor,
  icon: Icon,
  iconColor,
}: CardData) => {
  return (
    <div className="bg-white p-4 lg:p-5 rounded-xl flex flex-col min-w-[200px] shrink-0 flex-1 border border-gray-100">
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-gray-500 text-sm font-medium whitespace-nowrap">
          {title}
        </h3>
        <Icon className={`size-5 ${iconColor}`} />
      </div>

      <div className="pt-4 flex flex-col items-start gap-2 mt-auto">
        <div className="font-bold text-2xl text-gray-900">{value}</div>
        {badge && (
          <Badge
            variant="secondary"
            className={`rounded-full px-2 py-0.5 text-xs font-medium border-transparent ${badgeColor}`}
          >
            {badge}
          </Badge>
        )}
      </div>
    </div>
  );
};
