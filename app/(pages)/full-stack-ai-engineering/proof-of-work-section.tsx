import Image from "next/image";
import { exo, exoMedium, melodrama, space } from "@/app/fonts";

const proofItems = [
  "Your GitHub.",
  "Your portfolio.",
  "The projects you have built.",
  "The systems you can explain.",
  "The practical experience you have gained.",
];

export default function ProofOfWorkSection() {
  return (
    <section className="bg-[#fdfbf9] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[76px]">
        <div className="flex w-full flex-col items-start gap-11">
          <h2
            className={`${melodrama.className} relative w-full text-center text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
          >
            <span className="block text-[20px] tracking-[-0.2px] lg:text-[24px]">
              &quot;What do you know?&quot;
            </span>
            The real question is:{" "}
            <span className="relative inline-block text-[#f25e25]">
              <span className="relative z-10">&quot;WHAT CAN YOU SHOW?&quot;</span>
              <Image
                src="/assets/images/ai-fullstack-engineering/proof-work-highlight.svg"
                alt=""
                width={562}
                height={52}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[52px] w-[min(562px,108%)] -translate-x-1/2 -translate-y-1/2 select-none object-fill"
              />
            </span>
          </h2>

          <div
            className={`${space.className} w-full space-y-10 text-justify text-[17px] font-medium leading-[1.65] tracking-[0.3px] text-[#5a4136] lg:text-[20px] lg:leading-[1.75] lg:tracking-[0.4px]`}
          >
            <p>
              If you want to compete for AI Engineering roles in the{" "}
              <strong>US, UK, Canada or Europe</strong>, one of the smartest
              things you can bring to the table is{" "}
              <strong>PROOF OF WORK.</strong>
            </p>

            <ul className="space-y-6">
              {proofItems.map((item) => (
                <li key={item} className="flex items-center gap-5">
                  <BulletPair />
                  <span className={`${exoMedium.className}`}>{item}</span>
                </li>
              ))}
            </ul>

            <div className={`${exoMedium} space-y-5`}>
              <p>
                Because knowing Python, ML, AWS, Docker or AI Agents is one
                thing.
              </p>
              <p>Being able to say:</p>
              <p className="italic">&quot;Here is what I built with them.&quot;</p>
              <p>is another.</p>
              <p className={`${exo.className} `}>
                And the interesting part of this is, these skills are learnable.
              </p>
              <p>And the proof of work can be built too.</p>
              <p>THAT&apos;S IT!</p>
              <p>Let&apos;s go back to that job posting for a second.</p>
            </div>
          </div>
        </div>

        <Image
          src="/assets/images/ai-fullstack-engineering/proof-work-board.png"
          alt="AI and machine learning engineer proof-of-work roadmap"
          width={1240}
          height={1544}
          className="h-auto w-full max-w-[1240px] object-cover"
          sizes="(min-width: 1280px) 1240px, 100vw"
        />

        <Image
          src="/assets/images/ai-fullstack-engineering/proof-work-job-post.png"
          alt="Senior Machine Learning Engineer job opening"
          width={1240}
          height={1544}
          className="h-auto w-full max-w-[1240px] object-cover"
          sizes="(min-width: 1280px) 1240px, 100vw"
        />
      </div>
    </section>
  );
}

function BulletPair() {
  return (
    <span className="flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-black" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}
