import { AppHeading } from "@/components/app-heading";
import { AppSectionButton } from "@/components/app-section-button";
import { whyAISkills } from "@/constants";
import Image from "next/image";
import React from "react";

interface SchoolSkillsSectionProps {
  /** The label for the section button */
  sectionButtonTitle?: string;
  /** The main heading title */
  title?: string;
  /** The description text below the heading */
  description?: string;
  /** Array of skill strings to display as list items */
  skills?: string[];
  /** The image source for the section image */
  image?: string;
  /** The alt text for the section image */
  imageAlt?: string;
}

export const SchoolSkillsSection = ({
  sectionButtonTitle = "AI Skills",
  title = "Why These AI Skills Matter in Today's Job Market",
  description = "AI skills open doors to stable, high-earning careers in a fast-growing job market.",
  skills = whyAISkills,
  image = "/assets/images/pleased-lady-holding-books.png",
  imageAlt = "Lady holding books",
}: SchoolSkillsSectionProps) => {
  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between w-full max-w-6xl mx-auto">
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
                className="text-[30px] lg:text-[44px]"
                descriptionClassName="text-gray-600 text-[16px] max-w-[500px]"
              />
            </div>

            {/* Image for Mobile - Hidden on Desktop */}
            <div className="flex lg:hidden justify-center mt-8 relative">
              <ImageColumn image={image} imageAlt={imageAlt} />
            </div>

            {/* List */}
            <div className="mt-8 lg:mt-10 px-2 flex flex-col gap-6">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 pb-6 ${
                    index !== skills.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                  <Image
                    src="/assets/icons/round-tick.svg"
                    alt="check"
                    width={42}
                    height={42}
                    className="shrink-0"
                  />
                  <p className="text-[16px] text-gray-600 leading-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column - Hidden on Mobile, Shown on Desktop */}
          <div className="hidden lg:flex w-full lg:w-[45%] justify-end items-end self-start">
            <ImageColumn image={image} imageAlt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ImageColumnProps {
  image: string;
  imageAlt: string;
}

const ImageColumn = ({ image, imageAlt }: ImageColumnProps) => {
  return (
    <div className="relative w-full h-full flex justify-center lg:justify-end items-center">
      {/* Lady Image */}
      <Image
        src={image}
        alt={imageAlt}
        width={500}
        height={500}
        className="object-contain w-full h-full z-10"
      />
    </div>
  );
};
