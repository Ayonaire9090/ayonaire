import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { splineSans } from "@/app/fonts";
import {certificateWorkingProcess} from "@/constants/index"

export const CertificateHowItWorks = () => {
  return (
    <section className="container section-spacing">
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Working Process" />
        <AppHeading
          headingLevel="h2"
          title="How It Works"
          description="Explore Our Process Of Working"
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center pt-3 w-[90%] lg:w-[90%] mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 space-y-12">
        {certificateWorkingProcess.map((process, index) => (
           <HowStepCard
              key={process.title}
              icon={process.icon}
              title={process.title}
              description={process.description}
              step={index + 1}
            />
        ))}
      </div>
    </section>
  );
};

interface howStepCardProps {
  icon?: string;
  title?: string;
  description?: string;
  step?: number;
}
const HowStepCard = ({
  icon = "",
  title = "",
  description = "",
  step,
}: howStepCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="relative w-[100px] h-[100px] bg-linear-to-r from-[#F25E25] to-[#F97F11] to shadow-sm rounded-full flex justify-center items-center p-4">
        <Image
          src={icon}
          width={100}
          height={100}
          alt={title}
          className="w-[70%] h-[70%] object-contain"
        />
        {/* Step Number with gradient background */}
        <div className="flex justify-center items-center  absolute left-0 right-0 -bottom-3">
          <div className="w-6 h-6  rounded-full bg-linear-to-br from-[#F25E25]  to-[#FFE6D5] flex items-center justify-center shadow-md">
            <span
              className={cn(
                "text-white text-base font-bold",
                splineSans.className
              )}
            >
              {step}
            </span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className={`font-bold ${splineSans.className}`}>{title}</p>
        <p className="font-medium w-full lg:max-w-[80%] mx-auto">{description}</p>
      </div>
    </div>
  );
};
