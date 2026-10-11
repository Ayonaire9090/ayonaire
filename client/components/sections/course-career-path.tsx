"use client";

import React, { useState } from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, XIcon } from "lucide-react";
import Image from "next/image";

interface CareerPathItem {
  current: boolean;
  title: string;
  description: string;
}

interface CourseCareerPathProps {
  courseTitle?: string;
  courseCategory?: string;
  courseCareerPath?: CareerPathItem[];
}

export const CourseCareerPath = ({
  courseTitle = "",
  courseCategory = "",
  courseCareerPath = [],
}: CourseCareerPathProps) => {
  const [selectedItem, setSelectedItem] = useState<{
    item: CareerPathItem;
    index: number;
  } | null>(null);

  if (!courseCareerPath || courseCareerPath.length === 0) {
    return null;
  }

  const handleCardClick = (item: CareerPathItem, index: number) => {
    setSelectedItem({ item, index });
  };

  // Reusable card component with tooltip
  const CareerCard = ({
    item,
    index,
    variant = "desktop",
  }: {
    item: CareerPathItem;
    index: number;
    variant?: "mobile" | "desktop";
  }) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => handleCardClick(item, index)}
          className={cn(
            "w-full text-left rounded-xl transition-all cursor-pointer hover:scale-[1.02] bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-[#FFEEE3] hover:border-2 hover:border-primary",
            variant === "mobile" ? "p-4 mb-4" : "p-3",
          )}
        >
          <h3
            className={cn(
              "font-semibold leading-tight text-gray-900 hover:text-primary",
              variant === "mobile" ? "text-base mb-1" : "text-sm mb-1",
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "text-gray-600 leading-relaxed",
              variant === "mobile" ? "text-sm" : "text-xs line-clamp-3",
            )}
          >
            {item.description}
          </p>
        </button>
      </TooltipTrigger>
      <TooltipContent side={variant === "desktop" ? "top" : "right"}>
        Click to learn more
      </TooltipContent>
    </Tooltip>
  );

  return (
    <section className="relative section-spacing">
      <div className="w-full h-full bg-linear-to-b from-white via-white to-[#FDF5EE] rounded-b-2xl lg:rounded-b-none lg:bg-white absolute inset-0 -z-10">
        <Image
          src="/assets/vector-bg.svg"
          width={900}
          height={900}
          alt=""
          className="hidden lg:block w-full h-full object-cover"
        />
      </div>

      <div className="container py-8">
        {/* Section Title */}
        <div className="flex flex-col justify-center items-center gap-3 mb-12">
          <AppSectionButton title="Career Path" />
          <AppHeading
            headingLevel="h2"
            title={`Your Career Path After Completing This ${courseTitle} Course`}
            className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
            descriptionClassName="text-center pt-3 w-[90%] lg:w-[70%] mx-auto"
            description={`By the end of this course, you'll have job-ready skills that prepare you for multiple real-world ${courseCategory} roles.`}
          />
        </div>

        {/* Mobile Timeline Layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-0">
              {courseCareerPath.map((item, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  {/* Timeline node */}
                  <div
                    className={cn(
                      "relative z-10 flex items-center justify-center w-12 h-12 rounded-full text-sm font-semibold shrink-0",
                      "bg-white border-2 border-gray-300 text-gray-600 hover:bg-primary hover:text-white",
                    )}
                  >
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="flex-1">
                    <CareerCard item={item} index={index} variant="mobile" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="relative min-w-max">
            {/* Horizontal timeline line - positioned at the center */}
            <div
              className="absolute left-0 right-0 h-0.5 bg-gray-200"
              style={{ top: "50%" }}
            />

            {/* Timeline columns */}
            <div className="flex gap-4">
              {courseCareerPath.map((item, index) => {
                const isTopCard = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                    style={{ width: "160px", minWidth: "160px" }}
                  >
                    {/* Top section: card or empty space */}
                    <div className="h-[140px] flex flex-col justify-end items-center">
                      {isTopCard && (
                        <CareerCard
                          item={item}
                          index={index}
                          variant="desktop"
                        />
                      )}
                    </div>

                    {/* Connector line from top card to node */}
                    <div
                      className={cn(
                        "w-0.5 h-4",
                        isTopCard ? "bg-gray-200" : "bg-transparent",
                      )}
                    />

                    {/* Timeline node */}
                    <div
                      className={cn(
                        "relative z-10 flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold shrink-0",
                        "bg-white border-2 border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:ring-4 hover:ring-primary/20",
                      )}
                    >
                      {index + 1}
                    </div>

                    {/* Connector line from node to bottom card */}
                    <div
                      className={cn(
                        "w-0.5 h-4",
                        !isTopCard ? "bg-gray-200" : "bg-transparent",
                      )}
                    />

                    {/* Bottom section: card or empty space */}
                    <div className="h-[140px] flex flex-col justify-start items-center">
                      {!isTopCard && (
                        <CareerCard
                          item={item}
                          index={index}
                          variant="desktop"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Career Path Detail Dialog */}
        <Dialog
          open={selectedItem !== null}
          onOpenChange={(open) => !open && setSelectedItem(null)}
        >
          <DialogContent
            showCloseButton={false}
            className="sm:max-w-md animate__animated animate__flipInX"
          >
            <DialogHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold shrink-0",
                    "bg-gray-100 text-gray-600  hover:bg-primary hover:text-white",
                  )}
                >
                  {selectedItem ? selectedItem.index + 1 : ""}
                </div>
              </div>
              <DialogClose className=" absolute -top-2 -right-2 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <XIcon className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </DialogClose>
              <DialogTitle className={cn("text-xl hover:text-primary")}>
                {selectedItem?.item.title}
              </DialogTitle>
              <DialogDescription className="text-base text-gray-700 mt-2">
                {selectedItem?.item.description}
              </DialogDescription>
            </DialogHeader>

            {/* Note about learning levels */}
            <div className="mt-4 p-4 bg-[#FFEEE3] border-0 rounded-lg">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold mb-1">
                    Note about career progression:
                  </p>
                  <p>
                    You are not required to complete all the courses before this
                    level if you wish to start here. However, we recommend
                    following the suggested learning path in order to have a
                    better experience and an easier learning curve.
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
