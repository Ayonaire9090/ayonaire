"use client";

import { use } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChevronRight } from "lucide-react";
import { QuizResultStats } from "./_components/quiz-result-stats";
import { QuizResultTable } from "./_components/quiz-result-table";
import { QuizResultList } from "./_components/quiz-result-list";
import { useGetQuizById } from "@/hooks/api/use-quiz";
import { extractQuizRecord } from "./_components/quiz-result-data";

export default function AdminQuizResultPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = use(params);
  const { data: quizRes } = useGetQuizById(quizId);
  const quizTitle = extractQuizRecord(quizRes)?.title ?? "Quiz Results";

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
            <span className="text-gray-600 font-medium">{quizTitle}</span>
          </div>
        }
      />

      {/* Stats */}
      <QuizResultStats quizId={quizId} />

      <div className="hidden lg:block w-full">
        <QuizResultTable quizId={quizId} />
      </div>
      <div className="block lg:hidden w-full">
        <QuizResultList quizId={quizId} />
      </div>
    </div>
  );
}
