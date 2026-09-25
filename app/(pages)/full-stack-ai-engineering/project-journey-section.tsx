import Image from "next/image";
import { adineue, exo, exoMedium, melodrama, space } from "@/app/fonts";

const portfolioItems = [
  { code: "01", title: "Fraud Detection Systems" },
  { code: "02", title: "Credit Risk Models" },
  { code: "03", title: "Customer Churn Prediction" },
  { code: "06", title: "Recommendation Engines" },
  { code: "07", title: "Forecasting Systems" },
  { code: "08", title: "Sentiment Analysis" },
  { code: "10", title: "Document Intelligence" },
  { code: "11", title: "Text Summarisation" },
  { code: "12", title: "Question Answering" },
  { code: "13", title: "Object Detection" },
  { code: "14", title: "Image Classification" },
  { code: "15", title: "Computer Vision Defect Detection" },
  { code: "09", title: "Enterprise Knowledge Assistants" },
  { code: "10", title: "Private Document Q&A" },
  { code: "11", title: "Semantic Search" },
  { code: "12", title: "RAG Systems" },
  { code: "13", title: "Research Agents" },
  { code: "14", title: "Tool-Using Agents" },
  { code: "15", title: "Agentic RAG" },
  { code: "16", title: "Multi-Agent Workflows" },
  { code: "17", title: "Production APIs" },
  { code: "18", title: "Cloud-Deployed AI Applications" },
];

export default function ProjectJourneySection() {
  return (
    <section className="bg-[#fefefe] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 lg:gap-20">
        <div className="flex flex-col items-center gap-8 text-center lg:gap-14">
          <h2 className={`${melodrama.className} max-w-[960px] text-[32px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-black sm:text-[40px] lg:text-[56px] lg:leading-[1.25]`}>
            And those are only{" "}
            <span className="relative inline-block text-[#f25e25]">
              <span className="relative z-10">part of your project</span>
              <Image
                src="/assets/images/ai-fullstack-engineering/proof-work-highlight.svg"
                alt=""
                width={562}
                height={52}
                className="pointer-events-none absolute left-1/2 top-1/2 h-6 sm:h-9 md:h-12 lg:h-[108%] w-[106%] -translate-x-1/2 -translate-y-1/2 select-none object-fill"
              />
            </span>{" "}
            <span className="text-[#f25e25]">journey.</span>
          </h2>
          <p className={`${space.className} max-w-[1240px] text-left text-[18px] font-medium leading-[1.65] tracking-[0.3px] text-[#263238] lg:text-[28px] lg:leading-[1.5]`}>
            Across the 10 months, you will work through <strong>45+ practical projects and builds</strong> touching Python, Data Engineering, Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, RAG, Agentic AI, Multi-Agent Systems, Deployment and MLOps/LLMOps.
          </p>
          <p className={`${exo.className} w-full text-left text-[20px] font-bold leading-[1.4] tracking-[0.4px] text-[#263238] lg:text-[32px]`}>Your portfolio would span acrosss:</p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,683px)] lg:gap-12 xl:gap-20">
          <div>
            <ol className="flex flex-col gap-3.5 sm:gap-4">
              {portfolioItems.map((item, index) => (
                <li
                  key={`${item.code}-${item.title}-${index}`}
                  className={`${adineue.className} flex items-center gap-3.5 text-[17px] font-medium leading-[1.35] text-[#263238] sm:gap-4.5 sm:text-[18px] lg:text-[21px]`}
                >
                  <span
                    className="flex h-[26px] w-[46px] shrink-0 items-center justify-center pr-[7px] text-[14px] font-bold text-white shadow-xs select-none"
                    style={{
                      backgroundColor: "#ff5500",
                      clipPath: "polygon(0 0, calc(100% - 9px) 0, 100% 50%, calc(100% - 9px) 100%, 0 100%)",
                    }}
                  >
                    {item.code}
                  </span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ol>
          </div>
          <Image
            src="/assets/images/ai-fullstack-engineering/career-roles-board.png"
            alt="AI career transition roadmap board"
            width={683}
            height={854}
            className="mx-auto h-auto w-full max-w-[683px] object-contain"
            sizes="(min-width: 1024px) 683px, 100vw"
          />
        </div>

        <div className={`${exoMedium.className} space-y-7 text-[18px] font-medium leading-[1.65] tracking-[0.3px] text-[#263238] lg:text-[28px] lg:leading-[1.5]`}>
          <p>And the reason we talk about 45+ projects is not because we want a large number on the sales page.</p>
          <p>The number represents <strong>repetition and practice.</strong></p>
          <p>The more you build, the more often you encounter errors, make technical decisions, debug problems, rethink your approach and gradually become more independent.</p>
          <p className="font-semibold uppercase">Ready to make the transition?</p>
        </div>

        <a
          href="https://chat.whatsapp.com/HltOtTd5VrHJONFYDVb9VT?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className={`${exo.className} mx-auto inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-5 py-3.5 text-center text-[13px] font-bold uppercase text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] xs:px-8 xs:py-4 xs:text-[14px] sm:px-10 sm:py-5 lg:text-[18px]`}
        >
          <span className="text-center">Start my AI career transition</span>
          <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4 shrink-0" />
        </a>
      </div>
    </section>
  );
}

