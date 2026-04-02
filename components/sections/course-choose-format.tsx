import React from "react";
import Image from "next/image";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { courseLearningFormat } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const ChooseCourseFormat = () => {
  return (
    <section className="container section-spacing">
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Choose" />
        <AppHeading
          headingLevel="h2"
          title="Choose Your Learning Format"
          description="We understand that every learner is unique. That's why we offer two flexible formats to guide you with a clear path to global opportunities."
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center pt-3 w-[90%] lg:w-[70%] mx-auto"
        />
      </div>

      {/* Format Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {courseLearningFormat.map((format, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-6 lg:p-8  overflow-hidden"
          >
            {/* Orange accent gradient on left/top corner */}
            <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-primary/80 via-primary/40 to-transparent rounded-l-2xl" />
            <div className="absolute top-0 left-0 h-2 w-1/2 bg-linear-to-r from-primary/80 to-transparent rounded-tl-2xl" />

            {/* Orange accent gradient on right/top corner */}
            <div className="absolute top-0 right-0 w-2 h-full bg-linear-to-b from-primary/80 via-primary/40 to-transparent rounded-l-2xl" />
            <div className="absolute top-0 right-0 h-2 w-1/2 bg-linear-to-r from-primary/80 to-transparent rounded-tl-2xl" />

            {/* Card Content */}
            <div className="relative z-10">
              {/* Title */}
              <h3 className="text-2xl font-bold  mb-2">
                {format.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-gray-500 mb-6 capitalize">
                {format.description}
              </p>

              {/* You'll Get Section */}
              <h4 className="text-lg font-semibold mb-4">
                You&apos;ll Get:
              </h4>

              {/* Features List */}
              <div className="flex flex-col gap-3 lg:gap-4 mb-8">
                {format.values.map((value, valueIndex) => (
                  <div key={valueIndex} className="flex items-center gap-3">
                    <Image
                      src="/assets/icons/round-tick.svg"
                      alt="check"
                      width={35}
                      height={35}
                      className="shrink-0 mt-0.5"
                    />
                    <p className="text-sm lg:text-base text-gray-600 capitalize leading-relaxed">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex justify-center lg:justify-start">
                {index === 0 ? (
                  <Link  href="/opt-in#freeAccessFormOptin">

                    
                  <div className="flex items-center">
                    <AppActionButton
                      title="Enquiry Now"
                      variant="fading"
                      className="rounded-l-xl! rounded-r-none!"
                    />
                    <div className="bg-primary p-3.5 rounded-r-xl">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  </Link>
                ) : (
                  <AppActionButton
                    title="View More"
                    variant="fading"
                    className="px-10"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
