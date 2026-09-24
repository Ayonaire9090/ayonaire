import Image from "next/image";
import { exoMedium, melodrama } from "@/app/fonts";

export default function InstructorProofSection() {
  return (
    <section className="mt-24 relative overflow-x-clip bg-gradient-to-b from-[#FFDCC4] to-white px-5 pt-24 pb-16 sm:px-8 sm:pt-28 lg:px-12 lg:pt-36 lg:pb-20 xl:px-16">
      {/* Irregular top shape */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[180px] overflow-visible sm:h-[240px] lg:h-[300px]">
        <Image
          src="/assets/images/ai-fullstack-engineering/top6.svg"
          alt=""
          width={1440}
          height={601}
          priority
          className="
            absolute
            left-1/2
            top-0
            h-auto
            w-[100vw]
            max-w-none
            -translate-x-1/2
            -translate-y-[25%]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1171px] flex-col items-center gap-10 text-center lg:gap-20">
        <h2
          className={`${melodrama.className} max-w-[1171px] text-[34px] font-bold leading-[1.12] tracking-[0.3px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[63px] lg:tracking-[0.6px]`}
        >
          Learn from people{" "}
          <span className="text-[#f25e25]">
            who have actually done
          </span>{" "}
          the work.
        </h2>

        <div
          className={`${exoMedium.className} max-w-[1153px] space-y-7 text-[18px] font-medium leading-[1.6] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:space-y-10 lg:text-[28px] lg:leading-[42px] lg:tracking-[0.6px]`}
        >
          <p>
            You will learn from{" "}
            <strong>
              hiring managers, AI practitioners and engineering
              leaders
            </strong>{" "}
            who have built, deployed and shipped AI systems for real
            businesses and production environments.
          </p>

          <p>
            They understand{" "}
            <strong>
              what companies expect, what hiring managers look for
              and what it takes to build AI systems that work in the
              real world.
            </strong>
          </p>
        </div>

        <a
          href="https://wa.link/f1iadg"
          target="_blank"
          rel="noopener noreferrer"
          className={`${exoMedium.className} inline-flex items-center justify-center text-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[13px] font-bold uppercase leading-[1.45] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[16px]`}
        >
          <span className="text-center">I am ready for this</span>

          <Image
            src="/assets/images/ai-fullstack-engineering/instructor-proof-button-arrow.svg"
            alt=""
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
        </a>
      </div>
    </section>
  );
}
