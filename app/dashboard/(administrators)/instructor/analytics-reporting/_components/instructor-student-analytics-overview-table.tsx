"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type TableData = {
  id: string;
  type: "course" | "assignment";
  col1: { text: string; badge?: { text: string; color: "purple" | "red" } };
  col2: string; // Total Students / Course Name
  col3: {
    type: "progress" | "text";
    value: number | string;
    color?: "orange" | "purple" | "red";
  }; // Completion % / Total Points
  col4: string; // Avg Score / Avg Points
  col5: {
    type: "text" | "progress_badge";
    text?: string;
    progress?: number;
    progressColor?: "purple" | "red";
    badge?: { text: string; color: "purple" | "red" };
  }; // Revenue / Progress + Status
};

export const tableData: TableData[] = [
  {
    id: "1",
    type: "course",
    col1: { text: "Advanced JavaScript Mastery" },
    col2: "3,420",
    col3: { type: "progress", value: 82, color: "orange" },
    col4: "88/100",
    col5: { type: "text", text: "$42,500" },
  },
  {
    id: "2",
    type: "course",
    col1: { text: "UI/UX Foundations 2024" },
    col2: "3,420",
    col3: { type: "progress", value: 50, color: "purple" },
    col4: "92/100",
    col5: { type: "text", text: "$34,200" },
  },
  {
    id: "3",
    type: "course",
    col1: { text: "Figma Prototype" },
    col2: "3,420",
    col3: { type: "progress", value: 25, color: "red" },
    col4: "92/100",
    col5: { type: "text", text: "92/100" },
  },
  {
    id: "4",
    type: "assignment",
    col1: {
      text: "Node.js Final Project",
      badge: { text: "Assignment", color: "purple" },
    },
    col2: "AI Automation",
    col3: { type: "text", value: "30" },
    col4: "15",
    col5: {
      type: "progress_badge",
      progress: 50,
      progressColor: "purple",
      badge: { text: "Closed", color: "purple" },
    },
  },
  {
    id: "5",
    type: "assignment",
    col1: {
      text: "Figma Prototype",
      badge: { text: "Assignment", color: "red" },
    },
    col2: "Data Science",
    col3: { type: "text", value: "60" },
    col4: "55",
    col5: {
      type: "progress_badge",
      progress: 25,
      progressColor: "red",
      badge: { text: "Active", color: "red" },
    },
  },
];

const columns: ColumnDef<TableData>[] = [
  {
    key: "courseName",
    header: "Course Name",
    cell: (item) => (
      <div className="flex items-center gap-3">
        <span className="text-gray-900 font-medium">{item.col1.text}</span>
        {item.col1.badge && (
          <Badge
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium border-transparent ${
              item.col1.badge.color === "purple"
                ? "bg-purple-100 text-purple-600 hover:bg-purple-100"
                : "bg-red-100 text-red-600 hover:bg-red-100"
            }`}
          >
            {item.col1.badge.text}
          </Badge>
        )}
      </div>
    ),
  },
  {
    key: "totalStudents",
    header: "Total Students",
    cell: (item) => <span className="text-gray-500">{item.col2}</span>,
  },
  {
    key: "completion",
    header: "Completion %",
    cell: (item) => {
      if (item.col3.type === "progress") {
        return (
          <div className="flex items-center gap-3">
            <div className="w-16 h-1.5 rounded-full bg-gray-200 overflow-hidden">
              <div
                className={`h-full ${
                  item.col3.color === "orange"
                    ? "bg-[#f97316]"
                    : item.col3.color === "purple"
                      ? "bg-[#a855f7]"
                      : "bg-[#ef4444]"
                }`}
                style={{ width: `${item.col3.value}%` }}
              ></div>
            </div>
            <span
              className={`text-[15px] font-medium ${
                item.col3.color === "orange"
                  ? "text-[#f97316]"
                  : item.col3.color === "purple"
                    ? "text-[#a855f7]"
                    : "text-[#ef4444]"
              }`}
            >
              {item.col3.value}%
            </span>
          </div>
        );
      }
      return <span className="text-gray-500">{item.col3.value}</span>;
    },
  },
  {
    key: "avgScore",
    header: "Avg Score",
    cell: (item) => <span className="text-gray-500">{item.col4}</span>,
  },
  {
    key: "revenue",
    header: "Revenue",
    cell: (item) => {
      if (item.col5.type === "text") {
        return <span className="text-gray-500">{item.col5.text}</span>;
      }
      if (item.col5.type === "progress_badge") {
        return (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className={`h-full ${
                    item.col5.progressColor === "purple"
                      ? "bg-[#a855f7]"
                      : "bg-[#ef4444]"
                  }`}
                  style={{ width: `${item.col5.progress}%` }}
                ></div>
              </div>
              <span
                className={`text-[15px] font-medium ${
                  item.col5.progressColor === "purple"
                    ? "text-[#a855f7]"
                    : "text-[#ef4444]"
                }`}
              >
                {item.col5.progress}%
              </span>
            </div>
            {item.col5.badge && (
              <Badge
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium border-transparent ${
                  item.col5.badge.color === "purple"
                    ? "bg-purple-100 text-purple-600 hover:bg-purple-100"
                    : "bg-red-100 text-red-600 hover:bg-red-100"
                }`}
              >
                {item.col5.badge.text}
              </Badge>
            )}
          </div>
        );
      }
      return null;
    },
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
          <DropdownMenuItem className="cursor-pointer text-[15px] py-2 rounded-lg hover:bg-gray-50">
            Grade now
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export const InstructorStudentAnalyticsOverviewTable = () => {
  return (
    <div className="w-full my-6">
      <div className="bg-white rounded-2xl border border-gray-100  p-4 lg:p-6 overflow-x-auto">
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          Course Detailed Analytics
        </h2>
        <DataTable
          data={tableData}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={true}
        />
      </div>
    </div>
  );
};
