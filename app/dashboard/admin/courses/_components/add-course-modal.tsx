"use client";

import React, { useState } from "react";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ClassInformationStep } from "./class-information-step";
import { CurriculumStep } from "./curriculum-step";
import { AdvancedSettingsStep } from "./advanced-settings-step";

export function AddCourseModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    if (activeStep < 3) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    } else {
      onClose();
    }
  };

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={onClose}
      title="Upload Course"
      subtitle="Update course details and manage class content"
      footerContent={
        <div className="grid grid-cols-2 md:flex items-center justify-between md:justify-end gap-2 md:gap-4 w-full">
          <div className="flex-1 md:flex-none flex justify-start md:justify-end">
            <Button
              variant="outline"
              className="w-full md:w-[150px] px-8 h-12 rounded-xl text-[15px] font-medium border-gray-200 bg-white hover:bg-gray-50 text-gray-900"
            >
              Save as draft
            </Button>
          </div>
          <Button
            onClick={handleNext}
            className="flex-1 md:w-[150px] md:flex-none px-8 h-12 rounded-xl text-[15px] font-medium bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white border-transparent"
          >
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
        {activeStep === 1 && <ClassInformationStep />}
        {activeStep === 2 && <CurriculumStep />}
        {activeStep === 3 && <AdvancedSettingsStep />}
      </div>
    </AppMegaModal>
  );
}
