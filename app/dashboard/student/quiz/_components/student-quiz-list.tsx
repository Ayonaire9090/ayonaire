"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { mockQuiz } from "./student-quiz-data";
import { StudentQuizActions } from "./student-quiz-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { StudentQuizFilters } from "./student-quiz-filters";
import { Download } from "lucide-react";

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Attempt Now":
      return "bg-[#FFF2E5] text-[#F97316]"; // Orange
    case "Submitted":
      return "bg-[#F3E8FF] text-[#A855F7]"; // Purple
    case "Upcoming":
      return "bg-[#FFE4E6] text-[#FB7185]"; // Pink/Red
    case "Completed":
      return "bg-[#F3E8FF] text-[#A855F7]"; // Purple
    case "Overdue":
      return "bg-[#FFE4E6] text-[#FB7185]"; // Pink/Red
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getTypeStyle = (type: string) => {
  switch (type) {
    case "Quiz":
      return "bg-[#FFF2E5] text-[#F97316]"; // Orange
    case "Assignment":
      return "bg-[#F3E8FF] text-[#A855F7]"; // Purple
    case "Exam":
      return "bg-[#FFE4E6] text-[#FB7185]"; // Red/Pink
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const StudentQuizList = () => {
  return (
    <>
      <StudentQuizFilters />
      <div className="w-full bg-white p-4 rounded-xl">
        <DataList
          data={mockQuiz}
          keyExtractor={(item) => item.id}
          footerContent={
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#F6F6F6] hover:bg-gray-200 text-gray-600 text-sm rounded-lg transition-colors font-medium">
                <Download className="w-4 h-4" /> Export Quizzes
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#F6F6F6] hover:bg-gray-200 text-gray-600 text-sm rounded-lg transition-colors font-medium">
                <Download className="w-4 h-4" /> Export Result
              </button>
            </div>
          }
          renderItem={(item) => {
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
                      <span
                        className={`w-max px-2 py-0.5 rounded-full text-[10px] font-medium mt-1 ${getTypeStyle(
                          item.type,
                        )}`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-medium text-gray-700">
                          {item.course}
                        </span>
                        <StudentQuizActions assignmentId={item.id} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col">
                        <span className="text-[12px] text-gray-500">Marks</span>
                        <span className="text-[14px] font-medium text-gray-900">
                          {item.marks}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] text-gray-500">Due Date</span>
                        <span className="text-[14px] font-medium text-gray-900">
                          {item.dueDate}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </>
  );
};
