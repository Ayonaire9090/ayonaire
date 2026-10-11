"use client";

import React, { useEffect, useState } from "react";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { ClassInformationStep, ClassInfoValue } from "./class-information-step";
import { CurriculumStep } from "./curriculum-step";
import { AdvancedSettingsStep } from "./advanced-settings-step";
import { useGetCourseCategories, useCreateCourseMutation, useEditCourseMutation } from "@/hooks/api/use-courses";

interface LocalLesson {
  _id: string;
  title: string;
  isFreePreview: boolean;
}
interface LocalModule {
  _id: string;
  title: string;
  description: string;
  lessons: LocalLesson[];
}

const emptyClassInfo: ClassInfoValue = {
  title: "",
  description: "",
  category: "",
  price: "",
  courseLevel: "Beginner",
  thumbnailFile: null,
  thumbnailPreviewUrl: null,
  introVideoSource: "url",
  introVideoUrl: "",
  introVideoFile: null,
};

export function AddCourseModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeStep, setActiveStep] = useState(1);
  const [classInfo, setClassInfo] = useState<ClassInfoValue>(emptyClassInfo);
  const [classInfoErrors, setClassInfoErrors] = useState<Partial<Record<keyof ClassInfoValue, string>>>({});
  const [courseId, setCourseId] = useState<string | null>(null);
  const [modules, setModules] = useState<LocalModule[]>([]);
  const [completionCertificate, setCompletionCertificate] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { data: categoriesData } = useGetCourseCategories();
  const categories = categoriesData?.data ?? [];

  const createCourse = useCreateCourseMutation();
  const editCourse = useEditCourseMutation();

  // The dialog's DOM content unmounts/remounts on close, but this component
  // stays mounted the whole time, so wizard state must be reset explicitly
  // whenever it's reopened - otherwise a finished session leaks into the next.
  useEffect(() => {
    if (isOpen) {
      setActiveStep(1);
      setClassInfo(emptyClassInfo);
      setClassInfoErrors({});
      setCourseId(null);
      setModules([]);
      setCompletionCertificate(false);
      setSubmitError("");
    }
  }, [isOpen]);

  const validateClassInfo = (): boolean => {
    const errors: Partial<Record<keyof ClassInfoValue, string>> = {};
    if (!classInfo.title.trim()) errors.title = "Title is required";
    if (!classInfo.category) errors.category = "Category is required";
    if (!classInfo.thumbnailFile) errors.thumbnailFile = "Thumbnail is required";
    setClassInfoErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitCourse = async (status: "Draft" | "Active"): Promise<string | null> => {
    if (!validateClassInfo()) return null;
    setSubmitError("");

    try {
      const res = await createCourse.mutateAsync({
        title: classInfo.title,
        description: classInfo.description || undefined,
        category: classInfo.category,
        price: classInfo.price ? Number(classInfo.price) : undefined,
        courseLevel: classInfo.courseLevel,
        status,
        thumbnail: classInfo.thumbnailFile as File,
        introVideo:
          classInfo.introVideoSource === "upload"
            ? classInfo.introVideoFile ?? undefined
            : undefined,
        introVideoUrl:
          classInfo.introVideoSource === "url" && classInfo.introVideoUrl.trim()
            ? classInfo.introVideoUrl.trim()
            : undefined,
        introVideoTitle: classInfo.title,
      });

      const newCourseId = (res.data as any)?._id ?? null;
      setCourseId(newCourseId);
      return newCourseId;
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to create course");
      return null;
    }
  };

  const resetAndClose = () => {
    setActiveStep(1);
    setClassInfo(emptyClassInfo);
    onClose();
  };

  const handleNext = async () => {
    if (activeStep === 1) {
      if (courseId) {
        // Already created earlier in this session - editing step 1 fields
        // after creation isn't supported yet, so just move forward.
        setActiveStep(2);
        return;
      }
      const id = await submitCourse("Draft");
      if (id) setActiveStep(2);
      return;
    }

    if (activeStep === 2) {
      setActiveStep(3);
      return;
    }

    // Step 3: finalize - persist certificate setting and publish.
    if (!courseId) return;
    setSubmitError("");
    try {
      await editCourse.mutateAsync({
        courseId,
        completionCertificate,
        status: "Active",
      });
      onClose();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to publish course");
    }
  };

  const handleSaveAsDraft = async () => {
    if (!courseId) {
      const id = await submitCourse("Draft");
      if (id) onClose();
      return;
    }

    setSubmitError("");
    try {
      await editCourse.mutateAsync({ courseId, completionCertificate, status: "Draft" });
      onClose();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to save draft");
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    } else {
      resetAndClose();
    }
  };

  const isBusy = createCourse.isPending || editCourse.isPending;

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={resetAndClose}
      title="Upload Course"
      subtitle="Create your course details and curriculum"
      footerContent={
        <div className="flex flex-col gap-2 w-full">
          {submitError && (
            <span className="text-xs text-red-500 text-right">{submitError}</span>
          )}
          <div className="grid grid-cols-2 md:flex items-center justify-between md:justify-end gap-2 md:gap-4 w-full">
            <div className="flex-1 md:flex-none flex justify-start md:justify-end">
              <Button
                variant="outline"
                onClick={handleSaveAsDraft}
                disabled={isBusy}
                className="w-full md:w-[150px] px-8 h-12 rounded-xl text-[15px] font-medium border-gray-200 bg-white hover:bg-gray-50 text-gray-900"
              >
                Save as draft
              </Button>
            </div>
            <Button
              onClick={handleNext}
              disabled={isBusy}
              className="flex-1 md:w-[150px] md:flex-none px-8 h-12 rounded-xl text-[15px] font-medium bg-primary hover:bg-primary/90 text-white border-transparent flex items-center justify-center gap-2"
            >
              {isBusy && <Loader2 className="size-4 animate-spin" />}
              {activeStep === 3 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-8 md:gap-10 mt-2">
        <div className="flex flex-col gap-6 md:gap-8 pt-1">
          <button
            onClick={handleBack}
            className="flex items-center w-fit text-gray-700 hover:text-black mt-2"
          >
            <ArrowLeft className="size-[22px]" strokeWidth={1.5} />
          </button>

          <div className="flex items-center w-full max-w-3xl overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1">
            {["Class Information", "Curriculum", "Advanced Settings"].map((label, idx) => (
              <React.Fragment key={label}>
                {idx > 0 && (
                  <div className="flex-1 h-[1.5px] bg-gray-200 mx-4 md:mx-6 min-w-[30px]" />
                )}
                <div className="flex items-center gap-2.5 shrink-0">
                  <div
                    className={`size-6 rounded-full flex items-center justify-center text-[12px] font-medium ${activeStep === idx + 1 ? "bg-primary text-white" : "bg-[#E5E7EB] text-gray-600"}`}
                  >
                    {idx + 1}
                  </div>
                  <span
                    className={`font-medium text-[15px] ${activeStep === idx + 1 ? "text-gray-900" : "text-gray-600"}`}
                  >
                    {label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {activeStep === 1 && (
          <ClassInformationStep
            value={classInfo}
            onChange={(patch) => setClassInfo((prev) => ({ ...prev, ...patch }))}
            categories={categories}
            errors={classInfoErrors}
          />
        )}
        {activeStep === 2 && courseId && (
          <CurriculumStep courseId={courseId} modules={modules} onModulesChange={setModules} />
        )}
        {activeStep === 3 && (
          <AdvancedSettingsStep
            completionCertificate={completionCertificate}
            onChange={setCompletionCertificate}
          />
        )}
      </div>
    </AppMegaModal>
  );
}
