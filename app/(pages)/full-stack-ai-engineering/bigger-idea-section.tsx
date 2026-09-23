import { exoMedium, melodrama } from "@/app/fonts";

const transitionSteps = [
  "From learning the skill",
  "To practising it",
  "To building real projects",
  "To gaining practical experience",
  "To creating proof of work",
  "To positioning yourself",
  "To preparing for opportunities",
  "To becoming job-ready & work-ready",
  "To competing for global opportunities",
  "To taking your AI/ML skills to the market.",
];

export default function BiggerIdeaSection() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-28 top-1/3 size-64 rounded-full border-[3px] border-[#ff6b00] opacity-70" />

      <div className="pointer-events-none absolute -right-28 bottom-1/4 size-64 rounded-full border-[3px] border-[#ff6b00] opacity-70" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 text-center lg:gap-12">
        
        {/* HEADING */}
        <h2
          className={`${melodrama.className} text-[24px] font-bold uppercase leading-[1.1] tracking-[-0.6px] sm:text-[26px] lg:text-[32px]`}
        >
          The <span className="text-[#f25e25]">Bigger Idea</span>
        </h2>

        {/* INTRO CONTENT */}
        <div
          className={`${exoMedium.className} flex max-w-[1080px] flex-col gap-6 text-white`}
        >
          <p className="text-left text-[17px] font-medium leading-[1.6] tracking-[-0.2px] sm:text-center sm:text-[18px] lg:text-[23px]">
            All of these systems exist for one reason:
          </p>

          <p className="text-left text-[13px] font-bold leading-[1.5] tracking-[-0.2px] underline underline-offset-4 sm:text-center sm:text-[15px] lg:text-[18px]">
            We do not want you to finish learning AI/ML Engineering and then
            ask, &quot;What do I do now?&quot;
          </p>

          <p className="text-left text-[16px] leading-[1.65] tracking-[-0.2px] sm:text-center sm:text-[17px] lg:text-[20px]">
            We want you building the skill, proving what you can do,
            positioning yourself properly, preparing for opportunities and
            becoming more ready to take your capability to the market.
          </p>

          <p className="text-left text-[18px] font-bold leading-[1.45] tracking-[-0.3px] sm:text-center sm:text-[20px] lg:text-[24px]">
            That&apos;s what makes Our program is more than a course.
          </p>

          <p className="text-left text-[16px] font-medium leading-[1.6] tracking-[-0.2px] sm:text-center sm:text-[18px] lg:text-[22px]">
            It&apos;s a system designed to help you move through the entire
            career transition:
          </p>
        </div>

        {/* TRANSITION STEPS */}
        <ul className="grid w-full max-w-[900px] gap-4 text-left lg:gap-5">
          {transitionSteps.map((step) => (
            <li
              key={step}
              className={`${exoMedium.className} grid grid-cols-[30px_1fr] items-center gap-4 text-[13px] font-medium uppercase leading-[1.4] tracking-[-0.2px] text-white sm:text-[15px] lg:text-[18px]`}
            >
              <BulletPair />
              <span>{step}</span>
            </li>
          ))}
        </ul>

        {/* CLOSING TEXT */}
        <p
          className={`${exoMedium.className} mt-4 max-w-[1080px] text-left text-[16px] font-medium italic leading-[1.6] tracking-[-0.2px] sm:text-center sm:text-[18px] lg:text-[22px]`}
        >
          It&apos;s a system designed to help you move through the entire
          career transition:
        </p>
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