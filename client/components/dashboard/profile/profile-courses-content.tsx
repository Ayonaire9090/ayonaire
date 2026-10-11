"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProfileCourseCard } from "./profile-course-card";
import { ProfileCerificateContent } from "./profile-certificate-content";
import {
  useGetCompletedCourses,
  useGetEnrolledCourses,
} from "@/hooks/api/use-enrollment";
import { Enrollment } from "@/lib/api/endpoints/enrollment";

type CourseSubTab = "My Courses" | "My Certificates";

const subTabs: CourseSubTab[] = ["My Courses", "My Certificates"];

function getCourseId(enrollment: Enrollment): string {
  return typeof enrollment.course === "string"
    ? enrollment.course
    : enrollment.course?._id ?? enrollment._id;
}

export function ProfileCoursesContent() {
  const [activeSubTab, setActiveSubTab] = useState<CourseSubTab>("My Courses");
  const { data, isLoading, isError } = useGetEnrolledCourses();
  const {
    data: completedData,
    isLoading: isCompletedLoading,
    isError: isCompletedError,
  } = useGetCompletedCourses();
  const completedCourseIds = new Set(
    (completedData?.data ?? []).map((enrollment) => getCourseId(enrollment)),
  );

  const enrolledCourses = (data?.data ?? [])
    .filter((enrollment) => typeof enrollment.course === "object" && enrollment.course)
    .map((enrollment) => {
      const course = enrollment.course as Exclude<typeof enrollment.course, string>;
      const isCompleted =
        enrollment.completed || completedCourseIds.has(getCourseId(enrollment));
      return {
        id: course._id,
        title: course.title,
        description: "",
        imageSrc: course.thumbnail?.url || "/assets/icons/branded-learning.svg",
        status: isCompleted
          ? ("Completed" as const)
          : enrollment.progress > 0
          ? ("In Progress" as const)
          : ("Not Started" as const),
      };
    });

  return (
    <div className="py-6 md:py-8 w-full max-w-[96%] md:max-w-full mx-auto">
      {/* Sub-tabs */}
      <div className="flex gap-6 mb-6 border-b border-gray-100">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={cn(
              "pb-2.5 text-[14px] md:text-[15px] font-semibold transition-colors relative",
              activeSubTab === tab
                ? "text-primary"
                : "text-gray-400 hover:text-gray-600",
            )}
          >
            {tab}
            {activeSubTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* My Courses Tab Content */}
      {activeSubTab === "My Courses" && (
        <div>
          {isLoading || isCompletedLoading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : isError || isCompletedError ? (
            <div className="py-16 text-center">
              <p className="text-red-500 text-[15px]">
                Failed to load your courses. Please try again.
              </p>
            </div>
          ) : enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {enrolledCourses.map((course) => (
                <ProfileCourseCard
                  key={course.id}
                  imageSrc={course.imageSrc}
                  title={course.title}
                  description={course.description}
                  slug={course.id}
                  href={`/dashboard/student/courses/${course.id}`}
                  status={course.status}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-gray-400 text-[15px]">
                You haven&apos;t enrolled in any courses yet.
              </p>
            </div>
          )}
        </div>
      )}

      {/* My Certificates Tab Content */}
      {activeSubTab === "My Certificates" && <ProfileCerificateContent />}
    </div>
  );
}
