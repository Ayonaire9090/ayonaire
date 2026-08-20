"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  CourseStatusBadge,
  CourseActions,
  CourseData,
  mapCourseToCourseData,
} from "./courses-data";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { AddCourseModal } from "@/components/modals/courses/add-course-modal";
import { useGetCourses } from "@/hooks/api/use-courses";

export const CoursesTable = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [addCourseOpen, setAddCourseOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetCourses({
    page,
    limit,
    search: searchQuery || undefined,
  });
  const courses: CourseData[] = (data?.courses ?? []).map(mapCourseToCourseData);
  const totalPages = data?.pagination?.totalPages ?? 1;

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
      cell: (course) => <CourseStatusBadge status={course.status} courseId={course.id} />,
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
      cell: (course) => <CourseActions courseId={course.id} />,
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
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
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load courses. Please try again.
        </div>
      ) : courses.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No courses found.
        </div>
      ) : (
        <DataTable
          data={courses}
          columns={tableColumns}
          keyExtractor={(c) => c.id}
          selectable
          pagination={{
            page: data?.pagination?.page ?? page,
            totalPages,
            onPrev: () => setPage((p) => Math.max(1, p - 1)),
            onNext: () => setPage((p) => Math.min(totalPages, p + 1)),
          }}
        />
      )}
      <AddCourseModal
        isOpen={addCourseOpen}
        onClose={() => setAddCourseOpen(false)}
      />
    </div>
  );
};
