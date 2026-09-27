import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

const proofStatements = [
  "Here is what I can build.",
  "Here is my GitHub.",
  "Here is my portfolio.",
  "Here is my experience.",
  "Here is the AI/ML role I am positioning for.",
  "Here is my end-to-end Python project.",
  "Here is my end-to-end Data Engineering project.",
  "Here is my end-to-end Machine Learning project.",
  "Here is my end-to-end Deep Learning project.",
  "Here is my end-to-end NLP project.",
  "Here is my end-to-end Computer Vision project.",
  "Here is my end-to-end Generative AI project.",
  "Here is my end-to-end RAG application.",
  "Here is my end-to-end Agentic AI project.",
  "Here is my end-to-end Multi-Agent System.",
  "Here is the API I built for my AI application.",
  "Here is my containerised AI application with a CI/CD pipeline.",
  "Here is my AI application deployed to the cloud.",
  "Here is my project, job-simulation and practical experience.",
  "Here is the architecture, business problem, technical decision and result behind my project.",
];

export default function WhatICanDoSection() {
  return (
    <section className="bg-gradient-to-b from-[#fefefe] via-[#fff1eb] to-[rgba(248,100,50,0)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        <Image
          src="/assets/images/ai-fullstack-engineering/what-i-can-do-question.png"
          alt=""
          width={250}
          height={208}
          className="h-auto w-[150px] sm:w-[190px] lg:w-[250px]"
          sizes="(min-width: 1024px) 250px, 190px"
        />

        <h2 className={`${melodrama.className} text-center text-[26px] xs:text-[30px] font-bold uppercase leading-[1.16] tracking-[-0.8px] text-[#f25e25] sm:text-[44px] lg:text-[56px] lg:tracking-[-1.4px]`}>
          &quot;Here is what I can do.&quot;
        </h2>

        <div className="w-full rounded-[16px] bg-white px-4 py-6 xs:px-5 sm:px-8 sm:py-10 shadow-[0_1px_6px_rgba(0,0,0,0.16)] lg:px-12 lg:py-12 xl:px-16">
          <ul className="grid gap-3.5 xs:gap-4 sm:gap-5 lg:gap-5">
            {proofStatements.map((statement) => (
              <li key={statement} className={`${exoMedium.className} grid grid-cols-[28px_1fr] xs:grid-cols-[30px_1fr] items-start gap-3 xs:gap-4 text-[15px] xs:text-[17px] font-bold leading-[1.55] tracking-[0.2px] text-[#263238] sm:text-[20px] lg:text-[28px] lg:leading-[1.7] lg:tracking-[0.6px]`}>
                <BulletPair />
                <span>{statement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BulletPair() {
  return (
    <span className="mt-[0.7em] flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-black" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}
