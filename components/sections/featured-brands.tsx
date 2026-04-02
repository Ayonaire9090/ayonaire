"use client";
import React, { Fragment } from "react";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { featuredLogos } from "@/constants";

interface FeaturedBrandsProps {
  title?: string;
  titleClassName?: string;
  titleContainerClassName?: string;
  logos?: string[];
  repeat?: number;
  pauseOnHover?: boolean;
  className?: string;
  marqueeContainerClassName?: string;
  marqueeClassName?: string;
  imageClassName?: string;
  logoFlexClassName?: string;
}
export const FeaturedBrands = ({
  title = "AS SEEN ON",
  titleClassName,
  titleContainerClassName,
  logos = featuredLogos,
  repeat = 3,
  pauseOnHover = true,
  className,
  marqueeContainerClassName,
  marqueeClassName,
  imageClassName,
  logoFlexClassName,
}: FeaturedBrandsProps) => {
  return (
    <div
      className={`flex  items-center justify-between pl-4 lg:pl-18 gap-4 lg:gap-8 py-6 relative ${className}`}
    >
      {title !== "" && (
        <div
          className={`w-auto min-w-[100px] lg:min-w-[170px] shrink-0 flex-none mr-2 z-20 relative bg-background ${titleContainerClassName}`}
        >
          <h2
            className={`text-left text-lg md:text-xl text-gray-500 lg:text-2xl font-bold leading-normal whitespace-nowrap ${titleClassName}`}
          >
            {title}
          </h2>
        </div>
      )}

      {/* Marquee Container */}
      <div
        className={`w-full flex-1 overflow-hidden min-w-0 z-0 relative ${marqueeContainerClassName}`}
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-10 lg:w-24 bg-linear-to-r from-background to-transparent" />
        <Marquee
          pauseOnHover={pauseOnHover}
          repeat={repeat}
          className={`[--duration:120s] ${marqueeClassName}`}
        >
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Featured Brand"
              width={200}
              height={80}
              className={`w-[110px] h-[40px] lg:w-[150px] lg:h-[50px] object-contain grayscale-100 hover:grayscale-0 transition-all duration-300 ${imageClassName}`}
            />
          ))}
        </Marquee>
      </div>

      {/* Logo Flex */}
      <div className="hidden lg:flex container items-center justify-end gap-4">
        {logos.map((logo, index) => (
          <Fragment key={logo}>
            <Image
              src={logo}
              alt="Featured Brand"
              width={200}
              height={80}
              className={`w-[100px] h-[30px] object-contain grayscale-100 hover:grayscale-0 transition-all duration-300 ${logoFlexClassName}`}
            />
            {index < logos.length - 1 && (
              <div className="w-px h-6 bg-gray-300" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
