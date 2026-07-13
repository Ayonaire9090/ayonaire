"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useAuthStore } from "@/store/auth.store";

interface AssignedCourse {
  id: string;
  title: string;
  status: "Ongoing" | "Draft";
  studentsCount: number;
}

function toCardStatus(status?: string): "Ongoing" | "Draft" {
  return status?.toLowerCase() === "active" ||
    status?.toLowerCase() === "published"
    ? "Ongoing"
    : "Draft";
}

export const InstructorDashboardAssignedCourses = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const { data, isLoading, isError } = useGetCourses();

  const assignedCourses: AssignedCourse[] = (data?.data ?? [])
    .filter((course) => {
      const instructorId =
        typeof course.instructor === "string"
          ? course.instructor
          : course.instructor?._id;
      return instructorId === user?._id;
    })
    .slice(0, 3)
    .map((course) => ({
      id: course._id,
      title: course.title,
      status: toCardStatus(course.status),
      studentsCount: course.enrollmentCount ?? 0,
    }));

  return (
    <div className="rounded-2xl bg-white overflow-hidden flex flex-col h-full border border-gray-100/80">
      {/* Header */}
      <div className="px-5 py-4 bg-[#FFF5F1] border-b border-[#F86432]/10">
        <h3 className="text-lg font-bold text-gray-900">Assigned Courses</h3>
      </div>

      {/* Courses List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load courses. Please try again.
        </div>
      ) : assignedCourses.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No courses assigned yet.
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-gray-100 flex-1">
          {assignedCourses.map((course) => (
            <div
              key={course.id}
              className="p-5 flex flex-col gap-3 hover:bg-gray-50/40 transition-colors"
            >
              {/* Row 1: Title & Status */}
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-gray-900 tracking-tight">
                  {course.title}
                </h4>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF0EB] text-[#F86432]">
                  {course.status}
                </span>
              </div>

              {/* Row 2: Student Count & Action */}
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-400 font-medium">
                  {course.studentsCount} Students
                </span>
                <button
                  onClick={() =>
                    router.push("/dashboard/instructor/courses")
                  }
                  className="text-gray-500 hover:text-gray-900 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
