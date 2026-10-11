import React from "react";
import { AppHeading } from "../app-heading";
import { AppSection } from "../app-section";
import { AppSectionButton } from "../app-section-button";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Headset,
  LucideIcon,
  SlidersHorizontal,
} from "lucide-react";
import { AppActionButton } from "../app-action-button";

const whyPartnerReasons = [
  {
    icon: Headset,
    title: "Dedicated Learning Success Partner",
    description:
      "We assign a corporate training manager to design, manage, and optimize learning experiences tailored to your business.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Enterprise-Grade Platform",
    description:
      "Fully equipped with features that support onboarding, progress tracking, team performance insights, and seamless learning across all levels of your workforce.",
  },
  {
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
    description:
      "Every training track is co-created with top professionals across AI, data, marketing, and security to ensure real-world relevance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customization at Scale",
    description:
      "Whether you’re training 5 people or 500, we customize the delivery model, assessments, and milestones to fit your context.",
  },
];
export const BusinessWhyPartner = () => {
  return (
    <AppSection
      id="businessWhyPartner"
      variant="gradient"
      className="py-8 lg:py-16"
      containerClassName="flex flex-col items-center justify-center overflow-hidden"
    >
      <AppSectionButton title="Why" />
      <AppHeading
        headingLevel="h2"
        title="Why Ayonaire is Unique"
        className="text-center w-full lg:max-w-4xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
        descriptionClassName="text-center pt-3 w-full lg:max-w-[90%] mx-auto"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
        {whyPartnerReasons.map((reason, index) => (
          <WhyPartnerCard
            key={index}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </div>
      <AppActionButton
        variant="fading"
        className="py-6 lg:py-8 text-[12px] lg:text-[16px] rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group mt-8"
      >
        <p>Partner with Us for Scalable Workforce Growth</p>
        <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
          <ArrowRight size={25} className="text-primary  rounded" />
        </span>
      </AppActionButton>
    </AppSection>
  );
};

interface WhyPartnerCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const WhyPartnerCard = ({
  icon: Icon,
  title,
  description,
}: WhyPartnerCardProps) => {
  return (
    <div className="bg-white flex flex-col gap-2 p-5 lg:p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-center items-center bg-linear-to-b from-[#F59F0A] to-[#F97A1F] p-2 rounded-md w-fit">
        <Icon className="text-white" />
      </div>
      <h3 className="font-bold text-lg lg:text-xl text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};
