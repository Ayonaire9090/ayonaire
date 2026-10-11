"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect, useCallback } from "react";

const recordings = [
  {
    title: "Mastering Tech Leadership",
    image: "/assets/images/class-recordings-1.png",
    level: "Intermediate",
    author: "Tatiana Rosser",
    duration: "7hours 30Min",
  },
  {
    title: "Product Strategy Essentials",
    image: "/assets/images/class-recordings-2.png",
    level: "Intermediate",
    author: "Esther Howard",
    duration: "7hours 30Min",
  },
  {
    title: "Modern Web Development Bootcamp",
    image: "/assets/images/class-recordings-3.png",
    level: "Beginner",
    author: "Courtney Henry",
    duration: "7hours 30Min",
  },
  {
    title: "Digital Marketing Mastery",
    image: "/assets/images/class-recordings-4.png",
    level: "Intermediate",
    author: "Jerome Bell",
    duration: "7hours 30Min",
  },
];

export const AdminClassRecordings = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-3xl font-semibold">Class Recordings</h2>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="size-14 rounded-full flex justify-center items-center bg-white/40! backdrop-blur-md! border! border-white/20! p-0"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="size-8 text-black/80" />
          </Button>

          <Button
            variant="outline"
            className="size-14 rounded-full flex justify-center items-center bg-primary! text-white! p-0"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
          >
            <ChevronRight className="size-8 text-white/80" />
          </Button>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {recordings.map((recording, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[90%] lg:basis-[40%]"
            >
              <ClassRecordingsCard {...recording} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

interface ClassRecordingsCardProps {
  title: string;
  image?: string;
  level?: string;
  author?: string;
  duration?: string;
}
export const ClassRecordingsCard = ({
  title,
  image,
  level,
  author,
  duration,
}: ClassRecordingsCardProps) => {
  return (
    <div className="w-full my-2 bg-white rounded-2xl! shadow-md! flex flex-col justify-center items-start relative overflow-hidden">
      {image && (
        <div className="relative w-full h-[250px]">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <Badge
              variant="outline"
              className="bg-white/70! backdrop-blur-md! border! border-white/40! rounded-full! text-base text-black! px-4! py-1.5!"
            >
              {level}
            </Badge>
          </div>
        </div>
      )}
      <div className="px-5 pt-5 pb-5 space-y-5 w-full">
        <h2 className="text-xl font-bold! text-gray-900">{title}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-base">Course by</p>
            <p className="text-gray-900 text-base font-semibold">{author}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-base">Time</p>
            <p className="text-gray-900 text-base font-semibold">{duration}</p>
          </div>
        </div>
        {/* View Button */}
        <Button className="w-full bg-primary! text-lg text-white! rounded-2xl! py-6!">
          View
        </Button>
      </div>
    </div>
  );
};
