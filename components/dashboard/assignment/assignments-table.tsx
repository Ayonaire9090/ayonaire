"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  Assignment,
  mapAssignmentRecordToAssignment,
} from "./assignments-data";
import { AssignmentsActions } from "./assignments-actions";
import { AssignmentsFilters } from "./assignments-filters";
import { useGetAssignments } from "@/hooks/api/use-assignments";

const getTypeStyle = (type: string) => {
  switch (type) {
    case "Project":
      return "bg-[#FFF8E6] text-[#F59E0B]";
    case "Quiz":
      return "bg-[#F3E8FF] text-[#A855F7]";
    case "File":
      return "bg-[#EFF6FF] text-[#3B82F6]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

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

const columns: ColumnDef<Assignment>[] = [
  {
    key: "title",
    header: "Assignment Title",
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
    key: "cohort",
    header: "Class/Cohort",
    cell: (item) => <span className="text-gray-600">{item.cohort}</span>,
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
    key: "dueDate",
    header: "Due Date",
    cell: (item) => <span className="text-gray-600">{item.dueDate}</span>,
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
        Math.round((item.submittedCount / item.totalStudents) * 100),
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
            {item.submittedCount} / {item.totalStudents}
          </span>
        </div>
      );
    },
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
    cell: (item) => <AssignmentsActions assignmentId={item.id} status={item.status} />,
  },
];

interface AssignmentsTableProps {
  type?: "admin" | "instructor";
}
export const AssignmentsTable = ({ type = "admin" }: AssignmentsTableProps) => {
  const { data, isLoading, isError } = useGetAssignments();
  const assignments: Assignment[] = (data?.assignments ?? []).map(mapAssignmentRecordToAssignment);

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      {type === "admin" && <AssignmentsFilters />}
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
        <DataTable
          data={assignments}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={true}
        />
      )}
    </div>
  );
};
