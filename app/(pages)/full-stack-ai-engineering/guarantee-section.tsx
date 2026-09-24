import Image from "next/image";
import { exo, melodrama, space } from "@/app/fonts";

export default function GuaranteeSection() {
  return (
    <section className="bg-[#FEFAF8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[1051px] flex-col items-center gap-10">
        <h2 className={`${melodrama.className} w-full text-center text-[32px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.08]`}>
          And yes... 30-day <span className="bg-[#ffdcc4] text-[#f25e25]">100% money-back guarantee</span>
        </h2>

        <div className={`${space.className} w-full space-y-7 text-left text-[18px] font-medium leading-[1.65] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[1.45]`}>
          <p>You have read a lot on this page. And perhaps a question is still sitting in your mind:</p>
          <p>&quot;What if everything sounds good here, but I join and the actual experience isn&apos;t what was promised?&quot;</p>
          <p>That is fair.</p>
          <p>We do not want the quality of our copywriting to be the only reason you believe in the programme.</p>
          <p>Experience the programme for yourself.</p>
          <p>Attend the live classes. Meet the instructors. Experience the Do As I Do. Code As I Code. teaching approach. Then judge us from your actual experience. You have 30 days to experience AI Engineering 2.0.</p>
          <p>If within <strong>30 days</strong> you decide not to continue, request a refund and receive <strong>100% of what you paid.</strong></p>
        </div>

        <p className={`${exo.className} w-full text-left text-[18px] font-bold leading-[1.5] tracking-[0.3px] text-[#181c23] lg:text-[28px]`}>
          30-DAY 100% MONEY-BACK GUARANTEE
        </p>
        <p className={`${exo.className} w-full text-center text-[28px] font-bold leading-[1.2] tracking-[0.3px] text-[#181c23] lg:text-[40px]`}>
          NO QUESTIONS ASKED.
        </p>
        <p className={`${space.className} w-full text-left text-[20px]  leading-[1.5] tracking-[0.3px] text-[#181c23] lg:text-[28px]`}>
          We take the quality of the programme seriously enough to let you experience it before making your final judgement.
        </p>

        <a href="https://wa.link/f1iadg" target="_blank" rel="noopener noreferrer" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-6 py-4 text-center text-[14px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 sm:text-[16px] lg:text-[18px]`}>
          I want to experience AI Engineering 2.0
          <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4 shrink-0" />
        </a>
      </div>
    </section>
  );
}