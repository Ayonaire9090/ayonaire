import Image from "next/image";
import React from "react";
import { AppHeading } from "../app-heading";
import { AppSection } from "../app-section";

const aproachSteps = [
  {
    icon: "/assets/icons/rocket.svg",
    title: "Lead the Shift",
    desciption: "Build teams that thrive in a fast- changing digital world.",
  },
  {
    icon: "/assets/icons/book-open.svg",
    title: "Skills for Tomorrow",
    desciption:
      "Empower professionals with knowledge and capabilities to excel.",
  },
  {
    icon: "/assets/icons/trend-up-white.svg",
    title: "From Learning to Impact",
    desciption: "Transform training into actionable, high-performing results.",
  },
];

export const HireAproach = () => {
  return (
    <AppSection variant="gradient">
      <AppHeading
        headingLevel="h2"
        title="Our Approach"
        description="Connecting you with top-tier talent faster, smarter, and with measurable impact."
        className="text-center text-[36px]! lg:text-[44px]!"
        descriptionClassName="text-center text-base pt-2 lg:text-lg!"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
        {aproachSteps.map((step) => (
          <HireAproachCard
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.desciption}
          />
        ))}
      </div>
    </AppSection>
  );
};

interface HireAproachCardProps {
  icon: string;
  title: string;
  description: string;
}

const HireAproachCard = ({
  icon,
  title,
  description,
}: HireAproachCardProps) => {
  return (
    <div className="pt-10 pb-6 px-5 relative w-full flex flex-col items-center justify-center gap-4 bg-white hover:bg-[#FFF8F8] rounded-[16px] border border-gray-200 hover:border-primary h-[250px]">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex justify-center items-center rounded-full bg-primary p-3 w-14 h-14 shadow-xl">
        <Image
          src={icon}
          width={28}
          height={28}
          alt={title}
          className="w-7 h-7 object-contain"
        />
      </div>
      <AppHeading
        headingLevel="h2"
        title={title}
        description={description}
        className="text-center text-xl! lg:text-xl!"
        descriptionClassName="text-base text-center text-[#141414] opacity-70! pt-2!"
      />
    </div>
  );
};
