"use client";

import React from "react";

const reviews = [
  {
    id: 1,
    questionNumber: "Question 1",
    questionText: "What is the value of x in the equation 2x + 5 = 15?",
    status: "Correct",
    studentAnswer: "5",
    correctAnswer: "5",
  },
  {
    id: 2,
    questionNumber: "Question 2",
    questionText: "Simplify the expression: 3(x + 4) - 2x",
    status: "InCorrect",
    studentAnswer: "x + 4",
    correctAnswer: "x + 12",
  },
  {
    id: 3,
    questionNumber: "Question 3",
    questionText: "What is the square root of 144?",
    status: "Correct",
    studentAnswer: "12",
    correctAnswer: "12",
  },
];
export const StudentQuizResultAnswerReview = () => {
  return (
    <div className="w-full bg-white rounded-3xl p-6 lg:p-8 flex flex-col gap-6  border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h2 className="text-[20px] lg:text-[22px] font-bold text-gray-900">
          Answers Review
        </h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#009F42]"></div>
            <span className="text-[15px] font-semibold text-gray-700">
              18 Correct
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
            <span className="text-[15px] font-semibold text-gray-700">
              7 Incorrect
            </span>
          </div>
        </div>
      </div>

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
    </div>
  );
};
