"use client";

import React, { useState } from "react";
import { HelpCircle, ArrowRight } from "lucide-react";
import { AppHeading } from "./app-heading";
import { AppActionButton } from "./app-action-button";
import { cn } from "@/lib/utils";
import { IoCloseCircleOutline } from "react-icons/io5";

interface AppSurveyProps {
  /**
   * Display mode:
   * - 'popup': Fixed at bottom, scroll-triggered, dismissible with animation
   * - 'section': Inline within page flow, always visible, no dismiss
   */
  mode?: "popup" | "section";
}

export const AppSurveySection = ({ mode = "popup" }: AppSurveyProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasEntered, setHasEntered] = useState(mode === "section"); // Section mode is always visible
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Show popup when user scrolls past 30% of the entire document height (only for popup mode)
  React.useEffect(() => {
    if (mode !== "popup") return; // Skip scroll listener for section mode

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      // Total scrollable distance is documentHeight minus viewport
      const scrollableHeight = documentHeight - viewportHeight;

      // Trigger when scrolled past 30% of the total scrollable area
      if (scrollPosition > scrollableHeight * 0.3) {
        setHasEntered(true);
        // Once entered, stop listening
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check on mount in case already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  const handleDismiss = () => {
    setIsVisible(false);
    // Wait for animation (delay 5s + duration ~1s) to finish before unmounting
    setTimeout(() => setIsDismissed(true), 6000);
  };

  if (isDismissed) return null;

  const isPopup = mode === "popup";

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden",
        // Popup-specific styles
        isPopup && "fixed bottom-0 left-0 right-0 z-50",
        isPopup && "[--animate-duration:5s]",
        isPopup && !hasEntered && "opacity-0 pointer-events-none",
        isPopup && hasEntered && isVisible && "animate__animated animate__fadeInLeft",
        isPopup && !isVisible && "animate__animated animate__fadeOutRight",
        !isPopup && "shadow-xl"
      )}
    >
      <div
        className={cn(
          "relative w-full bg-white p-3 sm:p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6",
          "border-t-2 md:border-t-[3px] border-t-primary shadow-2xl"
        )}
      >
        {/* Close Button - only for popup mode */}
        {isPopup && (
          <button
            onClick={handleDismiss}
            className="absolute top-1 right-1 md:top-2 md:right-2 bg-transparent hover:scale-110 transition-transform cursor-pointer z-10"
            aria-label="Dismiss survey section"
          >
            <IoCloseCircleOutline className="w-6 h-6 md:w-8 md:h-8 text-primary/80 hover:text-primary transition-colors" />
          </button>
        )}

        <div className={cn(
          "flex flex-row items-start gap-3 md:gap-6 text-start md:text-left w-full md:w-auto",
          isPopup && "pt-3 md:pt-6"
        )}>
          <div className="flex flex-row items-center gap-2 md:gap-4 text-gray-700 shrink-0">
            {/* Decorative Line */}
            <div className="h-[2px] hidden lg:block w-16 bg-gray-300 rounded-full" />
            <HelpCircle className="w-7 h-7 md:w-10 md:h-10 text-primary stroke-[1.5]" />
          </div>
          <AppHeading
            headingLevel="h3"
            title="Lost in the noise and confused where to start?"
            className="text-lg md:text-2xl text-start"
          />
        </div>

        <div className="shrink-0 w-full md:w-auto flex justify-center">
          <AppActionButton
            onClick={() => console.log("Add survey action here")}
            variant="fading"
            className="group text-sm md:text-base py-2 md:py-6 px-4 md:px-8"
          >
            <>
              Take Our Survey{" "}
              <span className="bg-white p-0.5 md:p-1 rounded group-hover:ml-2 transition-all ease-in-out duration-300">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary rounded" />
              </span>
            </>
          </AppActionButton>
        </div>
      </div>
    </div>
  );
};

// Keep the old name as an alias for backward compatibility
export const AppSurveyPopup = AppSurveySection;
