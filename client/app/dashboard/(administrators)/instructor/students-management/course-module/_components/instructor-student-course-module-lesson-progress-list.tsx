"use client";

import { DataList } from "@/components/ui/data-list";
import { AppDropdown, AppDropdownItem } from "@/components/ui/app-dropdown";
import { MoreVertical } from "lucide-react";
import { LessonRow, getLessonStatusColor } from "./instructor-course-module-data";
import { Checkbox } from "@/components/ui/checkbox";

interface InstructorStudentCourseModuleLessonProgressListProps {
  rows: LessonRow[];
  isLoading?: boolean;
}

export const InstructorStudentCourseModuleLessonProgressList = ({
  rows,
  isLoading,
}: InstructorStudentCourseModuleLessonProgressListProps) => {
  return (
    <div className="bg-white rounded-2xl w-full p-4">
      <h2 className="text-lg font-bold text-[#1f2937] mb-4 px-1">
        Lesson Progress
      </h2>
      {isLoading ? (
        <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-gray-400 py-6 text-center">No lessons for this course yet</p>
      ) : (
        <DataList
          data={rows}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <div className="flex w-full items-start gap-4">
              <Checkbox className="rounded-[4px] border-gray-300 bg-white mt-1 shrink-0" />
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-900 text-[15px]">
                    {item.lesson}
                  </h4>
                  <AppDropdown
                    trigger={
                      <button className="-mr-2 -mt-1 p-1 hover:bg-gray-200 rounded-full transition-colors">
                        <MoreVertical className="size-5 text-black" />
                      </button>
                    }
                  >
                    <AppDropdownItem>View</AppDropdownItem>
                  </AppDropdown>
                </div>

                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getLessonStatusColor(item.status)}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          )}
        />
      )}
    </div>
  );
};
