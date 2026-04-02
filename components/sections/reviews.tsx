import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppFeaturesGrid } from "../app-features-grid";

export const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 space-y-4 section-spacing container">
      <div className="block lg:hidden">
        <AppSectionButton title="Our Reviews" />
      </div>
      <div className="flex lg:hidden items-center justify-center w-[90%] text-center">
        <AppHeading
          headingLevel="h2"
          title="Trusted by Learners Everywhere"
          className="block lg:hidden text-[30px] lg:text-[44px] leading-tight!"
        />
      </div>
      <div className="hidden lg:flex items-center justify-center w-[50%] text-center">
        <AppHeading
          headingLevel="h2"
          title="Trusted by Learners Across Africa and Beyond."
          className="hidden lg:flex text-[30px] lg:text-[44px] leading-tight!"
        />
      </div>
      <AppFeaturesGrid />
    </div>
  );
};
