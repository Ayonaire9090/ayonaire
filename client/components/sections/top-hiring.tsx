import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { hiringCompanies } from "@/constants";
import Image from "next/image";
import { AppActionButton } from "../app-action-button";

interface TopHirinProps {
  peopleInField?: string;
}
export const TopHiring = ({ peopleInField = "" }: TopHirinProps) => {
  return (
    <section className="relative section-spacing">
      <div className="absolute inset-0 bg-linear-to-b from-white to-[#FFE7DE] -z-10" />
      <div className="container py-8">
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center gap-3">
          <AppSectionButton title="Top Hiring" />
          <AppHeading
            headingLevel="h2"
            title={`Top Companies Hiring ${peopleInField}`}
            className="text-center w-full lg:max-w-2xl text-[27px] lg:text-[44px] leading-tight! pt-4"
          />
        </div>
        <div className="w-full mx-auto grid grid-cols-3 lg:flex justify-between items-center  place-items-center gap-4 py-6 lg:py-12 ">
          {hiringCompanies.map((company) => (
            <div
              key={company.name}
              className="bg-white shadow-lg flex justify-center items-center p-1 rounded-2xl w-[80px] h-[80px] animate__animated animate__flipInX"
            >
              <Image
                src={company.logo}
                width={40}
                height={40}
                alt={company.name}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center py-6 lg:py-8">
          <AppActionButton variant="fading" className="">
            View More
          </AppActionButton>
        </div>
      </div>
    </section>
  );
};
