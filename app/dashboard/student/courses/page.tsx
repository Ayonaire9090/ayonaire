"use client";

import { courses } from "@/constants";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import {
  BookOpen,
  Briefcase,
  LayoutTemplate,
  MessageSquare,
  Presentation,
  Video,
  Search,
  ChevronDown,
} from "lucide-react";
import { MobileDashboardFooter } from "@/components/dashboard/mobile-dashboard-footer";
import { AppSection } from "@/components/app-section";
import {
  StudentCourseCard,
  CourseStatus,
} from "./_components/student-course-card";
import { useState } from "react";
import {
  SidebarProvider,
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";

const studentFooterNav = [
  { title: "Feed", url: "/dashboard/student/feed", icon: LayoutTemplate },
  { title: "Workshop", url: "/dashboard/student/workshop", icon: Video },
  {
    title: "Job Fair",
    url: "/dashboard/student/job-sessions",
    icon: Briefcase,
  },
  { title: "Courses", url: "/dashboard/student/courses", icon: BookOpen },
  {
    title: "Messages",
    url: "/dashboard/student/messages",
    icon: MessageSquare,
  },
  {
    title: "Career",
    url: "/dashboard/student/career-accelarator",
    icon: Presentation,
  },
];

function StudentCoursesContent() {
  const [activeTab, setActiveTab] = useState("All");
  const { state } = useSidebar();

  const tabs = ["All", "In Progress", "Completed", "Expired", "Paid"];

  // Flatten courses and assign mock statuses for UI demonstration
  const allCourses = courses
    .flatMap((c) => c.courses)
    .map((c, i) => {
      let status: CourseStatus = "Not Started";
      let progress = 0;
      let chaptersCompleted = 0;

      if (i % 4 === 1) {
        status = "In Progress";
        progress = 33;
        chaptersCompleted = 15;
      } else if (i % 4 === 2) {
        status = "Completed";
        progress = 100;
        chaptersCompleted = 15;
      }

      return { ...c, status, progress, chaptersCompleted };
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
          {filteredCourses.length > 0 ? (
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
              {filteredCourses.map((course, idx) => (
                <StudentCourseCard
                  key={idx}
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

        {/* Mobile bottom navigation */}
        <MobileDashboardFooter items={studentFooterNav} maxVisible={4} />
      </SidebarInset>
    </>
  );
}

export default function StudentCoursesPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <StudentCoursesContent />
    </SidebarProvider>
  );
}
