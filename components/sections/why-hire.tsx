import Image from "next/image";
import React from "react";
import { AppHeading } from "../app-heading";

const reasonsToHire = [
  {
    icon: "/assets/icons/dollar.svg",
    title: "Zero-Cost Hiring",
    desciption:
      "Build your dream tech team with skilled, pre-vetted professionals without recruitment fees.",
  },
  {
    icon: "/assets/icons/headphone.svg",
    title: "Dedicated Support",
    desciption:
      "Receive expert guidance at every step to make hiring fast, simple, and efficient.",
  },
  {
    icon: "/assets/icons/empty-target.svg",
    title: "Job-Ready Talent",
    desciption:
      "Connect with candidates trained for real-world impact and ready to contribute from day one.",
  },
  {
    icon: "/assets/icons/people-orange.svg",
    title: "Diverse Talent Pool",
    desciption:
      "Access a wide network of top professionals across AI, Data, Cybersecurity, UI/UX, Cloud, and Product Management.",
  },
];

export const WhyHire = () => {
  return (
    <div className="container section-spacing py-8">
      <AppHeading
        headingLevel="h2"
        title="Why Hire from Ayonaire Hire?"
        description="Experience a smarter, faster, and hassle-free way to hire top talent."
        className="text-center text-3xl! lg:text-[44px]!"
        descriptionClassName="text-center text-base pt-2 lg:text-lg!"
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 py-6">
        {reasonsToHire.map((reason) => (
          <WhyHireCard
            key={reason.title}
            icon={reason.icon}
            title={reason.title}
            description={reason.desciption}
          />
        ))}
      </div>
    </div>
  );
};

interface WhyHireCardProps {
  icon: string;
  title: string;
  description: string;
}

const WhyHireCard = ({ icon, title, description }: WhyHireCardProps) => {
  return (
    <div className="p-5 w-full flex flex-col justify-center gap-4 bg-white hover:bg-[#FFF8F8] rounded-[16px] border border-gray-200 hover:border-primary">
      <div className="flex justify-center items-center rounded-md bg-linear-to-b from-[#F59F0A]/20 to-[#F06542]/20 p-2 w-fit h-fit">
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
        className="text-start text-xl! lg:text-xl!"
        descriptionClassName="text-base text-[#141414] opacity-70! pt-2!"
      />
    </div>
  );
};
