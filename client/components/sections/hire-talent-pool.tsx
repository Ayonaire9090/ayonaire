import React from "react";
import { AppHeading } from "../app-heading";
import {
  Brain,
  ChartColumn,
  ChartLine,
  Cloud,
  Database,
  LucideIcon,
  Palette,
  Shield,
  Users2,
} from "lucide-react";

const hirePoolFeatures = [
  {
    icon: Cloud,
    title: "Cloud Engineers",
  },
  {
    icon: Users2,
    title: "Product Managers",
  },
  {
    icon: Brain,
    title: "AI & ML Engineers",
  },
  {
    icon: Database,
    title: "Data Engineers",
  },
  {
    icon: ChartColumn,
    title: "Data Scientists",
  },
  {
    icon: Shield,
    title: "Cybersecurity Engineers",
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
  },
  {
    icon: ChartLine,
    title: "Data Analysts",
  },
];

export const HireTalentPool = () => {
  return (
    <section className="section-spacing container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* First Column */}
        <div className="relative">
          <div className="flex flex-col">
            <AppHeading
              title="Hire From Our Pool of Talent"
              description="Whatever your hiring needs, Ayonaire adapts to help you succeed."
              className="text-[30px]! lg:text-5xl!"
              descriptionClassName="text-base lg:text-lg"
            />
            <div className="flex flex-col gap-4 my-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary font-bold w-3 h-3 shrink-0 rounded-full" />
                <span className="text-base font-bold">
                  Delivering Excellence:{" "}
                  <span className="font-normal">
                    Access professionals trained for real-world impact.
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary font-bold w-3 h-3 shrink-0 rounded-full" />
                <span className="text-base font-bold">
                  Skilled & Effective:{" "}
                  <span className="font-normal">
                    Hit the ground running with job-ready candidates.
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* 2 first cards visible only on desktop */}
          <div className="hidden absolute bottom-0 w-full lg:grid grid-cols-2 gap-7">
            {hirePoolFeatures.slice(0, 2).map((feature) => (
              <HirePoolFeatureCard
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>

        {/* Second Column Desktop Visible Cards Only */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-4">
          {hirePoolFeatures.slice(2, hirePoolFeatures.length).map((feature) => (
            <HirePoolFeatureCard
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Second Column Mobile Only */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {hirePoolFeatures.map((feature) => (
            <HirePoolFeatureCard
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface HirePoolFeatureCardProps {
  icon: LucideIcon;
  title: string;
}
const HirePoolFeatureCard = ({
  icon: Icon,
  title,
}: HirePoolFeatureCardProps) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 rounded-xl p-4 lg:p-6">
      <div className="flex justify-center items-center bg-[#FFF3EA] p-3 rounded-lg w-fit">
        <Icon className="text-primary w-5 h-5" />
      </div>
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
};
