import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

const proofOutcomes = [
  { number: "01", label: "45+ practical projects" },
  { number: "02", label: "Individual & Group Capstones" },
  { number: "03", label: "GitHub repositories" },
  { number: "06", label: "deployed applications" },
  { number: "07", label: "project documentation" },
  { number: "08", label: "a professional portfolio" },
  { number: "09", label: "Project Presentations & Defence" },
  { number: "10", label: "and Job Simulation Experience." },
];

export default function BuildProofSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 lg:gap-20">
        <div className="relative w-fit max-w-full">
          <h2 className={`${melodrama.className} relative z-10 text-[34px] font-bold uppercase leading-[1.08] tracking-[-0.8px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:tracking-[-1.4px]`}>
            So how do we <span className="text-[#f25e25]">build that proof?</span>
          </h2>
          <Image
            src="/assets/images/ai-fullstack-engineering/build-proof-heading-highlight.svg"
            alt=""
            width={454}
            height={58}
            className="pointer-events-none absolute -bottom-1 right-0 z-0 hidden h-[58px] w-[454px] max-w-[52%] lg:block"
          />
        </div>

        <div className={`${exo.className} flex flex-col gap-8 text-[20px] leading-[1.55] tracking-[0.6px] text-[#181c23] sm:text-[24px] lg:gap-14 lg:text-[28px] lg:leading-[38px] lg:tracking-[1.6px]`}>
          <p className="font-medium">
            Through <strong>hands-on projects, capstones and job simulations</strong> designed to give you practical, work-style exposure.
          </p>
          <p className="font-bold underline decoration-[#181c23] underline-offset-4">
            By the end, you are building toward:
          </p>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,598px)_minmax(420px,575px)] lg:gap-[67px]">
          <ul className="flex flex-col gap-5 sm:gap-6 lg:gap-[27px]">
            {proofOutcomes.map((outcome) => (
              <li key={outcome.number} className={`${exo.className} grid grid-cols-[48px_1fr] items-center gap-4 text-[20px] font-bold leading-[1.3] tracking-[0.3px] text-[#181c23] sm:grid-cols-[56px_1fr] sm:text-[24px] lg:text-[32px] lg:tracking-[0.6px]`}>
                <NumberTag number={outcome.number} />
                <span>{outcome.label}</span>
              </li>
            ))}
          </ul>

          <Image
            src="/assets/images/ai-fullstack-engineering/build-proof-illustration.png"
            alt="AI career proof-building roadmap illustration"
            width={575}
            height={718}
            className="mx-auto h-auto w-full max-w-[575px] object-contain"
            sizes="(min-width: 1024px) 575px, 100vw"
          />
        </div>

        <p className={`${exo.className} text-center text-[20px] font-semibold italic leading-[1.55] tracking-[-0.2px] text-[#181c23] sm:text-[24px] lg:text-[28px] lg:leading-[60px] lg:tracking-[-0.4px]`}>
          And that&apos;s exactly why we&apos;re intentional about the structure of our training...
        </p>
      </div>
    </section>
  );
}

function NumberTag({ number }: { number: string }) {
  return (
    <span className="relative flex h-[34px] w-12 shrink-0 items-center justify-center sm:h-10 sm:w-14">
      <Image
        src="/assets/images/ai-fullstack-engineering/build-proof-number-tag.svg"
        alt=""
        fill
        sizes="56px"
        className="object-fill"
      />
      <span className={`${exo.className} relative z-10 text-[16px] font-bold leading-none tracking-[-0.12px] text-white sm:text-[24px] sm:tracking-[-0.166px]`}>
        {number}
      </span>
    </span>
  );
}
