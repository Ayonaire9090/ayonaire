"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import { AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Spline_Sans } from "next/font/google";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

interface AppFaqCardProps {
  index: number;
  title: string;
  description: React.ReactNode;
  titleClassName?: string;
}

export const AppFaqCard = ({ 
  index, 
  title, 
  description,
  titleClassName,
 }: AppFaqCardProps) => {
  // Format index to be 2 digits like 01, 02, etc.
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <>
      {/* Left orange gradient border accent for active state */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-[#f97f11] opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-300" /> */}

      <AccordionTrigger
        className={cn(
          "p-4 lg:p-6 hover:no-underline w-full group",
          "group-data-[state=open]:pl-5 group-data-[state=open]:lg:pl-7",
          "[&>svg]:hidden"
        )}
      >
        <div className="flex items-start justify-between gap-4 w-full">
          {/* Content */}
          <div className="flex flex-col gap-2 flex-1 text-left">
            {/* Number with gradient */}
            <span
              style={{
                background: "linear-gradient(90deg, #F25E25 0%, #F97F11 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className={`text-[16px] font-medium ${splineSans.className}`}
            >
              {formattedIndex}.
            </span>

            {/* Title */}
            <h3
              className={cn(
                "text-lg font-medium leading-tight tracking-wide",
                "text-gray-900 font-bold  group-data-[state=open]:text-[#141414]",
                splineSans.className,
                titleClassName
              )}
            >
              {title}
            </h3>
          </div>

          {/* Toggle Button */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 50,
              background: "linear-gradient(90deg, #F25E25 0%, #F97F11 100%)",
              border: "2px solid #FFFFFF",
              boxShadow: "0px 4px 12px 0px rgba(242, 94, 37, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              marginLeft: 24,
            }}
            className={cn(
              "flex items-center border border-white justify-center size-10 rounded-full shrink-0 transition-all duration-300",
              "bg-primary  shadow-glow-sm backdrop-blur-sm text-white"
            )}
            aria-label="Toggle FAQ"
          >
            <Plus
              className="size-5 block group-data-[state=open]:hidden"
              strokeWidth={2.5}
            />
            <Minus
              className="size-5 hidden group-data-[state=open]:block"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-4 lg:px-6 group-data-[state=open]:pl-5 group-data-[state=open]:lg:pl-7 animate animate-slide-down">
        {description && (
          <p className="text-[16px] text-[#6E6E6E] leading-relaxed  pb-2">
            {description}
          </p>
        )}
      </AccordionContent>
    </>
  );
};

export default AppFaqCard;
