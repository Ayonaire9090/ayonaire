import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

export default function CareerCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-[110px] xl:px-16">
      <Image
        src="/assets/images/ai-fullstack-engineering/career-system-line.svg"
        alt=""
        width={1240}
        height={116}
        className="pointer-events-none absolute left-1/2 top-0 hidden w-[min(1240px,100%)] -translate-x-1/2 opacity-40 lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1040px] flex-col items-center gap-8 text-center">
        <p
          className={`${exo.className} text-[15px] font-bold uppercase tracking-[0.16em] text-[#ff6b00]`}
        >
          Start building the path
        </p>
        <h2
          className={`${melodrama.className} max-w-[920px] text-[30px] font-bold leading-[1.12] tracking-[-0.8px] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
        >
          If you want to become the kind of person companies trust with AI systems,
          you need a roadmap that builds skill and proof together.
        </h2>
        <p
          className={`${exo.className} max-w-[780px] text-[17px] leading-[1.65] tracking-[0.2px] text-[#f5f5f5] sm:text-[18px] lg:text-[20px]`}
        >
          Learn the foundations, build practical systems, document your work and
          position yourself for the roles opening up in this field.
        </p>

        <a
          href="https://wa.link/f1iadg"
          target="_blank"
          rel="noopener noreferrer"
          className={`${exo.className} mt-4 inline-flex items-center justify-center gap-3 rounded-[8px] bg-[#ff6b00] px-7 py-4 text-[15px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:text-[16px]`}
        >
          Show me the roadmap
          <Image
            src="/assets/images/ai-fullstack-engineering/career-cta-arrow.svg"
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
