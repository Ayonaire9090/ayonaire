import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppOurProcessList } from "../app-our-process-list";

export const OurProcess = () => {
  return (
    <div className="container section-spacing">
      <div className="flex flex-col items-center justify-center  gap-4">
        <AppSectionButton title="Our Process" />
        <div className="block lg:hidden text-center">
          <AppHeading
            headingLevel="h2"
            title="How We Learn at Ayonaire"
            className="text-[30px] lg:text-5xl leading-tight!"
            description="Every Step of your Journey is built first results."
          />
        </div>
        <div className="hidden lg:block w-[50%] text-center">
          <AppHeading
            headingLevel="h2"
            title="How We Learn at Ayonaire"
            className="text-[30px] lg:text-5xl leading-tight!"
            description="We walk with you from beginner to job-ready with a proven, structured learning experience. Every step of the journey is built for results"
          />
        </div>
      </div>

      {/* Process List */}
      <AppOurProcessList />
    </div>
  );
};
