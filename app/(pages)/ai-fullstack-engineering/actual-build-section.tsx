import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

const projects = [
  {
    number: "Project (01)",
    title: "Python & Data Engineering",
    body: "You will build an End-to-End Review Scraper Project, where you collect, process and structure data using Python. You will also develop a Supabase and Streamlit Database Application, helping you understand how data, databases and applications begin coming together.",
  },
  {
    number: "Project (02)",
    title: "Machine Learning",
    body: "You will build a Network Intrusion Detection System, applying Machine Learning to a cybersecurity problem where the objective is to identify suspicious network behaviour and distinguish potentially harmful activity from normal traffic.",
  },
  {
    number: "Project (03)",
    title: "Deep Learning",
    body: "You will develop Deep Learning applications focused on Text Summarisation, Machine Translation and Question Answering, helping you move from understanding neural networks conceptually into applying them to real language problems.",
  },
  {
    number: "Project (04)",
    title: "Generative AI & LLM Engineering",
    body: "Understand how modern Generative AI systems work and learn to build applications around Large Language Models rather than only using tools such as ChatGPT.",
  },
];

export default function ActualBuildSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(150deg,#ffffff_3%,rgba(255,220,196,0.28)_21%,rgba(255,255,255,0.7)_67%,#ffdcc4_99%)] px-5 py-16 sm:px-8 lg:px-12 xl:px-16 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
        <div className="max-w-[1035px] text-center">
          <h2 className={`${melodrama.className} text-[32px] font-bold uppercase leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.25]`}>
            Now let&apos;s talk about <span className="text-[#f25e25]">what you will actually build.</span>
          </h2>
          <p className={`${exoMedium.className} mt-5 text-[18px] font-medium leading-[1.5] text-[#181c23] sm:text-[22px] lg:text-[28px]`}>
            You&apos;ll build projects across different industries:
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-4">
          <div className="flex min-w-max gap-6 lg:gap-10">
            {projects.map((project) => (
              <article key={project.title} className="relative h-[560px] w-[330px] shrink-0 overflow-hidden rounded-[28px] border-[3px] border-[#4d4c4d] bg-[#020000] p-6 text-white sm:w-[390px] lg:h-[633px] lg:w-[472px] lg:p-8">
                <Image src="/assets/images/ai-fullstack-engineering/career-framework-card-bg.png" alt="" fill sizes="472px" className="pointer-events-none object-cover opacity-95" />
                <div className="relative z-10 flex h-full flex-col">
                  <p className={`${exo.className} text-[15px] font-medium uppercase tracking-[0.08em] text-white/60 lg:text-[20px]`}>{project.number}</p>
                  <h3 className={`${exo.className} mt-10 text-[28px] font-semibold uppercase leading-[1.28] tracking-[0.09em] text-[#f25e25] lg:text-[40px]`}>{project.title}</h3>
                  <p className={`${exoMedium.className} mt-auto text-[17px] leading-[1.45] tracking-[0.05em] text-white/80 lg:text-[24px] lg:leading-[1.35]`}>{project.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className={`${exoMedium.className} max-w-[1035px] text-center text-[18px] font-medium leading-[1.75] tracking-[0.2px] text-[#181c23] sm:text-[22px] lg:text-[28px] lg:leading-[2.2]`}>
          You will build a <strong>Multi-Agent System for Research Analysis and Generation Automation</strong>, where specialised Agents collaborate across a larger workflow. By this point, the question changes from: &quot;What is Agentic AI?&quot; to: <strong>&quot;HOW SHOULD I DESIGN THIS SYSTEM?&quot;</strong>
        </p>
      </div>
    </section>
  );
}
