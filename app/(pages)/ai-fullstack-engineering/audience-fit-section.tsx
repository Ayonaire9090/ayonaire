import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

const audienceCards = [
  {
    title: "Complete Beginner",
    body: "You can join because the programme starts from foundational programming before progressing into more technical topics.",
  },
  {
    title: "Career Switcher",
    body: "You can use the programme as a structured transition instead of trying to piece together your career roadmap from dozens of disconnected courses.",
  },
  {
    title: "Working Professional",
    body: "You can build AI Engineering capability alongside the industry knowledge you already possess.",
  },
  {
    title: "Students and Recent Graduate",
    body: "You can use the programme to begin developing practical projects, GitHub evidence, professional exposure and a clearer career identity before entering the market.",
  },
  {
    title: "Data Analyst",
    body: "You can move beyond explaining what happened in historical data toward predictive systems, Machine Learning and AI Engineering.",
  },
  {
    title: "Data Scientist",
    body: "You can move beyond modelling into APIs, deployment, MLOps and broader production engineering.",
  },
  {
    title: "Software Developer",
    body: "You can add Machine Learning, LLMs, RAG and Agentic AI to your existing engineering capability.",
  },
  {
    title: "Data Engineer",
    body: "You can move deeper into ML pipelines, AI infrastructure and production AI.",
  },
  {
    title: "Automation Professional",
    body: "If you already know platforms such as n8n, Make or Zapier, you can move beyond prebuilt workflows toward Python, APIs, Agents and custom intelligent systems.",
  },
  {
    title: "Business Professional",
    body: "You can combine an understanding of your industry with technical AI capability.",
  },
  {
    title: "Entrepreneur and Future Founder",
    body: "You can develop enough technical depth to build, lead or better understand AI-powered products and services.",
  },
];

export default function AudienceFitSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#fff_0%,rgba(255,220,196,0.28)_18%,rgba(248,100,50,0)_47%,#fff_67%,rgba(255,220,196,0.04)_89%,rgba(248,100,50,0.25)_100%)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <Image
            src="/assets/images/ai-fullstack-engineering/question-card-skills.png"
            alt=""
            width={96}
            height={96}
            className="size-20 object-contain lg:size-[112px]"
          />
          <h2 className={`${melodrama.className} max-w-[1003px] text-[32px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.08]`}>
            And this is <span className="text-[#f25e25]">certainly for you</span> if you are a:
          </h2>
        </div>

        <div className="relative w-full">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#ff6b00]/35 lg:left-1/2 lg:block" />
          <div className="grid gap-8 lg:gap-10">
            {audienceCards.map((card, index) => (
              <article
                key={card.title}
                className={`relative grid lg:grid-cols-2 ${index % 2 === 0 ? "lg:pr-[calc(50%+40px)]" : "lg:pl-[calc(50%+40px)]"}`}
              >
                <span className={`absolute top-1/2 hidden size-3 -translate-y-1/2 rounded-full bg-[#ff6b00] lg:block ${index % 2 === 0 ? "left-[calc(50%-6px)]" : "left-[calc(50%-6px)]"}`} />
                <div className="rounded-[24px] bg-white p-6 shadow-[0_1px_12px_rgba(0,0,0,0.12)] sm:p-8 lg:min-h-[240px] lg:rounded-[40px] lg:p-10">
                  <div className="grid gap-5 sm:grid-cols-[80px_1fr] sm:items-center">
                    <Image
                      src="/assets/images/ai-fullstack-engineering/career-system-portfolio.png"
                      alt=""
                      width={80}
                      height={80}
                      className="size-16 object-contain lg:size-20"
                    />
                    <div className="space-y-3">
                      <h3 className={`${exo.className} text-[20px] font-bold tracking-[0.5px] text-[#181c23] lg:text-[28px]`}>
                        {card.title}
                      </h3>
                      <p className={`${exo.className} text-[16px] font-normal leading-[1.55] tracking-[0.2px] text-[#5a4136] sm:text-[18px] lg:text-[24px] lg:leading-[1.5]`}>
                        {card.body}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={`${exo.className} max-w-[1035px] space-y-8 text-justify text-[18px] font-normal leading-[1.65] tracking-[0.3px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[1.45]`}>
          <p>
            And if you are returning to work after a career break, that does not disqualify you either. The bigger requirement is simple:
          </p>
          <p className="text-center font-bold">You only need to be willing to keep learning.</p>
          <p className="text-center text-[28px] font-bold lg:text-[48px]">As promised</p>
          <p>
            <strong>We&apos;ll be giving you the exact systems, and career support to actually</strong> move from learning AI to actually <strong>become Job Ready &amp; Globally Employable.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}