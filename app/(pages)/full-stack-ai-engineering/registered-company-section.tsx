"use client";

import Image from "next/image";
import { useState } from "react";
import { exoMedium, melodrama, rope, salt } from "@/app/fonts";

const proofCards = [
  { text: "I'm still trying to figure out what to learn.", muted: true },
  { text: "Here's what I've built." },
  { text: "Here's my GitHub." },
  { text: "Here's my portfolio." },
  { text: "Here's the experience I've gained." },
  { text: "Here's the AI system I built." },
  { text: "Here's the role I'm positioning for." },
  { text: "Here's the career I'm building." },
];

export default function RegisteredCompanySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[rgba(255,220,196,0.28)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto grid w-full max-w-[1240px] gap-14 lg:grid-cols-[minmax(0,557px)_minmax(0,658px)] lg:gap-10">
        {/* Left */}
        <div className="flex flex-col gap-8 lg:gap-10">
          <h2
            className={`${melodrama.className} text-[26px] xs:text-[30px] sm:text-[44px] font-bold uppercase leading-[1.15] tracking-[0.3px] text-[#181c23] lg:text-[56px] lg:leading-[70px] lg:tracking-[0.6px]`}
          >
            Ayonaire Academy{" "}
            <span className="text-[#f25e25]">
              is a registered company.
            </span>
          </h2>

          <div
            className={`${exoMedium.className} space-y-6 text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#181c23] sm:text-[20px] lg:text-[24px] lg:leading-[42px] lg:tracking-[0.6px]`}
          >
            <p>
              Ayonaire Academy is operated by a duly registered Nigerian
              company.
            </p>

            <p className="font-semibold uppercase">
              Company Registration No. 9266377
            </p>

            <p>
              We want you knowing exactly who you are learning with, because
              trust should not disappear the moment payment is made.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <p
            className={`${salt.className} w-full text-center text-[15px] font-bold uppercase leading-[1.5] tracking-[0.6px] text-[#ff6b00] sm:text-[18px] lg:text-left lg:text-[20px]`}
          >
            Ten months from now, you could say:
          </p>

          <div className="flex w-full flex-col items-center gap-5 sm:gap-7 lg:gap-10">
            {proofCards.map((card, index) => (
              <ProofCard
                key={card.text}
                text={card.text}
                muted={card.muted}
                index={index}
                activeIndex={activeIndex}
                onHover={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto mt-16 flex w-full max-w-[1030px] flex-col items-center gap-7 text-center lg:mt-24 lg:gap-9">
        <p
          className={`${exoMedium.className} text-[18px] font-medium leading-[1.55] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[44px] lg:tracking-[0.6px]`}
        >
          The time will pass either way.
        </p>

        <p
          className={`${exoMedium.className} text-[18px]  leading-[1.55] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[44px] lg:tracking-[0.6px]`}
        >
          The only question is what you will do with it.
        </p>

        <p
          className={`${exoMedium.className} text-[20px] font-bold uppercase leading-[1.55] tracking-[0.3px] text-[#181c23] sm:text-[24px] lg:text-[28px] lg:leading-[44px] lg:tracking-[0.6px]`}
        >
          The next 10 months can{" "}
          <span className="text-[#f25e25]">
            change the next 10 years
          </span>{" "}
          of your career.
        </p>

        <a
          href="https://chat.whatsapp.com/HltOtTd5VrHJONFYDVb9VT?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className={`${exoMedium.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-5 py-3.5 text-center text-[13px] font-bold uppercase leading-[1.45] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[16px]`}
        >
          <span className="text-center">Start my AI career transition</span>

          <Image
            src="/assets/images/ai-fullstack-engineering/registered-company-button-arrow.svg"
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

function ProofCard({
  text,
  muted = false,
  onHover,
}: {
  text: string;
  muted?: boolean;
  index: number;
  activeIndex: number;
  onHover: () => void;
}) {
  return (
    <article
      onMouseEnter={onHover}
      className="relative flex min-h-[125px] sm:min-h-0 sm:aspect-[702/336] w-full items-center cursor-pointer lg:max-w-[655px] py-4 sm:py-0 overflow-hidden"
    >
      {/* Vector1 Card Background */}
      <Image
        src="/assets/images/ai-fullstack-engineering/right-fit-card.svg"
        alt=""
        fill
        sizes="(min-width: 1024px) 655px, 100vw"
        className="pointer-events-none object-contain"
      />

      {/* Content with 4.38deg rotation */}
      <div
        className="relative z-10 mx-auto flex w-[96%] sm:w-full items-center gap-3.5 pl-6 pr-4 sm:gap-6 sm:pl-8 sm:pr-6 lg:gap-8 lg:pl-10 lg:pr-8"
        style={{ transform: "rotate(4.38deg)" }}
      >
        {/* Check Icon */}
        <Image
          src="/assets/images/ai-fullstack-engineering/mark.svg"
          alt=""
          width={46}
          height={44}
          className={`size-[36px] shrink-0 object-contain sm:size-[46px] lg:size-[58px] ${
            muted ? "opacity-50" : ""
          }`}
        />

        {/* Text */}
        <p
          className={`
            ${rope.className}
            w-[76%] sm:w-[68%]
            text-[12px]
            font-bold
            leading-[1.65]
            tracking-[0.3px]
            text-[#181c23]

            sm:text-[15px]
            sm:leading-[1.5]

            lg:text-[19px]
            lg:leading-[1.5]
            xl:text-[20px]
          `}
        >
          &quot;{text}&quot;
        </p>
      </div>
    </article>
  );
}
