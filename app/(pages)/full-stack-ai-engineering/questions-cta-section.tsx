import Image from "next/image";
import { exo, exoMedium } from "@/app/fonts";

export default function QuestionsCtaSection() {
  return (
    <section className="mt-20 bg-[linear-gradient(117deg,rgba(255,107,0,0.68)_3%,rgba(255,220,196,0.92)_29%,#fff5ee_58%,#fdfbf9_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[777px] flex-col items-center justify-center gap-12 text-center lg:gap-20">
        <div className="flex w-full flex-col items-center gap-8">
          <div className="relative w-full max-w-[713px]">
            <h2 className={`${exo.className} relative z-10 text-[34px] font-bold leading-[1.08] tracking-[-0.8px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[60.48px] lg:tracking-[-1.4px]`}>
              Still Have <span className="text-[#f25e25]">Questions?</span>
            </h2>
            <Image
              src="/assets/images/ai-fullstack-engineering/questions-cta-heading-highlight.svg"
              alt=""
              width={312}
              height={58}
              className="pointer-events-none absolute right-[8%] top-1 z-0 hidden h-[58px] w-[312px] max-w-[44%] lg:block"
            />
          </div>

          <p className={`${exoMedium.className} text-[16px] font-bold leading-[1.55] text-[#5a4136] sm:text-[20px] lg:text-[24px] lg:leading-[34px]`}>
            Your next 10 months are coming either way.
          </p>
        </div>

        <Image
          src="/assets/images/ai-fullstack-engineering/questions-cta-icon.png"
          alt=""
          width={179}
          height={149}
          className="h-auto w-[120px] sm:w-[150px] lg:w-[179px]"
          sizes="(min-width: 1024px) 179px, 150px"
        />

        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <p className={`${exoMedium.className} text-[18px] font-bold leading-[1.55] tracking-[0.3px] text-[#f25e25] sm:text-[22px] lg:text-[24px] lg:leading-[38px] lg:tracking-[0.6px]`}>
            The question is: what will you have to show for them?
          </p>

          <a href="https://wa.link/f1iadg" target="_blank" rel="noopener noreferrer" className={`${exoMedium.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-center text-[13px] font-bold uppercase leading-[1.45] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[16px]`}>
            See the programme &amp; start my transition
            <Image
              src="/assets/images/ai-fullstack-engineering/questions-cta-button-arrow.svg"
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

