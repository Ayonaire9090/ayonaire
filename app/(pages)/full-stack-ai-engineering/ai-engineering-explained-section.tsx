import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

const examples = [
  {
    title: "Machine Learning",
    body: "When your bank predicts whether a customer may default, Netflix predicts what you may watch next, or a business predicts which customers may leave, Machine Learning can be behind...",
  },
  {
    title: "Recommendation Systems",
    body: "When Netflix recommends a movie, Spotify suggests a song or an online store shows products you may like, recommendation systems use Machine Learning to personalise the experience.",
  },
  {
    title: "Fraud & Risk Systems",
    body: "When your bank flags an unusual transaction or identifies suspicious activity, Machine Learning can help detect fraud and assess risk.",
  },
  {
    title: "Deep Learning",
    body: "When your phone recognises speech, an AI system understands complex images or modern language models process huge amounts of information, Deep Learning can sit underneath the system.",
  },
  {
    title: "Computer Vision",
    body: "When your phone recognizes your face, a camera detects an object or a factory system identifies a defective product, you are entering the world of Computer Vision.",
  },
  {
    title: "Natural Language Processing",
    body: "When an app translates a message, summarises a document, analyses customer feedback or classifies an email, Natural Language Processing helps machines work with human language.",
  },
  {
    title: "Generative AI",
    body: "When ChatGPT generates an answer, an AI assistant drafts content or a system creates text, images or other new outputs, you are entering the world of Generative AI.",
  },
  {
    title: "RAG & Enterprise Knowledge Systems",
    body: "Imagine asking questions about thousands of your company's private documents and receiving answers grounded in those documents.",
  },
  {
    title: "Agentic AI",
    body: "Imagine an AI system that does more than answer questions. It can understand a request, retrieve information, use tools, query a database and perform approved actions.",
  },
  {
    title: "Multi-Agent Systems",
    body: "Imagine planning a trip where one AI Agent searches for flights, another compares hotels, another creates the itinerary and another checks the budget.",
  },
  {
    title: "Production AI Engineering",
    body: "When an AI application moves from your laptop to real users, it needs to be deployed, monitored, evaluated and kept reliable as people continue using it. Now you are entering Production AI Engineering.",
  },
  {
    title: "Forward Deployed Engineering",
    body: "When a bank, hospital or large company wants an AI system connected to its private data, internal tools and existing workflows, someone has to make that system work inside the real business environment.",
  },
  {
    title: "AI Engineer",
    body: "When a company wants to build an AI-powered product, automate a workflow, add intelligence to an application or solve a business problem with AI, an AI Engineer helps bring the system together.",
  },
];

