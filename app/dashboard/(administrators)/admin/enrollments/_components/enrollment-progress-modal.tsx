"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";

interface EnrollmentProgressModalProps {
  isOpen: boolean;
  totalStudents: number;
  status: "pending" | "success" | "error";
  errorMessage?: string;
  onComplete: () => void;
}

export const EnrollmentProgressModal = ({
  isOpen,
  totalStudents,
  status,
  errorMessage,
  onComplete,
}: EnrollmentProgressModalProps) => {
  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={status === "pending" ? () => {} : onComplete}
      showCloseButton={status !== "pending"}
      className="max-w-[500px] p-8 md:p-10"
    >
      <div className="flex flex-col w-full items-center justify-center py-2 h-full">
        {/* Top Graphical Area - shared in both views */}
        <div className="relative size-[140px] md:size-[160px] mb-8 mt-2 shrink-0">
          <Image
            src="/assets/icons/enrolling.svg"
            alt={status === "pending" ? "Enrolling Progress" : "Enrollment Result"}
            fill
            className={`object-contain ${status === "pending" ? "animate-pulse" : ""}`}
          />
        </div>

        {status === "pending" ? (
          <div className="flex flex-col w-full items-center animate-in fade-in duration-300">
            <span className="text-[17px] font-medium text-gray-900 mb-2">
              Enrolling Students
            </span>
            <span className="text-gray-400 text-[14.5px] text-center">
              Enrolling {totalStudents} student{totalStudents !== 1 ? "s" : ""}, please wait...
            </span>
          </div>
        ) : status === "error" ? (
          <div className="flex flex-col w-full items-center animate-in fade-in grow duration-500">
            <div className="size-[38px] rounded-xl bg-red-500 flex items-center justify-center shrink-0 mb-4">
              <X className="size-5 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-1.5 text-center">
              Enrollment Failed
            </h3>
            <p className="text-gray-400 text-[14.5px] mb-8 text-center px-4">
              {errorMessage || "Something went wrong while enrolling students."}
            </p>
            <div className="flex justify-end w-full">
              <Button
                onClick={onComplete}
                className="bg-[#F06B30] hover:bg-[#F06B30]/90 text-white font-medium h-12 px-12 rounded-lg shadow-none border-0 text-[15px]"
              >
                Close
              </Button>
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
