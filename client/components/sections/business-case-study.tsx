import React from "react";
import { AppHeading } from "../app-heading";
import { AppSection } from "../app-section";
import { AppActionButton } from "../app-action-button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

const caseStudyData = {
  title: "Corporate Case Study: Quiva",
  description:
    "We partnered with Quiva to enhance their team's data fluency and improve decision-making with actionable analytics.",
  items: [
    {
      label: "Courses Delivered:",
      value: "Data Visualization, Data Engineering",
    },
    {
      label: "Team Size:",
      value: "20 employees",
    },
    {
      label: "Duration:",
      value: "6–8 weeks",
    },
    {
      label: "Outcome:",
      value: "Improved reporting accuracy and cross-functional collaboration.",
    },
  ],
  buttonTitle: "Book a Free Discovery Call",
  image: "/assets/images/corporate-students-learning.svg",
};

export const BusinessCaseStudy = () => {
  return (
    <AppSection variant="gradient" className="py-6">
      {/* Desktop Layout: Image Left, Content Right */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="relative">
          <Image
            src={caseStudyData.image}
            alt="Corporate students learning"
            width={600}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Content Column */}
        <div className="flex flex-col">
          <AppHeading
            headingLevel="h2"
            title={caseStudyData.title}
            description={caseStudyData.description}
            className="text-[32px] lg:text-[44px] leading-tight!"
            descriptionClassName="text-gray-700 text-base lg:text-lg pt-4"
          />

          {/* Items List */}
          <div className="mt-8 space-y-4">
            {caseStudyData.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Checkmark Circle */}
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                {/* Item Content */}
                <p className="text-gray-800">
                  <span className="font-semibold">{item.label}</span>{" "}
                  <span className="text-gray-600">{item.value}</span>
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <AppActionButton
              variant="fading"
              className="flex items-center gap-3 p-6 text-base font-medium"
            >
              {caseStudyData.buttonTitle}
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                <ArrowRight className="w-5 h-5 text-primary" />
              </span>
            </AppActionButton>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Content First, Image Second */}
      <div className="lg:hidden flex flex-col gap-10">
        {/* Content Column */}
        <div className="flex flex-col">
          <AppHeading
            headingLevel="h2"
            title={caseStudyData.title}
            description={caseStudyData.description}
            className="text-[27px] leading-tight!"
            descriptionClassName="text-gray-700 text-base pt-3"
          />

          {/* Items List */}
          <div className="mt-6 space-y-4">
            {caseStudyData.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Checkmark Circle */}
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                {/* Item Content */}
                <p className="text-gray-800 text-sm">
                  <span className="font-semibold">{item.label}</span>{" "}
                  <span className="text-gray-600">{item.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="relative">
          <Image
            src={caseStudyData.image}
            alt="Corporate students learning"
            width={600}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <AppActionButton
            variant="fading"
            className="w-full flex items-center justify-center gap-3 p-6 text-base font-medium"
          >
            {caseStudyData.buttonTitle}
            <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
              <ArrowRight className="w-5 h-5" />
            </span>
          </AppActionButton>
        </div>
      </div>
    </AppSection>
  );
};
