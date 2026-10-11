"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface AppSimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string; // To allow custom width/styling
  showCloseButton?: boolean;
}

export const AppSimpleModal = ({
  isOpen,
  onClose,
  title = "",
  children,
  className,
  showCloseButton = true,
}: AppSimpleModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        // We override some internal dialog padding to match design or keep it flexible
        className={cn(
          "p-6 rounded-2xl sm:rounded-3xl border-0 gap-0 w-[96%] sm:w-full max-w-[500px] flex flex-col max-h-[85vh]",
          className,
        )}
        showCloseButton={false} // We want to customize our own close button
      >
        {(title || showCloseButton) ? (
          <DialogHeader className="flex flex-row items-center justify-between pb-4 space-y-0 text-left shrink-0">
            {title ? (
              <DialogTitle className="text-[20px] font-semibold text-gray-900">
                {title}
              </DialogTitle>
            ) : (
              <VisuallyHidden>
                <DialogTitle>Title</DialogTitle>
              </VisuallyHidden>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shrink-0 outline-none ml-auto"
              >
                <X className="size-4 text-gray-900" />
              </button>
            )}
          </DialogHeader>
        ) : (
          <VisuallyHidden>
            <DialogTitle>Title</DialogTitle>
          </VisuallyHidden>
        )}

        <div className="w-full flex-1 overflow-y-auto min-h-0 pr-1 custom-scrollbar">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
