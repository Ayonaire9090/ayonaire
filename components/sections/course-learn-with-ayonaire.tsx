import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppCardIcon } from "../app-card-icon";
import { learnCourseWithAyonaire } from "@/constants";

export const CourseLearnWithAyonaire = () => {
  return (
    <section className="container section-spacing">
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Learning With Ayonaire" />
        <AppHeading
          headingLevel="h2"
          title="An Immersive Learning Experience With Ayonaire"
          className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-4 mt-16">
        {learnCourseWithAyonaire.map((item, index) => (
          <AppCardIcon
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
