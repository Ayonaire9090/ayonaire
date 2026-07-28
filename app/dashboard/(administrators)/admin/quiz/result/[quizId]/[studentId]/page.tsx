"use client";

import { use } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChevronRight } from "lucide-react";
import { StudentQuizResultStats } from "./_components/student-quiz-result-stats";
import { StudentQuizResultHeader } from "./_components/student-quiz-result-header";
import { StudentQuizResultAnswerReview } from "./_components/student-quiz-result-answer-review";
import { useGetQuizById, useGetQuizResults } from "@/hooks/api/use-quiz";
import {
  extractQuizRecord,
  extractQuizResults,
} from "../_components/quiz-result-data";

export default function AdminStudentQuizResultPage({
  params,
}: {
  params: Promise<{ quizId: string; studentId: string }>;
}) {
  const { quizId, studentId } = use(params);
  const { data: quizRes } = useGetQuizById(quizId);
  const {
    data: resultsRes,
    isLoading,
    isError,
  } = useGetQuizResults(quizId);

  const quiz = extractQuizRecord(quizRes);
  const attempt = extractQuizResults(resultsRes)?.attempts.find(
    (a) => a.student._id === studentId,
  );

  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Quiz Management"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Quiz Management <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              {quiz?.title ?? "Quiz"} <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-600 font-medium">
              {attempt?.student.name ?? "Student"}
            </span>
          </div>
        }
      />
      {/* Header */}
      <StudentQuizResultHeader attempt={attempt} quiz={quiz} />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load this result. Please try again.
        </div>
      ) : !attempt ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No attempt found for this student on this quiz.
        </div>
      ) : (
        <>
          {/* Stats */}
          <StudentQuizResultStats attempt={attempt} quiz={quiz} />
          <StudentQuizResultAnswerReview />
        </>
      )}
    </div>
  );
}
