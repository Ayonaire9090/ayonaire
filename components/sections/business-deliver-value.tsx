import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import Image from "next/image";

const howWeDeliverBusinessValue = [
  {
    ico: "/assets/icons/digital-content.svg",
    title: "Digital Content + Live Mentorship",
    description:
      "Your team accesses curated lessons from global experts and joins live coaching sessions for reinforcement.",
  },
  {
    ico: "/assets/icons/hands-project.svg",
    title: "Hands-on Project Work",
    description:
      "Training is centered around real-world deliverables and company-relevant challenges, not just theory.",
  },
  {
    ico: "/assets/icons/branded-learning.svg",
    title: "Branded Learning Hub",
    description:
      "Get a fully white-labeled platform customized with your company's identity, learning pathways, and analytics.",
  },
];

export const BusinessDeliverValue = () => {
  return (
    <section className="container section-spacing pb-6 lg:pb-12">
      <div className="flex flex-col justify-center items-center">
        <AppSectionButton title="Deliver Value" />
        <AppHeading
          headingLevel="h2"
          title="How We Deliver Value To You"
          className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
        />
      </div>

      {/* Cards Container with Connector Line */}
      <div className="relative mt-10 lg:mt-16">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {howWeDeliverBusinessValue.map((item, index) => (
            <BusinessDeliverValueItem
              key={index}
              icon={item.ico}
              title={item.title}
              description={item.description}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BusinessDeliverValueItemProps {
  icon: string;
  title: string;
  description: string;
  number: number;
}

const BusinessDeliverValueItem = ({
  icon,
  title,
  description,
  number,
}: BusinessDeliverValueItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Icon Circle with Number Badge */}
      <div className="relative mb-6">
        {/* Main Circle */}
        <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-[#F25E25] flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={56}
            height={56}
            className="w-12 h-12 lg:w-14 lg:h-14"
          />
        </div>

        {/* Number Badge */}
        <div className="flex justify-center items-center  absolute left-0 right-0 -bottom-6">

        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-br from-[#F25E25] via-[#F25E25]  to-[#FFE6D5] flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg lg:text-xl">
            {number}
          </span>
        </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};
