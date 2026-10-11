"use client";
import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppSection } from "../app-section";
import Image from "next/image";
import { Check } from "lucide-react";

const whoCanJoinValues = [
  "Content creators",
  "Affiliate marketers",
  "Community leaders",
  "Tech enthusiasts",
  "Anyone passionate about learning, sharing and earning",
];

const whoCanJoinImages = [
  "/assets/images/who-we-are-1.png",
  "/assets/images/who-we-are-2.png",
  "/assets/images/who-we-are-3.png",
];

export const ResellerWhoCanJoin = () => {
  return (
    <>
      <AppSection containerClassName="pb-16" variant="gradient" direction="top">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col gap-4">
            <AppSectionButton title="Who" className="w-fit bg-white my-4" />
            <AppHeading
              headingLevel="h2"
              title="Who Can Join?"
              className="text-start text-[35px] lg:text-[44px]"
            />
            <div className="flex flex-col gap-4 mb-6">
              {whoCanJoinValues.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <div className="bg-primary w-fit p-1 rounded-full">
                    <Check className="text-white w-3.5 h-3.5" />
                  </div>
                  <p className="font-medium text-base">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid - Desktop */}
          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4">
            {/* Top Left Image */}
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
              <Image
                src={whoCanJoinImages[0]}
                alt="Who we are - Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom Left Image */}
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden row-start-2 col-start-1">
              <Image
                src={whoCanJoinImages[1]}
                alt="Who we are - Learning together"
                fill
                className="object-cover"
              />
            </div>
            {/* Right Tall Image */}
            <div className="relative w-full rounded-xl overflow-hidden row-span-2 col-start-2">
              <Image
                src={whoCanJoinImages[2]}
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
                src={whoCanJoinImages[0]}
                alt="Who we are - Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Right Tall Image */}
            <div className="relative w-full rounded-xl overflow-hidden row-span-2">
              <Image
                src={whoCanJoinImages[2]}
                alt="Who we are - Working professionals"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom Left Image */}
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
              <Image
                src={whoCanJoinImages[1]}
                alt="Who we are - Learning together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AppSection>
    </>
  );
};
