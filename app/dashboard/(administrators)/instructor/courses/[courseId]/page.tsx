"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Play, Loader2, Lock, LockOpen } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { useGetCourseById, useTogglePublishMutation } from "@/hooks/api/use-courses";
import { useInstructorCourseContent } from "@/hooks/api/use-lessons";

export default function InstructorCoursePreviewPage() {
  const params = useParams<{ courseId: string }>();
  const courseId = params.courseId;
  const router = useRouter();

  const { data: courseRes, isLoading: courseLoading, isError: courseError } = useGetCourseById(courseId);
  const { data: contentRes, isLoading: contentLoading } = useInstructorCourseContent(courseId);
  const togglePublish = useTogglePublishMutation();

  const course = courseRes?.data;
  const modules = contentRes?.data?.modules ?? [];

  if (courseLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="size-6 animate-spin text-gray-400" />
      </div>
    );
  }

  if (courseError || !course) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-[15px] text-red-500 mb-4">
          Couldn&apos;t load this course. It may not exist, or you may not have access to it.
        </p>
        <Button variant="outline" onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    );
  }

  const isActive = course.status === "Active";

  return (
    <>
      <DashboardHeader title={course.title} subTitle={`Status: ${course.status ?? "Draft"}`} />

      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-[14px] font-medium mt-4 mb-2"
      >
        <ArrowLeft className="size-4" />
        Back to courses
      </button>

      <div className="bg-white rounded-2xl p-4 md:p-6 mt-4 flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-[280px] h-[160px] rounded-xl overflow-hidden shrink-0 bg-gray-100">
          {course.thumbnail?.url && (
            <Image
              src={course.thumbnail.url}
              alt={course.title}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <h2 className="text-[19px] font-bold text-gray-900">{course.title}</h2>
            <p className="text-[14px] text-gray-500 mt-1 line-clamp-3">
              {course.description || "No description yet."}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-auto">
            <Button
              onClick={() => togglePublish.mutate(courseId)}
              disabled={togglePublish.isPending}
              className={isActive ? "bg-gray-900 hover:bg-gray-800" : "bg-primary hover:bg-primary/90"}
            >
              {togglePublish.isPending && <Loader2 className="size-4 animate-spin mr-2" />}
              {isActive ? "Unpublish" : "Publish"}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-[17px] font-semibold text-gray-900 mb-4">Curriculum</h3>

        {contentLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="size-6 animate-spin text-gray-400" />
          </div>
        ) : modules.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-gray-200 rounded-2xl bg-white">
            <p className="text-[14px] text-gray-500">
              No modules yet for this course.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {modules.map((module, idx) => (
              <div key={module._id} className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[13px] font-medium text-gray-400">
                    Module {idx + 1}
                  </span>
                </div>
                <h4 className="text-[16px] font-semibold text-gray-900 mb-1">
                  {module.title}
                </h4>
                <p className="text-[13.5px] text-gray-500 mb-4">
                  {module.description}
                </p>

                {module.lessons.length === 0 ? (
                  <p className="text-[13px] text-gray-400 italic">No lessons yet</p>
                ) : (
                  <div className="flex flex-col gap-2">
                    {module.lessons.map((lesson, lessonIdx) => (
                      <div
                        key={lesson._id}
                        className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded-xl border border-gray-100/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="size-[26px] bg-white border border-gray-100 rounded text-gray-400 text-[12px] font-medium flex items-center justify-center shrink-0">
                            {lessonIdx + 1}
                          </div>
                          <Play className="size-3.5 text-primary" />
                          <span className="text-[14.5px] font-medium text-gray-900">
                            {lesson.title}
                          </span>
                          {lesson.isFreePreview && (
                            <span className="text-[11px] font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                              Free Preview
                            </span>
                          )}
                          {!lesson.isPublished && (
                            <span className="text-[11px] font-medium text-gray-500 bg-gray-200 rounded-full px-2 py-0.5">
                              Unpublished
                            </span>
                          )}
                        </div>
                        {lesson.isLocked ? (
                          <Lock className="size-4 text-gray-400" />
                        ) : (
                          <LockOpen className="size-4 text-gray-300" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
