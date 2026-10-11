"use client";

import React from "react";
import { AppHeading } from "../app-heading";
import { featuredBrands } from "@/constants";
import { AppBrandCard } from "../app-brand-card";
import { AppBrandCarousel } from "../app-brand-carousel";
import { cn } from "@/lib/utils";

interface BrandListProps {
    sectionTitle?: string;
    mobileSectionTitle?: string
    titleContainerClassName? : string;
    mobileTitleContainerClassName?: string;
    titleClassName?: string;
    mobileTitleClassName?: string;
    className?: string;
}
export const BrandList = ({ 
  sectionTitle = "Our Talents Have Worked With Many of These Top Leading Companies",
  mobileSectionTitle,
  titleContainerClassName,
  mobileTitleContainerClassName,
  titleClassName,
  mobileTitleClassName,
  className
}: BrandListProps) => {
  return (
    <div className={cn("container", className)}>
      <div className="flex flex-col items-center justify-center">
        <div className={cn("w-full block lg:hidden  md:text-center lg:max-w-[70%] py-6", mobileTitleContainerClassName)}>
          <AppHeading
            headingLevel="h2"
            title={mobileSectionTitle || ""}
            className={cn("text-start md:text-center text-[30px] lg:text-[44px] font-semibold lg:font-bold leading-done!", mobileTitleClassName)}
          />
        </div>
        <div className={cn("w-full hidden lg:block  md:text-center lg:max-w-[70%] py-6", titleContainerClassName)}>
          <AppHeading
            headingLevel="h2"
            title={sectionTitle}
            className={cn("text-start md:text-center text-[30px] lg:text-[44px] font-semibold lg:font-bold leading-tight!", titleClassName)}
          />
        </div>

        {/* Desktop - Auto Grid */}
        <div className="w-full hidden lg:block ">
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {featuredBrands.map((brand) => (
              <AppBrandCard
                key={brand.name}
                logo={brand.img}
                className="w-full h-fit"
              />
            ))}
          </div>
        </div>

        {/* Mobile - carousel animations */}
        <div className="w-full lg:hidden">
          <AppBrandCarousel />
        </div>
      </div>
    </div>
  );
};
