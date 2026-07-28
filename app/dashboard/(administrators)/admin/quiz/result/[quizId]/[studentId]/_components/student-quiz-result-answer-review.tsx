"use client";

import React from "react";

// The backend's results endpoint only returns per-attempt totals — it does
// not expose a student's individual answers to admins yet. Once such an
// endpoint exists, map its data into this shape and pass it in.
export interface AnswerReview {
  id: string | number;
  questionNumber: string;
  questionText: string;
  status: "Correct" | "InCorrect";
  studentAnswer: string;
  correctAnswer: string;
}

export const StudentQuizResultAnswerReview = ({
  reviews = [],
}: {
  reviews?: AnswerReview[];
}) => {
  const correctCount = reviews.filter((r) => r.status === "Correct").length;
  const incorrectCount = reviews.length - correctCount;

  return (
    <div className="w-full bg-white rounded-3xl p-6 lg:p-8 flex flex-col gap-6  border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h2 className="text-[20px] lg:text-[22px] font-bold text-gray-900">
          Answers Review
        </h2>
        {reviews.length > 0 && (
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#009F42]"></div>
              <span className="text-[15px] font-semibold text-gray-700">
                {correctCount} Correct
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
              <span className="text-[15px] font-semibold text-gray-700">
                {incorrectCount} Incorrect
              </span>
            </div>
          </div>
        )}
      </div>

      {reviews.length === 0 ? (
        <div className="flex items-center justify-center py-10 text-[15px] text-gray-500 text-center">
          Question-by-question review isn&apos;t available yet — the backend
          doesn&apos;t share individual answers for admin review.
        </div>
      ) : (
        <div className="flex flex-col gap-6 mt-2">
          {reviews.map((review) => {
            const isCorrect = review.status === "Correct";
            return (
              <div
                key={review.id}
                className="bg-[#F8FAFC] rounded-[24px] p-6 flex flex-col gap-5 border border-gray-100"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[15px] font-semibold text-gray-500">
                      {review.questionNumber}
                    </span>
                    <p className="text-[18px] font-semibold text-gray-900 leading-snug">
                      {review.questionText}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-1.5 rounded-full text-[13px] font-semibold shrink-0 ${isCorrect ? "text-[#009F42] bg-[#009F42]/10" : "text-[#EF4444] bg-[#EF4444]/20"}`}
                  >
                    {review.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="flex flex-col gap-2.5">
                    <span className="text-[15px] font-semibold text-gray-500">
                      Student Answer
                    </span>
                    <div
                      className={`p-4 rounded-xl text-[16px] font-medium border ${isCorrect ? "bg-white border-gray-200 text-gray-900" : "bg-white"}`}
                    >
                      {review.studentAnswer}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className="text-[15px] font-semibold text-[#009F42]">
                      Correct Answer
                    </span>
                    <div className="p-4 rounded-xl text-[16px] text-[#009F42] bg-[#009F42]/10 font-medium  border border-gray-200">
                      {review.correctAnswer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
