"use client";

import { useState } from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { AppDropdown, AppDropdownItem } from "@/components/ui/app-dropdown";
import { MoreVertical, ClipboardList, FileQuestionMark } from "lucide-react";
import {
  SubmissionRow,
  StudentQuizAttemptRow,
  getSubmissionStatusColor,
  useInstructorSubmissions,
  useInstructorStudentQuizAttempts,
} from "./instructor-performance-data";

export const InstructorStudentPerformanceResultsTable = ({ studentId }: { studentId?: string }) => {
  const [activeTab, setActiveTab] = useState<"assignments" | "quizzes" | "projects">("assignments");
  const { rows, isLoading } = useInstructorSubmissions(studentId);
  const { rows: quizRows, isLoading: quizLoading } = useInstructorStudentQuizAttempts(studentId);

  const columns: ColumnDef<SubmissionRow>[] = [
    {
      key: "student",
      header: "Student",
      cell: (item) => (
        <span className="font-medium text-[15px] text-gray-900">{item.student}</span>
      ),
    },
    {
      key: "lesson",
      header: "Assignment",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.lesson}</span>
      ),
    },
    {
      key: "grade",
      header: "Grade",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.grade}</span>
      ),
    },
    {
      key: "submissionDate",
      header: "Submission Date",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.submissionDate}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getSubmissionStatusColor(item.status)}`}>
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      cell: () => (
        <AppDropdown
          trigger={
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors outline-none focus:ring-2 focus:ring-primary/20">
              <MoreVertical className="size-5 text-black" />
            </button>
          }
        >
          <AppDropdownItem>View</AppDropdownItem>
          <AppDropdownItem>Grade now</AppDropdownItem>
        </AppDropdown>
      ),
    },
  ];

  const quizColumns: ColumnDef<StudentQuizAttemptRow>[] = [
    {
      key: "quizTitle",
      header: "Quiz",
      cell: (item) => (
        <span className="font-medium text-[15px] text-gray-900">{item.quizTitle}</span>
      ),
    },
    {
      key: "score",
      header: "Score",
      cell: (item) => <span className="text-[15px] text-gray-600">{item.score}%</span>,
    },
    {
      key: "submissionDate",
      header: "Submission Date",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.submissionDate}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getSubmissionStatusColor(item.status)}`}>
          {item.status}
        </span>
      ),
    },
  ];

  const renderContent = () => {
    if (activeTab === "quizzes") {
      if (!studentId) {
        return (
          <div className="bg-white rounded-2xl w-full p-8 flex flex-col items-center justify-center min-h-[300px]">
            <h3 className="text-lg font-bold text-gray-500">No student selected</h3>
            <p className="text-gray-400 mt-2 text-center">
              Select a student to view their quiz attempt history.
            </p>
          </div>
        );
      }
      return (
        <div className="bg-white rounded-2xl w-full">
          <div className="flex items-center gap-2 mb-2 p-6 pb-0">
            <FileQuestionMark className="size-6 text-[#FF5A1F]" />
            <h2 className="text-xl font-bold text-[#1f2937]">Quiz Attempts</h2>
          </div>
          <div className="p-6 pt-0">
            {quizLoading ? (
              <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
            ) : quizRows.length === 0 ? (
              <p className="text-sm text-gray-400 py-6 text-center">No quiz attempts yet</p>
            ) : (
              <DataTable
                data={quizRows}
                columns={quizColumns}
                keyExtractor={(item) => item.id}
                selectable
              />
            )}
          </div>
        </div>
      );
    }

    if (activeTab === "assignments") {
      return (
        <div className="bg-white rounded-2xl w-full">
          <div className="flex items-center gap-2 mb-2 p-6 pb-0">
            <ClipboardList className="size-6 text-[#FF5A1F]" />
            <h2 className="text-xl font-bold text-[#1f2937]">Recent Assignments</h2>
          </div>
          <div className="p-6 pt-0">
            {isLoading ? (
              <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
            ) : rows.length === 0 ? (
              <p className="text-sm text-gray-400 py-6 text-center">No assignments yet</p>
            ) : (
              <DataTable
                data={rows}
                columns={columns}
                keyExtractor={(item) => item.id}
                selectable
              />
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl w-full p-8 flex flex-col items-center justify-center min-h-[300px]">
        <h3 className="text-lg font-bold text-gray-500 capitalize">No {activeTab} yet</h3>
        <p className="text-gray-400 mt-2">There are no {activeTab} to display at this time.</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex border-b border-gray-200 mb-6 w-full">
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 ${activeTab === "assignments" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("assignments")}
        >
          Assignments
        </button>
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 ${activeTab === "quizzes" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("quizzes")}
        >
          Quizzes
        </button>
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 ${activeTab === "projects" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
      </div>
      {renderContent()}
    </div>
  );
};
