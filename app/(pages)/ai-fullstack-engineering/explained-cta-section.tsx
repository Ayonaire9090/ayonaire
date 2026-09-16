import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

export default function ExplainedCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-5 py-20 sm:px-8 lg:px-12 xl:px-16 lg:min-h-[735px] lg:py-[120px]">
      <Image
        src="/assets/images/ai-fullstack-engineering/explained-cta-top-shape.svg"
        alt=""
        width={1490}
        height={403}
        className="pointer-events-none absolute left-1/2 top-[-119px] h-[403px] w-[1490px] max-w-none -translate-x-1/2 object-fill"
      />
      <Image
        src="/assets/images/ai-fullstack-engineering/explained-cta-ellipse-top.svg"
        alt=""
        width={295}
        height={287}
        className="pointer-events-none absolute -right-24 -top-16 hidden h-[287px] w-[295px] rotate-[-92deg] lg:block"
      />
      <Image
        src="/assets/images/ai-fullstack-engineering/explained-cta-ellipse-left.svg"
        alt=""
        width={319}
        height={372}
        className="pointer-events-none absolute -left-48 top-[331px] hidden h-[372px] w-[319px] rotate-[-9deg] lg:block"
      />
      <Image
        src="/assets/images/ai-fullstack-engineering/explained-cta-watermark.png"
        alt=""
        width={269}
        height={333}
        className="pointer-events-none absolute -left-36 top-[335px] hidden h-[333px] w-[269px] rotate-[7deg] object-cover opacity-[0.04] lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1187px] flex-col items-center text-center text-white">
        <h2
          className={`${melodrama.className} text-[30px] font-bold uppercase leading-[1.18] tracking-[0.4px] sm:text-[36px] lg:text-[34px] lg:leading-[1.2] lg:tracking-[0.2px]`}
        >
          So... I just explained what 10s of Youtube videos fail to help many
          understand (of course many of them want to{" "}
          <span className="relative inline-block text-[#f25e25]">
            sound technical and professional
            <Image
              src="/assets/images/ai-fullstack-engineering/explained-cta-highlight.svg"
              alt=""
              width={757}
              height={53}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[53px] w-[min(757px,106%)] -translate-x-1/2 -translate-y-1/2 select-none object-fill"
            />
          </span>
          )
        </h2>

        <Image
          src="/assets/images/ai-fullstack-engineering/explained-cta-arrow-down.svg"
          alt=""
          width={44}
          height={68}
          className="mt-10 h-[68px] w-11"
        />

        <div
          className={`${exo.className} mt-8 text-[17px] font-semibold leading-[1.35] tracking-[0.5px] sm:text-[18px] lg:text-[20px] lg:leading-[1.4]`}
        >
          <p>But who cares</p>
          <p className="text-[#f25e25]">
            Now you know what an AI/ML engineer actually looks like.
          </p>
        </div>

        <a
          href="#ai-engineering-path"
          className={`${exo.className} mt-12 inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[17px] uppercase text-white shadow-[0px_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:text-[16px]`}
        >
          I want to build systems like these
          <Image
            src="/assets/images/ai-fullstack-engineering/explained-cta-button-arrow.svg"
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
