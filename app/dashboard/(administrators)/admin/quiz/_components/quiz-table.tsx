"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Upload } from "lucide-react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  Quiz,
  QuizFilterState,
  applyQuizFilters,
  emptyQuizFilters,
  mapQuizRecordToQuiz,
} from "./quiz-data";
import { QuizActions } from "./quiz-actions";
import { QuizBulkAction, QuizFilters } from "./quiz-filters";
import {
  useDeleteQuizMutation,
  useGetQuizzes,
  useUpdateQuizMutation,
} from "@/hooks/api/use-quiz";
import { downloadCsv } from "@/lib/export-csv";

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

const columns: ColumnDef<Quiz>[] = [
  {
    key: "title",
    header: "Quiz Title",
    cell: (item) => (
      <span className="font-medium text-gray-900">{item.title}</span>
    ),
    className: "w-[250px]",
  },
  {
    key: "course",
    header: "Course",
    cell: (item) => <span className="text-gray-600">{item.course}</span>,
  },
  {
    key: "class",
    header: "Class",
    cell: (item) => <span className="text-gray-600">{item.class}</span>,
  },
  {
    key: "createdBy",
    header: "Created By",
    cell: (item) => <span className="text-gray-600">{item.createdBy}</span>,
  },
  {
    key: "questions",
    header: "Questions",
    cell: (item) => (
      <span className="text-gray-600 text-center block w-full">
        {item.questions}
      </span>
    ),
    headerClassName: "text-center",
  },
  {
    key: "totalStudents",
    header: "Total Students",
    cell: (item) => (
      <span className="text-gray-600 text-center block w-full">
        {item.totalStudents}
      </span>
    ),
    headerClassName: "text-center",
  },
  {
    key: "submissions",
    header: "Submissions",
    cell: (item) => {
      const percentage = Math.min(
        100,
        item.totalStudents > 0
          ? Math.round((item.submissions / item.totalStudents) * 100)
          : 0,
      );
      const barColor = getProgressBarColor(item.status);

      return (
        <div className="flex items-center gap-3 w-[150px]">
          <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${barColor} rounded-full`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span
            className={`text-[14px] font-semibold text-gray-900 shrink-0 ${barColor.replace("bg-", "text-")}`}
          >
            {item.submissions} / {item.totalStudents}
          </span>
        </div>
      );
    },
  },
  {
    key: "avgScore",
    header: "Avg Score",
    cell: (item) => <span className="text-gray-600">{item.avgScore}</span>,
  },
  {
    key: "status",
    header: "Status",
    cell: (item) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
          item.status,
        )}`}
      >
        {item.status}
      </span>
    ),
  },
  {
    key: "actions",
    header: "Actions",
    cell: (item) => <QuizActions assignmentId={item.id} status={item.status} />,
  },
];

export const QuizTable = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<QuizFilterState>(emptyQuizFilters);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const { data, isLoading, isError } = useGetQuizzes({ page });
  const updateQuiz = useUpdateQuizMutation();
  const deleteQuiz = useDeleteQuizMutation();

  const quizzes: Quiz[] = (data?.quizzes ?? []).map(mapQuizRecordToQuiz);
  const filteredQuizzes = applyQuizFilters(quizzes, filters);
  const courseOptions = [...new Set(quizzes.map((q) => q.course))].sort();
  const totalPages = data?.pagination?.totalPages ?? 1;

  // Selection can hold ids of rows that were deleted or filtered out
  const selectedQuizzes = filteredQuizzes.filter((q) => selectedIds.has(q.id));

  const handleBulkAction = async (action: QuizBulkAction) => {
    if (selectedQuizzes.length === 0) return;

    if (
      action === "delete" &&
      !window.confirm(
        `Delete ${selectedQuizzes.length} selected quiz(zes)? This cannot be undone.`,
      )
    ) {
      return;
    }

    const results = await Promise.allSettled(
      selectedQuizzes.map((quiz) =>
        action === "delete"
          ? deleteQuiz.mutateAsync(quiz.id)
          : updateQuiz.mutateAsync({
              quizId: quiz.id,
              status: action === "publish" ? "published" : "draft",
            }),
      ),
    );

    const failed = results.filter((r) => r.status === "rejected").length;
    const succeeded = results.length - failed;
    if (succeeded > 0)
      toast.success(`${succeeded} quiz(zes) ${action === "delete" ? "deleted" : action + "ed"}`);
    if (failed > 0) toast.error(`${failed} quiz(zes) failed`);
  };

  const handleExport = () => {
    downloadCsv(
      "quizzes",
      ["Title", "Course", "Created By", "Questions", "Submissions", "Avg Score", "Status"],
      filteredQuizzes.map((q) => [
        q.title,
        q.course,
        q.createdBy,
        q.questions,
        q.submissions,
        q.avgScore,
        q.status,
      ]),
    );
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <QuizFilters
        filters={filters}
        onFiltersChange={setFilters}
        courseOptions={courseOptions}
        selectedCount={selectedQuizzes.length}
        onBulkAction={handleBulkAction}
      />
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load quizzes. Please try again.
        </div>
      ) : filteredQuizzes.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          {quizzes.length === 0
            ? "No quizzes found."
            : "No quizzes match the current filters."}
        </div>
      ) : (
        <DataTable
          data={filteredQuizzes}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={true}
          onSelectionChange={setSelectedIds}
          footerContent={
            <button
              onClick={handleExport}
              className="flex items-center gap-2 text-[15px] text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Upload className="size-4" /> Export Quizzes
            </button>
          }
          pagination={{
            page,
            totalPages,
            onPrev: () => setPage((p) => Math.max(1, p - 1)),
            onNext: () => setPage((p) => Math.min(totalPages, p + 1)),
          }}
        />
      )}
    </div>
  );
};
