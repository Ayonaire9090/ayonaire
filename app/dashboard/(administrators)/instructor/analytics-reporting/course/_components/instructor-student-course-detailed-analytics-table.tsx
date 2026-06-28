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

export type DetailedAnalyticsData = {
  id: string;
  course: string;
  cohort: string;
  notification: string;
  student: string;
  date: string;
  time: string;
  status: "Read" | "Unread";
  statusColor: "blue" | "orange" | "red";
};

export const detailedAnalyticsData: DetailedAnalyticsData[] = [
  {
    id: "1",
    course: "AI Engineering",
    cohort: "Cohort: SP-24",
    notification: "New Student Enrolled",
    student: "Sarah Khan",
    date: "Oct 24, 2023",
    time: "02:30 PM",
    status: "Read",
    statusColor: "blue",
  },
  {
    id: "2",
    course: "AI Engineering",
    cohort: "Cohort: SP-24",
    notification: "Assignment Submitted",
    student: "Sarah Khan",
    date: "Oct 24, 2023",
    time: "02:30 PM",
    status: "Read",
    statusColor: "orange",
  },
  {
    id: "3",
    course: "AI Engineering",
    cohort: "Cohort: SP-24",
    notification: "Quiz Completed (100%)",
    student: "Sarah Khan",
    date: "Oct 24, 2023",
    time: "02:30 PM",
    status: "Unread",
    statusColor: "red",
  },
];

const columns: ColumnDef<DetailedAnalyticsData>[] = [
  {
    key: "course",
    header: "Course",
    cell: (item) => (
      <div className="flex flex-col gap-0.5">
        <span className="text-gray-900 font-semibold text-[15px]">
          {item.course}
        </span>
        <span className="text-gray-400 text-[13px]">{item.cohort}</span>
      </div>
    ),
  },
  {
    key: "notification",
    header: "Notification",
    cell: (item) => (
      <span className="text-gray-500 text-[15px]">{item.notification}</span>
    ),
  },
  {
    key: "student",
    header: "Student",
    cell: (item) => (
      <span className="text-gray-900 font-semibold text-[15px]">
        {item.student}
      </span>
    ),
  },
  {
    key: "date",
    header: "Date",
    cell: (item) => (
      <span className="text-gray-500 text-[15px] whitespace-nowrap">
        {item.date} · {item.time}
      </span>
    ),
  },
  {
    key: "status",
    header: "Status",
    cell: (item) => (
      <Badge
        className={`rounded-full px-3 py-1 text-xs font-medium border-transparent ${
          item.statusColor === "blue"
            ? "bg-blue-50 text-blue-500 hover:bg-blue-50"
            : item.statusColor === "orange"
            ? "bg-orange-50 text-orange-500 hover:bg-orange-50"
            : "bg-red-50 text-red-500 hover:bg-red-50"
        }`}
      >
        {item.status}
      </Badge>
    ),
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
          className="w-36 rounded-xl border-gray-100 p-2 shadow-lg"
        >
          <DropdownMenuItem className="cursor-pointer text-[15px] py-2 rounded-lg hover:bg-gray-50">
            View
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-[15px] py-2 rounded-lg hover:bg-gray-50">
            Grade Now
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export const InstructorCourseDetailedAnalyticsTable = () => {
  return (
    <div className="w-full my-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-4 lg:p-6 overflow-x-auto">
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          Course Detailed Analytics
        </h2>
        <DataTable
          data={detailedAnalyticsData}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={true}
        />
      </div>
    </div>
  );
};
