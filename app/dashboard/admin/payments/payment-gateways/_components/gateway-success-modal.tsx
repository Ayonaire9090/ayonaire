"use client";

import React from "react";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

interface GatewaySuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export function GatewaySuccessModal({
  isOpen,
  onClose,
  title,
  message,
}: GatewaySuccessModalProps) {
  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={false}
      className="max-w-[400px] text-center p-8"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-32 bg-[#FFF5F2] rounded-[50px] flex items-center justify-center mb-4">
          <BadgeCheck
            className="w-16 h-16 text-[#FF7A59]"
            fill="#FF7A59"
            color="white"
            strokeWidth={0.5}
          />
        </div>

        <h2 className="text-[20px] font-bold text-gray-900 mb-3">{title}</h2>

        <p className="text-[14px] text-gray-500 mb-8 max-w-[280px] mx-auto leading-relaxed">
          {message}
        </p>

        <Button
          onClick={onClose}
          className="w-full bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white h-12 rounded-xl text-[15px] font-medium"
        >
          Done
        </Button>
      </div>
    </AppSimpleModal>
  );
}
