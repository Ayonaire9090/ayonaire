import Image from "next/image";
import { adineue, melodrama } from "@/app/fonts";

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
    body: "When ChatGPT generates an answer, an AI assistant drafts content or a system creates text, images or other new outputs, you are entering the world of Generative AI. ...",
  },
  {
    title: "RAG & Enterprise Knowledge Systems",
    body: "Imagine asking questions about thousands of your company's private documents and receiving answers grounded in those documents. ...",
  },
  {
    title: "Agentic AI",
    body: "Imagine an AI system that does more than answer questions. It can understand a request, retrieve information, use tools, query a database and perform approved actions. ...",
  },
  {
    title: "Multi-Agent Systems",
    body: "Imagine planning a trip where one AI Agent searches for flights, another compares hotels, another creates the itinerary and another checks the budget. ...",
  },
  {
    title: "Production AI Engineering",
    body: "When an AI application moves from your laptop to real users, it needs to be deployed, monitored, evaluated and kept reliable as people continue using it. Now you are entering Production AI Engineering.",
  },
  {
    title: "Forward Deployed Engineering",
    body: "When a bank, hospital or large company wants an AI system connected to its private data, internal tools and existing workflows, someone has to make that system...",
  },
  {
    title: "AI Engineer",
    body: "When a company wants to build an AI-powered product, automate a workflow, add intelligence to an application or solve a business problem with AI, an AI Engineer helps bring the system together. ....",
  },
];

export default function AiEngineeringExplainedSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-8 lg:py-[120px]"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, rgba(255,220,196,0.28) 18.376%, rgba(248,100,50,0) 47.172%, #ffffff 66.703%, rgba(255,220,196,0.04) 89.124%, rgba(248,100,50,0.25) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center">
        <div className="flex w-full max-w-[1035px] flex-col items-center gap-[46px] text-center">
          <h2
            className={`${melodrama.className} relative max-w-[1003px] text-[34px] font-bold uppercase leading-[1.12] tracking-[-0.95px] text-[#181c23] sm:text-[46px] lg:text-[56px] lg:leading-[60.48px] lg:tracking-[-1.4px]`}
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
            className={`${melodrama.className} text-[32px] font-bold leading-tight tracking-[0.4px] text-[#181c23] sm:text-[40px] lg:text-[48px] lg:leading-[70px] lg:tracking-[0.6px]`}
          >
            So what exactly is{" "}
            <span className="text-[#f25e25]">AI Engineering?</span>
          </h3>

          <p
            className={`${adineue.className} text-justify text-[22px] font-normal leading-[1.55] tracking-[0.4px] text-[#181c23] lg:text-[28px] lg:leading-[40px] lg:tracking-[0.6px]`}
          >
            You probably interact with AI Engineering much more often than you
            realise.
          </p>
        </div>

        <div className="relative mt-20 w-full">
          <div className="absolute left-1/2 top-0 hidden h-[calc(100%-260px)] w-px -translate-x-1/2 lg:block">
            {Array.from({ length: 13 }).map((_, index) => (
              <Image
                key={index}
                src="/assets/images/ai-fullstack-engineering/ai-engineering-timeline-line.svg"
                alt=""
                width={16}
                height={383}
                className="absolute left-1/2 h-[383px] w-4 -translate-x-1/2"
                style={{ top: `${index * 380}px` }}
              />
            ))}
          </div>

          <div className="flex flex-col gap-10 lg:gap-10">
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

        <p
          className={`${adineue.className} mt-16 max-w-[1035px] text-justify text-[22px] leading-[1.55] tracking-[0.4px] text-[#181c23] lg:mt-20 lg:text-[28px] lg:leading-[40px] lg:tracking-[0.6px]`}
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
  const alignment =
    side === "left" ? "lg:self-start lg:mr-auto" : "lg:self-end lg:ml-auto";

  return (
    <article
      className={`relative w-full max-w-[610px] rounded-[40px] bg-white px-6 pb-8 pt-16 shadow-[0px_1px_6px_rgba(0,0,0,0.12)] sm:px-8 lg:min-h-[350px] lg:px-20 lg:pb-9 lg:pt-20 ${alignment}`}
    >
      <div className="absolute -top-[50px] left-11 flex size-[100px] rotate-[3.26deg] items-center justify-center rounded border border-[#ff6b00] bg-white text-[48px] font-bold tracking-[1.6px] text-black shadow-[0px_0px_6px_0px_rgba(248,100,50,0.25)]">
        {number}
      </div>

      <Image
        src="/assets/images/ai-fullstack-engineering/ai-engineering-card-icon.png"
        alt=""
        width={80}
        height={80}
        className="absolute left-5 top-1/2 hidden size-20 -translate-y-1/2 object-cover sm:block"
      />

      <div className="sm:pl-[104px]">
        <h4 className="mb-5 text-[22px] font-bold uppercase leading-tight tracking-[1.2px] text-[#181c23] lg:text-[28px] lg:tracking-[1.76px]">
          {title}
        </h4>
        <p
          className={`${adineue.className} text-justify text-[20px] leading-[1.5] tracking-[0.45px] text-[#5a4136] lg:text-[24px] lg:leading-[36px] lg:tracking-[0.68px]`}
        >
          {body}
        </p>
      </div>
    </article>
  );
}
