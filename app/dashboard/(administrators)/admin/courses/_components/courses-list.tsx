"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { Search, User } from "lucide-react";
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
            course.courseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
        )}
        keyExtractor={(c) => c.id}
        renderItem={(course) => (
          <div className="w-full flex flex-col gap-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-[14.5px] text-gray-500 font-normal">
                {course.courseId}
              </span>
              <div className="flex items-center gap-1 -mr-2">
                <CourseStatusBadge status={course.status} courseId={course.id} />
                <CourseActions courseId={course.id} showEdit={false} />
              </div>
            </div>

            <div className="flex flex-col gap-0.5 mt-1 pr-6">
              <span className="text-[16px] font-medium text-gray-900 truncate">
                {course.title}
              </span>
              <span className="text-[14px] text-gray-400 font-normal">
                {course.category}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center justify-center p-1 border border-gray-200 rounded-lg shrink-0">
                <User className="size-[18px] text-gray-800" />
              </div>
              <span className="text-[15px] font-medium text-gray-900 truncate">
                {course.instructor}
              </span>
            </div>

            <div className="flex items-center gap-12 mt-4 mb-2">
              <div className="flex flex-col gap-1">
                <span className="text-[13px] text-gray-500 font-normal">
                  Price
                </span>
                <span className="text-[15px] text-gray-900 font-medium">
                  ${course.price}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[13px] text-gray-500 font-normal">
                  Enrollments
                </span>
                <span className="text-[15px] text-gray-900 font-medium">
                  {course.enrollments}
                </span>
              </div>
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
