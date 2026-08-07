"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  isEnrolledAssignment,
  mapAssignmentRecordToStudentAssignment,
  StudentAssignment,
} from "./student-assignment-data";
import { useGetAssignments } from "@/hooks/api/use-assignments";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Open":
      return "bg-[#FFF2E5] text-[#F97316]";
    case "Overdue":
      return "bg-[#FFE4E6] text-[#FB7185]";
    case "Draft":
      return "bg-gray-100 text-gray-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const StudentAssignmentTable = () => {
  const router = useRouter();
  const { data: assignmentsData, isLoading: assignmentsLoading, isError: assignmentsError } =
    useGetAssignments();
  const { data: enrollmentData, isLoading: enrollmentLoading, isError: enrollmentError } =
    useGetEnrolledCourses();

  const isLoading = assignmentsLoading || enrollmentLoading;
  const isError = assignmentsError || enrollmentError;

  const enrolledCourseIds = new Set(
    (enrollmentData?.data ?? [])
      .map((enrollment) =>
        typeof enrollment.course === "string" ? enrollment.course : enrollment.course?._id,
      )
      .filter((id): id is string => !!id),
  );

  const assignments = (assignmentsData?.assignments ?? [])
    .filter((assignment) => isEnrolledAssignment(assignment, enrolledCourseIds))
    .map(mapAssignmentRecordToStudentAssignment);

  const columns: ColumnDef<StudentAssignment>[] = [
    {
      key: "title",
      header: "Assignment",
      cell: (item) => <span className="font-medium text-gray-900">{item.title}</span>,
      className: "w-[280px]",
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => <span className="text-gray-600">{item.course}</span>,
    },
    {
      key: "points",
      header: "Points",
      cell: (item) => <span className="text-gray-600">{item.points}</span>,
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
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}>
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Action",
      cell: (item) => (
        <button
          onClick={() => router.push(`/dashboard/student/assignments/${item.id}`)}
          className="px-4 py-1.5 rounded-lg bg-[#F97316] text-white text-[13px] font-medium hover:bg-[#EA580C] transition-colors"
        >
          View & Submit
        </button>
      ),
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load assignments. Please try again.
        </div>
      ) : assignments.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No assignments found.
        </div>
      ) : (
        <DataTable data={assignments} columns={columns} keyExtractor={(item) => item.id} />
      )}
    </div>
  );
};
