"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  isEnrolledQuiz,
  mapQuizRecordToStudentQuiz,
  StudentQuiz,
} from "./student-quiz-data";
import { StudentQuizActions } from "./student-quiz-actions";
import { StudentQuizFilters } from "./student-quiz-filters";
import { Download } from "lucide-react";
import { useGetQuizzes } from "@/hooks/api/use-quiz";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Available":
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

const columns: ColumnDef<StudentQuiz>[] = [
  {
    key: "title",
    header: "Assessment Name",
    cell: (item) => (
      <span className="font-medium text-gray-900">{item.title}</span>
    ),
    className: "w-[250px]",
  },
  {
    key: "type",
    header: "Type",
    cell: (item) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeStyle(
          item.type,
        )}`}
      >
        {item.type}
      </span>
    ),
  },
  {
    key: "course",
    header: "Course",
    cell: (item) => <span className="text-gray-600">{item.course}</span>,
  },
  {
    key: "marks",
    header: "Marks",
    cell: (item) => <span className="text-gray-600">{item.marks}</span>,
  },
  {
    key: "dueDate",
    header: "Due Date",
    cell: (item) => <span className="text-gray-600">{item.dueDate}</span>,
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
    header: "Action",
    cell: (item) => <StudentQuizActions assignmentId={item.id} />,
  },
];

export const StudentQuizTable = () => {
  const { data: quizzesData, isLoading: quizzesLoading, isError: quizzesError } = useGetQuizzes();
  const { data: enrollmentData, isLoading: enrollmentLoading, isError: enrollmentError } = useGetEnrolledCourses();

  const isLoading = quizzesLoading || enrollmentLoading;
  const isError = quizzesError || enrollmentError;

  const enrolledCourseIds = new Set(
    (enrollmentData?.data ?? [])
      .map((enrollment) =>
        typeof enrollment.course === "string" ? enrollment.course : enrollment.course?._id,
      )
      .filter((id): id is string => !!id),
  );

  const quizzes = (quizzesData?.quizzes ?? [])
    .filter((quiz) => isEnrolledQuiz(quiz, enrolledCourseIds))
    .map(mapQuizRecordToStudentQuiz);

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <StudentQuizFilters />
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
        <DataTable
          data={quizzes}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={true}
          onSelectionChange={(selectedIds) => {
            console.log("Selected:", selectedIds);
          }}
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
        />
      )}
    </div>
  );
};
