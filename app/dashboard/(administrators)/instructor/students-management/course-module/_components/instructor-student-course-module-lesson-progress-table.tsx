"use client";

import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { AppDropdown, AppDropdownItem } from "@/components/ui/app-dropdown";
import { MoreVertical } from "lucide-react";
import {
  DUMMY_LESSONS,
  LessonProgressData,
  getLessonStatusColor,
} from "./dummy-lesson-data";

export const InstructorStudentCourseModuleLessonProgressTable = () => {
  const columns: ColumnDef<LessonProgressData>[] = [
    {
      key: "lesson",
      header: "Lesson",
      cell: (item) => (
        <span className="font-medium text-[15px] text-gray-900">
          {item.lesson}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getLessonStatusColor(item.status)}`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "completionDate",
      header: "Completion Date",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.completionDate}</span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <AppDropdown
          trigger={
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors outline-none focus:ring-2 focus:ring-primary/20">
              <MoreVertical className="size-5 text-black" />
            </button>
          }
        >
          <AppDropdownItem>View</AppDropdownItem>
          <AppDropdownItem>Grade now</AppDropdownItem>
          <AppDropdownItem>Download</AppDropdownItem>
        </AppDropdown>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl w-full p-6">
      <h2 className="text-lg lg:text-xl font-bold text-[#1f2937] mb-4">
        Lesson Progress
      </h2>
      <DataTable
        data={DUMMY_LESSONS}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable
      />
    </div>
  );
};
