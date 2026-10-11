"use client";

import React from "react";
import { Header } from "../layout/header";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { ArrowRight, Award, Heart, Sparkle, Users2 } from "lucide-react";
import { AppSectionButton } from "../app-section-button";

const surveyFeatures = [
  {
    icon: Users2,
    title: "Your Strengths",
    description: "What you already enjoy or excel at",
  },
  {
    icon: Heart,
    title: "Areas to Focus",
    description: "Skills to build for success",
  },
  {
    icon: Award,
    title: "Action Steps",
    description: "Beginner-friendly steps to start learning",
  },
];

interface SurveyWelcomeProps {
  onGetStarted?: () => void;
  title: string;
  subtitle: string;
  description: string;
}

export const SurveyWelcome = ({
  onGetStarted,
  title,
  subtitle,
  description,
}: SurveyWelcomeProps) => {
  return (
    <>
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="w-full flex flex-col gap-8 my-8">
            <div className="flex flex-col justify-center items-center gap-4">
              <AppSectionButton title={title} className="w-fit bg-white" />
              <AppHeading
                headingLevel="h1"
                title={subtitle}
                className="leading-tight! text-center"
                description={description}
                descriptionClassName="pt-1 text-center text-[16px] lg:text-[18px] text-[#141414] "
              />

              <p className="text-[#141414] text-start self-start font-medium my-2">
                You can become a professional by following a structured learning
                path. This survey will help you understand how your current
                interests, strengths, and skills align with this career.
              </p>

              <p className="text-[#141414] text-start self-start font-medium my-2">
                By answering the questions honestly, you'll discover:
              </p>

              {/* Survey Features Cards */}
              <div className="my-6 w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                {surveyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 lg:p-5  lg:shadow-none border border-gray-200"
                  >
                    {/* Icon Container */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-b from-[#F25E25]/24 to-transparent shrink-0">
                      <feature.icon className="text-primary w-7 h-7" />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info area */}
              <div className="my-6 w-full rounded-xl bg-[#FFF0E5] p-5 lg:p-6 border border-primary border-l-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 text-center lg:text-left">
                  <Sparkle className="text-primary w-6 h-6 shrink-0" />
                  <p className="font-semibold text-gray-800">
                    All our courses are beginner-friendly — no prior experience
                    is needed. This survey is your first step to explore AI and
                    Data Science with confidence!
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-4 pt-8 md:py-12">
                <AppActionButton
                  variant="fading"
                  onClick={onGetStarted}
                  className="py-6 lg:py-8 px-8 text-[16px] rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group"
                >
                  <p>Get Started</p>
                  <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                    <ArrowRight size={25} className="text-primary  rounded" />
                  </span>
                </AppActionButton>
                <p className="text-lg text-gray-500 text-center font-medium">
                  Takes Approximately 5-10 Minutes to Complete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
