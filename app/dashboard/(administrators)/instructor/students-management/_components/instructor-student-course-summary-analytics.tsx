"use client";

import { ChartPie, FileQuestionMark, NotebookPen, Users } from "lucide-react";
import { useInstructorStudentRoster } from "./instructor-student-data";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { isOwnQuiz } from "../../quiz/_components/instructor-quiz-data";
import { useAuthStore } from "@/store/auth.store";
import { StatCard } from "@/components/dashboard/stat-card";

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

  return (
    <>
      <h2 className="text-xl lg:text-2xl font-bold py-2">Course Summary</h2>
      <div className="flex overflow-x-auto hide-scrollbar items-center md:grid lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Students" value={String(students.length)} icon={Users} iconBg="bg-[#3B82F6]" />
        {/* "Assignments" has no known backend source yet (no assignment/grading
            endpoint scoped to this instructor's roster), so it falls back to
            "-" rather than a guessed number. */}
        <StatCard label="Assignments" value="-" icon={NotebookPen} iconBg="bg-[#8B5CF6]" />
        <StatCard label="Quizzes" value={String(quizCount)} icon={FileQuestionMark} iconBg="bg-[#F59E0B]" />
        <StatCard
          label="Completion Rate"
          value={`${completionRate}%`}
          icon={ChartPie}
          iconBg="bg-[#24A164]"
          extra={
            <div className="w-full mt-1">
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};
