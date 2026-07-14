"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { mapQuizRecordToQuiz } from "./quiz-data";
import { QuizActions } from "./quiz-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { QuizFilters } from "./quiz-filters";
import { useGetQuizzes } from "@/hooks/api/use-quiz";

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-[#FFF8E6] text-[#F59E0B]";
    case "Closed":
      return "bg-black text-white";
    case "Draft":
      return "bg-[#EFF6FF] text-[#3B82F6]";
    case "Archived":
      return "bg-[#ECFDF5] text-[#10B981]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getProgressBarColor = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-[#F97316]"; // Orange
    case "Closed":
      return "bg-[#A855F7]"; // Purple
    case "Draft":
      return "bg-[#3B82F6]"; // Blue
    case "Archived":
      return "bg-[#10B981]"; // Green
    default:
      return "bg-gray-300";
  }
};

export const QuizList = () => {
  const { data, isLoading, isError } = useGetQuizzes();
  const quizzes = (data?.data ?? []).map(mapQuizRecordToQuiz);

  return (
    <>
      <QuizFilters />
      <div className="w-full bg-white p-4 rounded-xl">
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
            Failed to load quizzes. Please try again.
          </div>
        ) : quizzes.length === 0 ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
            No quizzes found.
          </div>
        ) : (
        <DataList
          data={quizzes}
          keyExtractor={(item) => item.id}
          renderItem={(item) => {
            const percentage = Math.min(
              100,
              item.totalStudents > 0
                ? Math.round((item.submissions / item.totalStudents) * 100)
                : 0,
            );
            const barColor = getProgressBarColor(item.status);

            return (
              <div className="flex w-full items-start gap-4">
                <div className="pt-1">
                  <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                </div>
                <div className="flex flex-col w-full gap-4">
                  {/* Top Row */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[16px] font-medium text-gray-900 leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[15px] text-gray-500">
                        Class: {item.class}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-medium text-gray-700">
                          {item.course}
                        </span>
                        <QuizActions assignmentId={item.id} />
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${barColor} rounded-full`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span
                      className={`text-[16px] font-medium ${barColor.replace(
                        "bg-",
                        "text-",
                      )}`}
                    >
                      {item.submissions} / {item.totalStudents}
                    </span>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] text-gray-500">
                        {item.questions} Questions
                      </span>
                      <span className="text-[13px] text-gray-500">
                        Avg: {item.avgScore}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                          item.status,
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <span className="text-[13px] text-gray-500 font-medium">
                      {item.createdBy}
                    </span>
                  </div>
                </div>
              </div>
            );
          }}
        />
        )}
      </div>
    </>
  );
};
