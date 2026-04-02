import React from "react";
import { AppSection } from "../app-section";
import { AppFeaturesGrid } from "../app-features-grid";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";

const impactFeatures = [
  {
    icon: "/assets/icons/feature-book.svg",
    title: "1,000+",
    description: "Learner Trained",
  },
  {
    icon: "/assets/icons/feature-badge.svg",
    title: "91%",
    description: "Graduation Rate",
  },
  {
    icon: "/assets/icons/feature-tick.svg",
    title: "150%",
    description: "Scholarships Awarded",
  },

  {
    icon: "/assets/icons/feature-star.svg",
    title: "4.8/5",
    description: "Job Placement in 3 Months",
  },
];

export const AboutImpact = () => {
  return (
    <AppSection variant="white">
      <div className="flex flex-col justify-center items-center gap-3 my-4">
        <AppSectionButton title="Impact" />
        <AppHeading
          headingLevel="h2"
          title="Our Impact So Far"
          description="We’ve helped learners unlock doors to opportunity across Africa and beyond. Here’s what that impact looks like in numbers."
          className="text-center text-[30px] lg:text-[44px] leading-tight!"
          descriptionClassName="text-center text-base lg:text-lg pt-2"
        />
      </div>
      <AppFeaturesGrid features={impactFeatures} />
    </AppSection>
  );
};
