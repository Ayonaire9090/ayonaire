"use client";

import { useState, use, useEffect, useMemo } from "react";
import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { useGetEnrolledCourseDetail } from "@/hooks/api/use-enrollment";
import {
  useResumeLastLesson,
  useCourseContent,
  useUpdateLastLessonMutation,
} from "@/hooks/api/use-lessons";
import { LessonHeader } from "../_components/lesson-header";
import { LessonVideoPlayer } from "../_components/lesson-video-player";
import { LessonTabs } from "../_components/lesson-tabs";
import { CourseSidebarSheet } from "../_components/course-sidebar-sheet";
import { CourseContentAccordion } from "../_components/course-content-accordion";
import { CourseAiAssistant } from "../_components/course-ai-assistant";
import { CourseOverview } from "../_components/course-overview";
import { SidebarInset } from "@/components/ui/sidebar";
import { CourseQAndA } from "../_components/course-q-and-a";
import { CourseNotes } from "../_components/course-notes";
import { CourseAnnouncements } from "../_components/course-announcements";
import { CourseReviews } from "../_components/course-reviews";
import { CourseLearningTools } from "../_components/course-learning-tools";
import { cn } from "@/lib/utils";
import { CourseResources } from "../_components/course-resources";
import { CourseTranscription } from "../_components/course-transcription";
import { MessageInstructorButton } from "../_components/message-instructor-button";

