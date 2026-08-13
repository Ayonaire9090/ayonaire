"use client";

import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import { BookOpen, Search, ChevronDown } from "lucide-react";
import { AppSection } from "@/components/app-section";
import {
  StudentCourseCard,
  CourseStatus,
} from "./_components/student-course-card";
import { useState } from "react";
import {
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";
import {
  useGetCompletedCourses,
  useGetEnrolledCourses,
} from "@/hooks/api/use-enrollment";
import { Enrollment } from "@/lib/api/endpoints/enrollment";

function deriveStatus(completed: boolean, progress: number): CourseStatus {
  if (completed) return "Completed";
  if (progress > 0) return "In Progress";
  return "Not Started";
}

function getCourseId(enrollment: Enrollment): string {
  return typeof enrollment.course === "string"
    ? enrollment.course
    : enrollment.course?._id ?? enrollment._id;
}

function StudentCoursesContent() {
  const [activeTab, setActiveTab] = useState("All");
  const { state } = useSidebar();

  // "Expired"/"Paid" have no backend equivalent (enrollments don't carry a
  // payment or expiry status), so those tabs are left non-functional rather
  // than filtering against a guessed field.
  const tabs = ["All", "In Progress", "Completed", "Expired", "Paid"];

  const { data, isLoading, isError } = useGetEnrolledCourses();
  const {
    data: completedData,
    isLoading: isCompletedLoading,
    isError: isCompletedError,
  } = useGetCompletedCourses();
  const completedCourseIds = new Set(
    (completedData?.data ?? []).map((enrollment) => getCourseId(enrollment)),
  );

  const allCourses = (data?.data ?? []).map((enrollment) => {
    const course =
      typeof enrollment.course === "string" ? null : enrollment.course;
    const courseId = getCourseId(enrollment);
    const status = deriveStatus(
      enrollment.completed || completedCourseIds.has(courseId),
      enrollment.progress,
    );

    return {
      id: enrollment._id,
      title: course?.title ?? "Unknown Course",
      // The enrolled-courses list endpoint doesn't project a description
      // field (see GET /api/v1/enrollment/enrolled-courses) - the full
      // description is only available from the course detail endpoint.
      description: "No description available",
      imageSrc: course?.thumbnail?.url || "/assets/images/optin-hero.png",
      slug: courseId,
      status,
      progress: enrollment.progress ?? 0,
      chaptersCompleted: enrollment.comletedLessons?.length ?? 0,
    };
  });

  const filteredCourses = allCourses.filter((c) => {
    if (activeTab === "All") return true;
    if (activeTab === "In Progress") return c.status === "In Progress";
    if (activeTab === "Completed") return c.status === "Completed";
    return false;
  });

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="offcanvas" />
      <SidebarInset className="bg-transparent min-h-screen pb-24">
        <StudentDashboardHeader showLogo={state === "collapsed"} />

        {/* Header App Section */}
        <AppSection
          useSectionSpacing={false}
          className="pt-10 pb-6 lg:pt-14 lg:pb-8 bg-[linear-gradient(178.47deg,#FFAC74_20%,#FFFFFF_85%)]! px-0!"
        >
          <div className="flex flex-col gap-6 lg:gap-8 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight text-center lg:text-left">
              Courses
            </h1>

            {/* Search and Filter Row */}
            <div className="flex items-center gap-2 lg:gap-4 justify-center lg:justify-start">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="search by course title or description"
                  className="w-full bg-white border-none rounded-full py-2.5 lg:py-3.5 pl-12 pr-6 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F86432]/20"
                />
              </div>
              <button className="w-auto flex items-center justify-between gap-1 lg:gap-3 bg-white border-none rounded-full py-2.5 lg:py-3.5 px-3 lg:px-6 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                <span>All Courses</span>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Tabs - Centered */}
          <div className="w-full flex justify-center mt-8 lg:mt-10 px-4">
            <div className="flex items-center gap-1 sm:gap-2 bg-white rounded-full p-1.5 shadow-sm overflow-x-auto hide-scrollbar max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#F86432] text-white"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="shrink-0 flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all">
                Service
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </AppSection>

        {/* Courses Grid */}
        <div className="w-full px-4 lg:px-8 mx-auto py-8 lg:py-12">
          {isLoading || isCompletedLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : isError || isCompletedError ? (
            <div className="flex items-center justify-center py-20 text-[15px] text-red-500">
              Failed to load courses. Please try again.
            </div>
          ) : filteredCourses.length > 0 ? (
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
              {filteredCourses.map((course) => (
                <StudentCourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  imageSrc={course.imageSrc}
                  slug={course.slug}
                  status={course.status}
                  progress={course.progress}
                  chaptersCompleted={course.chaptersCompleted}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
              <BookOpen size={48} className="mb-4 opacity-20" />
              <p className="text-lg">No courses found for this category.</p>
            </div>
          )}
        </div>
      </SidebarInset>
    </>
  );
}

export default function StudentCoursesPage() {
  return <StudentCoursesContent />;
}
