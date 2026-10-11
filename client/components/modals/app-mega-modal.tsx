"use client";

import React from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface AppMegaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

export function AppMegaModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  headerContent,
  footerContent,
}: AppMegaModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        onInteractOutside={(e) => e.preventDefault()}
        className="max-w-[100vw] sm:max-w-[100vw] md:max-w-[55vw] w-screen h-dvh max-h-dvh m-0 p-0 bg-[#F6F6F6] flex flex-col gap-0 border-none rounded-none shadow-none duration-200"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{subtitle}</DialogDescription>

        {/* Header Region */}
        <div className="w-full flex flex-col px-4 md:px-6 py-4 border-b border-gray-200 shrink-0">
          <div className="flex justify-between max-w-5xl mx-auto w-full relative">
            <div className="flex flex-col gap-1 pr-12">
              <h1 className="text-[20px] md:text-[22px] font-bold text-gray-900">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[15px] text-gray-500">{subtitle}</p>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-0 top-0 size-9 rounded-full bg-[#FFEBE6] flex items-center justify-center text-[#FF7A59] hover:bg-orange-100 transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>

          {headerContent && (
            <div className="max-w-5xl mx-auto w-full mt-4 flex">
              {headerContent}
            </div>
          )}
        </div>

        {/* Content Region */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 pb-[120px] md:pb-8 w-full">
          <div className="max-w-5xl mx-auto w-full">{children}</div>
        </div>

        {/* Footer Region */}
        {footerContent && (
          <div className="w-full bg-[#F6F6F6] border-t border-gray-200 p-4 px-4 md:px-6 fixed bottom-0 md:relative">
            <div className="max-w-5xl mx-auto w-full">{footerContent}</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
