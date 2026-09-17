import { exo, melodrama } from "@/app/fonts";

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
      <div className="pointer-events-none absolute -left-28 top-1/3 size-64 rounded-full border-[3px] border-[#ff6b00] opacity-70" />
      <div className="pointer-events-none absolute -right-28 bottom-1/4 size-64 rounded-full border-[3px] border-[#ff6b00] opacity-70" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 text-center lg:gap-12">
        <h2 className={`${melodrama.className} text-[36px] font-bold uppercase leading-[1.1] tracking-[-0.8px] sm:text-[44px] lg:text-[56px]`}>
          The <span className="text-[#f25e25]">Bigger Idea</span>
        </h2>

        <div className={`${exo.className} flex max-w-[1187px] flex-col gap-7 text-white`}>
          <p className="text-[20px] font-medium leading-[1.55] tracking-[-0.4px] lg:text-[28px]">
            All of these systems exist for one reason:
          </p>
          <p className="text-[22px] font-bold leading-[1.45] tracking-[-0.4px] underline underline-offset-4 lg:text-[32px]">
            We do not want you to finish learning AI/ML Engineering and then ask, &quot;What do I do now?&quot;
          </p>
          <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.4px] lg:text-[24px]">
            We want you building the skill, proving what you can do, positioning yourself properly, preparing for opportunities and becoming more ready to take your capability to the market.
          </p>
          <p className="text-[22px] font-bold leading-[1.45] tracking-[-0.4px] lg:text-[32px]">
            That&apos;s what makes Our program is more than a course.
          </p>
          <p className="text-left text-[20px] font-medium leading-[1.55] tracking-[-0.4px] lg:text-[28px]">
            It&apos;s a system designed to help you move through the entire career transition:
          </p>
        </div>

        <ul className="grid w-full max-w-[900px] gap-4 text-left lg:gap-5">
          {transitionSteps.map((step) => (
            <li key={step} className={`${exo.className} grid grid-cols-[30px_1fr] items-center gap-4 text-[18px] font-medium uppercase leading-[1.35] tracking-[-0.4px] text-white sm:text-[22px] lg:text-[32px]`}>
              <BulletPair />
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <p className={`${exo.className} mt-4 max-w-[1187px] text-center text-[18px] font-medium italic leading-[1.55] tracking-[-0.4px] lg:text-[28px]`}>
          It&apos;s a system designed to help you move through the entire career transition:
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