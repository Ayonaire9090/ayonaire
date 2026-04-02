"use client";

import { useEffect, useState } from "react";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";
import { stepsToLearn } from "@/constants";
import { cn } from "@/lib/utils";
import { Spline_Sans } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AppNextButton } from "../app-next-button";
import { AppPreviousButton } from "../app-previous-button";
import Autoplay from "embla-carousel-autoplay";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

interface CourseHowToApplyProps {
  courseTitle?: string;
  courseCategory?: string;
}

// Step Card Component with number instead of icon
const StepCard = ({
  step,
  title,
  description,
  className,
}: {
  step: number;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative bg-white shadow-lg lg:shadow-xl border border-gray-200 rounded-2xl p-6 pt-16 h-full",
        className
      )}
    >
      {/* Step Number with gradient background */}
      <div className="absolute top-0 left-6 -translate-y-1/2">
        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-linear-to-br from-[#F67219] via-[#F67219] to-[#FFE6D5] flex items-center justify-center shadow-md">
          <span
            className={cn(
              "text-white text-2xl lg:text-3xl font-bold",
              splineSans.className
            )}
          >
            {step}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3
          className={cn(
            "text-xl lg:text-2xl font-bold text-gray-900 leading-tight",
            splineSans.className
          )}
        >
          {title}
        </h3>
        <p className="text-base text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const CourseHowToApply = ({
  courseTitle = "",
  courseCategory = "",
}: CourseHowToApplyProps) => {
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

  // Split steps into top row (first 3) and bottom row (remaining)
  const topRowSteps = stepsToLearn.slice(0, 3);
  const bottomRowSteps = stepsToLearn.slice(3);

  return (
    <section className="container section-spacing">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Steps" />
        <AppHeading
          headingLevel="h2"
          title={`How To Apply To The ${courseTitle} Course`}
          description={`Getting Started On Your ${courseCategory} Journey With Ayonaire Is Easy, Clear, And Fully Online. Here's How To Begin.`}
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center lg:w-[70%] mx-auto"
        />
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden">
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
            {stepsToLearn.map((step, index) => (
              <CarouselItem key={index} className="pl-3 basis-full">
                <div className="p-1 pt-8 h-full">
                  <StepCard
                    step={index + 1}
                    title={step.title}
                    description={step.description}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls with Progress Bar */}
          <div className="flex justify-center items-center w-full max-w-[70%] mx-auto gap-2 mt-5">
            <AppPreviousButton buttonType="outline" />

            {/* Progress Bar Track (Gray Background) */}
            <div className="h-2 w-48 bg-gray-300 rounded-[2px] overflow-hidden">
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

      {/* Desktop Grid Layout */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-6">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-3 gap-6">
            {topRowSteps.map((step, index) => (
              <div key={index} className="pt-8">
                <StepCard
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - Centered card */}
          {bottomRowSteps.length > 0 && (
            <div className="flex justify-center">
              <div className="w-1/3 pt-8">
                <StepCard
                  step={4}
                  title={bottomRowSteps[0].title}
                  description={bottomRowSteps[0].description}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
