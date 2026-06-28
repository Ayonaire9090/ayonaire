"use client";

import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { AppDropdown, AppDropdownItem } from "@/components/ui/app-dropdown";
import { MoreVertical, Download } from "lucide-react";
import { DUMMY_STUDENTS, StudentData, getStatusColor, getProgressColor } from "./dummy-data";
import { Button } from "@/components/ui/button";

export const InstructorStudentManagementTable = () => {
  const columns: ColumnDef<StudentData>[] = [
    {
      key: "student",
      header: "Student Name",
      cell: (item) => (
        <span className="font-medium text-[15px] text-gray-900">
          {item.name}
        </span>
      ),
    },
    {
      key: "email",
      header: "Email",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.email}</span>
      ),
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => (
        <span className="text-[15px] text-gray-600 w-32 inline-block">
          {item.course}
        </span>
      ),
    },
    {
      key: "quizScore",
      header: "Quiz Score",
      cell: (item) => (
        <span className="text-[15px] text-gray-600">{item.quizScore}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
        >
          {item.status === "Submitted" ? "Submited" : item.status}
        </span>
      ),
    },
    {
      key: "progress",
      header: "Progress",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-20 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${item.progress}%`,
                backgroundColor: getProgressColor(item.status),
              }}
            />
          </div>
          <span
            className={`text-[15px] font-medium`}
            style={{ color: getProgressColor(item.status) }}
          >
            {item.progress}%
          </span>
        </div>
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

  const footerContent = (
    <div className="flex justify-between items-center w-full mt-2">
      <Button variant="outline" className="border-gray-200 text-gray-500 shadow-none hover:bg-gray-50 h-12 px-4 rounded-xl font-medium">
        <Download className="size-5" />
        <span className="hidden sm:inline">Export Students</span>
      </Button>
      <div className="flex items-center gap-3">
        <Button variant="outline" className="border-gray-200 text-gray-500 shadow-none hover:bg-gray-50 h-12 px-5 rounded-xl font-medium">
          Send Announcement
        </Button>
        <Button className="h-12 px-6 rounded-xl bg-[#FF5A1F] hover:bg-[#E04D19] text-white shadow-none border-none font-medium">
          Send Message
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-6 w-full">
      <DataTable
        data={DUMMY_STUDENTS}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable
        footerContent={footerContent}
      />
    </div>
  );
};
