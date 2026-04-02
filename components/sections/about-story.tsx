"use client";

import React, { useState } from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import Image from "next/image";

export const AboutStory = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="container section-spacing">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Column */}
        <div className="flex flex-col gap-6">
          <AppSectionButton title="Story" className="w-fit" />
          <AppHeading
            headingLevel="h2"
            title="Our Story"
            className="text-3xl lg:text-5xl leading-tight!"
            description="Ayonaire was born out of a divine burden: too many believers are strong at the altar but powerless in the marketplace. We've raised Priests but neglected Kings. God gave us this vision to bridge the gap to raise believers who build platforms, fund the Gospel, and shape nations. Ayonaire is more than a tech school. It's a prophetic factory where digital skills become divine tools, lifting people from poverty into purpose."
            descriptionClassName="text-base lg:text-lg text-gray-600"
          />
        </div>

        {/* Video Column */}
        <div className="flex justify-end items-center">
          <div className="relative w-full bg-primary/20 max-w-md aspect-[4/4.5] rounded-t-0 rounded-b-full overflow-hidden">
            {!isVideoPlaying ? (
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 w-full h-full cursor-pointer group"
                aria-label="Play video"
              >
                <Image
                  src="/assets/images/hero-vid-thumb.png"
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
            ) : (
              <iframe
                src="https://player.vimeo.com/video/1148688112?autoplay=1&loop=1&muted=0"
                title="Ayonaire Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-8">
        {/* Content */}
        <div className="flex flex-col gap-4">
          <AppSectionButton title="Story" className="w-fit" />
          <AppHeading
            headingLevel="h2"
            title="Our Story"
            className="text-[27px] leading-tight!"
            description="Ayonaire was born out of a divine burden: too many believers are strong at the altar but powerless in the marketplace. We've raised Priests but neglected Kings. God gave us this vision to bridge the gap to raise believers who build platforms, fund the Gospel, and shape nations. Ayonaire is more than a tech school. It's a prophetic factory where digital skills become divine tools, lifting people from poverty into purpose."
            descriptionClassName="text-base text-gray-600"
          />
        </div>

        {/* Video */}
        <div className="flex justify-center items-center">
          <div className="relative bg-primary/20 w-full max-w-sm aspect-[4/4.5] rounded-t-0 rounded-b-full overflow-hidden">
            {!isVideoPlaying ? (
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 w-full h-full cursor-pointer group"
                aria-label="Play video"
              >
                <Image
                  src="/assets/images/hero-vid-thumb.png"
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
            ) : (
              <iframe
                src="https://player.vimeo.com/video/1148688112?autoplay=1&loop=1&muted=0"
                title="Ayonaire Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
