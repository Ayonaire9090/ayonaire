import React from "react";
import { AppHeading } from "../app-heading";
import { instructorOurProcessSteps } from "@/constants/index";

interface ProcessTimelineProps {
  title?: string;
  description?: string;
  steps?: typeof instructorOurProcessSteps;
}
export const AppTimeline = ({
  title = "What's Our Process?",
  description = "Becoming an Ayonaire Instructor is simple",
  steps = instructorOurProcessSteps,
}: ProcessTimelineProps) => {
  return (
    <section id="instructorOurProcess" className="relative py-8 lg:py-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#FFF7F1] -z-10" />

      <div className="relative w-full container p-6 lg:p-12 z-10">
        <AppHeading
          title={title}
          headingLevel="h2"
          description={description}
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center text-lg pt-2 w-full lg:max-w-xl mx-auto"
        />

        {/* Process Timeline */}
        <Timeline steps={steps} />
      </div>
    </section>
  );
};

interface ProcessCardProps {
  title?: string;
  description?: string;
}

export const ProcessCard = ({
  title = "",
  description = "",
}: ProcessCardProps) => {
  return (
    <div className="bg-white flex flex-col gap-2 p-5 lg:p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="font-bold text-lg lg:text-xl text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

interface ProcessStepProps {
  stepNumber?: number;
  title?: string;
  description?: string;
  isLast?: boolean;
}

export const ProcessStep = ({
  stepNumber = 1,
  title = "",
  description = "",
  isLast = false,
}: ProcessStepProps) => {
  const formattedNumber = stepNumber.toString().padStart(2, "0");

  return (
    <div className="flex gap-4 lg:gap-6">
      {/* Left side: Number badge and connecting line */}
      <div className="flex flex-col items-center">
        {/* Number Badge with gradient */}
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-linear-to-b from-[#F59F0A] to-[#F97A1F] flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-md shrink-0">
          {formattedNumber}
        </div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 min-h-8 bg-linear-to-b from-[#F59F0A] to-[#F97A1F]" />
        )}
      </div>

      {/* Right side: Card */}
      <div className="flex-1 pb-6 lg:pb-8">
        <ProcessCard title={title} description={description} />
      </div>
    </div>
  );
};

interface TimelineProps {
  steps?: typeof instructorOurProcessSteps;
}
export const Timeline = ({
  steps = instructorOurProcessSteps,
}: TimelineProps) => {
  return (
    <div className="mt-10 lg:mt-14 max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          stepNumber={index + 1}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
};
