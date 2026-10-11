import React from "react";
import { AppAdvisorBanner } from "../appadvisor-banner";
import { ArrowRight, Mail } from "lucide-react";

export const ResellerBanner = () => {
  return (
    <AppAdvisorBanner
      title="Let's Grow Together"
      description="Apply now to become an Ayonaire Reseller Partner and start earning with impact."
      sectionClassName="my-0! mt-16! lg:mt-24!"
      className="px-0! lg:px-0!"
      ctaSection={
        <a
          href="/reseller-partner#getStarted"
          className="mt-4 flex items-center gap-3 bg-white rounded-xl px-5 py-3 lg:px-6 lg:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <span className="text-base lg:text-lg font-semibold text-primary">
            Get Started
          </span>
          <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg">
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
        </a>
      }
    />
  );
};
