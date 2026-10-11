"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";

interface CourseWhyJoinProps {
  title: string;
  description: string;
  keyFeatures: string[];
}

export const CourseWhyJoin = ({
  title,
  description,
  keyFeatures,
}: CourseWhyJoinProps) => {
  const [showAll, setShowAll] = useState(false);
  const MOBILE_INITIAL_COUNT = 4;

  // For mobile: show limited items unless expanded
  const visibleFeaturesMobile = showAll
    ? keyFeatures
    : keyFeatures.slice(0, MOBILE_INITIAL_COUNT);

  const hasMoreItems = keyFeatures.length > MOBILE_INITIAL_COUNT;

  return (
    <section className="container relative section-spacing">
      <div className=" flex flex-col items-center justify-center space-y-6 lg:space-y-10">
        <AppSectionButton title="Why Join" />
        <div className="w-full max-w-full lg:max-w-[60%] mx-auto text-center">
          <AppHeading
            headingLevel="h2"
            title={title}
            className="w-full text-center text-[30px] lg:text-5xl leading-tight!"
            description={description}
          />
        </div>

        {/* Key Features Section */}

        <div className="flex flex-col items-center lg:items-start w-full gap-4 lg:gap-6 my-6">
          <h2 className="text-xl lg:text-2xl font-medium capitalize text-black self-start">
            Key Features
          </h2>
          {/* Mobile: Vertical List */}
          <div className="lg:hidden flex flex-col gap-4 w-full">
            {visibleFeaturesMobile.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src="/assets/icons/round-tick.svg"
                  alt="check"
                  width={40}
                  height={40}
                  className="shrink-0 mt-1"
                />
                <p className="text-sm lg:text-base text-[#6E6E6E] capitalize leading-normal">
                  {feature}
                </p>
              </div>
            ))}

            {/* View More / View Less Button - only show if more than 4 items */}
            {hasMoreItems && (
              <div className="flex justify-center mt-4">
                <AppActionButton
                  title={showAll ? "View Less" : "View More"}
                  onClick={() => setShowAll(!showAll)}
                />
              </div>
            )}
          </div>

          {/* Desktop: 3-Column Grid - show all items */}
          <div className="hidden lg:grid grid-cols-3 gap-x-10 gap-y-8 w-full">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Image
                  src="/assets/icons/round-tick.svg"
                  alt="check"
                  width={40}
                  height={40}
                  className="shrink-0"
                />
                <p className="text-base text-[#6E6E6E] capitalize leading-normal">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
