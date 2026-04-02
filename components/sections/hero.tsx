"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { heroFeatures } from "@/constants";
import { AppList } from "../app-list";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Header } from "../layout/header";
import { AppHeading } from "../app-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import { useRouter } from "next/navigation";

interface HeroProps {
  features?: typeof heroFeatures;
  tickType?: "round" | "default";
  showPersons?: boolean;
  actionButtons?: React.ReactNode | React.ReactNode[];
}
export const Hero = ({
  features = heroFeatures,
  tickType = "default",
  showPersons = true,
  actionButtons,
}: HeroProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <>
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <section className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full lg:py-6"
          >
            <CarouselContent className="ml-0">
              {features?.map((slide, index) => (
                <CarouselItem key={slide.id} className="pl-0 basis-full">
                  <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    {/* First Column */}
                    <div className="flex flex-col justify-center">
                      <AppHeading title={slide.title} headingLevel="h1" />
                      {/* Uncomment this to enable showing the detail as list conditionally */}
                      {/* <AppHeading
                        title={slide.title}
                        headingLevel="h1"
                        description={
                          slide.features.length === 1
                            ? slide.features[0]
                            : undefined
                        }
                        descriptionClassName="text-base! lg:text-xl! text-[#141414]!"
                      /> */}
                      {/* {
                        slide.features.length > 1 && (
                          <AppList
                            items={slide.features}
                            tickVariant={tickType}
                            className="lg:space-y-3"
                          />
                        )
                      } */}
                      <AppList
                        items={slide.features}
                        tickVariant={tickType}
                        className="lg:space-y-3"
                      />
                      {(Array.isArray(actionButtons)
                        ? actionButtons[index]
                        : actionButtons) || (
                        <div className="grid grid-cols-2 lg:flex items-center gap-2 lg:gap-4 pt-8 lg:pt-12 md:py-18">
                          <Button
                            onClick={() => router.push("/get-started")}
                            variant="fading"
                            className="py-6 lg:py-8 px-2 lg:px-6 text-[11px] text-base lg:text-base rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group flex items-center justify-center gap-1.5 lg:gap-2"
                          >
                            <p>See Bootcamps</p>
                            <span className="bg-white p-1 rounded-lg shrink-0 group-hover:ml-2 transition-all ease-in-out duration-300">
                              <ArrowRight className="text-primary rounded w-3.5 h-3.5 lg:w-6 lg:h-6" />
                            </span>
                          </Button>
                          <Button
                            onClick={() =>
                              router.push("/opt-in#freeAccessFormOptin")
                            }
                            variant="outline"
                            className="py-6 lg:py-8 px-2 lg:px-6 text-[11px] text-base lg:text-base rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 hover:text-white cursor-pointer"
                          >
                            <p>Talk to an Advisor</p>
                          </Button>
                        </div>
                      )}
                    </div>
                    {/* Second Column */}
                    <div
                      className={`flex w-full h-full items-center justify-center lg:justify-end ${showPersons && "gap-2 lg:gap-6"} relative min-h-[400px]`}
                    >
                      {slide.id === "1" ? (
                        <div className="relative w-full lg:w-[80%] mx-auto h-[350px] lg:min-h-[500px]  rounded-b-[50%] border-12 border-t-0 border-l-gray-100 border-b-primary/10 border-r-primary/20 overflow-hidden bg-primary/50">
                          {isVideoPlaying ? (
                            <iframe
                              src="https://player.vimeo.com/video/1150267184?autoplay=1&loop=1&muted=0"
                              className="absolute inset-0 w-full h-full"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                              title="Ayonaire Introduction Video"
                            />
                          ) : (
                            <button
                              onClick={() => setIsVideoPlaying(true)}
                              className="absolute inset-0 w-full h-full cursor-pointer group"
                              aria-label="Play video"
                            >
                              <Image
                                src="/assets/images/ayo-partner.png"
                                alt="Video thumbnail"
                                fill
                                className="object-cover"
                              />
                              {/* Play Button Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                  <svg
                                    className="w-6 h-6 text-white ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="relative w-full lg:min-w-[500px] h-[350px] lg:min-h-[500px]">
                          <Image
                            src={slide.image}
                            alt="Hero Image"
                            fill
                            className="object-fill"
                          />
                        </div>
                      )}
                      {showPersons &&
                      slide.persons &&
                      slide.persons.length > 0 ? (
                        <div className="flex flex-col gap-4">
                          {slide?.persons?.map((person) => (
                            <Image
                              key={person.name}
                              src={person.image}
                              alt={person.name}
                              width={40}
                              height={40}
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Controls */}
            <div className="flex w-full max-w-[50%] items-center justify-between gap-4 my-4">
              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                      current === index
                        ? "bg-primary"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border-2 border-primary/30 bg-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
                aria-label="Next slide"
              >
                <ChevronRight
                  size={18}
                  className="text-primary group-hover:translate-x-0.5 transition-transform duration-300"
                />
              </button>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};
