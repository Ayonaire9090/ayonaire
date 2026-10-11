import React from "react";
import { AppBanner } from "../app-banner";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";

export const BusinessBanner = () => {
  return (
    <div className="section-spacing pb-12">
      <AppBanner variant="primary" className="w-full rounded-none!">
        <div className="relative z-10 flex flex-col items-center justify-center p-6 lg:p-12 lg:py-16 text-center">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-[44px] leading-tight lg:leading-[53px] font-extrabold text-white">
            Let's Empower Your Workforce
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed lg:leading-[28px] tracking-[-0.02em] text-white opacity-90 mt-4 lg:mt-5 max-w-3xl">
            Whether you're equipping your internal team or leading a large scale
            transformation, Ayonaire is your learning partner for future-ready
            talent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
            <AppActionButton
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 hover:text-primary border-0 font-medium text-sm lg:text-lg px-6 lg:px-8 py-6 flex items-center gap-2"
            >
              Start a Corporate Training Partnership
              <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                <ArrowRight className="w-5 h-5 text-primary" />
              </span>
            </AppActionButton>
            <AppActionButton
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 font-medium text-sm lg:text-lg px-6 lg:px-8 py-6 flex items-center gap-2"
            >
              Talk to an Advisor
              <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
            </AppActionButton>
          </div>
        </div>
      </AppBanner>
    </div>
  );
};
