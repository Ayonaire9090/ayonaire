import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

const readinessTraits = [
  "right attitude,",
  "commitment, consistency,",
  "Grit,",
  "discipline",
  "and a willingness to do the work.",
];

export default function IntentionalFitSection() {
  return (
    <section className="bg-[#fefefe] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 lg:gap-20">
        <div className="relative max-w-[655px]">
          <h2 className={`${melodrama.className} text-[40px] font-bold leading-[1.08] tracking-[-0.8px] text-[#181c23] sm:text-[48px] lg:text-[56px]`}>
            <span className="text-[#f25e25]">As exciting as all</span> of this sounds
          </h2>
          <span className="pointer-events-none absolute -left-1 top-0 h-[58px] w-[min(384px,70%)] border-2 border-[#f25e25]/45" />
        </div>

        <div className={`${exo.className} space-y-9 text-[18px] font-medium leading-[1.7] tracking-[0.2px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[2.1]`}>
          <p>
            Our Full Stack <strong>Career Transition Job Ready AI Engineering</strong> isn&apos;t for everyone.<br />
            And that&apos;s <strong>INTENTIONAL.</strong>
          </p>
          <div className="space-y-5 text-justify">
            <p><strong>And that&apos;s INTENTIONAL.</strong></p>
            <p>
              We built this programme for serious-minded people who want to change the trajectory of their lives and destiny, break into tech intentionally and build a real career in AI/ML Engineering.
            </p>
            <p>You do not need to arrive with any prior experience.</p>
          </div>
          <p className="font-bold">But you do need to bring the:</p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,620px)_395px] lg:gap-[132px]">
          <ol className="grid gap-5">
            {readinessTraits.map((trait, index) => (
              <li key={trait} className={`${exo.className} grid grid-cols-[56px_1fr] items-center gap-5 text-[22px] font-medium leading-[1.35] tracking-[0.2px] text-[#181c23] sm:text-[26px] lg:text-[32px]`}>
                <span className="flex h-10 w-14 items-center justify-center rounded-[3px] bg-[#ff6b00] text-[18px] font-bold text-white lg:text-[24px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{trait}</span>
              </li>
            ))}
          </ol>

          <Image
            src="/assets/images/ai-fullstack-engineering/career-roles-board.png"
            alt="AI career path board showing role discovery and practice steps"
            width={395}
            height={494}
            className="mx-auto h-auto w-full max-w-[395px] object-contain"
            sizes="(min-width: 1024px) 395px, 100vw"
          />
        </div>

        <div className={`${exo.className} space-y-4 text-justify text-[18px] font-medium leading-[1.7] tracking-[0.2px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[2.1]`}>
          <p>This is not for people looking for shortcuts or another certificate to collect.</p>
          <p>It is for people who are ready to learn, and take their lives and destiny seriously, and take their career transition seriously.</p>
        </div>
      </div>
    </section>
  );
}