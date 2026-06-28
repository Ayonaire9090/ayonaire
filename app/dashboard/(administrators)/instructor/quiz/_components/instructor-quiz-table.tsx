"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { INSTRUCTOR_QUIZZES, InstructorQuiz } from "./instructor-quiz-data";
import { MoreVertical, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const getPillColor = (questions: number) => {
  if (questions === 25) return "bg-[#F3E8FF] text-[#A855F7]";
  if (questions === 10) return "bg-[#E0F2FE] text-[#38BDF8]";
  if (questions === 50) return "bg-[#FEE2E2] text-[#F87171]";
  return "bg-[#FFEDD5] text-[#FB923C]";
};

export const InstructorQuizTable = () => {
  const columns: ColumnDef<InstructorQuiz>[] = [
    {
      key: "title",
      header: "Quiz Title",
      cell: (item) => (
        <span className="font-medium text-gray-900">{item.title}</span>
      ),
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => <span className="text-gray-500">{item.course}</span>,
    },
    {
      key: "dueDate",
      header: "Due Date",
      cell: (item) => <span className="text-gray-500">{item.dueDate}</span>,
    },
    {
      key: "questions",
      header: "Questions",
      cell: (item) => (
        <span
          className={`px-3 py-1.5 rounded-full text-[13px] font-medium ${getPillColor(
            item.questions,
          )}`}
        >
          {item.questions}
        </span>
      ),
    },
    {
      key: "attempts",
      header: "Attempts",
      cell: (item) => <span className="text-gray-500">{item.attempts}</span>,
    },
    {
      key: "action",
      header: "Action",
      cell: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-transparent"
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
      ),
    },
  ];

  const footerContent = (
    <div className="flex gap-4">
      <Button
        variant="outline"
        className="border-none bg-[#F6F6F6] text-gray-600 hover:bg-gray-200 hover:text-gray-900 font-normal rounded-lg px-4 py-5 gap-2 h-auto text-[14px]"
      >
        <Download className="w-4 h-4" />
        Export Quizzes
      </Button>
      <Button
        variant="outline"
        className="border-none bg-[#F6F6F6] text-gray-600 hover:bg-gray-200 hover:text-gray-900 font-normal rounded-lg px-4 py-5 gap-2 h-auto text-[14px]"
      >
        <Download className="w-4 h-4" />
        Export Result
      </Button>
    </div>
  );

  return (
    <div className="bg-white rounded-xl p-4">
      <DataTable
        data={INSTRUCTOR_QUIZZES}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable={true}
        footerContent={footerContent}
      />
    </div>
  );
};
