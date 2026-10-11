"use client";

import { CheckCircle, FileQuestionMark } from "lucide-react";
import { useInstructorQuizResultCards } from "./instructor-performance-data";

export const InstructorStudentPerformanceQuizResults = () => {
  const { cards, isLoading } = useInstructorQuizResultCards();

  return (
    <div className="mb-4 lg:mb-6">
      <div className="flex items-center gap-2 py-4">
        <FileQuestionMark className="size-6 text-[#FF5A1F]" />
        <h2 className="text-xl font-bold text-[#1f2937]">Quiz Results</h2>
      </div>
      {isLoading ? (
        <p className="text-sm text-gray-400 py-6">Loading…</p>
      ) : cards.length === 0 ? (
        <p className="text-sm text-gray-400 py-6">No quiz attempts yet</p>
      ) : (
        <div className="flex items-center overflow-x-auto lg:overflow-x-hidden lg:grid grid-cols-2  gap-4 w-full hide-scrollbar">
          {cards.map((quiz) => (
            <InstructorStudentPerformanceQuizResultCard
              key={quiz.id}
              title={quiz.title}
              attempts={quiz.attempts}
              percentage={quiz.percentage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface InstructorStudentPerformanceQuizResultCardProps {
  title?: string;
  attempts?: number;
  percentage?: string;
}
const InstructorStudentPerformanceQuizResultCard = ({
  title,
  attempts,
  percentage,
}: InstructorStudentPerformanceQuizResultCardProps) => {
  return (
    <div className="p-3 lg:p-5 bg-white rounded-xl min-w-[70%] lg:min-w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm font-medium">Title:</span>
          <p className="text-gray-900 text-lg font-bold">{title}</p>
        </div>
        <div className="flex justify-center items-center bg-[#EC5B13]/10 text-[#EC5B13] font-bold p-2 rounded-lg">
          {percentage}
        </div>
      </div>
      <div className="pt-4">
        {/* divider' */}
        <div className="w-full h-[0.5px] bg-gray-300 my-2" />
        {/* Attempts */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <p className="text-gray-400 font-medium text-sm">Attempts:</p>
            <p className="text-gray-900 font-bold text-sm">{attempts}</p>
          </div>
          <CheckCircle className="size-4 text-green-800" />
        </div>
      </div>
    </div>
  );
};
