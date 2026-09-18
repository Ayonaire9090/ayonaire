import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

const lessons = [
  ["Python for AI & Data", "Learn Python from the ground up and progress into OOP, reusable code, Git, GitHub and the programming foundations needed to build AI applications."],
  ["Data Analysis & Data Engineering", "Work with NumPy, Pandas, SQL, PostgreSQL, Supabase, MongoDB, Streamlit and PySpark to collect, clean, analyse, store and work with the data AI systems depend on."],
  ["Statistics & Machine Learning", "Develop statistical thinking and build regression, classification, clustering, forecasting and advanced Machine Learning models using techniques such as Random Forest, Gradient Boosting and XGBoost."],
  ["Deep Learning", "Learn Neural Networks, RNNs, LSTMs, Attention and Transformers such as BERT and GPT, while building systems that work with text using TF-IDF and Word2Vec."],
  ["Computer Vision", "Learn how AI systems work with images and visual information, including applications such as image classification and object detection."],
  ["Generative AI & LLM Engineering", "Understand how modern Generative AI systems work and learn to build applications around Large Language Models rather than only using tools such as ChatGPT."],
  ["RAG & Vector Databases", "Work with embeddings, semantic search and Vector Databases such as Chroma, Pinecone and FAISS to build RAG applications grounded in external or private knowledge."],
  ["LangChain & LangGraph", "Build LLM applications, workflows and Agentic systems using LangChain and LangGraph, including state management, memory and more structured AI workflows."],
  ["Agentic AI & Multi-Agent Systems", "Build AI Agents that can use tools, work through tasks and interact with other systems, then progress into Multi-Agent architectures."],
  ["Human-in-the-Loop & MCP", "Learn how humans can review, guide or approve AI actions, and understand how MCP can help AI systems connect with external tools, applications and data."],
  ["FastAPI & Production APIs", "Learn how to turn your models and AI applications into APIs that other applications and systems can actually use."],
  ["AI Evaluation & Observability", "Learn how to evaluate Machine Learning, LLM and RAG systems, trace what is happening inside them, identify failures and understand whether the system is actually performing well."],
  ["AI Security, Guardrails & Governance", "Develop awareness around prompt injection, sensitive data, safe tool usage, human oversight, controls and responsible deployment of AI systems."],
  ["Docker, CI/CD & Cloud Deployment", "Containerise applications with Docker, automate deployment workflows with GitHub Actions and deploy AI applications to cloud platforms such as AWS and Microsoft Azure."],
  ["MLOps & LLMOps", "Learn how AI systems move beyond experiments into environments where models and applications need to be tracked, deployed, monitored, maintained and improved."],
  ["Production AI Engineering", "Bring everything together and learn to move from a working prototype toward an AI system that can be deployed, evaluated, monitored and maintained for real users."],
  ["Forward Deployed Engineering", "Learn how to work from the business problem backward, understand what the company needs, adapt the AI solution to its environment and communicate clearly with stakeholders."],
];

export default function WhatYouWillLearnSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]" style={{ backgroundImage: "linear-gradient(119deg, #fff 3%, rgba(255,220,196,0.28) 21%, rgba(255,255,255,0.7) 67%, #ffdcc4 99%)" }}>
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-14 lg:gap-20">
        <div className="text-center">
          <p className={`${melodrama.className} text-[22px] font-bold leading-[1.2] tracking-[0.3px] text-[#181c23] lg:text-[32px]`}>
            The goal is simple:
          </p>
          <h2 className={`${melodrama.className} mt-6 text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}>
            Learn the skill. <span className="text-[#f25e25]">Build the proof.</span> Prepare to compete.
          </h2>
        </div>

        <p className={`${exo.className} text-[22px] font-bold uppercase leading-[1.3] tracking-[0.5px] text-[#181c23] lg:text-[22px]`}>
          What you will learn
        </p>

        <div className="grid gap-x-5 gap-y-10 md:grid-cols-2">
          {lessons.map(([title, body], index) => (
            <article key={title} className="relative rounded-[28px] bg-white px-6 pb-8 pt-14 shadow-[0_1px_6px_rgba(0,0,0,0.12)] lg:min-h-[350px] lg:rounded-[40px] lg:px-9 lg:pb-10 lg:pt-20">
              <span className="absolute left-6 top-[-22px] flex h-[58px] w-[68px] rotate-[3deg] items-center justify-center rounded-[4px] border border-[#ff6b00] bg-white text-[22px] font-bold tracking-[0.8px] text-black shadow-[0_0_6px_rgba(248,100,50,0.25)] lg:size-[100px] lg:text-[48px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Image src="/assets/images/ai-fullstack-engineering/learning-path-icon.png" alt="" width={80} height={80} className="mb-5 size-14 object-cover lg:absolute lg:left-5 lg:top-[112px] lg:size-20" />
              <div className="lg:pl-[118px]">
                <h3 className={`${exo.className} mb-4 text-[15px] font-bold leading-[1.25] tracking-[0.4px] text-[#181c23] lg:text-[20px]`}>
                  {title}
                </h3>
                <p className={`${exoMedium.className} text-[16px] leading-[1.6] tracking-[0.2px] text-black lg:text-[20px] lg:leading-[1.6]`}>
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className={`${exoMedium.className} text-[20px] font-medium leading-[1.5] tracking-[0.3px] text-[#5a4136] lg:text-[32px]`}>
            The journey is designed to move you from:
          </p>
          <p className={`${melodrama.className} mt-6 text-[24px] font-semibold leading-[1.3] text-black lg:text-[32px]`}>
            "I know what these technologies are."
          </p>
          <p className={`${melodrama.className} text-[24px] font-semibold leading-[1.3] text-black lg:text-[32px]`}>
            to:
          </p>
          <p className={`${melodrama.className} text-[24px] font-semibold leading-[1.3] text-[#ff6b00] lg:text-[32px]`}>
            "Here is what I built with them."
          </p>
        </div>
      </div>
    </section>
  );
}
