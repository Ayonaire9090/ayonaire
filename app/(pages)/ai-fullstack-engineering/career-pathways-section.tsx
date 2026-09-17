import Image from "next/image";
import { exo, melodrama } from "@/app/fonts";

const roles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Generative AI Engineer",
  "Agentic AI Engineer",
  "LLM Engineer",
  "Deep Learning Engineer",
  "NLP Engineer",
  "Computer Vision Engineer",
  "MLOps Engineer",
  "Forward Deployed Engineer",
  "Applied AI Engineer",
  "AI Product Engineer",
];

const systems = [
  {
    number: "01",
    title: "Portfolio",
    body: "45+ projects, Job Simulation, capstones, GitHub and portfolio development.",
    image: "/assets/images/ai-fullstack-engineering/career-system-portfolio.png",
  },
  {
    number: "02",
    title: "Positioning",
    body: "Resume, LinkedIn, GitHub and experience repositioning for AI/ML opportunities.",
    image: "/assets/images/ai-fullstack-engineering/career-system-positioning.png",
  },
  {
    number: "03",
    title: "Job Search",
    body: "Career opportunity and discovery, application tracking and job assistance.",
    image: "/assets/images/ai-fullstack-engineering/career-system-portfolio.png",
  },
  {
    number: "04",
    title: "Interview & Offer",
    body: "Mock interviews, technical assessments, Project Defence and interview preparation.",
    image: "/assets/images/ai-fullstack-engineering/career-system-positioning.png",
  },
];

const paths = [
  {
    label: "Path 01",
    title: "Global Employment",
    body: "You can work remotely from Nigeria for companies in the US, UK, Canada, Europe and other international markets. The goal is to become globally competitive enough to compete for AI/ML opportunities beyond your local market.",
  },
  {
    label: "Path 02",
    title: "Build Your Own AI Agency",
    body: "Instead of only working for international companies, you can also work with them as clients by building an AI Agency or consulting business that helps organisations solve problems with AI.",
  },
];

const frameworkCards = [
  {
    number: "01",
    title: "Learn",
    body: "Build strong foundations in Python, Data, Machine Learning, Deep Learning, Generative AI, RAG, Agentic AI and Production AI Engineering.",
  },
  {
    number: "02",
    title: "Practise",
    body: "Apply what you learn through assignments, coding exercises, technical challenges, presentations and problem-solving tasks.",
  },
  {
    number: "03",
    title: "Build & Gain Experience",
    body: "Work on industry-based projects, Job Simulations and team projects across Banking, Healthcare, FMCG, Telecom, Real Estate, Logistics, Sales, Marketing, HR and Supply Chain.",
  },
  {
    number: "04",
    title: "Build Your Proof Of Work",
    body: "Create GitHub repositories, deployed applications, project documentation, capstones and a professional portfolio that show what you can do.",
  },
];

