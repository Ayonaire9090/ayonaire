"use client";

import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { Award, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import { AppSection } from "../app-section";
import { AppHalfBorderCard } from "../app-half-border-card";

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "No tech background? No problem. You’ll begin with Python, AI foundations, and essential tools like TensorFlow, LangChain, and OpenAI.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace bold ideas and use technology creatively to solve real-world challenges that impact lives and communities.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We commit to continuous learning, equipping both students and mentors to evolve, adapt, and stay relevant in a fast-changing world.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We act with honesty, transparency, and consistency  ensuring that trust is the foundation of all our relationships.",
  },
];

export const AboutCoreValues = () => {
  return (
    <>
      <AppSection containerClassName="pb-16" variant="gradient" direction="top">
        <div className="flex flex-col justify-center items-center">
          <AppSectionButton
            title="Core Values"
            className="w-fit bg-white my-4"
          />
          <AppHeading
            headingLevel="h2"
            title="Our Core Values"
            className="text-center text-[35px] lg:text-[44px]"
          />
        </div>
        <div className="my-4 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-2">
          {coreValues.map((value, index) => (
            <AppHalfBorderCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </AppSection>
    </>
  );
};
