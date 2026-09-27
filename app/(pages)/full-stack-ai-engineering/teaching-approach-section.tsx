import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

const steps = [
  "The instructor explains.",
  "The instructor demonstrates.",
  "You follow.",
  "You code.",
  "You ask questions.",
  "You make mistakes.",
  "You debug.",
  "You practise again.",
  "Then you build independently.",
];

export default function TeachingApproachSection() {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[6.875rem] sm:h-[13.75rem] bg-gradient-to-r from-[#1c1c1c] via-[#9d3d00] to-[#ff6b00] [clip-path:polygon(0_0,100%_0,100%_28%,64%_45%,40%_30%,20%_48%,0_78%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        {/* HEADING */}
        <h2
          className={`
            ${melodrama.className}
            max-w-[960px]
            text-center
            text-[30px]
            font-bold
            uppercase
            leading-[1.12]
            tracking-[-0.7px]

            sm:text-[36px]

            lg:text-[46px]
          `}
        >
          Our <span className="text-[#f25e25]">Teaching Approach</span>
        </h2>

        {/* STEPS */}
        <div className="flex w-full flex-col gap-8 lg:gap-10">
          <p
            className={`
              ${exoMedium.className}
              text-[17px]
              font-bold
              uppercase
              tracking-[0.06em]

              sm:text-[19px]

              lg:text-[23px]
            `}
          >
            Do as I do. Code as I code.
          </p>

          <ul className="grid gap-4 lg:gap-5">
            {steps.map((step) => (
              <li
                key={step}
                className={`
                  ${exoMedium.className}
                  grid
                  grid-cols-[30px_1fr]
                  items-center
                  gap-4

                  text-[15px]
                  font-medium
                  leading-[1.5]
                  tracking-[-0.2px]

                  sm:text-[17px]

                  lg:text-[21px]
                `}
              >
                <BulletPair />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* LEARNING CYCLE */}
        <div
          className={`
            ${exoMedium.className}
            w-full
            space-y-6
            text-[16px]
            font-medium
            leading-[1.6]
            tracking-[0.2px]

            sm:text-[18px]

            lg:text-[22px]
          `}
        >
          <p>Our learning cycle is:</p>

          <p className="font-bold uppercase">
            Explain → Demonstrate → Code Together → Practise → Build → Present →
            Feedback → Improve
          </p>
        </div>

        {/* FINAL COPY */}
        <div
          className={`
            ${exoMedium.className}
            w-full
            space-y-5
            text-[16px]
            font-medium
            leading-[1.6]
            tracking-[0.2px]

            sm:text-[18px]

            lg:text-[22px]
          `}
        >
          <p>The goal is not to understand what the instructor is doing.</p>

          <p className="font-bold italic">
            It&apos;s to become capable of doing it yourself.
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/2349067835701"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${exo.className}
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-[8px]
            bg-[#ff6b00]
            px-8
            py-4
            text-center
            text-[11px]
            font-bold
            uppercase
            tracking-[0.04em]
            text-white
            shadow-[0_12px_16px_rgba(255,107,0,0.3)]
            transition-transform
            hover:scale-[1.01]

            sm:px-10
            sm:py-5
            sm:text-[14px]

            lg:text-[16px]
          `}
        >
          I want hands-on AI engineering training

          <Image
            src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg"
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

function BulletPair() {
  return (
    <span className="flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-white" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}