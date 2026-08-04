"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InstructorCourseAnalytics, useInstructorAnalytics } from "./instructor-analytics-data";

export type TableData = {
  id: string;
  courseName: string;
  totalStudents: number;
  completion: number;
  completionColor: "orange" | "purple" | "red";
  avgScore: string;
  revenue: string;
};

export function mapCourseAnalyticsToTableData(data: InstructorCourseAnalytics): TableData {
  const completionColor: TableData["completionColor"] =
    data.completionRate >= 66 ? "orange" : data.completionRate >= 33 ? "purple" : "red";

  return {
    id: data.course._id,
    courseName: data.course.title,
    totalStudents: data.enrollmentCount,
    completion: data.completionRate,
    completionColor,
    avgScore: data.avgQuizScore != null ? `${Math.round(data.avgQuizScore)}/100` : "-",
    revenue: `$${data.revenue.toLocaleString()}`,
  };
}

const completionBarColor: Record<TableData["completionColor"], string> = {
  orange: "bg-[#f97316]",
  purple: "bg-[#a855f7]",
  red: "bg-[#ef4444]",
};
const completionTextColor: Record<TableData["completionColor"], string> = {
  orange: "text-[#f97316]",
  purple: "text-[#a855f7]",
  red: "text-[#ef4444]",
};

const columns: ColumnDef<TableData>[] = [
  {
    key: "courseName",
    header: "Course Name",
    cell: (item) => (
      <span className="text-gray-900 font-medium">{item.courseName}</span>
    ),
  },
  {
    key: "totalStudents",
    header: "Total Students",
    cell: (item) => <span className="text-gray-500">{item.totalStudents}</span>,
  },
  {
    key: "completion",
    header: "Completion %",
    cell: (item) => (
      <div className="flex items-center gap-3">
        <div className="w-16 h-1.5 rounded-full bg-gray-200 overflow-hidden">
          <div
            className={`h-full ${completionBarColor[item.completionColor]}`}
            style={{ width: `${item.completion}%` }}
          ></div>
        </div>
        <span className={`text-[15px] font-medium ${completionTextColor[item.completionColor]}`}>
          {item.completion}%
        </span>
      </div>
    ),
  },
  {
    key: "avgScore",
    header: "Avg Score",
    cell: (item) => <span className="text-gray-500">{item.avgScore}</span>,
  },
  {
    key: "revenue",
    header: "Revenue",
    cell: (item) => <span className="text-gray-500">{item.revenue}</span>,
  },
  {
    key: "actions",
    header: "Actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors outline-none">
            <MoreVertical className="size-5 text-gray-400" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-36 rounded-xl  border-gray-100 p-2"
        >
          <DropdownMenuItem className="cursor-pointer text-[15px] py-2 rounded-lg hover:bg-gray-50">
            View
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export const InstructorStudentAnalyticsOverviewTable = () => {
  const { perCourse, isLoading } = useInstructorAnalytics();
  const tableData = perCourse.map(mapCourseAnalyticsToTableData);

  return (
    <div className="w-full my-6">
      <div className="bg-white rounded-2xl border border-gray-100  p-4 lg:p-6 overflow-x-auto">
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          Course Detailed Analytics
        </h2>
        {isLoading ? (
          <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
        ) : tableData.length === 0 ? (
          <p className="text-sm text-gray-400 py-6 text-center">No courses yet</p>
        ) : (
          <DataTable
            data={tableData}
            columns={columns}
            keyExtractor={(item) => item.id}
            selectable={true}
          />
        )}
      </div>
    </div>
  );
};
