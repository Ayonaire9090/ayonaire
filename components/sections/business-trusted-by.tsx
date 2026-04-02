import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { FeaturedBrands } from "./featured-brands";

const featuredLogos = [
  "/assets/brands/business/flutterwave.svg",
  "/assets/brands/business/andela.svg",
  "/assets/brands/business/cowrywise.svg",
  "/assets/brands/business/kuda.svg",
  "/assets/brands/business/paystack.svg",
  "/assets/brands/business/piggyve.svg",
  "/assets/brands/business/thriveAgric.svg",
];
export const BusinessTrustedBy = () => {
  return (
    <div className="container section-spacing flex flex-col items-center justify-center">
      <AppSectionButton title="Trusted By" />

      <AppHeading
        headingLevel="h2"
        title="Trusted by Leading Teams Across Africa and Beyond"
        description="Whether you're scaling internal capacity or preparing for digital disruption, our programs are designed to meet your goals."
        className="text-center w-full lg:max-w-4xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
        descriptionClassName="text-center text-lg pt-3 w-full lg:max-w-[90%] mx-auto"
      />
      <FeaturedBrands
        title=""
        logos={featuredLogos}
        imageClassName="w-[100px]! h-[20px]! object-contain"
        marqueeClassName="lg:hidden [--duration:30s]"
        marqueeContainerClassName="lg:hidden"
      />
    </div>
  );
};
