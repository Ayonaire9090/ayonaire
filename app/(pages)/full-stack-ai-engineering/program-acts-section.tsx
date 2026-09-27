import Image from "next/image";
import { melodrama, space } from "@/app/fonts";

export default function ProgramActsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[rgba(255,255,255,0.09)] to-[rgba(242,94,37,0.09)] px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-[180px] lg:pb-[120px] xl:px-16">
      {/* Top Decorative Background Shape (Rectangle 34624591) */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[100vw] max-w-none select-none z-0">
        <Image
          src="/assets/images/ai-fullstack-engineering/program-acts-top-shape.svg"
          alt=""
          width={1440}
          height={403}
          className="w-[100vw] max-w-none h-auto object-cover object-top opacity-100"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
        
        {/* Header */}
        <div className="relative flex w-full max-w-[846px] flex-col items-center gap-8 text-center lg:gap-12">
          <h2
            className={`${melodrama.className} pt-6 sm:pt-10 lg:pt-14 text-[30px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
          >
            So, how do we take you{" "}
            <span className="text-[#f25e25]">through</span>{" "}
            <span className="relative inline-block text-[#f25e25]">
              <span className="relative z-10">this journey?</span>
              <Image
                src="/assets/images/ai-fullstack-engineering/program-acts-highlight.svg"
                alt=""
                width={344}
                height={68}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[68px] w-full -translate-x-1/2 -translate-y-1/2 object-fill"
              />
            </span>
          </h2>

          <div
            className={`${space.className} space-y-5 text-[18px] leading-[1.45] tracking-[0.4px] text-[#5a4136] lg:text-[28px]`}
          >
            <p>
              Remember the path we just showed you? ... That is exactly how AI
              Engineering 2.0 is structured.
            </p>

            <p className="font-bold text-[#121315]">
              From Foundations To Production - In Three acts.
            </p>

            <p>
              The programme is divided into three Acts, with each stage
              preparing you for the next.
            </p>
          </div>
        </div>

        {/* First Two Cards: f1.svg & f2.svg (Frame 2147231154 layout) */}
        <div className="grid w-full items-start justify-items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="relative w-full max-w-[560px] transition-transform hover:scale-[1.01] lg:max-w-[652px]">
            <Image
              src="/assets/images/ai-fullstack-engineering/f1.svg"
              alt="Engineering & Data foundations"
              width={652}
              height={464}
              className="h-auto w-full object-contain drop-shadow-[0_6px_14px_rgba(24,28,35,0.08)]"
              priority
            />
          </div>

          <div className="relative w-full max-w-[560px] transition-transform hover:scale-[1.01] lg:max-w-[658px] lg:mt-6 lg:translate-y-2">
            <Image
              src="/assets/images/ai-fullstack-engineering/f2.svg"
              alt="Core Machine Learning Engineering"
              width={658}
              height={476}
              className="h-auto w-full object-contain drop-shadow-[0_6px_14px_rgba(24,28,35,0.08)]"
              priority
            />
          </div>
        </div>

        {/* Third Card: f3.svg */}
        <div className="flex w-full justify-center">
          <div className="relative w-full max-w-[560px] transition-transform hover:scale-[1.01] lg:max-w-[884px]">
            <Image
              src="/assets/images/ai-fullstack-engineering/f3.svg"
              alt="Modern Production AI & AI Forward Deployed Engineering"
              width={884}
              height={571}
              className="h-auto w-full object-contain drop-shadow-[0_6px_14px_rgba(24,28,35,0.08)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}