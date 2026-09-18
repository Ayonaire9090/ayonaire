import Image from "next/image";
import { exo, exoMedium, melodrama, salt } from "@/app/fonts";

const options = [
  {
    number: "01",
    body: "You can spend the next 10 months jumping from YouTube to Coursera to Udemy, taking courses that lack depth, and trying to figure out what to learn, what comes next, which projects to build and whether any of it is actually preparing you for an AI/ML Engineering role.",
  },
  {
    number: "02",
    body: (
      <>
        You can follow a <strong>STRUCTURED, JOB-READY PATH</strong> where we
        give you the structure, industry-relevant skills, real projects,
        practical experience and portfolio you need to stand out plus{" "}
        <strong>Job Placement Assistance</strong> to help you compete for AI/ML
        Engineering opportunities.
      </>
    ),
  },
];

export default function LearningOptionsSection() {
  return (
    <section className="bg-gradient-to-b from-[rgba(255,255,255,0.09)] to-[rgba(242,94,37,0.09)] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-16 lg:gap-20">
        <div className="relative flex w-full max-w-[1091px] flex-col items-center gap-8 text-center lg:gap-10">
          <h2
            className={`${melodrama.className} text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
          >
            Where do you{" "}
            <span className="relative inline-block text-[#f25e25]">
              <span className="relative z-10">actually learn all of this?</span>
              <Image
                src="/assets/images/ai-fullstack-engineering/learning-options-highlight.svg"
                alt=""
                width={586}
                height={68}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[68px] w-[min(586px,110%)] -translate-x-1/2 -translate-y-1/2 object-fill"
              />
            </span>
          </h2>

          <p
            className={`${exo.className} text-[22px] font-bold italic leading-[1.3] tracking-[0.4px] text-[#121315] underline lg:text-[32px]`}
          >
            Well, There are 2 options:
          </p>
        </div>

        <div className="flex w-full flex-col gap-12 lg:gap-16">
          {options.map((option, index) => (
            <div key={option.number} className="contents">
              <div className="grid items-center gap-8 lg:grid-cols-[180px_1fr] lg:gap-11">
                <p
                  className={`${salt.className} text-center text-[64px] font-bold leading-none tracking-[1.6px] ${
                    index === 0 ? "text-[#f25e25]" : "text-[#ff6b00]"
                  } lg:text-[96px]`}
                >
                  {option.number}
                </p>

                <p
                  className={`${exoMedium.className} text-justify text-[18px] font-medium leading-[1.65] tracking-[0.6px] text-[#5a4136] lg:text-[28px] lg:leading-[1.65] lg:tracking-[1px]`}
                >
                  {option.body}
                </p>
              </div>

              {/* OR BETWEEN OPTION 01 AND OPTION 02 */}
              {index === 0 && (
                <p
                  className={`${salt.className} text-center text-[48px] font-bold leading-none tracking-[1px] text-[#181c23] lg:text-[64px]`}
                >
                  or
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
