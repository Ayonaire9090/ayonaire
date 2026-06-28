"use client";

import React, { useState } from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Download, Trash2, Eye } from "lucide-react";

export interface CommunicationItem {
  id: string;
  title: string;
  description: string;
  course: string;
  dateCreated: string;
  status: "Sent" | "Draft";
  views: number;
}

export const mockCommunications: CommunicationItem[] = [
  {
    id: "1",
    title: "Welcome to the Course!",
    description: "Hello everyone! I'm excited to start this seme",
    course: "AI Engineering",
    dateCreated: "Mar 11, 2026",
    status: "Sent",
    views: 453,
  },
  {
    id: "2",
    title: "Midterm Exam Date Changed",
    description: "Please note that the midterm exam has been",
    course: "Data Science",
    dateCreated: "Mar 11, 2026",
    status: "Draft",
    views: 0,
  },
  {
    id: "3",
    title: "Welcome to the Course!",
    description: "Hello everyone! I'm excited to start this seme",
    course: "AI Engineering",
    dateCreated: "Mar 11, 2026",
    status: "Sent",
    views: 453,
  },
];

export const InstructorAnalyticsCommunicationTable = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  const columns: ColumnDef<CommunicationItem>[] = [
    {
      key: "title",
      header: "Title",
      headerClassName: "pl-4",
      cell: (item) => (
        <div className="flex flex-col pl-4 py-2">
          <span className="font-semibold text-gray-900 text-[15px] leading-tight">
            {item.title}
          </span>
          <span className="text-gray-400 text-[13px] mt-0.5 font-normal truncate max-w-[340px]">
            {item.description}
          </span>
        </div>
      ),
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => {
        const words = item.course.split(" ");
        return (
          <div className="flex flex-col text-gray-900 text-[15px] font-medium leading-tight">
            {words.map((word, idx) => (
              <span key={idx}>{word}</span>
            ))}
          </div>
        );
      },
    },
    {
      key: "dateCreated",
      header: "Date Created",
      cell: (item) => (
        <span className="text-gray-600 text-[15px] font-medium">
          {item.dateCreated}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => {
        const isSent = item.status === "Sent";
        return (
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
              isSent
                ? "bg-[#A855F7]/10 text-[#A855F7]"
                : "bg-[#10B981]/10 text-[#10B981]"
            }`}
          >
            {item.status}
          </span>
        );
      },
    },
    {
      key: "views",
      header: "Views",
      cell: (item) => (
        <span className="text-gray-900 text-[15px] font-semibold">
          {item.views}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors outline-none">
              <MoreVertical className="size-5 text-gray-600" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-36 bg-white border border-gray-100 rounded-lg  p-1"
          >
            <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
              <Eye className="size-4 text-gray-400" />
              <span>View</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md cursor-pointer transition-colors">
              <Trash2 className="size-4 text-red-500" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-[16px] p-6  border border-gray-100/50 mb-6">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 text-gray-600 text-sm font-semibold">
          <button className="px-4 py-2 border border-gray-200 hover:border-gray-300 rounded-full text-gray-700 bg-white transition-all">
            {selectedCount} Selected
          </button>
          <button className="hover:text-gray-900 transition-colors">
            Delete
          </button>
          <button className="hover:text-gray-900 transition-colors">
            Send to Multiple
          </button>
          <button className="hover:text-gray-900 transition-colors">
            Important
          </button>
        </div>
        <button className="p-2.5 text-gray-700 hover:text-black hover:bg-gray-50 rounded-full border border-gray-100 transition-all">
          <Download className="size-5" />
        </button>
      </div>

      {/* Data Table */}
      <DataTable
        data={mockCommunications}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable={true}
        onSelectionChange={(selectedIds) => setSelectedCount(selectedIds.size)}
      />
    </div>
  );
};
