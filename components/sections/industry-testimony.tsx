"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppPreviousButton } from "../app-previous-button";
import { AppNextButton } from "../app-next-button";
import Autoplay from "embla-carousel-autoplay";
import { aiIndustryTestimony } from "@/constants";

// Industry Testimony Card Component
const IndustryTestimonyCard = ({
  title,
  source,
}: {
  title: string;
  source: string;
}) => {
  return (
    <div className="relative bg-white rounded-2xl p-3 md:p-6 shadow-sm border border-gray-100 h-full min-h-[180px] md:min-h-[200px] border-l-3 lg:border-l-4 border-l-primary">
      {/* Quote Text */}
      <p className="text-gray-700 text-lg md:text-xl font-semibold leading-relaxed pr-12 mb-4">
        &ldquo;{title}&rdquo;
      </p>

      {/* Source Attribution */}
      <p className="text-gray-600 font-medium">— {source}</p>

      {/* Orange Quote Icon */}
      <div className="absolute bottom-6 right-6">
        <svg
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path
            d="M0 32V21.3333C0 17.7778 0.666667 14.4444 2 11.3333C3.33333 8.22222 5.33333 5.33333 8 2.66667L14.6667 7.33333C12.8889 9.55556 11.5556 11.7778 10.6667 14C9.77778 16.2222 9.33333 18.4444 9.33333 20.6667H16V32H0ZM24 32V21.3333C24 17.7778 24.6667 14.4444 26 11.3333C27.3333 8.22222 29.3333 5.33333 32 2.66667L38.6667 7.33333C36.8889 9.55556 35.5556 11.7778 34.6667 14C33.7778 16.2222 33.3333 18.4444 33.3333 20.6667H40V32H24Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

// Type for testimony items
export interface TestimonyItem {
  title: string;
  source: string;
}

interface IndustryTestimonyProps {
  /** The label for the section button */
  sectionButtonTitle?: string;
  /** The main heading title */
  title?: string;
  /** Array of testimony items to display */
  testimonies?: TestimonyItem[];
}

export function IndustryTestimony({
  sectionButtonTitle = "Hear From Them",
  title = "What the Industry is Saying",
  testimonies = aiIndustryTestimony,
}: IndustryTestimonyProps) {
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

  return (
    <section className="section-spacing overflow-hidden space-y-6">
      <div className="container flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <AppSectionButton title={sectionButtonTitle} />
          <AppHeading
            headingLevel="h2"
            title={title}
            className="text-[30px] lg:text-5xl leading-tight!"
          />
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonies.map((testimony, index) => (
            <IndustryTestimonyCard
              key={index}
              title={testimony.title}
              source={testimony.source}
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden px-4">
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
          <CarouselContent className="-ml-4 pb-4">
            {testimonies.map((testimony, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-[85%] sm:basis-[80%]"
              >
                <div className="p-1 h-full">
                  <IndustryTestimonyCard
                    title={testimony.title}
                    source={testimony.source}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls with Progress Bar */}
          <div className="flex justify-center items-center w-full max-w-[70%] mx-auto gap-2 mt-5">
            <AppPreviousButton buttonType="outline" />

            {/* Progress Bar Track */}
            <div className="h-2 w-48 bg-gray-300 rounded-[2px] overflow-hidden">
              {/* Filling Indicator */}
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
    </section>
  );
}
