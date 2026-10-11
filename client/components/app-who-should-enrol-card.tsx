"use client";

import { cn } from "@/lib/utils";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronUp, Users2 } from "lucide-react";

interface AppWhoShouldEnrolCardProps {
  title: string;
  description: string;
  value: string;
  isActive?: boolean;
}

// Desktop Card Component (static, no accordion behavior)
export function AppWhoShouldEnrolCardDesktop({
  title,
  description,
}: Omit<AppWhoShouldEnrolCardProps, "value" | "isActive">) {
  return (
    <div className="flex items-start gap-4 p-6 shrink-0 rounded-[10px] bg-white border border-black/6 transition-colors duration-300 hover:bg-[#FFF2ED]">
      {/* Icon with gradient background */}
      <div
        className="flex items-center justify-center shrink-0 w-[58px] h-[58px] rounded-full"
        style={{
          background:
            "linear-gradient(192.53deg, rgba(242, 94, 37, 0.24) 8.41%, rgba(249, 127, 17, 0) 94.27%)",
        }}
      >
        <Users2 className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <div>
        <h4 className="font-satoshi font-medium text-xl leading-none tracking-normal capitalize text-[#141414] mb-2">
          {title}
        </h4>
        <p className="font-satoshi font-normal text-base leading-6 tracking-normal capitalize text-[#6E6E6E] m-0">
          {description}
        </p>
      </div>
    </div>
  );
}

// Mobile Accordion Card Component
export function AppWhoShouldEnrolCardMobile({
  title,
  description,
  value,
  isActive = false,
}: AppWhoShouldEnrolCardProps) {
  return (
    <AccordionItem
      value={value}
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300 bg-white border-0 last:border-b",
        isActive
          ? "border-2 border-primary last:border-b-2"
          : "border border-[#D2D2D2] last:border-b-[#D2D2D2]"
      )}
      style={{
        borderRadius: "12px",
      }}
    >
      <AccordionTrigger className="w-full p-4 bg-transparent border-none cursor-pointer hover:no-underline [&>svg]:hidden">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {/* Icon with gradient background */}
            <div
              className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full"
              style={{
                background:
                  "linear-gradient(192.53deg, rgba(242, 94, 37, 0.24) 8.41%, rgba(249, 127, 17, 0) 94.27%)",
              }}
            >
              <Users2 className="w-6 h-6 text-primary" />
            </div>

            {/* Title */}
            <span
              className={cn(
                "font-satoshi  text-base leading-none text-left",
                isActive ? "font-bold" : "font-medium"
              )}
            >
              {title}
            </span>
          </div>

          {/* Custom chevron - rotates when open */}
          <ChevronUp
            width={20}
            height={20}
            className={cn(
              "shrink-0 transition-transform duration-300",
              isActive ? "text-primary rotate-180" : "text-[#D2D2D2] rotate-0"
            )}
          />
        </div>
      </AccordionTrigger>

      <AccordionContent
        className="px-4 pb-4"
        style={{
          animation: "0.3s ease 0s 1 normal none running slideDown",
        }}
      >
        <p
          className="font-satoshi font-normal text-base leading-[150%] text-[#6E6E6E] m-0"
          style={{ paddingLeft: "60px" }}
        >
          {description}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
