"use client";

import React from "react";
import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

interface StandardItem {
  title: string;
}

const excellenceStandards: StandardItem[] = [
  { title: "Quality Curriculum" },
  { title: "Experienced Instructors" },
  { title: "Practical Projects" },
  { title: "Ongoing Mentorship" },
  { title: "Strong Student Support" },
  { title: "Career Preparation" },
  { title: "Job & Work Readiness" },
  { title: "High-Quality Talent" },
];

const globalMarkets: StandardItem[] = [
  { title: "UK" },
  { title: "US" },
  { title: "Canada" },
  { title: "Europe" },
  { title: "Middle East" },
  { title: "Remote-first international companies" },
];

export default function ExcellenceStandardSection() {
  return (
    <section className="relative overflow-hidden  px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-[96px] xl:px-16">
      <div className="relative z-10 mx-auto flex w-full max-w-[1171px] flex-col items-center text-center">
        
        {/* Header with SVG highlight overlay on "Our standard." */}
        <h2
          className={`${melodrama.className} max-w-[1171px] text-[34px] font-bold leading-[1.12] tracking-[0.3px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[63px] lg:tracking-[0.6px]`}
        >
          Excellence is{" "}
          <span className="relative inline-block text-[#f25e25]">
            Our standard.
            <Image
              src="/assets/images/ai-fullstack-engineering/questions-cta-heading-highlight.svg"
              alt=""
              width={312}
              height={58}
              className="pointer-events-none absolute -left-2 -top-1 z-[-1] h-full w-full max-w-none object-contain"
            />
          </span>
        </h2>

        {/* First List Section */}
        <ul className="mt-10 flex w-full max-w-[1153px] flex-col items-start gap-4 text-left lg:mt-14 lg:gap-5">
          {excellenceStandards.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="flex h-2.5 w-4 shrink-0 rounded-sm bg-[#f25e25]" />
              <span
                className={`${exo.className} text-[18px] font-bold text-[#181c23] sm:text-[22px] lg:text-[26px]`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        {/* Informational Paragraphs */}
        <div
          className={`${exoMedium.className} mt-10 flex w-full max-w-[1153px] flex-col items-start space-y-7 text-left text-[18px] font-medium leading-[1.6] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:mt-14 lg:space-y-8 lg:text-[28px] lg:leading-[42px] lg:tracking-[0.6px]`}
        >
          <p>
            And we&apos;re not training you for just one local market...
          </p>
          <p>
            We&apos;re building Ayonaire talent to compete globally for opportunities across:
          </p>
        </div>

        {/* Global Markets List */}
        <ul className="mt-8 flex w-full max-w-[1153px] flex-col items-start gap-4 text-left lg:mt-10 lg:gap-5">
          {globalMarkets.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="flex h-2.5 w-4 shrink-0 rounded-sm bg-[#f25e25]" />
              <span
                className={`${exo.className} text-[18px] font-bold text-[#181c23] sm:text-[22px] lg:text-[26px]`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        {/* Conclusion Paragraph */}
        <div
          className={`${exoMedium.className} mt-8 flex w-full max-w-[1153px] text-left text-[18px] font-medium leading-[1.6] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:mt-10 lg:text-[28px] lg:leading-[42px] lg:tracking-[0.6px]`}
        >
          <p>Our ambition is global.</p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 flex w-full justify-center lg:mt-16">
          <a
            href="https://wa.link/f1iadg"
            target="_blank"
            rel="noopener noreferrer"
            className={`${exoMedium.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[13px] font-bold uppercase leading-[1.45] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[16px]`}
          >
            <span>I Want To Build My AI Career</span>
            <Image
              src="/assets/images/ai-fullstack-engineering/instructor-proof-button-arrow.svg"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