export default function CareerPathwaysSection() {
  return (
    <section className="overflow-hidden bg-[#fefefe] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-16 lg:gap-24">
        <div className="flex w-full flex-col items-center gap-12 lg:gap-20">
          <div className="flex flex-col items-center gap-7 text-center lg:gap-10">
            <h2 className={`${melodrama.className} max-w-[960px] text-[32px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-black sm:text-[40px] lg:text-[56px] lg:leading-[1.2]`}>
              And <span className="text-[#ff6b00]">&quot;AI Engineer&quot;</span> is not the only role you can build toward.
            </h2>
            <p className={`${exo.className} max-w-[1240px] text-left text-[18px] font-medium leading-[1.65] tracking-[0.3px] text-[#263238] lg:text-[28px] lg:leading-[1.5]`}>
              As you grow, you can choose to specialise in different areas of AI/ML Engineering and build toward roles such as:
            </p>
          </div>

          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,420px)_minmax(420px,683px)] lg:justify-between lg:gap-20">
            <ol className="grid gap-4">
              {roles.map((role, index) => (
                <li key={role} className={`${exo.className} grid grid-cols-[56px_1fr] items-center gap-5 text-[17px] font-medium leading-[1.35] text-[#263238] sm:text-[18px] lg:text-[22px]`}>
                  <span className="flex h-10 w-14 items-center justify-center rounded-[3px] bg-[#ff6b00] text-[15px] font-bold text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{role}</span>
                </li>
              ))}
            </ol>
            <Image
              src="/assets/images/ai-fullstack-engineering/career-roles-board.png"
              alt="AI career roles and career path board"
              width={683}
              height={854}
              className="mx-auto h-auto w-full max-w-[683px] object-contain"
              sizes="(min-width: 1024px) 683px, 100vw"
            />
          </div>

          <a href="#enroll" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[18px]`}>
            Yes! I can see my path in AI
            <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4" />
          </a>
        </div>

        <div className="w-screen bg-gradient-to-b from-white to-[rgba(248,100,50,0.08)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
            <h2 className={`${melodrama.className} max-w-[846px] text-center text-[32px] font-bold uppercase leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.13]`}>
              The Ayonaire Four-Part Career <span className="text-[#ff6b00]">Transition System</span>
            </h2>

            <div className="grid w-full gap-8 md:grid-cols-2">
              {systems.map((system) => (
                <article key={system.number} className="relative min-h-[300px] rounded-[14px] bg-white p-6 shadow-[0_1px_16px_rgba(0,0,0,0.12)] sm:p-8 lg:min-h-[360px] lg:p-10">
                  <span className={`${exo.className} absolute -top-6 left-8 flex size-20 rotate-[3deg] items-center justify-center rounded-[8px] border border-[#ff6b00] bg-white text-[34px] font-bold text-black shadow-[0_0_6px_rgba(248,100,50,0.25)] lg:size-[100px] lg:text-[48px]`}>
                    {system.number}
                  </span>
                  <div className="flex h-full flex-col justify-center gap-6 pl-0 pt-12 sm:pl-28 sm:pt-0">
                    <Image src={system.image} alt="" width={115} height={115} className="size-20 object-contain lg:size-[115px]" />
                    <div className="space-y-4">
                      <h3 className={`${exo.className} text-[24px] font-bold uppercase tracking-[0.06em] text-black lg:text-[32px]`}>{system.title}</h3>
                      <p className={`${exo.className} max-w-[390px] text-[17px] font-medium leading-[1.55] tracking-[0.2px] text-black lg:text-[24px]`}>{system.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className={`${exo.className} max-w-[1120px] text-center text-[18px] font-medium leading-[1.6] tracking-[0.2px] text-[#181c23] lg:text-[28px]`}>
              Together, these four systems help you move from learning AI/ML Engineering to building proof, positioning yourself properly, finding opportunities and preparing to win them.
            </p>
          </div>
        </div>

        <div className="w-screen bg-gradient-to-b from-white to-[rgba(242,94,37,0.09)] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-[120px] xl:px-16">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
            <div className="flex max-w-[1091px] flex-col items-center gap-8 text-center lg:gap-10">
              <p className={`${exo.className} text-[22px] font-semibold italic tracking-[0.4px] text-[#ff6b00] lg:text-[32px]`}>But here&apos;s something important:</p>
              <h2 className={`${melodrama.className} text-[32px] font-bold uppercase leading-[1.12] tracking-[0.4px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.2]`}>
                Your AI Career Doesn&apos;t Have To Follow Just One Career Path.
              </h2>
              <p className={`${exo.className} text-justify text-[18px] font-medium leading-[1.65] tracking-[0.3px] text-[#181c23] lg:text-[28px] lg:leading-[1.6]`}>
                You can earn globally in different ways whether by working with international companies or helping them solve problems as a consultant or agency.
              </p>
            </div>

            <div className="flex w-full flex-col gap-12 lg:gap-20">
              {paths.map((path) => (
                <article key={path.label} className="grid gap-6 lg:grid-cols-[243px_1fr] lg:gap-11">
                  <p className={`${exo.className} text-[28px] font-bold uppercase tracking-[0.08em] text-[#f25e25] lg:text-[44px]`}>{path.label}</p>
                  <div className="space-y-5 text-[#5a4136] lg:space-y-8">
                    <h3 className={`${exo.className} text-[26px] font-bold uppercase tracking-[0.06em] lg:text-[40px]`}>{path.title}</h3>
                    <p className={`${exo.className} text-justify text-[18px] font-medium leading-[1.65] tracking-[0.3px] lg:text-[28px] lg:leading-[1.45]`}>{path.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <a href="#enroll" className={`${exo.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[18px]`}>
              Wow! I can already see the possibilities
              <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-12 lg:gap-20">
          <div className="flex max-w-[1241px] flex-col items-center gap-6 text-center">
            <h2 className={`${melodrama.className} max-w-[846px] text-[32px] font-bold uppercase leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.13]`}>
              The Ayonaire Career <span className="text-[#ff6b00]">Transition Framework</span>
            </h2>
            <p className={`${exo.className} text-[18px] font-bold leading-[1.6] tracking-[0.2px] text-[#181c23] lg:text-[28px]`}>
              We don&apos;t just teach you AI/ML Engineering. We make you globally competitive and Job Ready.
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-4">
            <div className="flex min-w-max gap-6 lg:gap-10">
              {frameworkCards.map((card) => (
                <article key={card.title} className="relative h-[560px] w-[330px] shrink-0 overflow-hidden rounded-[28px] border-[3px] border-[#4d4c4d] bg-[#020000] p-6 text-white sm:w-[390px] lg:h-[633px] lg:w-[472px] lg:p-8">
                  <Image src="/assets/images/ai-fullstack-engineering/career-framework-card-bg.png" alt="" fill sizes="472px" className="pointer-events-none object-cover opacity-95" />
                  <div className="relative z-10 flex h-full flex-col">
                    <p className={`${exo.className} text-[16px] font-medium tracking-[0.08em] text-white/60 lg:text-[20px]`}>({card.number})</p>
                    <h3 className={`${exo.className} mt-10 text-[28px] font-semibold uppercase leading-[1.28] tracking-[0.09em] text-[#f25e25] lg:text-[40px]`}>{card.title}</h3>
                    <p className={`${exo.className} mt-auto text-[17px] font-medium leading-[1.55] tracking-[0.05em] text-white/80 lg:text-[24px] lg:leading-[1.65]`}>{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}