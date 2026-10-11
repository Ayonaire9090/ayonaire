import React from "react";
import { AppHeading } from "../app-heading";
import { instructorLookingForReasons } from "@/constants";
import { Check } from "lucide-react";

export const InstructorWeAreLookingFor = () => {
  return (
    <section
      id="instructorLookingFor"
      className="relative section-spacing py-8 lg:py-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-[#FFE7DE] to-[#FFE7DE] -z-10" />

      <div className="p-6 lg:p-12 bg-white shadow-glow-blur rounded-lg container z-10 relative w-full max-w-[95%] lg:max-w-5xl mx-auto">
        <AppHeading
          headingLevel="h3"
          title="Who We're Looking For"
          className="text-center"
          description="You don't need to be a celebrity instructor—just someone with:"
          descriptionClassName="text-center"
        />
        <div className="my-6 lg:my-10 flex flex-col gap-4">
          {instructorLookingForReasons.map((reason) => (
            <div key={reason} className="flex items-center gap-3">
              <div className="bg-primary w-fit p-1 rounded-full">
                <Check className="text-white w-3.5 h-3.5" />
              </div>
              <p className="font-medium text-base">{reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 mb-2 rounded-xl bg-[#FFE7DE] text-[#0F1729] p-6 font-semibold">
          <div className="text-center text-base lg:text-lg w-full max-w-3xl mx-auto">
            Whether you're a working professional, a trainer, or a
            subject-matter expert—if you've got the passion,{" "}
            <span className="text-primary">we've got the platform.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
