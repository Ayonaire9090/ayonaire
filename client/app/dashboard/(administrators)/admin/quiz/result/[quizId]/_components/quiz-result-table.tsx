"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  QuizResult,
  QuizResultFilterState,
  applyQuizResultFilters,
  emptyQuizResultFilters,
  extractQuizRecord,
  extractQuizResults,
  mapAttemptToQuizResult,
} from "./quiz-result-data";
import { Eye, Upload } from "lucide-react";
import { QuizResultFilters } from "./quiz-result-filters";
import { useGetQuizById, useGetQuizResults } from "@/hooks/api/use-quiz";
import { downloadCsv } from "@/lib/export-csv";

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
      return "bg-gray-300";
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

const buildColumns = (quizId: string): ColumnDef<QuizResult>[] => [
  {
    key: "studentName",
    header: "Student Name",
    cell: (item) => (
      <span className="font-medium text-gray-900">{item.studentName}</span>
    ),
  },
  {
    key: "email",
    header: "Email",
    cell: (item) => <span className="text-gray-600">{item.email}</span>,
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
    cell: (item) => (
      <Link
        href={`/dashboard/admin/quiz/result/${quizId}/${item.id}`}
        className="inline-flex p-1 hover:bg-gray-100 rounded-md"
        title="View result"
      >
        <Eye className="size-5 text-gray-500" />
      </Link>
    ),
  },
];

export const QuizResultTable = ({ quizId }: { quizId: string }) => {
  const [filters, setFilters] = useState<QuizResultFilterState>(
    emptyQuizResultFilters,
  );
  const { data: quizRes } = useGetQuizById(quizId);
  const { data: resultsRes, isLoading, isError } = useGetQuizResults(quizId);

  const quiz = extractQuizRecord(quizRes);
  const results: QuizResult[] = (
    extractQuizResults(resultsRes)?.attempts ?? []
  ).map((attempt) => mapAttemptToQuizResult(attempt, quiz?.totalPoints));
  const filteredResults = applyQuizResultFilters(results, filters);

  const handleExport = () => {
    downloadCsv(
      `${quiz?.title ?? "quiz"}-results`,
      ["Student Name", "Email", "Attempt Status", "Score", "Percentage", "Pass/Fail", "Submitted On"],
      filteredResults.map((r) => [
        r.studentName,
        r.email,
        r.attemptStatus,
        r.score,
        r.percentage,
        r.passFail,
        r.submittedOn,
      ]),
    );
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <QuizResultFilters filters={filters} onFiltersChange={setFilters} />
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load quiz results. Please try again.
        </div>
      ) : filteredResults.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          {results.length === 0
            ? "No attempts yet for this quiz."
            : "No results match the current filters."}
        </div>
      ) : (
        <DataTable
          data={filteredResults}
          columns={buildColumns(quizId)}
          keyExtractor={(item) => item.id}
          selectable={true}
          footerContent={
            <button
              onClick={handleExport}
              className="flex items-center gap-2 text-[15px] text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Upload className="size-4" /> Export Results
            </button>
          }
          pagination={{ page: 1, totalPages: 1 }}
        />
      )}
    </div>
  );
};
