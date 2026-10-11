import React from "react";
import { AppHeading } from "../app-heading";
import {
  ArrowRight,
  Briefcase,
  Check,
  DollarSign,
  FileCheck,
  Headset,
  Heart,
  LucideIcon,
  Shield,
} from "lucide-react";
import { AppActionButton } from "../app-action-button";
import Link from "next/link";

const hireTopTalentFeatures = [
  "AI & ML",
  "Data Analytics & Science",
  "Cybersecurity",
  "UI/UX Design",
  "Product Management",
  "Cloud Computing",
];

const hireKeyFeatures = [
  {
    icon: DollarSign,
    title: "Zero-Cost Hiring",
    description: "Build your team without recruitment fees.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "A personal account manager guides you through every step.",
  },
  {
    icon: FileCheck,
    title: "Pre-Vetted Talent",
    description:
      "Access candidate portfolios with verified skills and real project experience.",
  },
  {
    icon: Briefcase,
    title: "Hands-On Experience",
    description:
      "Candidates trained with live projects to ensure job readiness.",
  },
  {
    icon: Heart,
    title: "Well-Rounded Professionals",
    description: "Technical expertise paired with strong interpersonal skills.",
  },
];

export const HireKeyBenefits = () => {
  return (
    <section className="bg-[#FFF7F1] pt-24 pb-4">
      <div className="container grid grid-cols-1 lg:grid-cols-2  gap-6">
        {/* First Column */}
        <div className="flex flex-col gap-4">
          <AppHeading
            headingLevel="h2"
            title="Hire Top Talent at No Cost"
            description="Build your tech dream team with zero-cost recruitment. Access a curated pool of highly motivated, industry-trained, and immediately deployable talent across:"
            className="text-3xl! lg:text-5xl!"
          />
          <div className="flex flex-col gap-3">
            {hireTopTalentFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Key Benefits:</h3>
          {hireKeyFeatures.map((feature, index) => (
            <KeyBenefitsCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="container section-spacing bg-white border-[0.2px] border-primary/20 flex flex-col justify-center items-center gap-4 p-10 rounded-[16px]">
          <div className="flex flex-col items-center justify-center gap-3">
            <AppHeading
              headingLevel="h3"
              title={
                <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-3">
                  <Shield className="text-primary w-6 h-6 " />
                  <span>What Other Platforms Miss</span>
                </div>
              }
              description="We handle the entire pre-hiring process—screening, vetting, and matching—so you can focus on growing your team, not the hiring hassle."
              className="text-2xl! lg:text-2xl! text-center!"
              descriptionClassName="text-base lg:text-lg! text-center! w-full lg:max-w-[70%] mx-auto"
            />

            <Link href="/hire-talent#getStartedHiring">
              <AppActionButton
                variant="fading"
                className="py-6 lg:py-8 px-8 text-[16px] rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group"
              >
                <p>Get Started</p>
                <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                  <ArrowRight size={25} className="text-primary  rounded" />
                </span>
              </AppActionButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

interface KeyBenefitsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
const KeyBenefitsCard = ({
  icon: Icon,
  title,
  description,
}: KeyBenefitsCardProps) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-[12px] bg-white shadow-glow-blur">
      <div className="flex justify-center items-center bg-[#FFF3EA] p-3 rounded-xl w-fit">
        <Icon className="text-primary w-5 h-5" />
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-base font-medium text-gray-500">{description}</p>
      </div>
    </div>
  );
};
