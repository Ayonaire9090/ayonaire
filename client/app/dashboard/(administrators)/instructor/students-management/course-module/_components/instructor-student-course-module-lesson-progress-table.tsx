"use client";

import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { AppDropdown, AppDropdownItem } from "@/components/ui/app-dropdown";
import { MoreVertical } from "lucide-react";
import { LessonRow, getLessonStatusColor } from "./instructor-course-module-data";

interface InstructorStudentCourseModuleLessonProgressTableProps {
  rows: LessonRow[];
  isLoading?: boolean;
}

export const InstructorStudentCourseModuleLessonProgressTable = ({
  rows,
  isLoading,
}: InstructorStudentCourseModuleLessonProgressTableProps) => {
  const columns: ColumnDef<LessonRow>[] = [
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
        </AppDropdown>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl w-full p-6">
      <h2 className="text-lg lg:text-xl font-bold text-[#1f2937] mb-4">
        Lesson Progress
      </h2>
      {isLoading ? (
        <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-gray-400 py-6 text-center">No lessons for this course yet</p>
      ) : (
        <DataTable
          data={rows}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable
        />
      )}
    </div>
  );
};
