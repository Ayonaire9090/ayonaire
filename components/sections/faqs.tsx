import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppFaqs } from "../app-faqs";
import { homeFaqs } from "@/constants";

export const Faqs = () => {
  return (
    <section className="container section-spacing">
      <div className="flex flex-col items-center justify-center space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <AppSectionButton title="FAQs" className="text-lg" />
          <div className="w-full max-w-full lg:max-w-[60%] text-center">
            <AppHeading
              headingLevel="h2"
              className="text-[30px] lg:text-5xl"
              title="Frequently Asked Questions About Ayonaire & Courses"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="w-full">
          <AppFaqs faqs={homeFaqs} initialVisibleCount={5} />
        </div>
      </div>
    </section>
  );
};
