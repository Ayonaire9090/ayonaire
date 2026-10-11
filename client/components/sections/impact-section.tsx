import { AppHeading } from "@/components/app-heading";
import { AppSectionButton } from "@/components/app-section-button";
import { impactData } from "@/constants";
import Image from "next/image";
import React from "react";

interface ImpactCardProps {
  title: string;
  description: string;
}

const ImpactCard = ({ title, description }: ImpactCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-[24px] lg:rounded-[32px] bg-linear-to-b from-[#F25E25] via-[#F25E25] to-[#F97F11] p-6 lg:p-8 min-h-[180px] lg:min-h-[200px] flex flex-col justify-center items-center text-center text-white">
      {/* Vector 1 - Top Right - Large curved wave */}
      <div className="absolute top-0 right-0 w-full h-full">
        <Image
          src="/assets/icons/impact-vector-1.svg"
          alt="Vector decoration"
          fill
          className="object-cover object-left"
        />
      </div>
      {/* Vector 2 - Top Left - Circle creating clipped effect */}
      <div className="absolute -top-[50%] -left-[30%] w-full h-[150%]">
        <Image
          src="/assets/icons/impact-vector-2.svg"
          alt="Vector decoration"
          fill
          className="object-contain"
        />
      </div>
      {/* Content */}
      <h3 className="text-[48px] lg:text-[56px] font-bold relative z-10">
        {title}
      </h3>
      <p className="text-[15px] lg:text-[16px] font-medium relative z-10 max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

interface ImpactSectionProps {
  /** The label for the section button */
  sectionButtonTitle?: string;
  /** The main heading title */
  title?: string;
  /** The description text below the heading */
  description?: string;
  /** Array of impact data items to display as cards */
  data?: { title: string; description: string }[];
}

export const ImpactSection = ({
  sectionButtonTitle = "Impact",
  title = "Impact Is the Reason We Exist",
  description = "Every skill and project earned is about transforming lives and building leaders.",
  data = impactData,
}: ImpactSectionProps) => {
  return (
    <section className="py-12 lg:py-20 bg-linear-to-b from-[#FFE7DE] to-white relative rounded-t-4xl lg:rounded-t-[40px] overflow-hidden">
      {/* Section Decoration */}
      <div className="absolute w-full top-0 right-0 pointer-events-none">
        <Image
          src="/assets/icons/impact-deco.svg"
          alt="Decoration"
          width={400}
          height={400}
          className="w-full h-[50%] object-contain"
        />
      </div>
      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-14">
          <AppSectionButton
            className="w-fit bg-white!"
            title={sectionButtonTitle}
          />
          <div className="mt-6">
            <AppHeading
              title={title}
              headingLevel="h2"
              description={description}
              className="text-[30px] lg:text-[44px] leading-tight!"
              descriptionClassName="text-gray-500 text-[16px] max-w-[500px] mx-auto"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {data.map((item, index) => (
            <ImpactCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
