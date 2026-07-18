"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import {
  ClassInformationStep,
  ClassInformationValues,
} from "./class-information-step";
import { CurriculumStep } from "./curriculum-step";
import { AdvancedSettingsStep } from "./advanced-settings-step";
import { useCreateCourseMutation } from "@/hooks/api/use-courses";

const emptyClassInformation: ClassInformationValues = {
  title: "",
  category: "",
  description: "",
  price: "",
  courseLevel: "beginner",
  thumbnail: null,
};

export function AddCourseModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeStep, setActiveStep] = useState(1);
  const [classInfo, setClassInfo] = useState<ClassInformationValues>(
    emptyClassInformation,
  );
  const createCourseMutation = useCreateCourseMutation();

  const resetAndClose = () => {
    setActiveStep(1);
    setClassInfo(emptyClassInformation);
    onClose();
  };

  const handleSubmit = () => {
    if (!classInfo.title || !classInfo.category || !classInfo.thumbnail) {
      toast.error("Title, category ID, and thumbnail are required.");
      setActiveStep(1);
      return;
    }

    createCourseMutation.mutate(
      {
        title: classInfo.title,
        description: classInfo.description || undefined,
        category: classInfo.category,
        price: classInfo.price ? Number(classInfo.price) : undefined,
        courseLevel: classInfo.courseLevel,
        thumbnail: classInfo.thumbnail,
      },
      {
        onSuccess: () => {
          toast.success("Course created successfully.");
          resetAndClose();
        },
        onError: (error: any) => {
          toast.error(error?.message || "Failed to create course.");
        },
      },
    );
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
      return;
    }
    handleSubmit();
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    } else {
      resetAndClose();
    }
  };

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={resetAndClose}
      title="Upload Course"
      subtitle="Update course details and manage class content"
      footerContent={
        <div className="grid grid-cols-2 md:flex items-center justify-between md:justify-end gap-2 md:gap-4 w-full">
          <div className="flex-1 md:flex-none flex justify-start md:justify-end">
            <Button
              variant="outline"
              onClick={() => toast.error("Saving drafts isn't supported yet.")}
              className="w-full md:w-[150px] px-8 h-12 rounded-xl text-[15px] font-medium border-gray-200 bg-white hover:bg-gray-50 text-gray-900"
            >
              Save as draft
            </Button>
          </div>
          <Button
            onClick={handleNext}
            disabled={createCourseMutation.isPending}
            className="flex-1 md:w-[150px] md:flex-none px-8 h-12 rounded-xl text-[15px] font-medium bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white border-transparent"
          >
            {createCourseMutation.isPending && (
              <Loader2 className="size-4 mr-2 animate-spin" />
            )}
            {activeStep === 3 ? "Submit" : "Next"}
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-8 md:gap-10 mt-2">
        {/* Back and Stepper Section */}
        <div className="flex flex-col gap-6 md:gap-8 pt-1">
          {/* Back button */}
          <button
            onClick={handleBack}
            className="flex items-center w-fit text-gray-700 hover:text-black mt-2"
          >
            <ArrowLeft className="size-[22px]" strokeWidth={1.5} />
          </button>

          {/* Stepper */}
          <div className="flex items-center w-full max-w-3xl overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1">
            {/* Step 1 */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div
                className={`size-6 rounded-full flex items-center justify-center text-[12px] font-medium ${activeStep === 1 ? "bg-[#FF7A59] text-white" : "bg-[#E5E7EB] text-gray-600"}`}
              >
                1
              </div>
              <span
                className={`font-medium text-[15px] ${activeStep === 1 ? "text-gray-900" : "text-gray-600"}`}
              >
                Class Information
              </span>
            </div>

            {/* Divider */}
            <div className="flex-1 h-[1.5px] bg-gray-200 mx-4 md:mx-6 min-w-[30px]" />

            {/* Step 2 */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div
                className={`size-6 rounded-full flex items-center justify-center text-[12px] font-medium ${activeStep === 2 ? "bg-[#FF7A59] text-white" : "bg-[#E5E7EB] text-gray-600"}`}
              >
                2
              </div>
              <span
                className={`font-medium text-[15px] ${activeStep === 2 ? "text-gray-900" : "text-gray-600"}`}
              >
                Curriculum
              </span>
            </div>

            {/* Divider */}
            <div className="flex-1 h-[1.5px] bg-gray-200 mx-4 md:mx-6 min-w-[30px]" />

            {/* Step 3 */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div
                className={`size-6 rounded-full flex items-center justify-center text-[12px] font-medium ${activeStep === 3 ? "bg-[#FF7A59] text-white" : "bg-[#E5E7EB] text-gray-600"}`}
              >
                3
              </div>
              <span
                className={`font-medium text-[15px] ${activeStep === 3 ? "text-gray-900" : "text-gray-600"}`}
              >
                Advanced Settings
              </span>
            </div>
          </div>
        </div>

        {/* Content Section rendered by Step */}
        {activeStep === 1 && (
          <ClassInformationStep values={classInfo} onChange={setClassInfo} />
        )}
        {activeStep === 2 && <CurriculumStep />}
        {activeStep === 3 && <AdvancedSettingsStep />}
      </div>
    </AppMegaModal>
  );
}
