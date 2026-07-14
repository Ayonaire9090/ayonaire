"use client";

import { LucideIcon, FileText, UserPlus, Clock } from "lucide-react";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { useAuthStore } from "@/store/auth.store";
import { isOwnQuiz } from "./instructor-quiz-data";

export const InstructorAnalyticsCards = () => {
  const user = useAuthStore((state) => state.user);
  const { data } = useGetQuizzes();
  const quizzes = (data?.data ?? []).filter((quiz) =>
    isOwnQuiz(quiz, user?._id),
  );
  const totalQuestions = quizzes.reduce(
    (sum, quiz) => sum + (quiz.questions?.length ?? 0),
    0,
  );

  // Completion rate/avg time have no known backend source yet (no
  // results/analytics endpoint), so they fall back to "-" rather than
  // guessed values.
  const InstructorAnalytics = [
    {
      title: "Total Questions",
      subTitle: totalQuestions.toLocaleString(),
      icon: FileText,
      iconBackground: "bg-[#F3E8FF] text-[#A855F7]",
    },
    {
      title: "Avg. Completion Rate",
      subTitle: "-",
      icon: UserPlus,
      iconBackground: "bg-[#E0F2FE] text-[#38BDF8]",
    },
    {
      title: "Avg. Time Taken",
      subTitle: "-",
      icon: Clock,
      iconBackground: "bg-[#FFEDD5] text-[#FB923C]",
    },
  ];

  return (
    <div className="flex items-center gap-4 md:gap-6 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4">
      {InstructorAnalytics.map((item, index) => (
        <InstructorAnalyticsCard
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          icon={item.icon}
          iconBackground={item.iconBackground}
          className="flex-1 min-w-[280px]"
        />
      ))}
    </div>
  );
};

interface InstructorAnalyticsCardProps {
  title?: string;
  subTitle?: string;
  icon?: LucideIcon;
  iconBackground?: string;
  className?: string;
}

const InstructorAnalyticsCard = ({
  title,
  subTitle,
  icon: Icon,
  iconBackground,
  className,
}: InstructorAnalyticsCardProps) => {
  return (
    <div
      className={`flex justify-start items-center bg-white rounded-xl p-6 ${className}`}
    >
      <div className="flex items-center gap-5">
        <div
          className={`flex items-center justify-center w-[52px] h-[52px] rounded-[14px] ${iconBackground}`}
        >
          {Icon && <Icon className="size-[26px] stroke-[1.5]" />}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-[15px] font-medium leading-none">
            {title}
          </p>
          <p className="text-gray-900 text-[26px] font-bold leading-none">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
