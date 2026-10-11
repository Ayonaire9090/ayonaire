"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { featuredBrands } from "@/constants";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface CourseToolsToMasterProps {
  courseTitle?: string;
}

// Pair brands into groups of 2, wrapping around for odd counts
const pairBrands = (brands: typeof featuredBrands) => {
  const pairs: { first: (typeof brands)[0]; second: (typeof brands)[0] }[] = [];
  for (let i = 0; i < brands.length; i += 2) {
    pairs.push({
      first: brands[i],
      second: brands[i + 1] || brands[0],
    });
  }
  return pairs;
};

// Custom two-row brand card for course tools (always shows 2 rows on all screen sizes)
const TwoRowBrandCard = ({
  logo,
  logo2,
  className,
}: {
  logo: string;
  logo2: string;
  className?: string;
}) => {
  const SingleCard = ({ logoSrc }: { logoSrc: string }) => (
    <div
      className={cn(
        "shadow-md lg:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] border-none rounded-2xl",
        className
      )}
    >
      <div className="h-full">
        <div className="flex items-center justify-center h-full">
          <Image
            src={logoSrc}
            alt=""
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <SingleCard logoSrc={logo} />
      <SingleCard logoSrc={logo2} />
    </div>
  );
};

// Animated wrapper for carousel items
const AnimatedCarouselItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <CarouselItem ref={ref} className={className}>
      <div
        className={`my-3 lg:my-6 ${
          isVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </CarouselItem>
  );
};

const CourseToolsToMaster = ({
  courseTitle = "",
}: CourseToolsToMasterProps) => {
  const pairedBrands = pairBrands(featuredBrands);

  return (
    <section className="container section-spacing">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center gap-3">
        <AppSectionButton title="Tools Use And Master" />
        <AppHeading
          headingLevel="h2"
          title={`${courseTitle} Tools You'll Use And Master`}
          className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
        />
      </div>

      {/* Technical Skills Label */}
      <div className="pt-8 lg:pt-12">
        <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6">
          Technical Skills
        </h3>
      </div>

      {/* Brand Carousel - 2 rows on both mobile and desktop */}
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {pairedBrands.map((pair, index) => (
              <AnimatedCarouselItem
                key={index}
                className="pl-3 basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <TwoRowBrandCard
                  logo={pair.first.img}
                  logo2={pair.second.img}
                  className="w-full py-3"
                />
              </AnimatedCarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* View More Button */}
      <div className="flex justify-center pt-6 lg:pt-8">
        <AppActionButton
          variant="fading"
          className=""
        >
          View More
        </AppActionButton>
      </div>
    </section>
  );
};

export default CourseToolsToMaster;
