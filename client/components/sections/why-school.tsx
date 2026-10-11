import { AppHeading } from "@/components/app-heading";
import { AppSectionButton } from "@/components/app-section-button";
import { AppStyledFeatureCard } from "@/components/app-styled-feature-card";
import { WhySchoolOfAI } from "@/constants";
import Image from "next/image";
import React from "react";

const CheckIcon = () => (
  <Image
    src="/assets/icons/check-bold.svg"
    alt="Check Icon"
    width={24}
    height={24}
    className="w-[35px] h-[35px] lg:w-[52px] lg:h-[52px]"
  />
);

interface WhySchoolSectionProps {
  /** The label for the section button */
  sectionButtonTitle?: string;
  /** The main heading title */
  title?: string;
  /** The description text below the heading */
  description?: string;
  /** The image source for the section image */
  image?: string;
  /** The alt text for the section image */
  imageAlt?: string;
  /** Array of feature strings to display as cards */
  features?: string[];
}

export const WhySchoolSection = ({
  sectionButtonTitle = "AI Exists",
  title = "Why the School of AI Exists",
  description = "Artificial Intelligence is transforming the global economy. Yet access to AI education remains limited across Africa.",
  image = "/assets/images/pleased-pretty-lady.png",
  imageAlt = "Pleased Pretty Lady",
  features = WhySchoolOfAI,
}: WhySchoolSectionProps) => {
  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Content Column */}
          <div className="flex flex-col w-full lg:w-[55%]">
            {/* Section Button */}
            <AppSectionButton className="w-fit" title={sectionButtonTitle} />

            {/* Heading */}
            <div className="mt-6">
              <AppHeading
                title={title}
                headingLevel="h2"
                description={description}
                className="lg:text-[44px] leading-tight!"
                descriptionClassName="text-gray-500 text-[16px] max-w-[500px]"
              />
            </div>

            {/* Image for Mobile - Hidden on Desktop */}
            <div className="flex lg:hidden justify-center mt-8 relative">
              <div className="relative">
                {/* Rounded Square Background */}
                <div className="absolute left-0 right-0 bottom-0 mx-auto w-[90%] h-[85%] bg-linear-to-b from-[#F3F3F3] to-[#FEE9DA] rounded-[32px] -z-10" />
                {/* Highlight SVG */}
                <div className="absolute right-6 top-0">
                  <Image
                    src="/assets/icons/Highlight.svg"
                    alt="Highlight"
                    width={100}
                    height={100}
                  />
                </div>
                {/* Lady Image */}
                <Image
                  src={image}
                  alt={imageAlt}
                  width={300}
                  height={400}
                  className="object-contain relative z-10"
                />
              </div>
            </div>

            {/* Feature Cards List */}
            <div className="flex flex-col gap-4 mt-8 lg:mt-10">
              {features.map((item, index) => (
                <AppStyledFeatureCard
                  key={index}
                  title={item}
                  icon={<CheckIcon />}
                />
              ))}
            </div>
          </div>

          {/* Image Column - Hidden on Mobile, Shown on Desktop */}
          <div className="hidden lg:flex w-full lg:w-[45%] justify-end items-start relative">
            <div className="relative">
              {/* Rounded Square Background */}
              <div className="absolute left-0 right-0 bottom-0 mx-auto w-[90%] h-[90%] bg-linear-to-b from-[#F3F3F3] to-[#FEE9DA] rounded-[32px] -z-10" />
              {/* Highlight SVG */}
              <div className="absolute right-10 top-0">
                <Image
                  src="/assets/icons/Highlight.svg"
                  alt="Highlight"
                  width={150}
                  height={150}
                />
              </div>
              {/* Lady Image */}
              <Image
                src={image}
                alt={imageAlt}
                width={480}
                height={580}
                className="object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
