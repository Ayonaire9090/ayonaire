"use client";

// Standalone, auth-free preview of the student lesson/video screen so the
// real components can be reviewed without an account or enrolled course.
// Safe to delete before launch.

import { useState } from "react";
import { LessonHeader } from "@/app/dashboard/student/courses/_components/lesson-header";
import { LessonVideoPlayer } from "@/app/dashboard/student/courses/_components/lesson-video-player";
import { LessonTabs } from "@/app/dashboard/student/courses/_components/lesson-tabs";
import { CourseSidebarSheet } from "@/app/dashboard/student/courses/_components/course-sidebar-sheet";
import { CourseContentAccordion } from "@/app/dashboard/student/courses/_components/course-content-accordion";
import { CourseAiAssistant } from "@/app/dashboard/student/courses/_components/course-ai-assistant";
import { CourseOverview } from "@/app/dashboard/student/courses/_components/course-overview";
import { CourseQAndA } from "@/app/dashboard/student/courses/_components/course-q-and-a";
import { CourseNotes } from "@/app/dashboard/student/courses/_components/course-notes";
import { CourseReviews } from "@/app/dashboard/student/courses/_components/course-reviews";
import { CourseLearningTools } from "@/app/dashboard/student/courses/_components/course-learning-tools";
import { CourseResources } from "@/app/dashboard/student/courses/_components/course-resources";
import { CourseTranscription } from "@/app/dashboard/student/courses/_components/course-transcription";
import { ModuleWithLessons, LessonWithProgress } from "@/lib/api/endpoints/lessons";
import { cn } from "@/lib/utils";

const DEMO_VIDEO = "/assets/videos/learning-tips-demo.mp4";

function sampleLesson(
  id: string,
  moduleId: string,
  title: string,
  order: number,
  options: { isCompleted?: boolean; noVideo?: boolean } = {},
): LessonWithProgress {
  return {
    _id: id,
    title,
    module: moduleId,
    course: "preview-course",
    order,
    duration: 480,
    isPublished: true,
    isFreePreview: order === 1,
    isLocked: false,
    videos: options.noVideo
      ? []
      : [{ title, url: DEMO_VIDEO, publicId: `preview-${id}`, duration: 480 }],
    materials: [
      { name: `${title} - Slides.pdf`, url: DEMO_VIDEO, publicId: `mat-${id}-1` },
      { name: `${title} - Starter Code.zip`, url: DEMO_VIDEO, publicId: `mat-${id}-2` },
    ],
    isCompleted: options.isCompleted ?? false,
  };
}

const SAMPLE_MODULES: ModuleWithLessons[] = [
  {
    _id: "m1",
    title: "Module 1: Getting Started",
    description: "Foundations and course orientation.",
    course: "preview-course",
    order: 1,
    lessons: [
      sampleLesson("l1", "m1", "Welcome & What You'll Learn", 1, { isCompleted: true }),
      sampleLesson("l2", "m1", "Setting Up Your Environment", 2, { isCompleted: true }),
      sampleLesson("l3", "m1", "Your First Project", 3),
    ],
  },
  {
    _id: "m2",
    title: "Module 2: Core Concepts",
    description: "The fundamental building blocks.",
    course: "preview-course",
    order: 2,
    lessons: [
      sampleLesson("l4", "m2", "Understanding the Basics", 1),
      sampleLesson("l5", "m2", "Working With Real Data", 2),
      sampleLesson("l6", "m2", "Common Pitfalls to Avoid", 3, { noVideo: true }),
    ],
  },
  {
    _id: "m3",
    title: "Module 3: Putting It Into Practice",
    description: "Hands-on application of everything so far.",
    course: "preview-course",
    order: 3,
    lessons: [
      sampleLesson("l7", "m3", "Building the Final Project", 1),
      sampleLesson("l8", "m3", "Review & Next Steps", 2),
    ],
  },
];

export default function LessonScreenPreviewPage() {
  const [activeTab, setActiveTab] = useState("Course Content");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedLessonId, setSelectedLessonId] = useState("l3");

  const flatLessons = SAMPLE_MODULES.flatMap((m) => m.lessons);
  const activeLesson = flatLessons.find((l) => l._id === selectedLessonId);
  const activeLessonIndex = flatLessons.findIndex(
    (l) => l._id === selectedLessonId,
  );
  const previousLesson =
    activeLessonIndex > 0 ? flatLessons[activeLessonIndex - 1] : undefined;
  const nextLesson =
    activeLessonIndex >= 0 && activeLessonIndex < flatLessons.length - 1
      ? flatLessons[activeLessonIndex + 1]
      : undefined;

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setIsSheetOpen(false);
  };

  return (
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
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-[13px] text-center py-2 px-4">
        Preview mode — this is the real lesson screen rendered with sample
        data, no login required. Progress won&apos;t be saved here.
      </div>

      {/* Black top section for Header and Video */}
      <div className="bg-black w-full flex flex-col">
        <LessonHeader title={activeLesson?.title ?? "Sample Course"} />
        <div className="w-full relative">
          <LessonVideoPlayer
            lessonId={activeLesson?._id}
            courseId="preview-course"
            videoUrl={activeLesson?.videos?.[0]?.url}
            isCompleted={activeLesson?.isCompleted}
            onOpenChapters={() => setIsSheetOpen(true)}
            hasPrevious={!!previousLesson}
            hasNext={!!nextLesson}
            nextLessonTitle={nextLesson?.title}
            onPrevious={() =>
              previousLesson && handleSelectLesson(previousLesson._id)
            }
            onNext={() => nextLesson && handleSelectLesson(nextLesson._id)}
          />
        </div>
      </div>

      {/* Tabs and Content Section */}
      <div className="w-full flex flex-col flex-1">
        <LessonTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:p-8">
          {activeTab === "Transcription" ? (
            <div className="max-w-4xl mx-auto w-full pt-4">
              <CourseTranscription />
            </div>
          ) : activeTab === "Course Content" ? (
            <div className="max-w-3xl mx-auto">
              <CourseContentAccordion
                modules={SAMPLE_MODULES}
                activeLessonId={activeLesson?._id}
                onSelectLesson={handleSelectLesson}
                isLoading={false}
              />
            </div>
          ) : activeTab === "Ai Assistant" ? (
            <div className="max-w-3xl mx-auto h-fit border border-gray-100 rounded-xl overflow-hidden">
              <CourseAiAssistant className="h-full" />
            </div>
          ) : activeTab === "Overview" ? (
            <div className="max-w-4xl mx-auto w-full pt-4">
              <CourseOverview
                title="Sample Course"
                description="This is a preview of the lesson screen using sample data. Everything you see — the video player, chapters, and tabs — is the real production UI."
              />
            </div>
          ) : activeTab === "Resources" ? (
            <div className="max-w-4xl mx-auto w-full pt-4">
              <CourseResources materials={activeLesson?.materials} />
            </div>
          ) : activeTab === "Q&A" ? (
            <div className="max-w-3xl mx-auto w-full">
              <CourseQAndA />
            </div>
          ) : activeTab === "Notes" ? (
            <div className="max-w-3xl mx-auto w-full">
              <CourseNotes
                courseId="preview-course"
                lessonId={activeLesson?._id}
                lessonTitle={activeLesson?.title}
              />
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

      <CourseSidebarSheet
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        modules={SAMPLE_MODULES}
        activeLessonId={activeLesson?._id}
        onSelectLesson={handleSelectLesson}
        isLoading={false}
      />
    </div>
  );
}
