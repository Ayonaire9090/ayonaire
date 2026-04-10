"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";

interface EnrollmentProgressModalProps {
  isOpen: boolean;
  totalStudents: number;
  onComplete: () => void;
}

export const EnrollmentProgressModal = ({
  isOpen,
  totalStudents,
  onComplete,
}: EnrollmentProgressModalProps) => {
  const [view, setView] = useState<"progress" | "success">("progress");
  const [progress, setProgress] = useState(0);
  const [enrolledCount, setEnrolledCount] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setView("progress");
      setProgress(0);
      setEnrolledCount(0);

      const duration = 2000; // 2 seconds simulation
      const intervalMs = 50;
      const steps = duration / intervalMs;
      const increment = 100 / steps;

      let currentProgress = 0;

      const interval = setInterval(() => {
        currentProgress += increment;
        if (currentProgress > 100) currentProgress = 100;

        setProgress(currentProgress);
        setEnrolledCount(
          Math.min(
            Math.floor((currentProgress / 100) * totalStudents),
            totalStudents,
          ),
        );

        if (currentProgress >= 100) {
          clearInterval(interval);
          setEnrolledCount(totalStudents);
          setTimeout(() => {
            setView("success");
          }, 300); // 300ms pause on 100% before switching view
        }
      }, intervalMs);

      return () => clearInterval(interval);
    }
  }, [isOpen, totalStudents]);

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={() => {}} // Block explicit closing from generic means during flow
      showCloseButton={false}
      className="max-w-[500px] p-8 md:p-10"
    >
      <div className="flex flex-col w-full items-center justify-center py-2 h-full">
        {/* Top Graphical Area - shared in both views */}
        <div className="relative size-[140px] md:size-[160px] mb-8 mt-2 shrink-0">
          <Image
            src="/assets/icons/enrolling.svg"
            alt={
              view === "progress" ? "Enrolling Progress" : "Enrollment Success"
            }
            fill
            className="object-contain"
          />
        </div>

        {view === "progress" ? (
          <div className="flex flex-col w-full animate-in fade-in duration-300">
            {/* Header Texts */}
            <div className="flex justify-between items-center w-full mb-3 text-gray-900 font-medium">
              <span className="text-[17px]">Enrolling Students</span>
              <span className="text-[17px]">{Math.floor(progress)}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#f6f6f6] rounded-full h-3 mb-3 overflow-hidden">
              <div
                className="bg-[#F06B30] h-full rounded-full transition-all duration-50"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Status Text */}
            <div className="w-full text-left text-gray-400 text-[14.5px]">
              {enrolledCount} of {totalStudents} student
              {totalStudents !== 1 ? "s" : ""} enrolled
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full items-center animate-in fade-in grow duration-500 delay-150">
            <h3 className="text-[20px] font-semibold text-gray-900 mb-1.5 text-center">
              Enrollment Completed
            </h3>
            <p className="text-gray-400 text-[14.5px] mb-8 text-center px-4">
              Enrollment has been completed successfully
            </p>

            {/* Report Card Box */}
            <div className="flex items-center gap-4 bg-[#f8f8f8] rounded-2xl p-5 w-full mb-8">
              <div className="size-[38px] rounded-xl bg-[#F06B30] flex items-center justify-center shrink-0">
                <Check className="size-5 text-white" strokeWidth={3} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[16px] font-medium text-gray-900">
                  Successfully Enrolled
                </span>
                <span className="text-[13.5px] text-gray-500 font-medium">
                  {totalStudents} Student{totalStudents !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Action bottom */}
            <div className="flex justify-end w-full">
              <Button
                onClick={onComplete}
                className="bg-[#F06B30] hover:bg-[#F06B30]/90 text-white font-medium h-12 px-12 rounded-lg shadow-none border-0 text-[15px]"
              >
                Okay
              </Button>
            </div>
          </div>
        )}
      </div>
    </AppSimpleModal>
  );
};
