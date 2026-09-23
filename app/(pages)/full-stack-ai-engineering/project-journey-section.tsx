import Image from "next/image";
import { adineue, exo, exoMedium, melodrama, space } from "@/app/fonts";

const portfolioItems = [
  "Fraud Detection Systems", "Credit Risk Models", "Customer Churn Prediction", "Recommendation Engines", "Forecasting Systems", "Sentiment Analysis", "Document Intelligence", "Text Summarisation", "Question Answering", "Object Detection", "Image Classification", "Computer Vision Defect Detection", "Enterprise Knowledge Assistants", "Private Document Q&A", "Semantic Search", "RAG Systems", "Research Agents", "Tool-Using Agents", "Agentic RAG", "Multi-Agent Workflows", "Production APIs", "Cloud-Deployed AI Applications",
];

export default function ProjectJourneySection() {
  return (
    <section className="bg-[#fefefe] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]">
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

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,683px)] lg:gap-20">
          <ol className="grid gap-4">
            {portfolioItems.map((item, index) => (
              <li key={item} className={`${adineue.className} grid grid-cols-[56px_1fr] items-center gap-5 text-[17px] font-medium leading-[1.35] text-[#263238] sm:text-[18px] lg:text-[22px]`}>
                <span className="flex h-10 w-14 items-center justify-center rounded-[3px] bg-[#ff6b00] text-[15px] font-bold text-black">{String((index % 15) + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <Image src="/assets/images/ai-fullstack-engineering/career-roles-board.png" alt="AI career transition roadmap board" width={683} height={854} className="mx-auto h-auto w-full max-w-[683px] object-contain" sizes="(min-width: 1024px) 683px, 100vw" />
        </div>

        <div className={`${exoMedium.className} space-y-7 text-[18px] font-medium leading-[1.65] tracking-[0.3px] text-[#263238] lg:text-[28px] lg:leading-[1.5]`}>
          <p>And the reason we talk about 45+ projects is not because we want a large number on the sales page.</p>
          <p>The number represents <strong>repetition and practice.</strong></p>
          <p>The more you build, the more often you encounter errors, make technical decisions, debug problems, rethink your approach and gradually become more independent.</p>
          <p className="font-semibold uppercase">Ready to make the transition?</p>
        </div>

        <a href="https://wa.link/f1iadg" target="_blank" rel="noopener noreferrer" className={`${exo.className} mx-auto inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[14px] font-bold uppercase text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[18px]`}>
          Start my AI career transition
          <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4" />
        </a>
      </div>
    </section>
  );
}

