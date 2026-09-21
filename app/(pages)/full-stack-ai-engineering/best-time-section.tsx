import Image from "next/image";
import { exo, exoMedium, melodrama, space } from "@/app/fonts";

const outcomeStatements = [
  "I finally started.",
  "I developed the skill.",
  "I have work I can show.",
  "I have practical experience.",
  "I am positioning myself for opportunities I could not confidently pursue before.",
];

export default function BestTimeSection() {
  return (
    <section className="bg-[#fefaf8] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1279px] flex-col items-center gap-10 lg:gap-11">
        <div className="relative w-full max-w-[1240px] text-center">
          <h2 className={`${melodrama.className} relative z-10 text-[34px] font-bold leading-[1.1] tracking-[-0.8px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[60.48px] lg:tracking-[-1.4px]`}>
            The <span className="text-[#f25e25]">best time to start</span> was yesterday. The next best time is now.
          </h2>
          <Image
            src="/assets/images/ai-fullstack-engineering/best-time-heading-highlight.svg"
            alt=""
            width={416}
            height={48}
            className="pointer-events-none absolute left-[11%] top-1 hidden h-[48px] w-[416px] max-w-[42%] lg:block"
          />
        </div>

        <div className={`${space .className} w-full max-w-[1279px] space-y-7 text-justify text-[18px] font-normal leading-[1.75] tracking-[0.4px] text-[#5a4136] sm:text-[22px] lg:space-y-8 lg:text-[28px] lg:leading-[46px] lg:tracking-[0.8px]`}>
          <p>You cannot go back and start six months ago.</p>
          <p>But you can decide what happens from today.</p>
          <p>Because every day you postpone the decision is another day someone else is learning, practising, building and positioning themselves for the opportunities you also want.</p>
          <p>Ten months from now, you could still be saying:</p>
          <p className="font-bold">&quot;I really want to get into AI.&quot;</p>
          <p>Or you could be saying:</p>
        </div>

        <ul className="grid w-full max-w-[1279px] gap-5 lg:gap-6">
          {outcomeStatements.map((statement) => (
            <li key={statement} className={`${exoMedium.className} grid grid-cols-[30px_1fr] items-start gap-3 text-justify text-[18px] font-medium leading-[1.55] tracking-[0.4px] text-[#5a4136] sm:text-[22px] lg:text-[28px] lg:leading-[46px] lg:tracking-[0.8px]`}>
              <BulletPair />
              <span>&quot;{statement}&quot;</span>
            </li>
          ))}
        </ul>

        <div className={`${exoMedium.className} w-full max-w-[1279px] space-y-7 text-justify text-[18px] font-medium leading-[1.75] tracking-[0.4px] text-[#5a4136] sm:text-[22px] lg:space-y-8 lg:text-[28px] lg:leading-[46px] lg:tracking-[0.8px]`}>
          <p>Nobody can promise you exactly what your career or income will look like ten months from today.</p>
          <p>But you can decide what skills, experience and capabilities you will have when those ten months are over.</p>
          <p>So if AI/ML Engineering is genuinely a direction you have been considering, <strong>take action.</strong></p>
          <p>Do not allow another year to pass with this still sitting on your list of things you intend to do.</p>
        </div>
      </div>
    </section>
  );
}

function BulletPair() {
  return (
    <span className="mt-[0.65em] flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-black" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}
