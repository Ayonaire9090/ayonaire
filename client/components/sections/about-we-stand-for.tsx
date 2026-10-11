import React from "react";
import { AppHeading } from "../app-heading";
import { Check } from "lucide-react";

const weStandFor = [
  "Impact is the reason we exist",
  "Equipping ambitious young minds for global opportunities",
  "Raising a new generation of tech talents for global impact",
  "Transforming lives by empowering people through digital skills",
  "We believe that technology is a divine tool for transformation.",
  "We believe that digital skills can lift people out of poverty and into purpose.",
  "We believe that believers should be productive, not parasitic.",
  "We believe that responsibility is the seed for relevance.",
  "We believe that the marketplace is a pulpit, and wealth is a weapon for the gospel",
];

export const AboutWeStandFor = () => {
  return (
    <section
      id="instructorLookingFor"
      className="relative section-spacing py-8 lg:py-16"
    >
      <div className="p-6 bg-white shadow-glow-blur rounded-lg container z-10 relative w-full max-w-[95%] lg:max-w-5xl mx-auto">
        <AppHeading
          headingLevel="h3"
          title="Who We Stand For"
          className="text-start"
          descriptionClassName="text-start"
        />
        <div className="my-6 flex flex-col gap-4">
          {weStandFor.map((reason) => (
            <div key={reason} className="flex items-center gap-3">
              <div className="bg-primary w-fit p-1 rounded-full">
                <Check className="text-white w-3.5 h-3.5" />
              </div>
              <p className="font-medium text-base">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
