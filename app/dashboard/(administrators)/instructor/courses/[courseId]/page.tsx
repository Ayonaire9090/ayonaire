"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, Play, Loader2, Lock, LockOpen, Plus } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { useGetCourseById, useTogglePublishMutation } from "@/hooks/api/use-courses";
import { useInstructorCourseContent } from "@/hooks/api/use-lessons";
import { useCreateModuleMutation } from "@/hooks/api/use-modules";
import { AddNewLessonForm } from "@/components/modals/courses/add-new-lesson-form";

export default function InstructorCoursePreviewPage() {
  const params = useParams<{ courseId: string }>();
  const courseId = params.courseId;
  const router = useRouter();

  const { data: courseRes, isLoading: courseLoading, isError: courseError } = useGetCourseById(courseId);
  const { data: contentRes, isLoading: contentLoading } = useInstructorCourseContent(courseId);
  const togglePublish = useTogglePublishMutation();
  const createModule = useCreateModuleMutation();

  const [isAddingModule, setIsAddingModule] = useState(false);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");
  const [moduleError, setModuleError] = useState("");
  const [addingLessonForModuleId, setAddingLessonForModuleId] = useState<string | null>(null);

  const course = courseRes?.data;
  const modules = contentRes?.data?.modules ?? [];

  const handleAddModule = async () => {
    if (!newModuleTitle.trim()) {
      setModuleError("Module title is required");
      return;
    }
    if (!newModuleDescription.trim()) {
      setModuleError("Module description is required");
      return;
    }
    setModuleError("");
    try {
      await createModule.mutateAsync({
        title: newModuleTitle,
        description: newModuleDescription,
        courseId,
        order: modules.length + 1,
      });
      setNewModuleTitle("");
      setNewModuleDescription("");
      setIsAddingModule(false);
    } catch (err) {
      setModuleError(err instanceof Error ? err.message : "Failed to create module");
    }
  };

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
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[17px] font-semibold text-gray-900">Curriculum</h3>
          <button
            onClick={() => setIsAddingModule((v) => !v)}
            className="flex items-center gap-1.5 h-9 px-3.5 rounded-lg border border-gray-200 bg-[#FAFAFA] hover:bg-gray-100 text-[13px] font-medium text-gray-800 transition-colors"
          >
            <Plus className="size-4" />
            Add Module
          </button>
        </div>

        {isAddingModule && (
          <div className="flex flex-col bg-white rounded-2xl w-full border border-gray-100 p-4 md:p-6 mb-4">
            <h4 className="text-[15px] font-semibold text-gray-900 mb-4">Add New Module</h4>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-900">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 h-11 rounded-xl border border-gray-100 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors bg-white"
                  placeholder="e.g., Introduction to Web Development"
                  value={newModuleTitle}
                  onChange={(e) => setNewModuleTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-900">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full p-4 rounded-xl border border-gray-100 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors min-h-[100px] resize-none bg-white"
                  placeholder="What does this module cover?"
                  value={newModuleDescription}
                  onChange={(e) => setNewModuleDescription(e.target.value)}
                />
              </div>
              {moduleError && <span className="text-xs text-red-500">{moduleError}</span>}
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setIsAddingModule(false)}
                  disabled={createModule.isPending}
                  className="px-5 h-10 rounded-xl text-[14px] font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddModule}
                  disabled={createModule.isPending}
                  className="px-5 h-10 rounded-xl text-[14px] font-medium bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {createModule.isPending && <Loader2 className="size-4 animate-spin" />}
                  Add Module
                </button>
              </div>
            </div>
          </div>
        )}

        {contentLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="size-6 animate-spin text-gray-400" />
          </div>
        ) : modules.length === 0 && !isAddingModule ? (
          <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-gray-200 rounded-2xl bg-white">
            <p className="text-[14px] text-gray-500">
              No modules yet for this course.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {modules.map((module, idx) => (
              <div key={module._id} className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[13px] font-medium text-gray-400">
                    Module {idx + 1}
                  </span>
                  <button
                    onClick={() =>
                      setAddingLessonForModuleId((prev) =>
                        prev === module._id ? null : module._id,
                      )
                    }
                    className="h-8 px-3 rounded-lg border border-gray-200 bg-[#FAFAFA] hover:bg-gray-100 text-[13px] font-medium text-gray-800 transition-colors"
                  >
                    Add Lesson
                  </button>
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

                {addingLessonForModuleId === module._id && (
                  <div className="-mx-4 -mb-4 md:-mx-6 md:-mb-6 mt-4">
                    <AddNewLessonForm
                      courseId={courseId}
                      moduleId={module._id}
                      order={module.lessons.length + 1}
                      onCancel={() => setAddingLessonForModuleId(null)}
                      onCreated={() => setAddingLessonForModuleId(null)}
                    />
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
