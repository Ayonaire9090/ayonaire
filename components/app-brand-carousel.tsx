"use client";

import React, { useRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { featuredBrands } from "@/constants";
import { AppBrandCard } from "./app-brand-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Pair brands into groups of 2, wrapping around for odd counts
const pairBrands = (brands: typeof featuredBrands) => {
  const pairs: { first: (typeof brands)[0]; second: (typeof brands)[0] }[] = [];
  for (let i = 0; i < brands.length; i += 2) {
    pairs.push({
      first: brands[i],
      // If odd number of brands, wrap around to use the first brand
      second: brands[i + 1] || brands[0],
    });
  }
  return pairs;
};

// Animated wrapper that triggers fadeInUp when entering viewport
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
            // Card is entering the viewport
            setIsVisible(true);
          } else {
            // Card has left the viewport - reset so animation can replay
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
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
        className={`my-6 ${
          isVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </CarouselItem>
  );
};

export const AppBrandCarousel = () => {
  // Create pairs of brands (2 per carousel item)
  const pairedBrands = pairBrands(featuredBrands);

  return (
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
              className="pl-3 basis-1/3 min-[480px]:basis-1/4 md:basis-1/5"
            >
              <AppBrandCard
                logo={pair.first.img}
                logo2={pair.second.img}
                className="w-full py-3"
              />
            </AnimatedCarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
