"use client";
import React, { useState } from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const OurMission = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="container flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-24 section-spacing">
      <div className="flex flex-col items-start justify-start my-6 space-y-6 w-full lg:w-[60%]">
        <AppSectionButton title="Our Mission" />
        <AppHeading
          headingLevel="h2"
          title="Our Mission Is to Change Lives Through Digital Skills"
          description="We don’t just train students; we produce problem-solvers, industry leaders, and community builders. Impact isn’t a byproduct; it’s the goal."
          className="text-[30px] lg:text-5xl leading-tight!"
        />
        <div className="hidden lg:flex flex-col space-y-3">
          <h3 className="text-lg font-semibold">
            We were founded to drive lasting change.
          </h3>
          <p className="text-base font-normal text-gray-500">
            Transforming one life can have a lasting influence on generations,
            so every program, project, and mentorship is carefully designed to
            create a meaningful impact.
          </p>
        </div>

        <div className="hidden lg:block">
          <AppActionButton>
            Learn More About Us
            <span className="bg-white p-1 rounded group-hover:ml-2 transition-all ease-in-out duration-300">
              <ArrowRight size={20} className="text-primary  rounded" />
            </span>
          </AppActionButton>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-[40%]">
        <div className="relative w-full h-[350px] lg:min-h-[500px] rounded-b-[50%] border-12 border-t-0 border-l-gray-100 border-b-primary/10 border-r-primary/20 overflow-hidden bg-primary/50">
          {isVideoPlaying ? (
            <iframe
              src="https://player.vimeo.com/video/1150202026?autoplay=1&loop=1&muted=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Ayonaire Mission Video"
            />
          ) : (
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer group"
              aria-label="Play video"
            >
              <Image
                src="/assets/images/ayonaire-partner-2.png"
                alt="Mission Video Thumbnail"
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
        <div className="flex self-start lg:hidden py-6">
          <AppActionButton>
            Learn More About Us
            <span className="bg-white p-1 rounded group-hover:ml-2 transition-all ease-in-out duration-300">
              <ArrowRight size={20} className="text-primary  rounded" />
            </span>
          </AppActionButton>
        </div>
      </div>
    </div>
  );
};
