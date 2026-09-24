"use client";

import { exo, melodrama, satoshi } from "@/app/fonts";

const technicalCapability = [
  [
    "Engineering Thinking",
    "Architecture & System Design Thinking",
    "Software Engineering Skills",
    "Debugging Mindset",
    "Problem Solving Skills",
    "Testing & Quality Assurance",
    "Documentation Culture",
    "Production Mindset",
    "Deployment Thinking",
  ],
  [
    "Reliability Thinking",
    "AI Evaluation & Monitoring",
    "Security, Guardrails & Governance Thinking",
    "Real Software Engineering Practices",
    "API & Systems Integration Thinking",
    "Data & Model Pipeline Thinking",
    "Performance & Scalability Thinking",
  ],
];

const professionalCapability = [
  [
    "Business Problem Understanding",
    "Requirements gathering",
    "Stakeholder Management",
    "Communication Skills",
    "Technical & Business Communication",
    "Product Thinking",
    "Teamwork & Collaboration",
    "Leadership Skills",
  ],
  [
    "Problem-Solving Skills",
    "Critical Thinking",
    "Decision-Making",
    "Presentation Skills",
    "Project Management",
    "Time Management",
    "Ownership & Accountability",
    "Adaptability & Continuous Learning",
  ],
];

export default function ProgramDifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFF9F5_0%,#FFEEDB_32%,#FFE5D4_70%,#FFDAC7_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 sm:gap-12 lg:gap-14">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          <h2
            className={`
              ${melodrama.className}
              max-w-[800px]
              text-[28px]
              font-bold
              leading-[1.18]
              tracking-[-0.5px]
              text-[#181c23]
              sm:text-[38px]
              lg:text-[46px]
              lg:leading-[1.2]
            `}
          >
            What Makes This{" "}
            <span className="text-[#f25e25]">Program Different?</span>
          </h2>

          <p
            className={`
              ${satoshi.className || exo.className}
              w-full
              text-left
              text-[15px]
              font-normal
              leading-[1.6]
              text-[#263238]
              sm:text-[17px]
              lg:text-[19px]
            `}
          >
            Most programs teach you AI tools. We train you to think and work
            like an <strong>AI/ML Engineer</strong> across{" "}
            <strong>two critical areas:</strong>
          </p>
        </div>

        {/* 01 TECHNICAL CAPABILITY */}
        <CapabilityBlock
          number="01"
          title="Technical Engineering Capability"
          columns={technicalCapability}
        />

        {/* 02 PROFESSIONAL CAPABILITY */}
        <CapabilityBlock
          number="02"
          title="Professional & Business Capability"
          columns={professionalCapability}
        />
      </div>
    </section>
  );
}

function CapabilityBlock({
  number,
  title,
  columns,
}: {
  number: string;
  title: string;
  columns: string[][];
}) {
  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <h3
        className={`
          ${exo.className}
          text-[18px]
          font-bold
          leading-[1.3]
          tracking-[-0.3px]
          text-[#181c23]
          sm:text-[22px]
          lg:text-[24px]
        `}
      >
        {number} — {title}
      </h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        {columns.map((items, index) => (
          <CapabilityCard key={`${title}-${index}`} items={items} />
        ))}
      </div>
    </div>
  );
}

function CapabilityCard({ items }: { items: string[] }) {
  return (
    <article
      className="
        flex
        h-full
        flex-col
        rounded-[18px]
        border
        border-white/60
        bg-white
        p-6
        shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]
        sm:p-7
        lg:px-8
        lg:py-8
      "
    >
      <ul className="flex flex-col gap-4 sm:gap-5">
        {items.map((item) => (
          <li
            key={item}
            className={`
              ${exo.className}
              flex
              items-start
              gap-3.5
              text-[15px]
              font-semibold
              leading-[1.4]
              tracking-[0.1px]
              text-[#263238]
              sm:text-[16px]
              lg:text-[17px]
            `}
          >
            <BulletPair />
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function BulletPair() {
  return (
    <span className="mt-[6px] flex shrink-0 items-center gap-[2.5px]">
      <span className="h-[3.5px] w-[10px] sm:w-[12px] rounded-[1.5px] bg-[#181c23]" />
      <span className="h-[3.5px] w-[10px] sm:w-[12px] rounded-[1.5px] bg-[#f25e25]" />
    </span>
  );
}