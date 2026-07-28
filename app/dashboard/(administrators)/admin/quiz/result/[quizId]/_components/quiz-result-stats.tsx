"use client";

import { IconUserFilled } from "@tabler/icons-react";
import { BookOpen } from "lucide-react";
import { useGetQuizById, useGetQuizResults } from "@/hooks/api/use-quiz";
import {
  extractQuizRecord,
  extractQuizResults,
  getPercentage,
  PASS_MARK_PERCENT,
} from "./quiz-result-data";

export const QuizResultStats = ({ quizId }: { quizId: string }) => {
  const { data: quizRes } = useGetQuizById(quizId);
  const { data: resultsRes } = useGetQuizResults(quizId);

  const quiz = extractQuizRecord(quizRes);
  const attempts = extractQuizResults(resultsRes)?.attempts ?? [];

  const isPublished = quiz?.status === "published";
  const createdBy =
    typeof quiz?.createdBy === "string"
      ? quiz.createdBy
      : quiz?.createdBy?.name ?? "-";
  const courseTitle = quiz?.course?.title ?? "-";

  const completed = attempts.filter((a) => a.completed);
  const avgScore =
    completed.length > 0
      ? (
          completed.reduce((sum, a) => sum + a.score, 0) / completed.length
        ).toFixed(1)
      : "-";
  const passCount = completed.filter((a) => {
    const pct = getPercentage(a.score, quiz?.totalPoints);
    return pct !== null && pct >= PASS_MARK_PERCENT;
  }).length;
  const passRate =
    completed.length > 0 && quiz?.totalPoints
      ? `${Math.round((passCount / completed.length) * 100)}%`
      : "-";

  return (
    <div className="w-full bg-white rounded-2xl p-5 md:p-6 lg:p-8 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-x-auto">
      {/* Left side: Quiz Info */}
      <div className="flex flex-col gap-2.5 shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-tight">
            {quiz?.title ?? "..."}
          </h2>
          <span
            className={`inline-flex items-center justify-center rounded-full px-2 py-[0.5] text-[10px] font-medium ${
              isPublished
                ? "bg-[#E6F6EC] text-[#24A164]"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {isPublished ? "Active" : "Draft"}
          </span>
        </div>

        <div className="flex items-center gap-4 text-[14px] text-gray-700 font-semibold">
          <div className="flex items-center gap-1.5">
            <IconUserFilled size="20" />
            <span>{createdBy}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="size-4" />
            <span>{courseTitle}</span>
          </div>
        </div>
      </div>

      {/* Vertical Divider (Hidden on mobile) */}
      <div className="hidden md:block w-px h-[50px] bg-gray-200 shrink-0 mx-2 lg:mx-4" />

      {/* Right side: Stats */}
      <div className="flex items-center justify-center gap-8 lg:gap-16 shrink-0 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Total Students
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-gray-900 text-center md:text-left">
            {attempts.length}
          </span>
        </div>

        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Attempts
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#197FE6] text-center md:text-left">
            {completed.length}
          </span>
        </div>

        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Average Score
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#009F42] text-center md:text-left">
            {avgScore}
          </span>
        </div>

        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Pass Rate
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#197FE6] text-center md:text-left">
            {passRate}
          </span>
        </div>
      </div>
    </div>
  );
};