export default function StudentCourseLessonPage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const resolvedParams = use(params);
  const courseId = resolvedParams.courseSlug;
  const [activeTab, setActiveTab] = useState("Resources");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedLessonId, setSelectedLessonId] = useState<string | undefined>();
  const [selectedVideo, setSelectedVideo] = useState<{ lessonId: string; index: number }>();

  const { data, isError: courseError, isLoading: courseLoading } = useGetEnrolledCourseDetail(courseId);
  const course = data?.data;
  const title = course?.title || "Untitled Course";

  const { data: contentData, isLoading: isContentLoading, isError: contentError } = useCourseContent(courseId);
  const modules = contentData?.data?.modules ?? [];

  // Resume-last-lesson has its own fallback-to-first-published-lesson logic
  // server-side, so it's the source of truth for which lesson to open by
  // default - once it resolves, seed local selection state with it.
  const { data: resumeData, isError: resumeError } = useResumeLastLesson(courseId);
  useEffect(() => {
    if (!selectedLessonId && resumeData?.data?.lessonId) {
      setSelectedLessonId(resumeData.data.lessonId);
    }
  }, [resumeData, selectedLessonId]);

  const activeLesson = useMemo(() => {
    for (const mod of modules) {
      const found = mod.lessons.find((l) => l._id === selectedLessonId);
      if (found) return found;
    }
    return undefined;
  }, [modules, selectedLessonId]);
  const activeVideo = activeLesson ? activeLesson.videos?.[selectedVideo?.lessonId === activeLesson._id ? selectedVideo.index : 0] : course?.introVideo;

  // Flat lesson order across all modules, for prev/next navigation.
  const flatLessons = useMemo(
    () => modules.flatMap((mod) => mod.lessons),
    [modules],
  );
  const completedLessonsCount = flatLessons.filter((lesson) => lesson.isCompleted).length;
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `/dashboard/student/courses/${courseId}`;
  const activeLessonIndex = flatLessons.findIndex(
    (l) => l._id === activeLesson?._id,
  );
  const previousLesson =
    activeLessonIndex > 0 ? flatLessons[activeLessonIndex - 1] : undefined;
  const nextLesson =
    activeLessonIndex >= 0 && activeLessonIndex < flatLessons.length - 1
      ? flatLessons[activeLessonIndex + 1]
      : undefined;

  const { mutate: updateLastLesson } = useUpdateLastLessonMutation();

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    updateLastLesson({ courseId, lessonId });
    setActiveTab("Resources");
    setIsSheetOpen(false);
  };

  if (courseLoading || isContentLoading) return <div className="w-full p-6"><StudentLoadingSkeleton variant="cards" /></div>;
  if (courseError || contentError || resumeError) return <div className="p-10" role="alert">Unable to load this course. Please refresh or check your enrollment.</div>;

  return (
    <>
      <SidebarInset className="bg-transparent min-h-screen">
        <div
          className={cn(
            "flex flex-col min-h-screen",
            ["Course Content", "Ai Assistant", "Q&A"].includes(activeTab)
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
            <LessonHeader
              title={activeLesson?.title || title}
              completedLessons={completedLessonsCount}
              totalLessons={flatLessons.length}
              shareUrl={shareUrl}
              onRate={() => setActiveTab("Reviews")}
            />
            <div className="flex justify-end px-4 pb-3"><MessageInstructorButton courseId={courseId} /></div>
            <div className="w-full relative">
              {(activeLesson?.videos?.length ?? 0) > 1 && <label className="block px-4 pb-2 text-sm text-white">Recording <select className="ml-2 rounded bg-gray-800 p-2 text-white" value={selectedVideo?.lessonId === activeLesson?._id ? selectedVideo?.index ?? 0 : 0} onChange={(event) => setSelectedVideo({ lessonId: activeLesson!._id, index: Number(event.target.value) })}>{activeLesson?.videos.map((video, index) => <option key={video.publicId ?? index} value={index}>{video.title}</option>)}</select></label>}
              <LessonVideoPlayer
                key={`${activeLesson?._id ?? "intro"}:${selectedVideo?.lessonId === activeLesson?._id ? selectedVideo?.index ?? 0 : 0}`}
                lessonId={activeLesson?._id}
                courseId={courseId}
                videoUrl={activeVideo?.url}
                videoSourceType={activeVideo?.sourceType}
                videoProvider={activeVideo?.provider}
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
            <LessonTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
              resourceCount={activeLesson?.materials?.length ?? 0}
            />

            {/* Main Content Area */}
            <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:p-8">
              {/* Placeholder for tab contents */}
              {activeTab === "Transcription" ? (
                <div className="max-w-4xl mx-auto w-full pt-4">
                  <CourseTranscription
                    courseId={courseId}
                    lessonId={activeLesson?._id}
                  />
                </div>
              ) : activeTab === "Course Content" ? (
                <div className="max-w-3xl mx-auto">
                  <CourseContentAccordion
                    modules={modules}
                    activeLessonId={activeLesson?._id}
                    onSelectLesson={handleSelectLesson}
                    isLoading={isContentLoading}
                  />
                </div>
              ) : activeTab === "Ai Assistant" ? (
                <div className="max-w-3xl mx-auto h-fit border border-gray-100 rounded-xl overflow-hidden">
                  <CourseAiAssistant
                    className="h-full"
                    courseId={courseId}
                    lessonId={activeLesson?._id}
                  />
                </div>
              ) : activeTab === "Overview" ? (
                <div className="max-w-4xl mx-auto w-full pt-4">
                  <CourseOverview title={title} description={course?.description} />
                </div>
              ) : activeTab === "Resources" ? (
                <div className="max-w-4xl mx-auto w-full pt-4">
                  <CourseResources materials={activeLesson?.materials} />
                </div>
              ) : activeTab === "Q&A" ? (
                <div className="max-w-3xl mx-auto w-full">
                  <CourseQAndA courseId={courseId} lessonId={activeLesson?._id} />
                </div>
              ) : activeTab === "Notes" ? (
                <div className="max-w-3xl mx-auto w-full">
                  <CourseNotes
                    courseId={courseId}
                    lessonId={activeLesson?._id}
                    lessonTitle={activeLesson?.title}
                  />
                </div>
              ) : activeTab === "Announcement" ? (
                <div className="max-w-3xl mx-auto w-full">
                  <CourseAnnouncements courseId={courseId} />
                </div>
              ) : activeTab === "Reviews" ? (
                <div className="max-w-5xl mx-auto w-full">
                  <CourseReviews courseId={courseId} />
                </div>
              ) : activeTab === "Learning Tools" ? (
                <div className="max-w-4xl mx-auto w-full">
                  <CourseLearningTools courseId={courseId} courseTitle={title} />
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  {activeTab} content will be rendered here.
                </div>
              )}
            </div>
          </div>
        </div>
        <CourseSidebarSheet
          open={isSheetOpen}
          onOpenChange={setIsSheetOpen}
          modules={modules}
          activeLessonId={activeLesson?._id}
          onSelectLesson={handleSelectLesson}
          isLoading={isContentLoading}
        />
      </SidebarInset>
    </>
  );
}
