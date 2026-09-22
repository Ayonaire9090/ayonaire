"use client";

import React from "react";
import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

interface CredentialItem {
  title: string;
}

const credentialsList: CredentialItem[] = [
  { title: "the projects you built," },
  { title: "the practical experience you gained," },
  { title: "your GitHub," },
  { title: "your portfolio" },
  { title: "and the problems you can solve." },
];

export default function CredentialProofSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff0e4] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-[96px] xl:px-16">
      <div className="relative z-10 mx-auto flex w-full max-w-[1171px] flex-col items-center text-center">
        
        {/* Header with Melodrama font and orange SVG highlight overlay on "Your Strongest Credential" */}
        <h2
          className={`${melodrama.className} max-w-[1171px] text-[30px] font-bold leading-[1.15] tracking-[0.3px] text-[#181c23] sm:text-[40px] lg:text-[50px] lg:leading-[60px] lg:tracking-[0.6px]`}
        >
          Now Listen,{" "}
          <span className="relative inline-block text-[#f25e25]">
            Your Strongest Credential
            <Image
              src="/assets/images/ai-fullstack-engineering/questions-cta-heading-highlight.svg"
              alt=""
              width={312}
              height={58}
              className="pointer-events-none absolute -left-2 -top-1 z-[-1] h-full w-full max-w-none object-contain"
            />
          </span>{" "}
          Is Not Your <br className="hidden sm:inline" />
          CERTIFICATE.
        </h2>

        {/* Intro Paragraph */}
        <div
          className={`${exoMedium.className} mt-8 flex w-full max-w-[1153px] text-left text-[18px] font-medium leading-[1.6] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:mt-10 lg:text-[28px] lg:leading-[42px] lg:tracking-[0.6px]`}
        >
          <p>
            A certificate says you completed a programme. But what really helps you stand out is being able to show:
          </p>
        </div>

        {/* Credentials List */}
        <ul className="mt-8 flex w-full max-w-[1153px] flex-col items-start gap-4 text-left lg:mt-10 lg:gap-5">
          {credentialsList.map((item, index) => (
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
          <p>but ultimately, we want you to be able to say:</p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 flex w-full justify-center lg:mt-16">
          <a
            href="tel:+2349067835701"
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