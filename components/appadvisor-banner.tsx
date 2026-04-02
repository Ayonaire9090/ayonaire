import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AppAdvisorBannerProps {
  title?: string;
  description?: string;
  ctaSection?: React.ReactNode;
  headingClassName?: string;
  variant?: "default" | "light";
  sectionClassName? : string;
  className?: string;
}

export const AppAdvisorBanner = ({
  title = "No Tech Background? You Can Still Break Into AI",
  description = "We'll teach you everything from scratch get guidance directly from our advisors.",
  ctaSection,
  headingClassName,
  variant= "default",
  sectionClassName,
  className,
}: AppAdvisorBannerProps) => {
  return (
    <section className={cn("my-16 lg:my-24", sectionClassName)}>
      <div
        className={cn(
          "relative w-full overflow-hidden  px-6 py-12 lg:px-20 lg:py-16",
          variant === "default" ? "bg-linear-to-r from-primary to-primary/90" : "bg-linear-to-r from-[#FFE7DE] to-primary/30",
          className
        )}
      >
        {/* Decorative Lines Pattern - positioned top left */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <Image
            src="/assets/icons/lines-pattern-2.svg"
            alt=""
            width={375}
            height={372}
            className="w-full  h-auto"
            aria-hidden="true"
          />
        </div>

        {
          // More decorations for light variant
          variant === "light" && (
            <>
            {/* Shape-top */}
            <div className="absolute top-0 right-[40%]">
              <Image
                src="/assets/shape-top.svg"
                alt=""
                width={150}
                height={150}
                className="w-full  h-auto"
                aria-hidden="true"
              />
            </div>

            {/* Shape-bottom-right */}
            <div className="absolute bottom-0 right-0">
              <Image
                src="/assets/shape-right-1.svg"
                alt=""
                width={150}
                height={150}
                className="w-full  h-auto"
                aria-hidden="true"
              />
            </div>

            {/* Shape-center-right */}
            <div className="absolute bottom-[20%] right-[20%]">
              <Image
                src="/assets/shape-right-2.svg"
                alt=""
                width={150}
                height={150}
                className="w-full  h-auto"
                aria-hidden="true"
              />
            </div>

            {/* Shape-left-bottom */}
            <div className="absolute bottom-0 left-0">
              <Image
                src="/assets/shape-left.svg"
                alt=""
                width={150}
                height={150}
                className="w-full  h-auto"
                aria-hidden="true"
              />
            </div>
            </>
          )
        }

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-4 lg:gap-6">
          {/* Title */}
          <h2 className={cn("text-2xl lg:text-5xl font-bold  max-w-4xl capitalize leading-tight", 
            variant === "default" ? "text-white" : "text-[#141414]", headingClassName)}>
            {title}
          </h2>

          {/* Description */}
          <p className={cn("text-sm lg:text-lg text-white/90 max-w-2xl capitalize", 
            variant === "default" ? "text-white" : "text-[#141414]", headingClassName)}>
            {description}
          </p>

          {/* CTA Button */}
          {ctaSection || bannerCta()}
        </div>
      </div>
    </section>
  );
};

const bannerCta = () => {
  return (
    <Link href="/opt-in#freeAccessFormOptin">
    <button className="mt-4 flex items-center gap-2 bg-white rounded-lg lg:rounded-xl px-5 py-3 lg:px-6 lg:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <span className="text-sm lg:text-base font-semibold text-[#141414]">
        Talk to an Advisor
      </span>
      <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-r from-primary to-primary/90 rounded-lg">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 lg:w-5 lg:h-5"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
    </Link>
  );
};
