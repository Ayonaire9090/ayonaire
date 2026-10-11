"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AppCourseCard } from "./app-course-card";
import { AppPreviousButton } from "./app-previous-button";
import { AppNextButton } from "./app-next-button";
import Autoplay from "embla-carousel-autoplay";

export const AppSchoolCarousel = ({
  schoolCourses,
  align = "start",
  showBackgroundBorderMobile = false,
  desktopGridRows,
  nextButtonType = "default",
  previousButtonType = "default",
  progressBarClasses,
}: {
  schoolCourses: any[];
  align?: "start" | "center" | "end";
  showBackgroundBorderMobile?: boolean;
  /** Number of rows to display per slide on desktop (e.g., 2 for a 3x2 grid). If not set, uses default single-row carousel. */
  desktopGridRows?: number;
  nextButtonType?: "default" | "rounded";
  previousButtonType?: "default" | "rounded";
  progressBarClasses?: string;
}) => {
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

  // For grid layout: group courses into slides (3 columns × desktopGridRows rows)
  const columnsPerRow = 3;
  const coursesPerSlide = desktopGridRows ? columnsPerRow * desktopGridRows : 1;

  // Create grouped slides for desktop grid layout
  const groupedSlides: any[][] = [];
  if (desktopGridRows) {
    for (let i = 0; i < schoolCourses.length; i += coursesPerSlide) {
      groupedSlides.push(schoolCourses.slice(i, i + coursesPerSlide));
    }
  }

  return (
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
        align: align,
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-3 pb-4">
        {desktopGridRows ? (
          <>
            {/* Desktop: Grid layout (hidden on mobile) */}
            {groupedSlides.map((slide, slideIndex) => (
              <CarouselItem
                key={slideIndex}
                className="pl-3 basis-full hidden lg:block"
              >
                <div className="grid grid-cols-3 gap-4">
                  {slide.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="p-1 sm:p-3 flex justify-center h-full"
                    >
                      <AppCourseCard
                        title={course.title}
                        description={course.description}
                        imageSrc={course.imageSrc}
                        nextCohortDate={course.nextCohortDate}
                        duration={course.duration}
                        slug={course.slug}
                        showBackgroundBorderMobile={showBackgroundBorderMobile}
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
            {/* Mobile: Single-row carousel (hidden on desktop) */}
            {schoolCourses.map((course, index) => (
              <CarouselItem
                key={`mobile-${index}`}
                className={`pl-3 lg:hidden ${
                  align === "center"
                    ? "basis-full sm:basis-1/2"
                    : "basis-full sm:basis-1/2"
                }`}
              >
                <div className="p-1 sm:p-3 flex justify-center h-full">
                  <AppCourseCard
                    title={course.title}
                    description={course.description}
                    imageSrc={course.imageSrc}
                    nextCohortDate={course.nextCohortDate}
                    duration={course.duration}
                    slug={course.slug}
                    showBackgroundBorderMobile={showBackgroundBorderMobile}
                  />
                </div>
              </CarouselItem>
            ))}
          </>
        ) : (
          // Default: Single-row carousel for all screen sizes
          schoolCourses.map((course, index) => (
            <CarouselItem
              key={index}
              className={`pl-3 ${
                align === "center"
                  ? "basis-full sm:basis-1/2"
                  : "md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
              }`}
            >
              <div className="p-1 sm:p-3 flex justify-center h-full">
                <AppCourseCard
                  title={course.title}
                  description={course.description}
                  imageSrc={course.imageSrc}
                  nextCohortDate={course.nextCohortDate}
                  duration={course.duration}
                  slug={course.slug}
                  showBackgroundBorderMobile={showBackgroundBorderMobile}
                />
              </div>
            </CarouselItem>
          ))
        )}
      </CarouselContent>

      {/* Controls with Progress Bar */}
      <div className="flex justify-center items-center w-full  max-w-[80%] mx-auto gap-2 mt-5">
        <AppPreviousButton buttonType={previousButtonType} />

        {/* Progress Bar Track (Gray Background) */}
        <div className={`h-2 w-48 bg-gray-500 rounded-[2px] overflow-hidden ${progressBarClasses}`}>
          {/* Filling Indicator (orange/Primary) */}
          <div
            className="h-full bg-primary transition-all duration-300 ease-out rounded-[2px]"
            style={{
              // Width grows based on current slide vs total slides
              width: `${count > 0 ? (current / count) * 100 : 0}%`,
            }}
          />
        </div>

        <AppNextButton buttonType={nextButtonType} />
      </div>
    </Carousel>
  );
};
