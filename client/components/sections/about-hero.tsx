"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "../layout/header";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";

export const AboutHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="relative z-10 flex flex-col justify-center items-center gap-4 pt-10 lg:py-12">
            <AppSectionButton className="bg-white" title="About Ayonaire" />
            <AppHeading
              headingLevel="h1"
              title="Raising a New Generation of Tech Talents for Global Impact"
              description="Ayonaire is raising Africa's next generation of tech leaders and showcasing their talent on the world stage."
              className="text-center w-full lg:max-w-[80%] mx-auto leading-tight! pt-4"
              descriptionClassName="text-[#141414] text-center w-full lg:max-w-[40%] mx-auto font-medium"
            />

            {/* Video Player Section */}
            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              {!isPlaying ? (
                <>
                  {/* Thumbnail */}
                  <Image
                    src="/assets/images/about-hero-img.png"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                /* Vimeo Video */
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
      </div>
    </>
  );
};
