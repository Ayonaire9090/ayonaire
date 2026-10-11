"use client";

import React, { useEffect, useState } from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppProjectCourseCard } from "../app-project-course-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import { AppNextButton } from "../app-next-button";
import { AppPreviousButton } from "../app-previous-button";
import Autoplay from "embla-carousel-autoplay";

interface CourseProject {
  title: string;
  description: string;
}

interface CourseProjectsProps {
  courseProjects?: CourseProject[];
}

export const CourseProjects = ({
  courseProjects = [],
}: CourseProjectsProps) => {
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

  if (!courseProjects || courseProjects.length === 0) {
    return null;
  }

  return (
    <section className="container section-spacing">
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Industry Projects" />
        <AppHeading
          headingLevel="h2"
          title="Real-World Industry Projects That Prepare You for the Job"
          description="Apply everything you learn through hands-on projects built from real-world scenarios across top industries."
          className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center pt-3 w-full lg:w-[90%] mx-auto"
        />
      </div>

      {/* Carousel */}
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
        <CarouselContent className="-ml-4 lg:-ml-6">
          {courseProjects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-4 lg:pl-6 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-1/3"
            >
              <AppProjectCourseCard
                title={project.title}
                description={project.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation with Progress Bar */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Rounded on mobile */}
          <AppPreviousButton buttonType="rounded" className="lg:hidden" />
          {/* Arrow on desktop */}
          <AppPreviousButton buttonType="default" className="hidden lg:flex" />

          {/* Progress Bar Track */}
          <div className="h-2 w-32 lg:w-48 bg-gray-200 rounded-[2px] overflow-hidden">
            {/* Filling Indicator */}
            <div
              className="h-full bg-primary transition-all duration-300 ease-out rounded-[2px]"
              style={{
                width: `${count > 0 ? (current / count) * 100 : 0}%`,
              }}
            />
          </div>

          {/* Rounded on mobile */}
          <AppNextButton buttonType="rounded" className="lg:hidden" />
          {/* Arrow on desktop */}
          <AppNextButton buttonType="default" className="hidden lg:flex" />
        </div>
      </Carousel>
    </section>
  );
};
