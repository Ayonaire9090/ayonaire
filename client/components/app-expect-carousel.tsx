"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AppExpectCard } from "./app-expect-card";
import { AppNextButton } from "./app-next-button";
import { AppPreviousButton } from "./app-previous-button";
import Autoplay from "embla-carousel-autoplay";
import { whatYouShouldExpect } from "@/constants";

interface AppExpectCarouselProps {
  items?: typeof whatYouShouldExpect;
}

export const AppExpectCarousel = ({
  items = whatYouShouldExpect,
}: AppExpectCarouselProps) => {
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
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-3 basis-1/1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1 h-full">
              <AppExpectCard title={item.title} image={item.image} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Controls with Progress Bar */}
      <div className="flex justify-center items-center gap-2 mt-5">
        <AppPreviousButton buttonType="outline" />

        {/* Progress Bar Track (Gray Background) */}
        <div className="h-2 w-48 bg-gray-500 rounded-[2px] overflow-hidden">
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
  );
};
