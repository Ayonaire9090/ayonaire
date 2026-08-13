import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";
import { splineSans } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface TeachFeature {
  title: string;
  description: string;
}

interface CourseTeachYouProps {
  courseTitle?: string;
  courseCategory?: string;
  teachFeatures?: TeachFeature[];
}

const TeachFeatureCard = ({ title, description }: TeachFeature) => {
  return (
    <article className="bg-white border-l-3 border-primary rounded-[12px] shadow-xl p-2 lg:p-4 flex flex-col gap-3 text-center">
      <h3
        className={cn(
          "text-[16px] lg:text-[20px] font-bold text-gray-900",
          splineSans.className
        )}
      >
        {title}
      </h3>
      <p className="text-[10px] lg:text-base text-gray-500 leading-relaxed">{description}</p>
    </article>
  );
};

export const CourseTeachYou = ({
  courseTitle = "",
  courseCategory = "",
  teachFeatures = [],
}: CourseTeachYouProps) => {
  // Split features into top row (first 4) and bottom row (last 2)
  const topRowFeatures = teachFeatures.slice(0, 4);
  const bottomRowFeatures = teachFeatures.slice(4, 6);

  return (
    <section className="section-spacing">
      {/* Section Heading */}
      <div className="container flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Teach You" />
        <AppHeading
          headingLevel="h2"
          title={`We Don't Just Teach You ${courseCategory}. We Help You Get Hired.`}
          description={`Our ${courseTitle} Course Comes With Built-In Career Support To Help You Move From Learner To In-Demand Professional. Here's How We Do It.`}
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center pt-3 w-[90%] lg:w-[70%] mx-auto"
        />
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-2 lg:px-0 flex flex-col gap-4 lg:gap-6">
        {/* Top Row - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {topRowFeatures.map((feature, index) => (
            <TeachFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Bottom Row - Centered 2 cards */}
        {bottomRowFeatures.length > 0 && (
          <div className="grid grid-cols-2 gap-2 lg:gap-6 lg:w-1/2 lg:mx-auto">
            {bottomRowFeatures.map((feature, index) => (
              <TeachFeatureCard
                key={index + 4}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10 lg:mt-12">
        <AppActionButton variant="fading" className="py-8! px-6! lg:px-8!">
          <span className="text-base font-semibold">Book A Career Call</span>
          <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-lg">
            <ArrowRight width={20} height={20} className="text-primary" />
          </div>
        </AppActionButton>
      </div>
    </section>
  );
};
