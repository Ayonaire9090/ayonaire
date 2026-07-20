"use client";

import {
  ChartPie,
  FileQuestionMark,
  LucideIcon,
  NotebookPen,
  Users,
} from "lucide-react";
import { useInstructorStudentRoster } from "./instructor-student-data";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { isOwnQuiz } from "../../quiz/_components/instructor-quiz-data";
import { useAuthStore } from "@/store/auth.store";

export const InstructorStudentCourseSummaryAnalytics = () => {
  const user = useAuthStore((state) => state.user);
  const { students } = useInstructorStudentRoster();
  const { data: quizzesData } = useGetQuizzes();
  const quizCount = (quizzesData?.quizzes ?? []).filter((quiz) =>
    isOwnQuiz(quiz, user?._id),
  ).length;

  const completionRate =
    students.length > 0
      ? Math.round(
          (students.filter((s) => s.status === "Completed").length /
            students.length) *
            100,
        )
      : 0;

  // "Assignments" has no known backend source yet (no assignment/grading
  // endpoint), so it falls back to "-" rather than a guessed number.
  const analytics: InstructorStudentCourseSummaryAnalyticsCardProps[] = [
    {
      icon: Users,
      title: "Total Students",
      description: String(students.length),
    },
    {
      icon: NotebookPen,
      title: "Assignments",
      description: "-",
    },
    {
      icon: FileQuestionMark,
      title: "Quizzes",
      description: String(quizCount),
    },
    {
      icon: ChartPie,
      title: "Completion Rate",
      description: `${completionRate}%`,
      sideContent: (
        <div className="w-10">
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <h2 className="text-xl lg:text-2xl font-bold py-2">Course Summary</h2>
      <div className="flex overflow-x-auto hide-scrollbar items-center md:grid lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {analytics.map((item, idx) => (
          <InstructorStudentCourseSummaryAnalyticsCard
            key={idx}
            title={item.title}
            description={item.description}
            icon={item.icon}
            sideContent={item.sideContent}
          />
        ))}
      </div>
    </>
  );
};

interface InstructorStudentCourseSummaryAnalyticsCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  sideContent?: React.ReactNode;
}
const InstructorStudentCourseSummaryAnalyticsCard = ({
  title,
  description,
  icon: Icon,
  sideContent,
}: InstructorStudentCourseSummaryAnalyticsCardProps) => {
  return (
    <div className="flex flex-col gap-3 w-full min-w-[220px] bg-white rounded-xl p-5">
      <div className="flex justify-between items-center">
        {/* icon */}
        {Icon && (
          <Icon className="size-10 text-primary p-2 bg-primary/10 rounded-lg" />
        )}
        {/* sideContent */}
        {sideContent && sideContent}
      </div>
      <div className="flex flex-col pt-4">
        {/* title */}
        <p className="text-gray-500 font-medium">{title}</p>
        {/* Description */}
        <h4 className="font-extrabold text-3xl">{description}</h4>
      </div>
    </div>
  );
};
