"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { BookOpen, DollarSign, Search, User, Users } from "lucide-react";
import {
  CourseStatusBadge,
  CourseActions,
  mapCourseToCourseData,
} from "./courses-data";
import { Input } from "@/components/ui/input";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { Plus } from "lucide-react";
import { AddCourseModal } from "@/components/modals/courses/add-course-modal";
import { useGetCourses } from "@/hooks/api/use-courses";

export const CoursesList = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [addCourseOpen, setAddCourseOpen] = React.useState(false);

  const { data, isLoading, isError } = useGetCourses();
  const courses = (data?.courses ?? []).map(mapCourseToCourseData);

  return (
    <div className="md:hidden mt-2 bg-white rounded-xl p-2 lg:p-4 relative">
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between pb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-gray-900 shrink-0 mb-1">
            All Courses
          </h2>
          <p className="text-[15px] text-gray-500">
            Manage course content, pricing, and availability
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Search */}
          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
            <Input
              placeholder={`Search courses....`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
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
        <DataList
          data={courses.filter(
            (course) =>
              course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              course.courseId
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              course.instructor
                .toLowerCase()
                .includes(searchQuery.toLowerCase()),
          )}
          keyExtractor={(c) => c.id}
          className="gap-3"
          itemClassName="bg-white border border-gray-100 rounded-xl px-3 py-3"
          renderItem={(course) => (
            <div className="w-full min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="size-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[13px] font-normal text-gray-500">
                      {course.courseId}
                    </span>
                    <span className="mt-0.5 block truncate text-[14px] font-medium text-gray-900">
                      {course.title}
                    </span>
                    <span className="mt-0.5 block truncate text-[13px] text-gray-500">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1 -mr-1">
                  <CourseStatusBadge
                    status={course.status}
                    courseId={course.id}
                  />
                  <CourseActions courseId={course.id} showEdit={false} />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-[#FAFAFA] px-3 py-2.5">
                  <div className="mb-1 flex items-center gap-1.5 text-[13px] font-medium text-gray-500">
                    <DollarSign className="size-3.5 text-primary" />
                    Price
                  </div>
                  <p className="text-[14px] font-medium text-gray-900 tabular-nums">
                    ${course.price}
                  </p>
                </div>
                <div className="rounded-xl bg-[#FAFAFA] px-3 py-2.5">
                  <div className="mb-1 flex items-center gap-1.5 text-[13px] font-medium text-gray-500">
                    <Users className="size-3.5 text-primary" />
                    Enrollments
                  </div>
                  <p className="text-[14px] font-medium text-gray-900 tabular-nums">
                    {course.enrollments}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-white">
                  <User className="size-4 text-gray-600" />
                </span>
                <span className="min-w-0 truncate text-[13px] font-medium text-gray-700">
                  {course.instructor}
                </span>
              </div>
            </div>
          )}
        />
      )}
      {/* Add new Course Mobile Only */}
      <div className="md:hidden fixed flex justify-center items-center right-3 top-[50%] translate-y-[-50%] z-90">
        <AdminDashboardButton
          icon={Plus}
          onClick={() => setAddCourseOpen(true)}
        />
      </div>
      <AddCourseModal
        isOpen={addCourseOpen}
        onClose={() => setAddCourseOpen(false)}
      />
    </div>
  );
};
