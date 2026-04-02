import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { ayonaireWhyChooseUs } from "@/constants";
import { AppHalfBorderCard } from "../app-half-border-card";

export const WhyChooseUs = () => {
  return (
    <section className="relative section-spacing pb-8 lg:pb-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-white to-[#FFE7DE] md:bg-linear-to-b md:from-white md:to-[#FFE7DE] -z-10 rounded-b-[30px] lg:rounded-b-[60px] pb-6" />

      <div className="container flex flex-col items-center justify-center  space-y-6">
        <AppSectionButton title="Why Us" />
        <div className="hidden lg:block text-center">
          <AppHeading
            headingLevel="h2"
            title="Why Learners Choose Ayonaire"
            className="w-full  hidden lg:block text-center text-[30px] lg:text-[48px] leading-tight!"
          />
          <p className="opacity-50 pt-2 w-full max-w-[65%] mx-auto">
            Most tech schools only teach skills. At Ayonaire, we don’t just
            train — we transform. Here’s why thousands trust us to shape their
            future
          </p>
        </div>
        <div className="block w-full max-w-[90%] lg:hidden text-center">
          <AppHeading
            headingLevel="h2"
            title="Why Learners Choose Ayonaire"
            description="Here’s why thousands trust us to shape their future"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
            descriptionClassName="pt-3!"
          />
        </div>
        <div className="w-full flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-6">
          {ayonaireWhyChooseUs.map((item, index) => (
            <AppHalfBorderCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
