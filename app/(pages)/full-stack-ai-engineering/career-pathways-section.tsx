"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { adineue, exo, exoMedium, melodrama, salt, space } from "@/app/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AppPreviousButton } from "@/components/app-previous-button";
import { AppNextButton } from "@/components/app-next-button";
import Autoplay from "embla-carousel-autoplay";

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
  const [frameworkApi, setFrameworkApi] = useState<CarouselApi>();
  const [frameworkCurrent, setFrameworkCurrent] = useState(0);
  const [frameworkCount, setFrameworkCount] = useState(0);

  useEffect(() => {
    if (!frameworkApi) {
      return;
    }

    setFrameworkCount(frameworkApi.scrollSnapList().length);
    setFrameworkCurrent(frameworkApi.selectedScrollSnap() + 1);

    frameworkApi.on("select", () => {
      setFrameworkCurrent(frameworkApi.selectedScrollSnap() + 1);
    });
  }, [frameworkApi]);

  return (
    <section className="w-full overflow-hidden bg-[#fefefe]">
      {/* 1. Roles Sub-section */}
      <div className="w-full bg-[#fefefe] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
          <div className="flex flex-col items-center gap-7 text-center lg:gap-10">
            <h2 className={`${melodrama.className} max-w-[960px] text-[24px] xs:text-[28px] font-bold uppercase leading-[1.12] tracking-[-0.8px] text-black sm:text-[40px] lg:text-[56px] lg:leading-[1.2]`}>
              And <span className="text-[#ff6b00]">&quot;AI Engineer&quot;</span> is not the only role you can build toward.
            </h2>
            <p className={`${adineue.className} max-w-[1240px] text-left text-[16px] xs:text-[18px] font-medium leading-[1.6] tracking-[0.3px] text-[#263238] lg:text-[28px] lg:leading-[1.5]`}>
              As you grow, you can choose to specialise in different areas of AI/ML Engineering and build toward roles such as:
            </p>
          </div>

          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] xl:grid-cols-[minmax(0,420px)_minmax(0,683px)] lg:justify-between lg:gap-12 xl:gap-20">
            <ol className="flex flex-col gap-3.5 sm:gap-4 lg:gap-4.5">
              {roles.map((role, index) => (
                <li key={role} className={`${adineue.className} flex items-center gap-4 text-[17px] font-medium leading-[1.35] text-[#263238] sm:text-[18px] lg:text-[22px]`}>
                  <span className="relative flex h-9 w-[52px] shrink-0 items-center justify-center sm:h-10 sm:w-[56px]">
                    <Image
                      src="/assets/images/ai-fullstack-engineering/linkedin-pill.svg"
                      alt=""
                      fill
                      sizes="56px"
                      className="object-fill"
                    />
                    <span className="relative z-10 pr-2 text-[14px] font-bold text-black sm:text-[15px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
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

          <a href="https://wa.link/f1iadg" target="_blank" rel="noopener noreferrer" className={`${exo.className} inline-flex items-center justify-center text-center gap-2 rounded-[8px] bg-[#ff6b00] px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 sm:text-[16px] lg:text-[18px]`}>
            <span className="text-center">Yes! I can see my path in AI</span>
            <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4 shrink-0" />
          </a>
        </div>
      </div>

      {/* 2. Four-Part Career Transition System Sub-section */}
      <div className="w-full bg-[linear-gradient(180deg,#fefefe_0%,rgba(255,220,196,0.45)_120px,rgba(255,220,196,0.45)_calc(100%-120px),#fefefe_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
          {/* Heading */}
          <h2
            className={`${melodrama.className} max-w-[846px] text-center text-[24px] xs:text-[28px] font-bold uppercase leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.13]`}
          >
            The Ayonaire Four-Part Career{" "}
            <span className="text-[#ff6b00]">Transition System</span>
          </h2>

          {/* Timeline */}
          <div className="relative w-full">
            {/* Center line - desktop only */}
            <div
              className="
                absolute
                bottom-0
                left-1/2
                top-0
                z-0
                hidden
                w-[3px]
                -translate-x-1/2
                bg-[#ff6b00]
                lg:block
              "
            />

            {/* Cards */}
            <div className="flex flex-col gap-12 lg:gap-[88px]">
              {systems.map((system, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <article
                    key={system.number}
                    className={`relative flex w-full ${
                      isLeft
                        ? "justify-start lg:pr-[calc(50%+32px)]"
                        : "justify-start lg:justify-end lg:pl-[calc(50%+32px)]"
                    }`}
                  >
                    {/* Timeline dot - desktop only */}
                    <span
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        z-20
                        hidden
                        size-[9px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#ff6b00]
                        lg:block
                      "
                    />

                    {/* Card */}
                    <div
                      className="
                        relative
                        z-10
                        w-full
                        max-w-[560px]
                        rounded-[18px]
                        border
                        border-[#eee6e2]
                        bg-white
                        px-5
                        py-7
                        shadow-[0_3px_10px_rgba(0,0,0,0.10)]
                        sm:px-7
                        sm:py-8
                        lg:w-full
                        lg:max-w-none
                        lg:min-h-[260px]
                        lg:rounded-[20px]
                        lg:px-8
                        lg:py-9
                      "
                    >
                      {/* Number */}
                      <span
                        className={`
                          ${exo.className}
                          absolute
                          -top-6
                          left-5
                          z-30
                          flex
                          h-[52px]
                          w-[50px]
                          rotate-[3deg]
                          items-center
                          justify-center
                          rounded-[3px]
                          border
                          border-[#ff6b00]
                          bg-white
                          text-[20px]
                          font-bold
                          text-[#181c23]
                          shadow-[0_1px_3px_rgba(0,0,0,0.05)]
                          sm:left-6
                        `}
                      >
                        {system.number}
                      </span>

                      {/* Card content */}
                      <div className="flex h-full items-start gap-3.5 xs:gap-5 sm:gap-6 lg:items-center lg:gap-7">
                        {/* Image */}
                        <Image
                          src={system.image}
                          alt=""
                          width={115}
                          height={115}
                          className="size-14 xs:size-16 sm:size-20 shrink-0 object-contain lg:size-[115px]"
                        />

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`${exo.className} text-[17px] xs:text-[20px] sm:text-[26px] font-bold uppercase tracking-[0.04em] xs:tracking-[0.06em] text-black lg:text-[32px]`}
                          >
                            {system.title}
                          </h3>

                          <p
                            className={`${adineue.className} mt-2 xs:mt-3 max-w-[390px] text-[14px] xs:text-[16px] sm:text-[19px] font-medium leading-[1.5] xs:leading-[1.55] tracking-[0.2px] text-black lg:text-[24px]`}
                          >
                            {system.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Bottom description */}
          <p
            className={`${exoMedium.className} max-w-[1120px] text-center text-[18px] font-medium leading-[1.6] tracking-[0.2px] text-[#181c23] lg:text-[28px]`}
          >
            Together, these four systems help you move from learning AI/ML
            Engineering to building proof, positioning yourself properly, finding
            opportunities and preparing to win them.
          </p>
        </div>
      </div>

      {/* 3. Pathways Sub-section */}
      <div className="w-full bg-[linear-gradient(180deg,#fefefe_0%,rgba(242,94,37,0.09)_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
          <div className="flex max-w-[1091px] flex-col items-center gap-8 text-center lg:gap-10">
            <p className={`${exo.className} text-[20px] xs:text-[22px] font-semibold italic tracking-[0.4px] text-[#ff6b00] lg:text-[32px]`}>But here&apos;s something important:</p>
            <h2 className={`${melodrama.className} text-[24px] xs:text-[28px] font-bold uppercase leading-[1.12] tracking-[0.4px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.2]`}>
              Your AI Career Doesn&apos;t Have To Follow Just One Career Path.
            </h2>
            <p className={`${exoMedium.className} text-left text-[16px] xs:text-[18px] font-medium leading-[1.65] tracking-[0.3px] text-[#181c23] lg:text-[28px] lg:leading-[1.6]`}>
              You can earn globally in different ways whether by working with international companies or helping them solve problems as a consultant or agency.
            </p>
          </div>

          <div className="flex w-full flex-col gap-12 lg:gap-20">
            {paths.map((path) => (
              <article key={path.label} className="grid gap-6 lg:grid-cols-[minmax(200px,243px)_minmax(0,1fr)] lg:gap-10">
                <p className={`${salt.className} text-[24px] xs:text-[28px] font-bold uppercase tracking-[0.08em] text-[#f25e25] lg:text-[44px]`}>{path.label}</p>
                <div className="space-y-4 xs:space-y-5 text-[#5a4136] lg:space-y-8">
                  <h3 className={`${adineue.className} text-[22px] xs:text-[26px] font-bold uppercase tracking-[0.06em] lg:text-[40px]`}>{path.title}</h3>
                  <p className={`${adineue.className} text-left text-[16px] xs:text-[18px] font-medium leading-[1.6] tracking-[0.3px] lg:text-[28px] lg:leading-[1.45]`}>{path.body}</p>
                </div>
              </article>
            ))}
          </div>

          <a href="https://wa.link/f1iadg" target="_blank" rel="noopener noreferrer" className={`${exo.className} inline-flex items-center justify-center text-center gap-2 rounded-[8px] bg-[#ff6b00] px-4 py-3.5 text-[12px] xs:text-[14px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 sm:text-[16px] lg:text-[18px]`}>
            <span className="text-center">Wow! I can already see the possibilities</span>
            <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4 shrink-0" />
          </a>
        </div>
      </div>

      {/* 4. Career Transition Framework Carousel Sub-section */}
      <div className="w-full bg-[#fefefe] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:gap-20">
          <div className="flex max-w-[1241px] flex-col items-center gap-6 text-center">
            <h2 className={`${melodrama.className} max-w-[846px] text-[24px] xs:text-[28px] font-bold uppercase leading-[1.12] tracking-[0.2px] text-[#181c23] sm:text-[40px] lg:text-[56px] lg:leading-[1.13]`}>
              The Ayonaire Career <span className="text-[#ff6b00]">Transition</span>{" "}
              <span className="relative inline-block rounded-[8px] bg-[#ffdcc4]/70 px-3 py-0.5 text-[#ff6b00]">
                Framework
              </span>
            </h2>
            <p className={`${exo.className} text-[16px] xs:text-[18px] font-bold leading-[1.6] tracking-[0.2px] text-[#181c23] lg:text-[28px]`}>
              We don&apos;t just teach you AI/ML Engineering. We make you globally competitive and Job Ready..
            </p>
          </div>

          <div className="w-full">
            <Carousel
              setApi={setFrameworkApi}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                  stopOnFocusIn: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6 lg:-ml-10">
                {frameworkCards.map((card) => (
                  <CarouselItem
                    key={card.title}
                    className="pl-6 lg:pl-10 basis-auto shrink-0"
                  >
                    <article className="relative min-h-[460px] xs:min-h-[500px] sm:min-h-[540px] lg:min-h-[600px] w-[260px] xs:w-[300px] sm:w-[390px] lg:w-[472px] overflow-hidden rounded-[24px] xs:rounded-[28px] border-[3px] border-[#4d4c4d] bg-[#020000] p-5 xs:p-6 text-white lg:p-8">
                      <Image
                        src="/assets/images/ai-fullstack-engineering/career-framework-card-bg.png"
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 472px, (min-width: 640px) 390px, 300px"
                        className="pointer-events-none object-cover opacity-95"
                      />
                      <div className="relative z-10 flex h-full flex-col">
                        <p className={`${exo.className} text-[14px] xs:text-[16px] font-medium tracking-[0.08em] text-white/60 lg:text-[20px]`}>({card.number})</p>
                        <h3 className={`${exo.className} mt-8 xs:mt-10 text-[22px] xs:text-[26px] font-semibold uppercase leading-[1.28] tracking-[0.09em] text-[#f25e25] sm:text-[28px] lg:text-[40px]`}>{card.title}</h3>
                        <p className={`${space.className} mt-auto text-[13px] xs:text-[14px] font-normal leading-[1.55] tracking-[0.05em] text-white/80 sm:text-[16px] lg:text-[20px] lg:leading-[1.65]`}>{card.body}</p>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Controls with Progress Bar */}
              <div className="flex justify-center items-center w-full max-w-[80%] mx-auto gap-4 mt-8 lg:mt-10">
                {/* Rounded on mobile */}
                <AppPreviousButton buttonType="rounded" className="lg:hidden" />
                {/* Arrow on desktop */}
                <AppPreviousButton buttonType="default" className="hidden lg:flex" />

                {/* Progress Bar Track */}
                <div className="h-2 w-32 lg:w-48 bg-gray-300 rounded-[2px] overflow-hidden">
                  <div
                    className="h-full bg-[#ff6b00] transition-all duration-300 ease-out rounded-[2px]"
                    style={{
                      width: `${frameworkCount > 0 ? (frameworkCurrent / frameworkCount) * 100 : 0}%`,
                    }}
                  />
                </div>

                {/* Rounded on mobile */}
                <AppNextButton buttonType="rounded" className="lg:hidden" />
                {/* Arrow on desktop */}
                <AppNextButton buttonType="default" className="hidden lg:flex" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}