"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { exo, exoMedium, melodrama, space } from "@/app/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AppPreviousButton } from "@/components/app-previous-button";
import { AppNextButton } from "@/components/app-next-button";
import Autoplay from "embla-carousel-autoplay";

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
  {
    number: "Project (05)",
    title: "Agentic AI Projects",
    body: "Design a Multi-Agent System for Research Analysis and Generation Automation, culminating your journey into autonomous systems.",
  },
];

export default function ActualBuildSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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

        <div className="w-full">
          <Carousel
            setApi={setApi}
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
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="pl-6 lg:pl-10 basis-auto shrink-0"
                >
                  <article className="relative h-[560px] w-[300px] xs:w-[330px] overflow-hidden rounded-[28px] border-[3px] border-[#4d4c4d] bg-[#020000] p-6 text-white sm:w-[390px] lg:h-[633px] lg:w-[472px] lg:p-8">
                    <Image
                      src="/assets/images/ai-fullstack-engineering/career-framework-card-bg.png"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 472px, (min-width: 640px) 390px, 330px"
                      className="pointer-events-none object-cover opacity-95"
                    />
                    <div className="relative z-10 flex h-full flex-col">
                      <p className={`${exo.className} text-[15px] font-medium uppercase tracking-[0.08em] text-white/60 lg:text-[20px]`}>
                        {project.number}
                      </p>
                      <h3 className={`${exo.className} mt-10 text-[28px] font-semibold uppercase leading-[1.28] tracking-[0.09em] text-[#f25e25] lg:text-[40px]`}>
                        {project.title}
                      </h3>
                      <p className={`${space.className} mt-auto text-[14px] font-normal leading-[1.45] tracking-[0.05em] text-white/80 sm:text-[16px] lg:text-[20px] lg:leading-[1.35]`}>
                        {project.body}
                      </p>
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
                  className="h-full bg-[#f25e25] transition-all duration-300 ease-out rounded-[2px]"
                  style={{
                    width: `${count > 0 ? (current / count) * 100 : 0}%`,
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

        <p className={`${exoMedium.className} max-w-[1035px] text-left text-[18px] font-medium leading-[1.75] tracking-[0.2px] text-[#181c23] sm:text-center sm:text-[22px] lg:text-[28px] lg:leading-[2.2]`}>
          You will build a <strong>Multi-Agent System for Research Analysis and Generation Automation</strong>, where specialised Agents collaborate across a larger workflow. By this point, the question changes from: &quot;What is Agentic AI?&quot; to: <strong>&quot;HOW SHOULD I DESIGN THIS SYSTEM?&quot;</strong>
        </p>
      </div>
    </section>
  );
}
