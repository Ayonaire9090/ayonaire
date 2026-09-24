import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

export default function ExplainedCtaSection() {
  return (
    <section className="relative z-10 overflow-x-clip overflow-y-visible bg-[#171717] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16 min-h-[500px] sm:min-h-[600px] lg:min-h-[680px] lg:py-24 xl:py-28">
      {/* TOP DECORATIVE SHAPE (Rectangle 34624590) */}
      <Image
        src="/assets/images/ai-fullstack-engineering/explained-cta-top-shape.svg"
        alt=""
        width={1490}
        height={403}
        style={{ width: "110vw", left: "-10%" }}
        className="pointer-events-none absolute left-[-10%] top-0 -translate-y-[30%] z-10 h-[12.59375rem] sm:h-[25.1875rem] w-[110vw] max-w-none select-none object-fill"
      />
      {/* DECORATIVE ELLIPSES & WATERMARK */}
      <Image
        src="/assets/images/ai-fullstack-engineering/explained-cta-ellipse-top.svg"
        alt=""
        width={295}
        height={287}
        className="pointer-events-none absolute -right-24 -top-16 hidden h-[287px] w-[295px] rotate-[-92deg] opacity-80 lg:block z-0"
      />
      <Image
        src="/assets/images/ai-fullstack-engineering/explained-cta-ellipse-left.svg"
        alt=""
        width={319}
        height={372}
        className="pointer-events-none absolute -left-48 top-[331px] hidden h-[372px] w-[319px] rotate-[-9deg] opacity-80 lg:block z-0"
      />
      <Image
        src="/assets/images/ai-fullstack-engineering/explained-cta-watermark.png"
        alt=""
        width={269}
        height={333}
        className="pointer-events-none absolute -left-36 top-[335px] hidden h-[333px] w-[269px] rotate-[7deg] object-cover opacity-[0.05] lg:block z-0"
      />

      <div className="relative z-20 mx-auto flex w-full max-w-[1187px] flex-col items-center text-center text-white">
        <h2
          className={`${melodrama.className} max-w-[1100px] text-[21px] font-bold leading-[1.25] tracking-[0.2px] sm:text-[36px] lg:text-[44px] lg:leading-[1.22]`}
        >
          SO... I JUST EXPLAINED WHAT 10s of YOUTUBE VIDEOS FAIL TO HELP MANY UNDERSTAND{" "}
          <span className="inline font-normal">
            (of course many of them want to{" "}
            <span className="relative mt-1.5 inline-block text-[#f25e25] font-bold sm:mt-0">
              sound technical and professional)
              <Image
                src="/assets/images/ai-fullstack-engineering/explained-cta-highlight.svg"
                alt=""
                width={757}
                height={53}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[108%] -translate-x-1/2 -translate-y-1/2 select-none object-fill"
              />
            </span>
          </span>
        </h2>

        <Image
          src="/assets/images/ai-fullstack-engineering/explained-cta-arrow-down.svg"
          alt=""
          width={44}
          height={68}
          className="mt-8 h-[60px] w-10 sm:mt-10 sm:h-[68px] sm:w-11 object-contain"
        />

        <div
          className={`${exoMedium.className} mt-6 max-w-[800px] text-[17px] font-medium leading-[1.4] tracking-[0.3px] sm:mt-8 sm:text-[18px] lg:text-[20px]`}
        >
          <p className="text-[#f5f5f5]">But who cares</p>
          <p className={`${exo.className} font-bold text-[#f25e25]`}>
            Now you know what an ai/ml engineer actually looks like?
          </p>
        </div>

        <a
          href="https://wa.link/f1iadg"
          target="_blank"
          rel="noopener noreferrer"
          className={`${exoMedium.className} mt-8 xs:mt-10 inline-flex items-center justify-center text-center gap-2.5 rounded-[8px] bg-[#ff6b00] px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.3px] text-white sm:mt-12 sm:px-10 sm:py-5 sm:text-[16px] shadow-[0px_12px_20px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01]`}
        >
          <span className="text-center">I Want To Build Systems Like These</span>
          <Image
            src="/assets/images/ai-fullstack-engineering/explained-cta-button-arrow.svg"
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

