import React from "react";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";

interface StatItemProps {
  percentage: string;
  description: string;
}

const StatItem = ({ percentage, description }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center text-center py-6 lg:py-0">
      <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-2 lg:mb-4">
        {percentage}
      </span>
      <p className="text-gray-800 text-base lg:text-lg font-medium">
        {description}
      </p>
    </div>
  );
};

export const BusinessStats = () => {
  const stats = [
    {
      percentage: "90%",
      description: "Course Completion Rate",
    },
    {
      percentage: "85%",
      description: "Hiring Rate of Ayonaire Learners.",
    },
  ];

  return (
    <section
      className="py-6 mx-auto rounded-3xl"
      style={{ backgroundColor: "rgba(246, 117, 29, 0.15)" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-8">
          {/* Stats Container */}
          <div className="flex items-center gap-12 xl:gap-16 flex-1">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-12 xl:gap-16">
                <StatItem
                  percentage={stat.percentage}
                  description={stat.description}
                />
                {index < stats.length - 1 && (
                  <div className="w-px h-24 bg-primary" />
                )}
              </div>
            ))}
            {/* Divider before button */}
            <div className="w-px h-24 bg-primary" />
          </div>

          {/* CTA Button */}
          <AppActionButton
            variant="fading"
            className="flex items-center gap-3 p-6 text-base font-medium whitespace-nowrap"
          >
            Experience the Ayonaire Impact
            <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
              <ArrowRight className="w-5 h-5" />
            </span>
          </AppActionButton>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden">
          {stats.map((stat, index) => (
            <div key={index}>
              <StatItem
                percentage={stat.percentage}
                description={stat.description}
              />
              {index < stats.length - 1 && (
                <div className="w-full h-px bg-primary my-4" />
              )}
            </div>
            
          ))}

          {/* Divider before button */}
          <div className="w-full h-px bg-primary my-4" />

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <AppActionButton
              variant="fading"
              className="flex items-center gap-3 p-6! text-base font-medium"
            >
              Experience the Ayonaire Impact
              <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
                <ArrowRight className="w-5 h-5" />
              </span>
            </AppActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};
