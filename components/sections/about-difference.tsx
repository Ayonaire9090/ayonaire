"use client";

import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppSection } from "../app-section";
import { Check } from "lucide-react";

const traditionalLearning = [
  "One-size-fits-all lectures",
  "Passive content consumption",
  "Theory without real application",
  "No mentorship or follow-through",
  "You graduate… and get stuck",
];

const ayonaireMethod = [
  "Personalized, industry-aligned training",
  "Active, project-based learning",
  "Hands-on projects from Day One",
  "Mentorship, coaching, and custom community",
  "We help you launch into real opportunities",
];

export const AboutDifference = () => {
  return (
    <AppSection variant="white">
      <div className="flex flex-col justify-center items-center">
        <AppSectionButton title="Difference" className="w-fit bg-white my-4" />
        <AppHeading
          headingLevel="h2"
          title="The Ayonaire Difference"
          className="text-center text-[35px] lg:text-[44px] leading-tight!"
        />
      </div>

      {/* Card Container */}
      <div className="mt-8 p-6 bg-white shadow-glow-blur rounded-lg">
        {/* Desktop Layout - Two Columns with Divider */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8">
          {/* Left Column - Traditional Learning */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">
              Traditional Learning (Old Way)
            </h3>
            <div className="flex flex-col gap-4">
              {traditionalLearning.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary w-fit p-1 rounded-full shrink-0">
                    <Check className="text-white w-3.5 h-3.5" />
                  </div>
                  <p className="font-medium text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[2px] bg-primary self-stretch" />

          {/* Right Column - Ayonaire Method */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">
              The Ayonaire Method (New Way)
            </h3>
            <div className="flex flex-col gap-4">
              {ayonaireMethod.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary w-fit p-1 rounded-full shrink-0">
                    <Check className="text-white w-3.5 h-3.5" />
                  </div>
                  <p className="font-medium text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked with Horizontal Divider */}
        <div className="lg:hidden flex flex-col">
          {/* Traditional Learning */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">
              Traditional Learning (Old Way)
            </h3>
            <div className="flex flex-col gap-4">
              {traditionalLearning.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary w-fit p-1 rounded-full shrink-0">
                    <Check className="text-white w-3.5 h-3.5" />
                  </div>
                  <p className="font-medium text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="h-[2px] bg-primary my-8" />

          {/* Ayonaire Method */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6">
              The Ayonaire Method (New Way)
            </h3>
            <div className="flex flex-col gap-4">
              {ayonaireMethod.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary w-fit p-1 rounded-full shrink-0">
                    <Check className="text-white w-3.5 h-3.5" />
                  </div>
                  <p className="font-medium text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppSection>
  );
};
