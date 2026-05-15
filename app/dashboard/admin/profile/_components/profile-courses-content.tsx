"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProfileCourseCard } from "./profile-course-card";
import { ProfileCerificateContent } from "./profile-certificate-content";
import { courses } from "@/constants";

type CourseSubTab = "My Courses" | "My Certificates";

// Flatten all courses from the categories and assign mock statuses for demo
const allCourses = courses.flatMap((category) =>
  category.courses.map((course) => ({
    title: course.title,
    description: course.description,
    imageSrc: course.imageSrc,
    slug: course.slug,
  })),
);

// Mock enrolled courses for demo (simulate user's enrolled courses with statuses)
const enrolledCourses = [
  { ...allCourses[0], status: "Completed" as const },
  { ...allCourses[1], status: "Completed" as const },
  { ...allCourses[2], status: "In Progress" as const },
  { ...allCourses[3], status: "Completed" as const },
  { ...allCourses[4], status: "In Progress" as const },
];

const subTabs: CourseSubTab[] = ["My Courses", "My Certificates"];

export function ProfileCoursesContent() {
  const [activeSubTab, setActiveSubTab] = useState<CourseSubTab>("My Courses");

  return (
    <div className="py-6 md:py-8">
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
          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {enrolledCourses.map((course) => (
                <ProfileCourseCard
                  key={course.slug}
                  imageSrc={course.imageSrc}
                  title={course.title}
                  description={course.description}
                  slug={course.slug}
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
      {activeSubTab === "My Certificates" && (
        <ProfileCerificateContent />
      )}
    </div>
  );
}
