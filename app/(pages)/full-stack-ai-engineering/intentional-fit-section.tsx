import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

const readinessTraits = [
  "right attitude,",
  "commitment, consistency,",
  "Grit,",
  "discipline",
  "and a willingness to do the work.",
];

export default function IntentionalFitSection() {
  return (
    <section className="bg-[#fefefe] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 lg:gap-20">
        <h2
          className={`
            ${melodrama.className}
            relative
            z-10
            text-[24px]
            font-bold
            leading-[1.08]
            tracking-[-0.8px]
            text-[#181c23]
            xs:text-[28px]
            sm:text-[32px]
            lg:text-[36px]
          `}
        >
          <span className="relative inline-block text-[#f25e25]">
            As exciting as all
            <Image
              src="/assets/images/ai-fullstack-engineering/build-proof-heading-highlight.svg"
              alt=""
              width={454}
              height={58}
              className="pointer-events-none absolute left-0 top-1/2 z-[-1] h-[58px] w-full -translate-y-1/2 object-fill"
            />
          </span>{" "}
          of this sounds
        </h2>

        <div className={`${exoMedium.className} space-y-7 text-[16px] font-medium leading-[1.7] tracking-[0.2px] text-[#181c23] lg:text-[20px] lg:leading-[2.1]`}>
          <p>
            Our Full Stack <strong>Career Transition Job Ready AI Engineering</strong> isn&apos;t for everyone.<br />
            And that&apos;s <strong>INTENTIONAL.</strong>
          </p>
          <div className="space-y-4 text-left">
            <p>
              We built this programme for serious-minded people who want to change the trajectory of their lives and destiny, break into tech intentionally and build a real career in AI/ML Engineering.
            </p>
            <p>You do not need to arrive with any prior experience.</p>
          </div>
          <p className="font-bold">But you do need to bring the:</p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,620px)_395px] lg:gap-14 xl:gap-[132px]">
          <ol className="grid gap-5">
            {readinessTraits.map((trait, index) => (
              <li
                key={trait}
                className={`
        ${exoMedium.className}
        grid
        grid-cols-[48px_1fr]
        items-center
        gap-4
        text-[16px]
        font-medium
        leading-[1.35]
        tracking-[0.2px]
        text-[#181c23]

        xs:gap-5
        sm:grid-cols-[56px_1fr]
        sm:text-[26px]

        lg:text-[32px]
      `}
              >
                {/* NUMBER TAG */}
                <svg
                  viewBox="0 0 56 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-12 sm:h-10 sm:w-14 shrink-0"
                  aria-hidden="true"
                >
                  {/* Orange tag */}
                  <path
                    d="M0 0H43L56 20L43 40H0V0Z"
                    fill="#FF6B00"
                  />

                  {/* Number */}
                  <text
                    x="21"
                    y="20"
                    fill="white"
                    fontSize="14"
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="Arial, sans-serif"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </text>
                </svg>

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

        <div className={`${exoMedium.className} space-y-4 text-left text-[14px] font-medium leading-[1.7] tracking-[0.2px] text-[#181c23] sm:text-[18px] lg:text-[24px] lg:leading-[2.1]`}>
          <p>This is not for people looking for shortcuts or another certificate to collect.</p>
          <p>It is for people who are ready to learn, and take their lives and destiny seriously, and take their career transition seriously.</p>
        </div>
      </div>
    </section>
  );
}