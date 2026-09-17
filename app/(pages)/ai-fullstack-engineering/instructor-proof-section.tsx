import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

export default function InstructorProofSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ffdcc4] to-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
      <Image
        src="/assets/images/ai-fullstack-engineering/instructor-proof-bg.svg"
        alt=""
        width={1463}
        height={551}
        className="pointer-events-none absolute left-1/2 top-[-170px] hidden h-[551px] w-[1463px] max-w-none -translate-x-1/2 rotate-[-1.95deg] lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1171px] flex-col items-center gap-10 text-center lg:gap-20">
        <h2 className={`${melodrama.className} max-w-[1171px] text-[34px] font-bold leading-[1.12] tracking-[0.3px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[63px] lg:tracking-[0.6px]`}>
          Learn from people <span className="text-[#f25e25]">who have actually done</span> the work.
        </h2>

        <div className={`${exo.className} max-w-[1153px] space-y-7 text-[20px] font-medium leading-[1.6] tracking-[0.3px] text-[#181c23] sm:text-[24px] lg:space-y-10 lg:text-[32px] lg:leading-[48px] lg:tracking-[0.6px]`}>
          <p>
            You will learn from <strong>hiring managers, AI practitioners and engineering leaders</strong> who have built, deployed and shipped AI systems for real businesses and production environments.
          </p>
          <p>
            They understand <strong>what companies expect, what hiring managers look for and what it takes to build AI systems that work in the real world.</strong>
          </p>
        </div>

        <a href="#enroll" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[13px] font-bold uppercase leading-[1.45] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[18px]`}>
          I am ready for this
          <Image
            src="/assets/images/ai-fullstack-engineering/instructor-proof-button-arrow.svg"
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
