"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { QuizRecord } from "@/lib/api/endpoints/quiz";
import {
  QuizAttempt,
  formatSubmittedOn,
  getPercentage,
  PASS_MARK_PERCENT,
} from "../../_components/quiz-result-data";

interface StudentQuizResultStatsProps {
  attempt: QuizAttempt;
  quiz?: QuizRecord;
}

export const StudentQuizResultStats = ({
  attempt,
  quiz,
}: StudentQuizResultStatsProps) => {
  const pct = getPercentage(attempt.score, quiz?.totalPoints);
  const initials = attempt.student.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const status = !attempt.completed
    ? { label: "Pending", color: "text-[#F59E0B]" }
    : pct === null
      ? { label: "Graded", color: "text-[#3B82F6]" }
      : pct >= PASS_MARK_PERCENT
        ? { label: "Passed", color: "text-[#10B981]" }
        : { label: "Failed", color: "text-[#EF4444]" };

  return (
    <div className="w-full bg-white rounded-3xl p-4 lg:p-6 flex flex-col gap-8 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-2 py-3">
          {/* Student Profile Header */}
          <div className="flex items-start gap-3 pb-3">
            <Avatar className="size-16 rounded-full overflow-hidden">
              <AvatarFallback className="bg-orange-100 text-orange-600 font-bold text-xl">
                {initials || "ST"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-[24px] font-bold text-gray-900 leading-tight">
                {attempt.student.name}
              </h2>
              <span className="text-[16px] text-gray-500 font-medium">
                {attempt.student.email ?? "-"}
              </span>
            </div>
          </div>

          {/* Info Sections Row */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-bold text-gray-900">
                Quiz Title
              </span>
              <span className="text-[16px] text-gray-500 font-medium">
                {quiz?.title ?? "-"}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-bold text-gray-900">
                Course
              </span>
              <span className="text-[16px] text-gray-500 font-medium">
                {quiz?.course?.title ?? "-"}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-bold text-gray-900">
                Total Points
              </span>
              <span className="text-[16px] text-gray-500 font-medium">
                {quiz?.totalPoints ?? "-"}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[18px] font-bold text-gray-900">
                Attempt Date
              </span>
              <span className="text-[16px] text-gray-500 font-medium">
                {formatSubmittedOn(attempt.submittedAt)}
              </span>
            </div>
          </div>
        </div>
        {/* Stats Highlight Card */}
        <div className="bg-[#F8F9FA] rounded-[24px] p-6 grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-12">
          <div className="flex flex-col gap-2">
            <span className="text-[18px] lg:text-[20px] text-gray-400 font-semibold">
              Total Score
            </span>
            <span className="text-[20px] lg:text-[24px] font-bold text-gray-900">
              {quiz?.totalPoints
                ? `${attempt.score}/ ${quiz.totalPoints}`
                : attempt.score}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[18px] lg:text-[20px] text-gray-400 font-semibold">
              Percentage
            </span>
            <span className="text-[20px] lg:text-[24px] font-bold text-[#3B82F6]">
              {pct === null ? "-" : `${pct}%`}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[18px] lg:text-[20px] text-gray-400 font-semibold">
              Status
            </span>
            <span
              className={`text-[20px] lg:text-[24px] font-bold ${status.color}`}
            >
              {status.label}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[18px] lg:text-[20px] text-gray-400 font-semibold">
              Time Taken
            </span>
            <span className="text-[20px] lg:text-[24px] font-bold text-[#3B82F6]">
              -
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
