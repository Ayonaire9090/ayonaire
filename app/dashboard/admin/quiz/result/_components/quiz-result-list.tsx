"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { mockQuizResults } from "./quiz-result-data";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreVertical } from "lucide-react";
import { QuizResultFilters } from "./quiz-result-filters";

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Graded":
      return "bg-[#ECFDF5] text-[#10B981]";
    case "Submitted":
      return "bg-[#EFF6FF] text-[#3B82F6]";
    case "Late":
      return "bg-[#FFF8E6] text-[#F59E0B]";
    case "Critical":
      return "bg-[#FEF2F2] text-[#EF4444]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getProgressBarColor = (status: string) => {
  switch (status) {
    case "Graded":
      return "bg-[#10B981]";
    case "Submitted":
      return "bg-[#3B82F6]";
    case "Late":
      return "bg-[#F59E0B]";
    case "Critical":
      return "bg-[#EF4444]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getPassFailStyle = (status: string) => {
  switch (status) {
    case "Pass":
      return "bg-[#ECFDF5] text-[#10B981]";
    case "Fail":
      return "bg-[#FEF2F2] text-[#EF4444]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const QuizResultList = () => {
  return (
    <>
      <QuizResultFilters />
      <div className="w-full bg-white p-4 rounded-xl">
        <DataList
          data={mockQuizResults}
          keyExtractor={(item) => item.id}
          renderItem={(item) => {
            const numPercentage = parseInt(item.percentage) || 0;
            return (
              <div className="flex w-full items-start gap-4 py-2">
                <div className="pt-1">
                  <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                </div>
                <div className="flex flex-col w-full gap-5">
                  {/* Top Row */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[16px] font-medium text-gray-900 leading-tight">
                        {item.studentName}
                      </span>
                      <span className="text-[14px] text-gray-500">
                        {item.studentId}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[15px] text-gray-600">
                        {item.class}
                      </span>
                      <MoreVertical className="size-5 text-gray-500 cursor-pointer" />
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {item.percentage !== "-" && (
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getProgressBarColor(item.attemptStatus)} rounded-full`}
                          style={{ width: `${numPercentage}%` }}
                        />
                      </div>
                      <span
                        className={`text-[18px] font-semibold ${getStatusStyle(item.attemptStatus)} leading-none tracking-tight`}
                      >
                        {item.percentage}
                      </span>
                    </div>
                  )}

                  {/* Badges & Date */}
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      {item.passFail !== "-" && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getPassFailStyle(item.passFail)}`}
                        >
                          {item.passFail}
                        </span>
                      )}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.attemptStatus)}`}
                      >
                        {item.attemptStatus}
                      </span>
                    </div>
                    {item.submittedOn !== "-" && (
                      <span className="text-[13px] text-gray-400">
                        {item.submittedOn}
                      </span>
                    )}
                  </div>

                  {/* Score & Time */}
                  {item.score !== "-" && (
                    <div className="flex justify-between items-start w-full">
                      <div className="flex flex-col gap-1">
                        <span className="text-[15px] font-medium text-gray-900">
                          Score
                        </span>
                        <span className="text-[15px] text-gray-500">
                          {item.score}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[15px] font-medium text-gray-900">
                          Time
                        </span>
                        <span className="text-[15px] text-gray-500">
                          {item.timeTaken}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          }}
        />
      </div>
    </>
  );
};
