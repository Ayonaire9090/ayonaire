import Image from "next/image";
import React from "react";
import { AppHeading } from "../app-heading";

const features = [
  {
    icon: "/assets/icons/people-group.svg",
    title: "1k+",
    desciption: "Learners",
  },
  {
    icon: "/assets/icons/industry.svg",
    title: "5+",
    desciption: "Hiring Partners",
  },
  {
    icon: "/assets/icons/bolt.svg",
    title: "30+",
    desciption: "Core Skills",
  },
];

export const HireFeatures = () => {
  return (
    <div className="container section-spacing grid grid-cols-1 lg:grid-cols-3 gap-12">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.desciption}
        />
      ))}
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center p-[4px] bg-linear-to-r from-[#F25E25] via-[#F25E25] to-[#F25E25]/20 rounded-[31px] shadow-glow-blur">
      <div className="p-5 w-full flex flex-col justify-center items-center gap-4 bg-[#FFF8F8] rounded-[31px]">
        <div className="flex justify-center items-center rounded-full shadow-sm bg-linear-to-br from-[#F25E25] via-[#F25E25] to-white p-2">
          <Image
            src={icon}
            width={50}
            height={50}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <AppHeading
          headingLevel="h2"
          title={title}
          description={description}
          className="text-center text-5xl! lg:text-5xl!"
          descriptionClassName="text-lg text-[#141414] font-medium"
        />
      </div>
    </div>
  );
};
