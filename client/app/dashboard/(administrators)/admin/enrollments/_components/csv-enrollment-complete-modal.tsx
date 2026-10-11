"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";

interface CsvEnrollmentCompleteModalProps {
  isOpen: boolean;
  courseName: string;
  onMaybeLater: () => void;
}

export const CsvEnrollmentCompleteModal = ({
  isOpen,
  courseName,
  onMaybeLater,
}: CsvEnrollmentCompleteModalProps) => {
  const router = useRouter();

  const handleViewOrder = () => {
    onMaybeLater(); // dismiss modal first
    router.push("/dashboard/admin/orders");
  };

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={onMaybeLater}
      showCloseButton={false}
      className="max-w-[500px] p-8 md:p-10"
    >
      <div className="flex flex-col w-full items-center justify-center py-4">
        {/* Icon */}
        <div className="relative w-[180px] h-[160px] md:w-[200px] md:h-[180px] mb-6 shrink-0">
          <Image
            src="/assets/icons/enrolment-complete.svg"
            alt="Enrollment Complete"
            fill
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-[20px] md:text-[22px] font-semibold text-gray-900 mb-3 text-center">
          Complete the Enrollment!
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-[14.5px] leading-relaxed mb-8 text-center px-2 max-w-[380px]">
          Manual student enrollment for &ldquo;{courseName}&rdquo; has been
          initiated. To grant students access to the course, they must complete
          the payment online, or you can mark the order as
          &ldquo;Completed&rdquo;
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 justify-center w-full">
          <Button
            variant="outline"
            onClick={onMaybeLater}
            className="h-11 px-8 rounded-lg bg-[#F6F6F6] text-gray-700 border border-gray-200 hover:bg-gray-200 shadow-none font-medium text-[15px]"
          >
            Maybe Later
          </Button>
          <Button
            onClick={handleViewOrder}
            className="h-11 px-8 rounded-lg bg-[#F06B30] hover:bg-[#F06B30]/90 text-white shadow-none font-medium text-[15px]"
          >
            View Order
          </Button>
        </div>
      </div>
    </AppSimpleModal>
  );
};
