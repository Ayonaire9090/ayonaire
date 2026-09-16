import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

const acts = [
  {
    title: "Engineering & Data foundations",
    duration: "Duration: 3 Months",
    body: "You begin with Python, Git & GitHub, NumPy, Pandas, SQL, NoSQL, Streamlit, Statistics, EDA and practical projects. The goal is simple: build the foundation everything else depends on.",
    rotate: "lg:-rotate-[2deg]",
  },
  {
    title: "Core Machine Learning Engineering",
    duration: "Duration: 3 Months",
    body: "You move into Feature Engineering, Machine Learning, Regression, Classification, Clustering, XGBoost, Forecasting, NLP, PySpark, FastAPI, MLflow and end-to-end projects. This is where you move from: I can analyse data to: I can build systems that learn from data.",
    rotate: "lg:rotate-[2deg]",
  },
  {
    title: "Modern Production AI & AI Forward Deployed Engineering",
    duration: "Duration: 5 Months",
    body: "You progress into Deep Learning, Computer Vision, Generative AI, RAG, LangChain, Agentic AI, LangGraph, MCP, Multi-Agent Systems, Docker, Cloud, MLOps, LLMOps, Evaluation, Security, Governance and Production Deployment. The goal is to move from: I trained a model to: I can design, build, integrate, evaluate, deploy and maintain an AI system.",
    rotate: "lg:rotate-[3deg]",
  },
];

export default function ProgramActsSection() {
  return (
    <section className="bg-gradient-to-b from-[rgba(255,255,255,0.09)] to-[rgba(242,94,37,0.09)] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
        <div className="relative flex w-full max-w-[846px] flex-col items-center gap-8 text-center lg:gap-12">
          <h2 className={`${melodrama.className} text-[30px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}>
            So, how do we take you{" "}
            <span className="relative inline-block text-[#f25e25]">
              <span className="relative z-10">through this journey?</span>
              <Image src="/assets/images/ai-fullstack-engineering/program-acts-highlight.svg" alt="" width={344} height={68} className="pointer-events-none absolute left-1/2 top-1/2 h-[68px] w-[min(344px,112%)] -translate-x-1/2 -translate-y-1/2 object-fill" />
            </span>
          </h2>

          <div className={`${exo.className} space-y-5 text-[18px] leading-[1.45] tracking-[0.4px] text-[#5a4136] lg:text-[28px]`}>
            <p>Remember the path we just showed you? ... That is exactly how AI Engineering 2.0 is structured.</p>
            <p className="font-bold text-[#121315]">From Foundations To Production - In Three acts.</p>
            <p>The programme is divided into three Acts, with each stage preparing you for the next.</p>
          </div>
        </div>

        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-10">
          {acts.slice(0, 2).map((act) => (
            <ActCard key={act.title} act={act} />
          ))}
        </div>

        <div className="w-full max-w-[760px]">
          <ActCard act={acts[2]} large />
        </div>
      </div>
    </section>
  );
}

function ActCard({ act, large = false }: { act: (typeof acts)[number]; large?: boolean }) {
  return (
    <article className={`${act.rotate} rounded-[24px] border border-[#e8dfdb] bg-white p-6 shadow-[0_8px_20px_rgba(24,28,35,0.12)] lg:rounded-[32px] lg:p-10 ${large ? "lg:px-14" : ""}`}>
      <h3 className={`${exo.className} text-[20px] font-bold leading-[1.35] text-black lg:text-[24px]`}>
        {act.title}
      </h3>
      <p className={`${exo.className} mt-5 text-[18px] font-medium leading-[1.4] text-black lg:text-[20px]`}>
        {act.duration}
      </p>
      <p className={`${exo.className} mt-5 text-[17px] leading-[1.65] text-[#181c23] lg:text-[22px]`}>
        {act.body}
      </p>
    </article>
  );
}
