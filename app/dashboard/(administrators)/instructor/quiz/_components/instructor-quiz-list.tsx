"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import {
  isOwnQuiz,
  mapQuizRecordToInstructorQuiz,
} from "./instructor-quiz-data";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { useAuthStore } from "@/store/auth.store";

const getPillColor = (questions: number) => {
  if (questions === 25) return "bg-[#F3E8FF] text-[#A855F7]";
  if (questions === 10) return "bg-[#E0F2FE] text-[#38BDF8]";
  if (questions === 50) return "bg-[#FEE2E2] text-[#F87171]";
  return "bg-[#FFEDD5] text-[#FB923C]";
};

export const InstructorQuizList = () => {
  const user = useAuthStore((state) => state.user);
  const { data, isLoading, isError } = useGetQuizzes();
  const quizzes = (data?.data ?? [])
    .filter((quiz) => isOwnQuiz(quiz, user?._id))
    .map(mapQuizRecordToInstructorQuiz);

  return (
    <div className="p-4 bg-white rounded-xl">
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
          itemClassName="rounded-[16px] mb-4 border-none flex-col items-stretch gap-0"
          renderItem={(item) => (
            <>
              <div className="flex justify-between items-start w-full">
                <div className="flex gap-3 items-start max-w-[45%]">
                  <Checkbox className="mt-1 rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                  <h3 className="text-gray-900 text-[15px] font-normal leading-tight">
                    {item.title.split(" ").map((word, i, arr) => (
                      <React.Fragment key={i}>
                        {word}
                        {i === 0 && arr.length > 1 ? <br /> : " "}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-gray-900 text-[15px] font-normal">
                    {item.course}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 -mr-2 -mt-0.5 hover:bg-transparent"
                      >
                        <MoreVertical className="h-5 w-5 text-gray-900" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-36 bg-[#F6F6F6] border border-gray-200 shadow-sm rounded-[16px] p-2 flex flex-col gap-1"
                    >
                      <DropdownMenuItem className="text-[15px] text-gray-900 focus:bg-gray-200 cursor-pointer rounded-lg px-3 py-2">
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[15px] text-gray-900 focus:bg-gray-200 cursor-pointer rounded-lg px-3 py-2">
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[15px] text-gray-900 focus:bg-gray-200 cursor-pointer rounded-lg px-3 py-2">
                        Analytics
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex justify-between items-center w-full mt-6">
                <span
                  className={`px-3 py-1 rounded-full text-[13px] font-medium ${getPillColor(
                    item.questions,
                  )}`}
                >
                  {item.questions}
                </span>
                <span className="text-gray-500 text-[14px]">
                  {item.dueDate}
                </span>
              </div>

              <div className="flex justify-start w-full mt-4">
                <span className="text-gray-900 font-medium text-[14px]">
                  Attempts{" "}
                  <span className="text-gray-500 font-normal ml-1">
                    {item.attempts}
                  </span>
                </span>
              </div>
            </>
          )}
        />
      )}
    </div>
  );
};