export default function AiEngineeringExplainedSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, rgba(255, 220, 196, 0.35) 10%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 58%, rgba(255, 218, 194, 0.5) 82%, rgba(248, 100, 50, 0.32) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center">
        {/* HEADER */}
        <div className="flex w-full max-w-[1120px] flex-col items-center gap-8 text-center sm:gap-10 lg:gap-12">
          <h2
            className={`${melodrama.className} relative max-w-[1003px] text-[22px] xs:text-[26px] font-bold leading-[1.18] tracking-[-0.5px] text-[#181c23] sm:text-[38px] lg:text-[46px] lg:leading-[1.18]`}
          >
            Which one do you think creates the{" "}
            <span className="relative inline-block text-[#f25e25]">
              bigger career opportunity?
              <Image
                src="/assets/images/ai-fullstack-engineering/ai-engineering-explained-highlight.svg"
                alt=""
                width={726}
                height={62}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[108%] -translate-x-1/2 -translate-y-1/2 select-none object-fill"
              />
            </span>
          </h2>

          <h3
            className={`${melodrama.className} text-[20px] xs:text-[24px] font-bold leading-tight tracking-[0.2px] text-[#181c23] sm:text-[34px] lg:text-[40px]`}
          >
            So what exactly is{" "}
            <span className="text-[#f25e25]">AI Engineering?</span>
          </h3>

          <p
            className={`${exoMedium.className} max-w-[980px] text-center text-[17px] font-normal leading-[1.6] tracking-[0.2px] text-[#2d3748] sm:text-[18px] lg:text-[20px]`}
          >
            You probably interact with AI Engineering much more often than you
            realise.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-16 w-full sm:mt-20 lg:mt-24">
          {/* CENTER TIMELINE LINE */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              z-0
              w-px
              -translate-x-1/2
              bg-[#e97048]
            "
          />

          <div className="flex flex-col gap-25 sm:gap-14 lg:gap-16">
            {examples.map((example, index) => (
              <TimelineCard
                key={example.title}
                number={String(index + 1).padStart(2, "0")}
                title={example.title}
                body={example.body}
                side={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <p
          className={`${exoMedium.className} mt-16 max-w-[1120px] text-center text-[17px] leading-[1.6] tracking-[0.2px] text-[#181c23] sm:text-[18px] lg:mt-20 lg:text-[20px]`}
        >
          They work across models, data, APIs, applications, deployment and
          production to turn AI capability into something people can actually
          use.
        </p>
      </div>
    </section>
  );
}

function TimelineCard({
  number,
  title,
  body,
  side,
}: {
  number: string;
  title: string;
  body: string;
  side: "left" | "right";
}) {
  const isLeft = side === "left";

  return (
    <div
      className="
        relative
        flex
        w-full
        justify-center
        lg:grid
        lg:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)]
        lg:items-center
      "
    >
      {/* TIMELINE NODE */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-[2]
          h-[14px]
          w-[14px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-[3px]
          border-white
          bg-[#ff6b00]
          shadow-[0_0_0_1px_rgba(255,107,0,0.12)]
          lg:z-40
          lg:h-[16px]
          lg:w-[16px]
        "
      />

      {/* CARD */}
      <article
        className={`
          relative
          z-10
          w-full
          max-w-[520px]
          rounded-[20px]
          bg-white
          px-4
          pb-6
          pt-9
          shadow-[0px_4px_20px_rgba(0,0,0,0.06)]
          border
          border-black/5
          xs:px-6
          sm:w-[88%]
          sm:px-8
          sm:pb-8
          sm:pt-11
          lg:w-full
          lg:px-9
          lg:pb-8
          lg:pt-11
          ${
            isLeft
              ? "lg:col-start-1 lg:justify-self-end"
              : "lg:col-start-3 lg:justify-self-start"
          }
        `}
      >
        {/* NUMBER BADGE */}
        <div
          className="
            absolute
            -top-[22px]
            left-6
            z-30
            flex
            h-[48px]
            w-[56px]
            rotate-[3deg]
            items-center
            justify-center
            rounded-[8px]
            border-[1.5px]
            border-[#ff6b00]
            bg-white
            text-[18px]
            font-bold
            leading-none
            tracking-[0.2px]
            text-black
            shadow-[0_2px_8px_rgba(248,100,50,0.18)]
            sm:left-8
            sm:h-[52px]
            sm:w-[62px]
            sm:text-[20px]
          "
        >
          {number}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-3 pt-2 sm:pt-1">
          <div className="flex items-center gap-3.5">
            <Image
              src="/assets/images/ai-fullstack-engineering/ai-engineering-card-icon.png"
              alt=""
              width={48}
              height={48}
              className="size-9 shrink-0 object-contain sm:size-11"
            />
            <h4
              className={`
                ${exo.className}
                text-[20px]
                font-bold
                leading-[1.28]
                tracking-[0.2px]
                text-[#181c23]
                sm:text-[22px]
                lg:text-[24px]
              `}
            >
              {title}
            </h4>
          </div>

          <p
            className={`
              ${exoMedium.className}
              text-left
              text-[14px]
              font-normal
              leading-[1.7]
              tracking-[0.1px]
              text-[#3a4454]
              sm:text-[15px]
              lg:text-[16px]
            `}
          >
            {body}
          </p>
        </div>
      </article>
    </div>
  );
}