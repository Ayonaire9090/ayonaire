import Image from "next/image";
import { adineue, exo, exoMedium, melodrama, space } from "@/app/fonts";

const leftSkills = [
  "Python, Machine Learning,",
  "Deep Learning,",
  "NLP, Generative AI,",
];

const rightSkills = ["Agentic AI,", "Cloud, APIs,", "deployment"];

export default function ExperienceProofSection() {
  return (
    <section className="bg-[#fdfbf9] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[76px]">
        <div className="flex w-full flex-col items-start gap-11">
          <h2
            className={`${melodrama.className} relative w-full text-center text-[30px] font-bold leading-[1.12] tracking-[0.4px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16] lg:tracking-[0.2px]`}
          >
            <span className="block text-[20px] lg:text-[24px]">
              It&apos;s equally worthy of note that
            </span>
            this is{" "}
            <span className="relative inline-block text-[#f25e25]">
              NOT a field where you need 10 years
              <Image
                src="/assets/images/ai-fullstack-engineering/experience-proof-highlight.svg"
                alt=""
                width={967}
                height={53}
                className="pointer-events-none absolute left-1/2 top-1/2 h-6 sm:h-9 md:h-11 lg:h-[53px] w-[min(967px,108%)] -translate-x-1/2 -translate-y-1/2 select-none object-fill"
              />
            </span>{" "}
            of experience before you&apos;re taken seriously...
          </h2>

          <p
            className={`${exoMedium.className} text-justify text-[17px] font-medium leading-[1.6] tracking-[0.3px] text-[#5a4136] lg:text-[20px] lg:leading-[1.65] lg:tracking-[0.4px]`}
          >
            Let me show you something.
          </p>
        </div>

        <Image
          src="/assets/images/ai-fullstack-engineering/experience-proof-screenshot.png"
          alt="Senior Machine Learning Engineer job opening"
          width={1240}
          height={1544}
          className="h-auto w-full max-w-[1240px] object-cover"
          sizes="(min-width: 1280px) 1240px, 100vw"
        />

        <div
          className={`${space.className} w-full space-y-5 whitespace-pre-wrap lg:space-y-6 text-justify text-[17px] font-medium leading-[1.65] tracking-[0.3px] text-[#5a4136] lg:text-[20px] lg:leading-[1.65] lg:tracking-[0.4px]`}
        >
          <p>
            This job opening was posted a few weeks ago on LinkedIn, and I want you
            to look at the skills required.
          </p>
          <p className="font-bold italic">
            Now, look closely and notice what&apos;s missing...
          </p>
          <p>
            There&apos;s no PhD requirement here. Or some certificate. And
            they&apos;re not even asking for your years of AI research.
          </p>
          <p className="font-bold">Or did you see n8n or Make?</p>
        </div>

        <div className="flex w-full flex-col items-center gap-10 rounded-[16px] bg-[rgba(248,100,50,0.25)] p-6 sm:p-10 lg:gap-20">
          <p
            className={`${exo.className} w-full text-[17px] font-bold leading-[1.3] tracking-[0.3px] text-[#5a4136] underline lg:text-[20px] lg:leading-[1.45] lg:tracking-[0.4px]`}
          >
            See what they&apos;re actually looking for:
          </p>

          <div className="grid w-full max-w-[1019px] grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20">
            <SkillList skills={leftSkills} />
            <SkillList skills={rightSkills} />
          </div>

          <p
            className={`${adineue.className} text-center text-[17px] leading-[1.35] tracking-[0.3px] text-[#5a4136] lg:text-[20px] lg:leading-[1.45] lg:tracking-[0.4px]`}
          >
            But having the skill is actually not enough. Because the real
            question is not only:
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillList({ skills }: { skills: string[] }) {
  return (
    <ul className={`${exoMedium.className} space-y-6 text-[17px] font-medium leading-[1.4] tracking-[-0.8px] text-[#181c23] lg:text-[20px] lg:leading-[1.65] lg:tracking-[-0.6px]`}>
      {skills.map((skill) => (
        <li key={skill} className="flex items-center gap-6">
          <Image
            src="/assets/images/ai-fullstack-engineering/experience-proof-check.svg"
            alt=""
            width={55}
            height={40}
            className="h-10 w-[55px] shrink-0"
          />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
}
