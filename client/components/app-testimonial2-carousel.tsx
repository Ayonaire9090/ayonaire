"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AppTestimonial2Card } from "./app-testimonial2-card";
import Autoplay from "embla-carousel-autoplay";
import { testimonials2 } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface AppTestimonial2CarouselProps {
  enableButtons?: boolean;
  cardVariant?: "default" | "simple";
  testimonials?: typeof testimonials2;
}

export const AppTestimonial2Carousel = ({
  enableButtons = true,
  cardVariant = "default",
  testimonials = testimonials2,
}: AppTestimonial2CarouselProps) => {
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
      <CarouselContent className="-ml-4 pb-4">
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1 h-full">
              <AppTestimonial2Card
                name={testimonial.name}
                username={testimonial.username}
                address={testimonial.address}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                image={testimonial.image}
                variant={cardVariant}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Controls with Progress Bar - Only shown when enableButtons is true */}
      {enableButtons && (
        <div className="flex justify-center items-center gap-2 mt-5">
          <CarouselPrevious
            variant="link"
            size="lg"
            className="static translate-y-0 translate-x-0 border-0 hover:bg-transparent hover:text-primary size-auto!"
          >
            <ArrowLeft strokeWidth={1.7} className="size-[35px] text-primary" />
          </CarouselPrevious>

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

          <CarouselNext
            variant="link"
            size="lg"
            className="static translate-y-0 translate-x-0 border-0 hover:bg-transparent hover:text-primary size-auto!"
          >
            <ArrowRight
              strokeWidth={1.7}
              className="size-[35px] text-primary"
            />
          </CarouselNext>
        </div>
      )}
    </Carousel>
  );
};
