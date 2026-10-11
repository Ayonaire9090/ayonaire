import React from "react";
import { AppHeading } from "../app-heading";
import {
  Award,
  Briefcase,
  CheckCircle,
  Clock,
  LucideIcon,
  Users2,
  Zap,
} from "lucide-react";

const talentInNumbers = [
  {
    icon: Users2,
    title: "1k+",
    desciption: "Skilled professionals in our ecosystem",
  },
  {
    icon: Zap,
    title: "89%",
    desciption: "Faster talent matching with AI-powered recommendations",
  },
  {
    icon: Clock,
    title: "90%",
    desciption: "Faster payroll processing for international hires",
  },
];

const learnerHighlights = [
  {
    icon: Briefcase,
    title: "50%",
    desciption: "Have 0–3 years of experience, ideal for early-career hires",
  },
  {
    icon: Award,
    title: "70%",
    desciption: "Have hands-on industry experience",
  },
  {
    icon: CheckCircle,
    title: "50%",
    desciption: "Ready to join immediately",
  },
];

export const HireTalentInNumbers = () => {
  return (
    <section className="relative w-full">
      <div className="container relative w-full section-spacing">
        <AppHeading
          headingLevel="h2"
          title="Our Talent In Numbers"
          className="text-center text-[36px]! lg:text-[44px]!"
          descriptionClassName="text-center text-base pt-2 lg:text-lg!"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
          {talentInNumbers.map((step, index) => (
            <HireTalentInNumbersCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.desciption}
            />
          ))}
        </div>
        <div className="container py-10 w-full lg:max-w-[90%] mx-auto flex flex-col items-center justify-center">
          <h3 className="font-bold text-3xl text-center pb-6">
            Learner Highlights
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {learnerHighlights.map((highlight, index) => (
              <LearnerHighlightsCard
                key={index}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.desciption}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface HireTalentInNumbersCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HireTalentInNumbersCard = ({
  icon: Icon,
  title,
  description,
}: HireTalentInNumbersCardProps) => {
  return (
    <div className="py-10 px-5 relative w-full flex flex-col items-center justify-center gap-4 bg-linear-to-r from-[#F59F0A]/10 to-[#F06542]/10 rounded-[16px] border border-primary/20 h-[200px]">
      <div className="flex flex-col justify-center items-center w-fit p-2 rounded-lg">
        <Icon className="w-12 h-12 text-primary" />
      </div>
      <AppHeading
        headingLevel="h2"
        title={title}
        description={description}
        className="text-center text-3xl! lg:text-3xl!"
        descriptionClassName="text-base text-center text-gray-500 pt-2! font-medium"
      />
    </div>
  );
};

interface LearnerHighlightsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const LearnerHighlightsCard = ({
  icon: Icon,
  title,
  description,
}: LearnerHighlightsCardProps) => {
  return (
    <div className="pt-10 pb-6 px-5 relative w-full flex flex-col items-center justify-center gap-4 bg-white rounded-[10px] border border-gray-200 h-[200px]">
      <div className="flex flex-col justify-center items-center w-fit p-2 rounded-lg">
        <Icon className="w-12 h-12 text-primary" />
      </div>
      <AppHeading
        headingLevel="h2"
        title={title}
        description={description}
        className="text-center text-3xl! lg:text-3xl!"
        descriptionClassName="text-base text-center text-gray-500 pt-2! font-medium"
      />
    </div>
  );
};
