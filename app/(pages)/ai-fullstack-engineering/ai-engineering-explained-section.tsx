import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

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
      className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, rgba(255,220,196,0.28) 18.376%, rgba(248,100,50,0) 47.172%, #ffffff 66.703%, rgba(255,220,196,0.04) 89.124%, rgba(248,100,50,0.25) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center">
        {/* HEADER */}
        <div className="flex w-full max-w-[1120px] flex-col items-center gap-[46px] text-center">
          <h2
            className={`${melodrama.className} relative max-w-[1003px] text-[30px] font-bold uppercase leading-[1.12] tracking-[-0.95px] text-[#181c23] sm:text-[36px] lg:text-[34px] lg:leading-[1.16] lg:tracking-[-0.6px]`}
          >
            Which one do you think creates the{" "}
            <span className="relative inline-block text-[#f25e25]">
              bigger career opportunity?

              <Image
                src="/assets/images/ai-fullstack-engineering/ai-engineering-explained-highlight.svg"
                alt=""
                width={726}
                height={62}
                className="pointer-events-none absolute left-1/2 top-[2px] h-[62px] w-[726px] max-w-[108%] -translate-x-1/2 select-none object-fill"
              />
            </span>
          </h2>

          <h3
            className={`${melodrama.className} text-[30px] font-bold leading-tight tracking-[0.4px] text-[#181c23] sm:text-[36px] lg:text-[34px] lg:leading-[1.2] lg:tracking-[0.2px]`}
          >
            So what exactly is{" "}
            <span className="text-[#f25e25]">AI Engineering?</span>
          </h3>

          <p
            className={`${exo.className} text-justify text-[17px] font-normal leading-[1.55] tracking-[0.4px] text-[#181c23] lg:text-[20px] lg:leading-[1.65] lg:tracking-[0.2px]`}
          >
            You probably interact with AI Engineering much more often than you
            realise.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-24 w-full">
          {/* DESKTOP CENTER LINE */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              z-0
              hidden
              w-[2px]
              -translate-x-1/2
              bg-[#ff6b00]
              lg:block
            "
          />

          {/* MOBILE LINE */}
          <div
            className="
              absolute
              bottom-0
              left-[7px]
              top-0
              z-0
              w-[2px]
              bg-[#ff6b00]
              lg:hidden
            "
          />

          <div className="flex flex-col gap-12 lg:gap-[54px]">
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
          className={`${exo.className} mt-16 max-w-[1120px] text-justify text-[17px] leading-[1.55] tracking-[0.4px] text-[#181c23] lg:mt-24 lg:text-[20px] lg:leading-[1.65] lg:tracking-[0.2px]`}
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
        w-full
        pl-8

        lg:grid
        lg:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)]
        lg:items-center
        lg:pl-0
      "
    >
      {/* TIMELINE NODE */}
      <div
        className="
          absolute
          left-[0px]
          top-1/2
          z-40
          h-[16px]
          w-[16px]
          -translate-y-1/2
          rounded-full
          border-[3px]
          border-white
          bg-[#ff6b00]
          shadow-[0_0_0_1px_rgba(255,107,0,0.12)]

          lg:left-1/2
          lg:-translate-x-1/2
        "
      />

      {/* CARD */}
      <article
        className={`
          relative
          z-10
          w-full
          max-w-[500px]
          rounded-[24px]
          bg-white
          px-5
          pb-7
          pt-12
          shadow-[0px_2px_10px_rgba(0,0,0,0.10)]

          sm:px-7
          sm:pb-8
          sm:pt-14

          lg:min-h-[250px]
          lg:px-10
          lg:pb-8
          lg:pt-14

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
            -top-[25px]
            left-6
            z-30
            flex
            h-[64px]
            w-[64px]
            rotate-[3deg]
            items-center
            justify-center
            rounded-[4px]
            border
            border-[#ff6b00]
            bg-white
            text-[16px]
            font-bold
            leading-none
            tracking-[0.5px]
            text-black
            shadow-[0_0_6px_rgba(248,100,50,0.18)]

            sm:left-7

            lg:h-[68px]
            lg:w-[68px]
            lg:text-[16px]
          "
        >
          {number}
        </div>

        {/* ICON */}
        <Image
          src="/assets/images/ai-fullstack-engineering/ai-engineering-card-icon.png"
          alt=""
          width={52}
          height={52}
          className="
            mb-4
            h-[48px]
            w-[48px]
            object-contain

            sm:absolute
            sm:left-5
            sm:top-1/2
            sm:mb-0
            sm:h-[52px]
            sm:w-[52px]
            sm:-translate-y-1/2

            lg:left-6
          "
        />

        {/* CONTENT */}
        <div className="sm:pl-[68px] lg:pl-[72px]">
          <h4
            className={`
              ${melodrama.className}
              mb-2
              text-[30px]
              font-bold
              leading-[1.2]
              tracking-[0.4px]
              text-[#181c23]

              lg:text-[34px]
              lg:tracking-[0.5px]
            `}
          >
            {title}
          </h4>

          <p
            className={`
              ${exo.className}
              text-left
              text-[17px]
              font-normal
              leading-[1.55]
              tracking-[0.2px]
              text-[#5a4136]

              lg:text-[20px]
              lg:leading-[28px]
              lg:tracking-[0.25px]
            `}
          >
            {body}
          </p>
        </div>
      </article>
    </div>
  );
}
