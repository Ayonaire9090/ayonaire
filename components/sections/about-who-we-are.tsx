import React from "react";
import Image from "next/image";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";
import { AppSection } from "../app-section";

const whoWeAreImages = [
  "/assets/images/who-we-are-1.png",
  "/assets/images/who-we-are-2.png",
  "/assets/images/who-we-are-3.png",
];

export const AboutWhoWeAre = () => {
  return (
    <AppSection
      variant="white"
      useSectionSpacing={true}
      containerClassName="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Text Content */}
      <div className="flex flex-col gap-5">
        <AppSectionButton title="Who" className="w-fit bg-white" />
        <AppHeading
          headingLevel="h2"
          title="Who We Are"
          description="We are more than a tech school. We are a movement raising African creators, innovators, and leaders."
          className="text-start text-[36px]! lg:text-[44px]!"
          descriptionClassName="text-start text-base pt-2 lg:text-lg!"
        />
        <p className="text-start text-base text-gray-500 pt-2 lg:text-lg!">
          By merging cutting-edge digital skills with values-driven mentorship,
          we empower learners to break free from poverty, build industries, and
          live purposefully.
        </p>
      </div>

      {/* Image Grid - Desktop */}
      <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4">
        {/* Top Left Image */}
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
          <Image
            src={whoWeAreImages[0]}
            alt="Who we are - Team collaboration"
            fill
            className="object-cover"
          />
        </div>
        {/* Bottom Left Image */}
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden row-start-2 col-start-1">
          <Image
            src={whoWeAreImages[1]}
            alt="Who we are - Learning together"
            fill
            className="object-cover"
          />
        </div>
        {/* Right Tall Image */}
        <div className="relative w-full rounded-xl overflow-hidden row-span-2 col-start-2">
          <Image
            src={whoWeAreImages[2]}
            alt="Who we are - Working professionals"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Image Grid - Mobile */}
      <div className="lg:hidden grid grid-cols-2 grid-rows-2 gap-3">
        {/* Top Left Image */}
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
          <Image
            src={whoWeAreImages[0]}
            alt="Who we are - Team collaboration"
            fill
            className="object-cover"
          />
        </div>
        {/* Right Tall Image */}
        <div className="relative w-full rounded-xl overflow-hidden row-span-2">
          <Image
            src={whoWeAreImages[2]}
            alt="Who we are - Working professionals"
            fill
            className="object-cover"
          />
        </div>
        {/* Bottom Left Image */}
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
          <Image
            src={whoWeAreImages[1]}
            alt="Who we are - Learning together"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </AppSection>
  );
};
