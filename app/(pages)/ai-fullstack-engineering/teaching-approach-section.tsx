import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[220px] bg-gradient-to-r from-[#1c1c1c] via-[#9d3d00] to-[#ff6b00] [clip-path:polygon(0_0,100%_0,100%_28%,64%_45%,40%_30%,20%_48%,0_78%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        <h2 className={`${melodrama.className} max-w-[960px] text-center text-[36px] font-bold uppercase leading-[1.12] tracking-[-0.8px] sm:text-[44px] lg:text-[56px]`}>
          Our <span className="text-[#f25e25]">Teaching Approach</span>
        </h2>

        <div className="flex w-full flex-col gap-10">
          <p className={`${exo.className} text-[22px] font-bold uppercase tracking-[0.08em] lg:text-[32px]`}>
            Do as I do. Code as I code.
          </p>

          <ul className="grid gap-5 lg:gap-6">
            {steps.map((step) => (
              <li key={step} className={`${exo.className} grid grid-cols-[30px_1fr] items-center gap-4 text-[20px] font-medium leading-[1.45] tracking-[-0.4px] sm:text-[24px] lg:text-[32px]`}>
                <BulletPair />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${exo.className} w-full space-y-8 text-[20px] font-medium leading-[1.55] tracking-[0.5px] sm:text-[24px] lg:text-[32px]`}>
          <p>Our learning cycle is:</p>
          <p className="font-bold uppercase">
            Explain ? Demonstrate ? Code Together ? Practise ? Build ? Present ? Feedback ? Improve
          </p>
        </div>

        <div className={`${exo.className} w-full space-y-6 text-[20px] font-medium leading-[1.55] tracking-[0.5px] sm:text-[24px] lg:text-[32px]`}>
          <p>The goal is not to understand what the instructor is doing.</p>
          <p className="font-bold italic">It&apos;s to become capable of doing it yourself.</p>
        </div>

        <a href="#enroll" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[18px]`}>
          I want hands-on AI engineering training
          <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4" />
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