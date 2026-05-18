"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { mockQuizResults, QuizResult } from "./quiz-result-data";
import { MoreHorizontal } from "lucide-react";
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

const columns: ColumnDef<QuizResult>[] = [
  {
    key: "studentName",
    header: "Student Name",
    cell: (item) => (
      <span className="font-medium text-gray-900">{item.studentName}</span>
    ),
  },
  {
    key: "studentId",
    header: "Student ID",
    cell: (item) => <span className="text-gray-600">{item.studentId}</span>,
  },
  {
    key: "class",
    header: "Class",
    cell: (item) => <span className="text-gray-600">{item.class}</span>,
  },
  {
    key: "attemptStatus",
    header: "Attempt Status",
    cell: (item) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.attemptStatus)}`}
      >
        {item.attemptStatus}
      </span>
    ),
  },
  {
    key: "score",
    header: "Score",
    cell: (item) => <span className="text-gray-600">{item.score}</span>,
  },
  {
    key: "percentage",
    header: "Percentage",
    cell: (item) => {
      if (item.percentage === "-")
        return <span className="text-gray-600">-</span>;
      const num = parseInt(item.percentage) || 0;
      return (
        <div className="flex items-center gap-2 w-[120px]">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressBarColor(item.attemptStatus)} rounded-full`}
              style={{ width: `${num}%` }}
            />
          </div>
          <span className="text-[13px] font-medium text-gray-900 shrink-0">
            {item.percentage}
          </span>
        </div>
      );
    },
  },
  {
    key: "timeTaken",
    header: "Time Taken",
    cell: (item) => <span className="text-gray-600">{item.timeTaken}</span>,
  },
  {
    key: "passFail",
    header: "Pass/Fail",
    cell: (item) => {
      if (item.passFail === "-")
        return <span className="text-gray-600">-</span>;
      return (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getPassFailStyle(item.passFail)}`}
        >
          {item.passFail}
        </span>
      );
    },
  },
  {
    key: "submittedOn",
    header: "Submitted On",
    cell: (item) => <span className="text-gray-600">{item.submittedOn}</span>,
  },
  {
    key: "actions",
    header: "Actions",
    cell: () => (
      <button className="p-1 hover:bg-gray-100 rounded-md">
        <MoreHorizontal className="size-5 text-gray-500" />
      </button>
    ),
  },
];

export const QuizResultTable = () => {
  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <QuizResultFilters />
      <DataTable
        data={mockQuizResults}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable={true}
        onSelectionChange={(selectedIds) => {
          console.log("Selected:", selectedIds);
        }}
      />
    </div>
  );
};
