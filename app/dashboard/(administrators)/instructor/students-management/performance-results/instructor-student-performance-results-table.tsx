"use client";

import { useState } from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { AppDropdown, AppDropdownItem } from "@/components/ui/app-dropdown";
import { MoreVertical, ClipboardList } from "lucide-react";
import { DUMMY_ASSIGNMENTS, AssignmentData, getAssignmentStatusColor } from "./dummy-performance-data";

export const InstructorStudentPerformanceResultsTable = () => {
  const [activeTab, setActiveTab] = useState<"assignments" | "quizzes" | "projects">("assignments");

  const columns: ColumnDef<AssignmentData>[] = [
    {
      key: "lesson",
      header: "Lesson",
      cell: (item) => (
        <span className="font-medium text-[15px] text-gray-900">{item.lesson}</span>
      ),
    },
    {
      key: "grade",
      header: "Grade",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.grade}</span>
      ),
    },
    {
      key: "submissionDate",
      header: "Submission Date",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.submissionDate}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getAssignmentStatusColor(item.status)}`}>
          {item.status}
        </span>
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

  const renderContent = () => {
    if (activeTab === "assignments") {
      return (
        <div className="bg-white rounded-2xl w-full">
          <div className="flex items-center gap-2 mb-2 p-6 pb-0">
            <ClipboardList className="size-6 text-[#FF5A1F]" />
            <h2 className="text-xl font-bold text-[#1f2937]">Recent Assignments</h2>
          </div>
          <div className="p-6 pt-0">
            <DataTable
              data={DUMMY_ASSIGNMENTS}
              columns={columns}
              keyExtractor={(item) => item.id}
              selectable
            />
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl w-full p-8 flex flex-col items-center justify-center min-h-[300px]">
        <h3 className="text-lg font-bold text-gray-500 capitalize">No {activeTab} yet</h3>
        <p className="text-gray-400 mt-2">There are no {activeTab} to display at this time.</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex border-b border-gray-200 mb-6 w-full">
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 ${activeTab === "assignments" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("assignments")}
        >
          Assignments
        </button>
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 ${activeTab === "quizzes" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("quizzes")}
        >
          Quizzes
        </button>
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 ${activeTab === "projects" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
      </div>
      {renderContent()}
    </div>
  );
};
