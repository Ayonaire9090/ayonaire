"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  CourseStatusBadge,
  CourseActions,
  CourseData,
  mockCourses,
} from "./courses-data";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { AddCourseModal } from "./add-course-modal";

export const CoursesTable = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [addCourseOpen, setAddCourseOpen] = React.useState(false);

  const tableColumns: ColumnDef<CourseData>[] = [
    {
      key: "courseId",
      header: "Course ID",
      cell: (course) => (
        <span className="text-gray-500 text-[15px]">{course.courseId}</span>
      ),
    },
    {
      key: "title",
      header: "Title",
      cell: (course) => (
        <div className="flex flex-col gap-0.5 min-w-[200px]">
          <span className="font-medium text-[15px] text-gray-900">
            {course.title}
          </span>
          <span className="text-[14px] text-gray-400 font-normal">
            {course.category}
          </span>
        </div>
      ),
    },
    {
      key: "instructor",
      header: "Instructor",
      cell: (course) => (
        <span className="text-gray-600 font-medium text-[15px]">
          {course.instructor}
        </span>
      ),
    },
    {
      key: "price",
      header: "Price",
      cell: (course) => (
        <span className="text-gray-600 font-medium text-[15px]">
          ${course.price}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (course) => <CourseStatusBadge status={course.status} />,
    },
    {
      key: "enrollments",
      header: "Enrollments",
      cell: (course) => (
        <span className="text-gray-600 font-medium text-[15px]">
          {course.enrollments}
        </span>
      ),
    },
    {
      key: "action",
      header: <div className="text-right">Action</div>,
      headerClassName: "pr-6",
      className: "pr-6",
      cell: (course) => <CourseActions showTrash={course.id === "6"} />,
    },
  ];

  return (
    <div className="hidden md:block w-full overflow-x-auto mt-6 bg-white rounded-xl p-2 lg:p-4">
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between pb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-gray-900 shrink-0 mb-1">
            All Courses
          </h2>
          <p className="text-[15px] text-gray-500">
            Manage course content, pricing, and availability
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            {/* Search */}
            <div className="hidden md:block relative w-full sm:w-[280px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
              <Input
                placeholder={`Search courses....`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
              />
            </div>
            {/* Add Course Button Desktop Only */}
            <AdminDashboardButton
              title="Add New Course"
              icon={Plus}
              onClick={() => setAddCourseOpen(true)}
            />
          </div>
        </div>
      </div>
      <DataTable
        data={mockCourses.filter(
          (course) =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.courseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
        )}
        columns={tableColumns}
        keyExtractor={(c) => c.id}
        selectable
      />
      <AddCourseModal 
        isOpen={addCourseOpen} 
        onClose={() => setAddCourseOpen(false)} 
      />
    </div>
  );
};
