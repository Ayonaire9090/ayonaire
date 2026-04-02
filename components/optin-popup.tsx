"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogPortal,
} from "@/components/ui/dialog";
import { OptInForm } from "./optin-form";
import { melodrama } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Play } from "lucide-react";

interface OptinPopupProps {
  children: React.ReactNode;
  courseName: string;
  slug?: string;
  courseThumbnail?: string;
}
export function OptInPopup({
  children,
  courseName,
  slug,
  courseThumbnail = "/assets/images/optin-form-banner.png",
}: OptinPopupProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  // Handle closing with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400); // Wait for animate__zoomOutDown to finish
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleClose();
        } else {
          setIsOpen(true);
          setIsClosing(false);
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      {/* Close button on the top right overlay */}
      <DialogPortal>
        <button
          onClick={handleClose}
          className={cn(
            "fixed top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center bg-white text-primary rounded-full hover:bg-white/30 hover:scale-105 active:scale-95 transition-all shadow-md z-100 duration-300 pointer-events-auto",
            isClosing ? "opacity-0 pointer-events-none" : "opacity-100",
          )}
          aria-label="Close dialog"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </DialogPortal>

      {/* Make DialogContent transparent, borderless, shadowless, and overflow-visible */}
      <DialogContent
        className="sm:max-w-[460px] w-[92%] max-h-[95vh] p-0 border-0 bg-transparent shadow-none overflow-y-auto hide-scrollbar [&>button]:hidden z-60"
        onInteractOutside={(e) => {
          e.preventDefault();
          handleClose();
        }}
        onEscapeKeyDown={(e) => {
          e.preventDefault();
          handleClose();
        }}
        onClick={(e) => {
          // If the user clicks directly on the DialogContent container (not its children), close it.
          // This simulates overlay click for transparent parts of DialogContent.
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        {/* Container for absolute thumbnail offset and exit animation */}
        <div
          className={cn(
            "relative mt-20 sm:mt-24 w-full animate__animated",
            isClosing ? "animate__zoomOutDown" : "animate__zoomInUp",
          )}
        >
          {/* Main Gradient Box */}
          <div className="relative w-full bg-[linear-gradient(135deg,#1f131a_0%,#3e1309_40%,#e33a10_80%,#F54920_100%)] rounded-[2.5rem] shadow-2xl p-6 pt-20 pb-8 sm:p-10 sm:pt-24 sm:pb-10 flex flex-col items-center">
            {/* Close Button */}
            {/* <button
              onClick={handleClose}
              className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 flex items-center justify-center bg-white text-[#F54920] rounded-full hover:scale-105 active:scale-95 transition-all shadow-md z-50"
              aria-label="Close dialog"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button> */}

            {/* Absolute Video Thumbnail overlapping the top of the box */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[85%] max-w-[340px] aspect-16/10 rounded-2xl overflow-hidden shadow-2xl z-100 isolate">
              <Image
                src={courseThumbnail}
                alt="Opt-in Video"
                fill
                className="object-cover rounded-2xl"
                priority
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 rounded-2xl pointer-events-none" />

              {/* Play Icon - Orange circle with white outline */}
              <div className="absolute inset-0 flex items-center justify-center pt-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white bg-primary flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg z-50">
                  <Play
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1 filter drop-shadow-sm"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>
              </div>
            </div>

            <DialogTitle
              className={cn(
                "text-[36px] sm:text-[42px] tracking-tight font-medium text-white mb-4 text-center mt-4 sm:mt-2",
                melodrama.className,
              )}
            >
              One Last Step
            </DialogTitle>

            <p className="text-white/95 text-[15px] sm:text-[16px] font-light mb-8 text-center leading-relaxed">
              <span className="bg-[rgba(255,255,255,0.9)] text-[#F54920] px-2 py-0.5 mr-1 font-medium rounded-sm">
                Fill out this form
              </span>
              below to get access
              <br className="hidden sm:block" /> to the group.
            </p>

            <div className="w-full">
              <OptInForm courseName={courseName} slug={slug} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
