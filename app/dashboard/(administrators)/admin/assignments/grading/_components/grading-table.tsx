"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  GradingData,
  GradingStatusBadge,
  GradingActions,
  mockGradingData,
} from "./grading-data";

export const GradingTable = ({ searchQuery }: { searchQuery: string }) => {
  const filteredData = mockGradingData.filter(
    (item) =>
      item.student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.assignment.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const tableColumns: ColumnDef<GradingData>[] = [
    {
      key: "student",
      header: "Student Name",
      cell: (item) => (
        <span className="text-gray-900 text-[14px] font-medium whitespace-nowrap">
          {item.student.name}
        </span>
      ),
    },
    {
      key: "assignment",
      header: "Assignment",
      cell: (item) => (
        <div className="flex flex-col gap-0.5">
          <span className="text-gray-600 text-[13px] leading-tight">
            {item.course}
          </span>
          <span className="text-gray-600 text-[13px] leading-tight">
            {item.assignment}
          </span>
        </div>
      ),
    },
    {
      key: "submission",
      header: "Submission",
      cell: (item) => (
        <span className="text-gray-600 text-[14px] whitespace-nowrap">
          {item.submission}
        </span>
      ),
    },
    {
      key: "score",
      header: "Score",
      cell: (item) => (
        <span className="text-gray-600 text-[14px] whitespace-nowrap">
          {item.score}
        </span>
      ),
    },
    {
      key: "grade",
      header: "Grade",
      cell: (item) => (
        <span className="text-gray-600 text-[14px] whitespace-nowrap">
          {item.grade}
        </span>
      ),
    },
    {
      key: "feedback",
      header: "Feedback",
      cell: (item) => (
        <span className="text-gray-500 text-[14px] max-w-[200px] block truncate">
          {item.feedback}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => <GradingStatusBadge status={item.status} />,
    },
    {
      key: "actions",
      header: "Actions",
      headerClassName: "pr-4",
      className: "pr-4",
      cell: (item) => <GradingActions id={item.id} />,
    },
  ];

  return (
    <div className="hidden md:block w-full overflow-x-auto">
      {/* Table */}
      <div className="overflow-x-auto">
        <DataTable
          data={filteredData}
          columns={tableColumns}
          keyExtractor={(o) => o.id}
          selectable
        />
      </div>
    </div>
  );
};
