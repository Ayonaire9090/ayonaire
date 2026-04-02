import React from "react";
import Image from "next/image";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { verificationStats, whyVerifyFeatures } from "@/constants";

export const CertificateWhyVerify = () => {
  return (
    <section className="bg-white">
      <div className="container section-spacing">
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center gap-3 mb-12">
          <AppSectionButton title="Working Process" />
          <AppHeading
            headingLevel="h2"
            title="Why Verify Certificates"
            description="Explore our process of working"
            className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
            descriptionClassName="text-center pt-3 w-[90%] lg:w-[90%] mx-auto"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {whyVerifyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8 flex flex-col items-start gap-4"
            >
              {/* Icon */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-7 h-7 lg:w-8 lg:h-8"
                />
              </div>
              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-[#FFF5EF] rounded-2xl p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
            {verificationStats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center py-4 lg:py-0 ${
                  index < verificationStats.length - 1
                    ? "lg:border-r lg:border-[#F5DFD3]"
                    : ""
                }`}
              >
                <span className="text-primary font-bold text-4xl lg:text-5xl xl:text-6xl mb-2">
                  {stat.value}
                </span>
                <span className="text-gray-700 text-base lg:text-lg font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
