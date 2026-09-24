"use client"
import Image from "next/image";
import { adineue, exo, exoMedium, rope, barlowBold } from "@/app/fonts";

export default function CohortActionSection() {
  return (
    <section className="mt-20 bg-gradient-to-b from-[rgba(255,255,255,0.09)] to-[rgba(242,94,37,0.09)] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 xl:px-16 xl:pb-28">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 text-center lg:gap-20">
        <div className="flex w-full max-w-[1091px] flex-col items-center gap-8 lg:gap-10">
          <p className={`${exoMedium.className} text-[18px] font-semibold italic leading-[1.6] tracking-[0.3px] text-[#ff6b00] sm:text-[24px] lg:text-[28px] lg:leading-[44px] lg:tracking-[0.6px]`}>
            But here&apos;s something important:
          </p>
          <h2 className={`${barlowBold.className} text-[34px]  leading-[1.18] tracking-[0.8px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[67px] lg:tracking-[1.76px]`}>
            The next 10 months can <span className="text-[#f25e25]">change the next 10 years</span> of your career.
          </h2>
          <p className={`${exoMedium.className} text-[18px] font-medium leading-[1.6] tracking-[0.8px] text-[#181c23] sm:text-[24px] lg:text-[28px] lg:leading-[44px] lg:tracking-[1.2px]`}>
            Not because ten months magically guarantees success.
          </p>
        </div>

        <div className="flex w-full flex-col gap-10 text-left sm:gap-14 lg:gap-20 xl:gap-24">
          <div className={`${adineue.className} flex flex-col gap-8 text-left text-[18px] leading-[1.6] tracking-[0.8px] text-[#5a4136] sm:text-[24px] lg:gap-11 lg:text-[28px] lg:leading-[40px] lg:tracking-[1.2px]`}>
            <p>But because ten months of focused learning, disciplined practice and intentional action can put you far ahead of ten months spent only thinking about starting.</p>
            <p className="text-[22px] font-bold uppercase sm:text-[28px] lg:text-[34px]">September 2026 Cohort</p>
          </div>

          <div className="rounded-[20px] bg-white p-6 text-center sm:p-8 lg:rounded-[24px] lg:p-10">
            <div className={`${adineue.className} flex flex-col items-center gap-6 text-[#5a4136] lg:gap-11`}>
              <p className="text-[22px] font-bold uppercase leading-[1.35] tracking-[1px] sm:text-[28px] lg:text-[34px] lg:leading-[40px] lg:tracking-[1.2px]">
                Classes commence: 14th September 2026.
              </p>
              <p className="text-[16px] font-normal leading-[1.6] tracking-[0.8px] sm:text-[22px] lg:text-[28px] lg:leading-[40px] lg:tracking-[1.2px]">
                10 Months . 3 Acts . 32 Modules . 45+ Projects . Full Career Transition
              </p>
            </div>
          </div>
        </div>

        <a href="https://wa.link/f1iadg" target="_blank" rel="noopener noreferrer" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-center text-[14px] font-bold uppercase leading-[1.45] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 sm:text-[16px] lg:text-[18px]`}>
          I&apos;m ready to take action
          <Image
            src="/assets/images/ai-fullstack-engineering/cohort-action-button-arrow.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </a>
      </div>
    </section>
  );
}
