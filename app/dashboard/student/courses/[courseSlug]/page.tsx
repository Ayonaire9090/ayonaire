"use client";

import { useState, use } from "react";
import { courses } from "@/constants";
import { notFound } from "next/navigation";
import { LessonHeader } from "../_components/lesson-header";
import { LessonVideoPlayer } from "../_components/lesson-video-player";
import { LessonTabs } from "../_components/lesson-tabs";
import { CourseSidebarSheet } from "../_components/course-sidebar-sheet";
import { CourseContentAccordion } from "../_components/course-content-accordion";
import { CourseAiAssistant } from "../_components/course-ai-assistant";
import { CourseOverview } from "../_components/course-overview";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../../_components/student-home-sidebar-content";
import { CourseQAndA } from "../_components/course-q-and-a";
import { CourseNotes } from "../_components/course-notes";
import { CourseAnnouncements } from "../_components/course-announcements";
import { CourseReviews } from "../_components/course-reviews";
import { CourseLearningTools } from "../_components/course-learning-tools";
import { cn } from "@/lib/utils";
import { CourseResources } from "../_components/course-resources";
import { CourseTranscription } from "../_components/course-transcription";

export default function StudentCourseLessonPage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState("Course Content");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Find the course by slug
  const allCourses = courses.flatMap((c) => c.courses);
  const course = allCourses.find((c) => c.slug === resolvedParams.courseSlug);

  if (!course) {
    // In a real app we might redirect or show a 404, for now let's just fall back to a mock title
    // return notFound();
  }

  const title = course?.title || "Prompt Engineering for AI Systems";

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="offcanvas" />
      <SidebarInset className="bg-transparent min-h-screen">
        <div
          className={cn(
            "flex flex-col min-h-screen pb-24",
            ["Course Content", "Ai assistant", "Q&A"].includes(activeTab)
              ? "bg-white"
              : "bg-[#F6F6F6]",
            (activeTab === "Overview" ||
              activeTab === "Notes" ||
              activeTab === "Learning Tools" ||
              activeTab === "Resources") &&
              "bg-white lg:bg-[#F6F6F6]",
          )}
        >
          {/* Black top section for Header and Video */}
          <div className="bg-black w-full flex flex-col">
            <LessonHeader title={title} />
            <div className="w-full relative">
              <LessonVideoPlayer onOpenChapters={() => setIsSheetOpen(true)} />
            </div>
          </div>

          {/* Tabs and Content Section */}
          <div className="w-full flex flex-col flex-1">
            <LessonTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Main Content Area */}
            <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:p-8">
              {/* Placeholder for tab contents */}
              {activeTab === "Transcription" ? (
                <div className="max-w-4xl mx-auto w-full pt-4">
                  <CourseTranscription />
                </div>
              ) : activeTab === "Course Content" ? (
                <div className="max-w-3xl mx-auto">
                  <CourseContentAccordion />
                </div>
              ) : activeTab === "Ai Assistant" ? (
                <div className="max-w-3xl mx-auto h-fit border border-gray-100 rounded-xl overflow-hidden">
                  <CourseAiAssistant className="h-full" />
                </div>
              ) : activeTab === "Overview" ? (
                <div className="max-w-4xl mx-auto w-full pt-4">
                  <CourseOverview title={title} />
                </div>
              ) : activeTab === "Resources" ? (
                <div className="max-w-4xl mx-auto w-full pt-4">
                  <CourseResources />
                </div>
              ) : activeTab === "Q&A" ? (
                <div className="max-w-3xl mx-auto w-full">
                  <CourseQAndA />
                </div>
              ) : activeTab === "Notes" ? (
                <div className="max-w-3xl mx-auto w-full">
                  <CourseNotes />
                </div>
              ) : activeTab === "Announcement" ? (
                <div className="max-w-3xl mx-auto w-full">
                  <CourseAnnouncements />
                </div>
              ) : activeTab === "Reviews" ? (
                <div className="max-w-5xl mx-auto w-full">
                  <CourseReviews />
                </div>
              ) : activeTab === "Learning Tools" ? (
                <div className="max-w-4xl mx-auto w-full">
                  <CourseLearningTools />
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  {activeTab} content will be rendered here.
                </div>
              )}
            </div>
          </div>
        </div>
        <CourseSidebarSheet open={isSheetOpen} onOpenChange={setIsSheetOpen} />
      </SidebarInset>
    </>
  );
}
