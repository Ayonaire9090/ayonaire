"use client";

import React, { useEffect, useState } from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppHalfBorderCard } from "../app-half-border-card";
import { AppNextButton } from "../app-next-button";
import { AppPreviousButton } from "../app-previous-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Icons for each card position
const cardIcons = [
  "/assets/icons/chart-up.svg", // Start from Scratch
  "/assets/icons/brain-storm.svg", // Curriculum
  "/assets/icons/live-class.svg", // Live Classes
  "/assets/icons/book-at.svg", // Projects
];

interface WhyLearnAndJobItem {
  title: string;
  description: string;
}

interface CourseLearnAndJobProps {
  courseTitle?: string;
  whyLearnAndJob?: WhyLearnAndJobItem[];
}

import { AppSection } from "../app-section";

export const CourseLearnAndJob = ({
  courseTitle = "",
  whyLearnAndJob = [],
}: CourseLearnAndJobProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // If no data, don't render the section
  if (!whyLearnAndJob || whyLearnAndJob.length === 0) {
    return null;
  }

  return (
    <AppSection
      variant="gradient"
      useSectionSpacing={false}
      containerClassName="py-6"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <AppSectionButton title="Learn & Job" />
        <AppHeading
          title={`What You'll Learn and Get in this Job-Ready ${courseTitle} Course`}
          headingLevel="h2"
          className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
        />
      </div>

      {/* Carousel */}
      <div className="mt-10 px-2 lg:px-4 mx-auto">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
              stopOnFocusIn: true,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 pb-3">
            {whyLearnAndJob.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-3 basis-1/1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1 h-full">
                  <AppHalfBorderCard
                    icon={cardIcons[index] || cardIcons[0]}
                    title={item.title}
                    description={item.description}
                    containerClassName="h-[280px]! lg:h-[300px]!"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls with Progress Bar */}
          <div className="flex justify-center items-center w-full max-w-[70%] mx-auto gap-2 mt-5 pb-8">
            <AppPreviousButton buttonType="outline" />

            {/* Progress Bar Track (Gray Background) */}
            <div className="h-2 w-48 bg-white rounded-[2px] overflow-hidden">
              {/* Filling Indicator (orange/Primary) */}
              <div
                className="h-full bg-primary transition-all duration-300 ease-out rounded-[2px]"
                style={{
                  width: `${count > 0 ? (current / count) * 100 : 0}%`,
                }}
              />
            </div>

            <AppNextButton buttonType="outline" />
          </div>
        </Carousel>
      </div>
    </AppSection>
  );
};
