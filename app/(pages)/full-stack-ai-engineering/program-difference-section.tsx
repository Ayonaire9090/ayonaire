"use client";

import { exo, exoMedium, melodrama } from "@/app/fonts";

const technicalCapability = [
  [
    "Engineering Thinking",
    "Architecture & System",
    "Design Thinking",
    "Software Engineering",
    "Skills",
    "Debugging Mindset",
    "Problem Solving",
    "Skills",
    "Testing & Quality",
    "Assurance",
    "Documentation Culture",
    "Production Mindset",
    "Deployment Thinking",
  ],
  [
    "Reliability Thinking",
    "AI Evaluation &",
    "Monitoring",
    "Security, Guardrails &",
    "Governance Thinking",
    "Real Software",
    "Engineering Practices",
    "API & Systems",
    "Integration Thinking",
    "Data & Model Pipeline",
    "Thinking",
    "Performance &",
    "Scalability Thinking",
  ],
];

const professionalCapability = [
  [
    "Business Problem",
    "Understanding",
    "Requirements gathering",
    "Stakeholder Management",
    "Communication Skills",
    "Technical & Business",
    "Communication",
    "Product Thinking",
    "Teamwork &",
    "Collaboration",
    "Leadership Skills",
  ],
  [
    "Problem-Solving Skills",
    "Critical Thinking",
    "Decision-Making",
    "Presentation Skills",
    "Project Management",
    "Time Management",
    "Ownership &",
    "Accountability",
    "Adaptability &",
    "Continuous Learning",
  ],
];

export default function ProgramDifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFDDD2] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      {/* TOP FADE */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[180px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,248,242,0.8) 35%, rgba(255,240,228,0) 100%)",
        }}
      />

      {/* BOTTOM FADE */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[180px]"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,248,242,0.8) 35%, rgba(255,240,228,0) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col gap-14 lg:gap-20">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-8 text-center lg:gap-10">
          <h2
            className={`
              ${melodrama.className}
              max-w-[960px]
              text-[32px]
              font-bold
              uppercase
              leading-[1.12]
              tracking-[-0.8px]
              text-black

              sm:text-[40px]

              lg:text-[56px]
              lg:leading-[1.34]
            `}
          >
            What makes this{" "}
            <span className="text-[#ff6b00]">program different?</span>
          </h2>

          <p
            className={`
              ${exoMedium.className}
              w-full
              text-left
              text-[18px]
              font-medium
              leading-[1.65]
              tracking-[0.3px]
              text-[#263238]

              lg:text-[28px]
              lg:leading-[1.5]
            `}
          >
            Most programs teach you AI tools. We train you to think and work
            like an <strong>AI/ML Engineer</strong> across{" "}
            <strong>two critical areas:</strong>
          </p>
        </div>

        {/* TECHNICAL CAPABILITY */}
        <CapabilityBlock
          title="01 Technical Engineering Capability"
          columns={technicalCapability}
        />

        {/* PROFESSIONAL CAPABILITY */}
        <CapabilityBlock
          title="02 Professional & Business Capability"
          columns={professionalCapability}
        />
      </div>
    </section>
  );
}

function CapabilityBlock({
  title,
  columns,
}: {
  title: string;
  columns: string[][];
}) {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <h3
        className={`
          ${exo.className}
          text-[16px]
          font-semibold
          uppercase
          leading-[1.25]
          tracking-[-0.4px]
          text-black

          sm:text-[22px]

          lg:text-[28px]
        `}
      >
        {title}
      </h3>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
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
        rounded-[16px]
        bg-white
        px-6
        py-8
        shadow-[0_1px_10px_rgba(0,0,0,0.16)]

        sm:px-10
        sm:py-9

        lg:px-[60px]
        lg:py-10
      "
    >
      <ul className="grid gap-6 lg:gap-7">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className={`
              ${exo.className}
              grid
              grid-cols-[30px_1fr]
              items-start
              gap-4

              text-[18px]
              font-bold
              leading-[1.5]
              tracking-[0.2px]
              text-[#263238]

              sm:text-[20px]
              sm:leading-[1.5]

              lg:text-[22px]
              lg:leading-[1.5]
            `}
          >
            <BulletPair />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function BulletPair() {
  return (
    <span className="mt-[0.65em] flex shrink-0 items-center gap-[2px]">
      <span className="h-2 w-[14px] rounded-[2px] bg-black" />
      <span className="h-2 w-[15px] rounded-[2px] bg-[#f25e25]" />
    </span>
  );
}