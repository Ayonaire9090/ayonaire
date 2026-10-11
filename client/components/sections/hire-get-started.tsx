import { AppHeading } from "../app-heading";
import { Building2 } from "lucide-react";
import { HireGetStartesForm } from "./hire-get-started-form";

export const HireGetStarted = () => {
  return (
    <section id="getStartedHiring" className="relative w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-[#FFE7DE] to-[#FFE7DE] -z-10" />
      <div className="container flex flex-col justify-center items-center gap-3 relative w-full section-spacing py-16">
        <div className="flex flex-col justify-center items-center rounded-full p-4 bg-[#F59F0A]/10">
          <Building2 className="w-8 h-8 text-primary" />
        </div>
        <AppHeading
          headingLevel="h2"
          title="Get Started With Ayonaire Hire"
          description="Fill in your business information to start hiring top talent"
          className="text-center text-[30px]! lg:text-[44px]! leading-tight!"
          descriptionClassName="text-center text-base pt-2 lg:text-lg!"
        />

        {/* The Get Started Form */}
        <HireGetStartesForm />
      </div>
    </section>
  );
};
