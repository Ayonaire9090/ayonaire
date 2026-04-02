import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const hireFeatures = [
  "Portfolio-ready candidates",
  "Internship-ready & freelance-ready options",
  "Available for remote and hybrid work",
];

export const BusinessHire = () => {
  return (
    <section className="container section-spacing">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Column */}
        <div className="flex flex-col gap-6">
          <AppSectionButton title="Hire" className="w-fit" />
          <AppHeading
            headingLevel="h2"
            title="Hire From Our Graduate Talent Pool"
            className="text-3xl lg:text-5xl leading-tight!"
            description="In addition to corporate upskilling, you can also hire from our pipeline of vetted, job-ready tech professionals trained in AI, marketing, cybersecurity, data, and engineering."
            descriptionClassName="text-base lg:text-lg text-gray-600"
          />

          {/* Bullet Points */}
          <ul className="space-y-3 mt-2">
            {hireFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
                <span className="text-gray-800 text-base">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-4">
            <AppActionButton
              variant="fading"
              className="flex items-center gap-3 p-6 text-base font-medium"
            >
              Get Talent Recommendations
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                <ArrowRight className="w-5 h-5 text-primary" />
              </span>
            </AppActionButton>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-end items-center">
          <Image
            src="/assets/images/business-hire.svg"
            width={500}
            height={500}
            alt="Hire from our graduate talent pool"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-8">
        {/* Content */}
        <div className="flex flex-col gap-4">
          <AppSectionButton title="Hire" className="w-fit" />
          <AppHeading
            headingLevel="h2"
            title="Hire From Our Graduate Talent Pool"
            className="text-[27px] leading-tight!"
            description="In addition to corporate upskilling, you can also hire from our pipeline of vetted, job-ready tech professionals trained in AI, marketing, cybersecurity, data, and engineering."
            descriptionClassName="text-base text-gray-600"
          />

          {/* Bullet Points */}
          <ul className="space-y-3 mt-2">
            {hireFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0" />
                <span className="text-gray-800 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/assets/images/business-hire.svg"
            width={400}
            height={400}
            alt="Hire from our graduate talent pool"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center max-w-[80%] mx-auto">
          <AppActionButton
            variant="fading"
            className="w-full flex items-center justify-center gap-3 p-6 text-base font-medium"
          >
            Get Talent Recommendations
            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
              <ArrowRight className="w-5 h-5 text-primary" />
            </span>
          </AppActionButton>
        </div>
      </div>
    </section>
  );
};
