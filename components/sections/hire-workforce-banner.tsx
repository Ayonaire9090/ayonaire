import React from "react";
import { AppBanner } from "../app-banner";
import { AppHeading } from "../app-heading";
import {
  ArrowRight,
  Bot,
  LucideIcon,
  Plus,
  Sparkles,
  Users2,
} from "lucide-react";
import { AppActionButton } from "../app-action-button";
import Link from "next/link";

const workforceFeatures = [
  {
    icon: Sparkles,
    title: "Intuitive Platform",
  },
  {
    icon: Bot,
    title: "AI-Powered Matching",
  },
  {
    icon: Users2,
    title: "Collaborative Learning",
  },
];

export const HireWorkforceBanner = () => {
  return (
    <AppBanner className="rounded-none! w-full max-w-full py-12 lg:py-16 px-6">
      <div className="flex flex-col justify-center items-center gap-6">
        <AppHeading
          headingLevel="h2"
          title="Transform Your Workforce"
          className="text-3xl! lg:text-4xl! text-center text-white!"
        />

        {/* Features - Desktop Layout */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          {workforceFeatures.map((feature, index) => (
            <div key={index} className="flex justify-center items-center gap-4">
              <WorkforceFeatureCard title={feature.title} icon={feature.icon} />
              {index < workforceFeatures.length - 1 && (
                <Plus strokeWidth={3} className="text-white" />
              )}
            </div>
          ))}
        </div>

        {/* Features - Mobile Layout */}
        <div className="flex lg:hidden flex-wrap justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-3">
            <WorkforceFeatureCard
              title={workforceFeatures[0].title}
              icon={workforceFeatures[0].icon}
            />
            <Plus strokeWidth={3} className="text-white" />
            <WorkforceFeatureCard
              title={workforceFeatures[1].title}
              icon={workforceFeatures[1].icon}
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <Plus strokeWidth={3} className="text-white" />
            <WorkforceFeatureCard
              title={workforceFeatures[2].title}
              icon={workforceFeatures[2].icon}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-white text-center text-base lg:text-lg max-w-xl">
          Simplify recruitment, streamline payroll, and manage international
          talent with ease.
        </p>

        {/* CTA Button */}
        <Link href="/hire-talent#getStartedHiring">
          <AppActionButton
            variant="outline"
            className="bg-white text-primary hover:bg-primary/20!"
          >
            <span className="flex items-center gap-2">
              Get Started
              <span className="bg-primary text-white p-1.5 rounded-md">
                <ArrowRight className="w-4 h-4" />
              </span>
            </span>
          </AppActionButton>
        </Link>
      </div>
    </AppBanner>
  );
};

interface WorkforceFeatureCardProps {
  icon: LucideIcon;
  title: string;
}
const WorkforceFeatureCard = ({
  icon: Icon,
  title,
}: WorkforceFeatureCardProps) => {
  return (
    <div className="bg-white px-4 py-2 rounded-full flex justify-center items-center gap-2">
      <Icon className="text-primary w-5 h-5 shrink-0" />
      <p className="text-sm lg:text-base font-semibold">{title}</p>
    </div>
  );
};
