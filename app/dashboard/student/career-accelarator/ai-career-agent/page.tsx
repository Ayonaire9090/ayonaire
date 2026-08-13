"use client";

import * as React from "react";
import Image from "next/image";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  CloudLightning,
  FileText,
  GraduationCap,
  Grid2X2,
  LayoutList,
  Link as LinkIcon,
  Mic,
  Moon,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  User,
  Users,
  Video,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Screen = "dashboard" | "topics" | "setup" | "live" | "done";

const orange = "#ff5a2c";

const statCards = [
  { label: "Total Interviews", value: "0", icon: Sparkles },
  { label: "Average Score", value: "0%", icon: Trophy },
  { label: "Topics Practiced", value: "0", icon: BookOpen },
  { label: "Company Rounds", value: "0", icon: Briefcase },
];

const practiceCards = [
  {
    title: "Full-Length AI Interview",
    body: "15-minute personalized mock interview based on your resume and job description, with instant feedback.",
    action: "Start Full Interview",
  },
  {
    title: "Topic-wise Interview",
    body: "Select categories or topics and get trained with focused AI questions and instant coaching.",
    action: "Start Topic Practice",
  },
  {
    title: "Company-Based Interviews",
    body: "Optimize your LinkedIn profile with engaging headlines and about sections.",
    action: "Start",
  },
];

const popularTopics = [
  {
    title: "Machine Learning - Complete Overview",
    body: "Comprehensive coverage of ML fundamentals, algorithms, and practical applications...",
    tag: "Hard",
    time: "15 mins",
  },
  {
    title: "Deep Learning - Complete Overview",
    body: "Comprehensive deep learning from fundamentals to advanced architectures...",
    tag: "Hard",
    time: "15 mins",
  },
  {
    title: "NLP - Complete Overview",
    body: "Comprehensive NLP from text processing to modern language models",
    tag: "Hard",
    time: "15 mins",
  },
  {
    title: "Air India Chatbot Development Interviews",
    body: "This interview focuses on the project development aspects of the Air India RAG chatbot, assessing your understanding of its architecture and implementation.",
    tag: "easy",
    time: "10 mins",
  },
];

const categoryTabs = [
  "AI Engineering",
  "Agentic & Gen AI",
  "AI Automation",
  "Data Analytics",
  "Data Science",
  "Data Engineering",
  "Business Analytics",
  "Product Development",
  "Project Management",
  "Product Design",
  "Cyber Security",
  "DevOP Engineering",
  "Cloud Engineering",
  "Software Engineering",
  "Software Development",
];

const topicCards = [
  "Agentic AI - Complete Overview",
  "AI Agent Fundamentals",
  "LLM-Based Agents",
  "Agent Memory Systems",
  "Agent Planning &...",
  "Tool Use & Function Calling",
  "Agent Evaluation &...",
  "Agent Safety & Alignment",
  "Agentic Workflows &...",
  "Agent Frameworks & Tools...",
  "Multi-Agent Systems",
];

const agenda = [
  {
    title: "Agent Fundamentals",
    body: "Master agent architecture, reasoning, planning, and decision-making mechanisms",
  },
  {
    title: "LLM-Based Agents",
    body: "Build agents with LLMs, implement ReAct, tool use, function calling, and memory systems",
  },
  {
    title: "Multi-Agent Systems",
    body: "Design collaborative multi-agent systems with coordination and communication",
  },
  {
    title: "Safety & Evaluation",
    body: "Ensure agent safety, alignment, implement testing, and evaluation frameworks",
  },
  {
    title: "Production Systems",
    body: "Build agentic workflows, use frameworks, deploy, monitor, and maintain production agents",
  },
];

const liveAgenda = [
  {
    title: "Agent Fundamentals",
    body: "Cover preprocessing, tokenization, embeddings (Word2Vec, GloVe, BERT), and text representation techniques",
  },
  {
    title: "Core NLP Tasks",
    body: "Discuss classification, NER, sentiment analysis, and traditional NLP pipelines with feature engineering",
  },
  {
    title: "Sequence Models",
    body: "Address RNNs, LSTMs, seq2seq with attention for translation, summarization, and generation tasks",
  },
  {
    title: "Transformers & LLM",
    body: "Explore BERT, GPT, fine-tuning strategies, prompt engineering, and leveraging pre-trained models",
  },
  {
    title: "Advanced Applications",
    body: "Cover question answering, dialogue systems, information extraction, and deploying NLP in production",
  },
];

function IconRail() {
  const icons = [
    User,
    User,
    FileText,
    GraduationCap,
    Briefcase,
    LayoutList,
    CloudLightning,
    ShieldCheck,
    Sparkles,
    Users,
    Grid2X2,
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[61px] border-r border-[#d5d5d5] bg-white md:block">
      <div className="flex h-[68px] items-center justify-center border-b border-[#ededed]">
        <Image
          src="/assets/logos/logo-dark.png"
          width={31}
          height={31}
          alt="Ayonaire"
          className="object-contain"
          priority
        />
      </div>
      <div className="flex justify-center border-b border-[#ededed] py-4">
        <Image
          src="/assets/persons/member-ayo.png"
          width={40}
          height={40}
          alt="Profile"
          className="size-10 rounded-full object-cover"
        />
      </div>
      <nav className="flex flex-col items-center gap-6 pt-5 text-[#767676]">
        {icons.slice(1).map((Icon, index) => (
          <button
            key={index}
            type="button"
            className="flex size-6 items-center justify-center"
            aria-label={`Navigation ${index + 1}`}
          >
            <Icon className="size-[18px]" strokeWidth={1.8} />
          </button>
        ))}
      </nav>
    </aside>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <IconRail />
      <main className="min-h-screen md:pl-[61px]">{children}</main>
    </div>
  );
}

function Dashboard({ onTopics, onSetup }: { onTopics: () => void; onSetup: () => void }) {
  return (
    <PageShell>
      <div className="px-5 pb-16 pt-12 md:px-10 lg:px-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[24px] font-semibold leading-tight tracking-normal">
              AI Interview Practice
            </h1>
            <p className="mt-2 text-[15px] leading-6 text-[#595959]">
              Practice with our AI interviewer and get instant feedback
            </p>
          </div>
          <button
            type="button"
            onClick={onSetup}
            className="hidden h-10 items-center gap-2 rounded-[4px] bg-[#ff5a2c] px-4 text-sm font-medium text-white md:flex"
          >
            <Play className="size-4" />
            Start New Interview
          </button>
        </div>

        <section className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((item, index) => (
            <article
              key={item.label}
              className={cn(
                "flex h-[92px] items-center gap-4 rounded-[12px] border border-[#dfe6ef] bg-white px-4",
                index === 0 && "shadow-[0_4px_8px_rgba(15,23,42,0.22)]",
              )}
            >
              <span className="flex size-10 items-center justify-center rounded-[8px] bg-[#fff0eb] text-[#ff5a2c]">
                <item.icon className="size-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-[14px] text-[#6b6b6b]">{item.label}</p>
                <p className="mt-2 text-[17px] font-semibold leading-none">{item.value}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-8 rounded-[8px] bg-[#f4f4f4] p-1.5">
          <div className="grid grid-cols-3 gap-2">
            {["Practice", "Tracks", "History"].map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={cn(
                  "h-11 rounded-[7px] text-sm text-[#777777]",
                  index === 0 && "bg-white text-[#111111]",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <section className="mt-8 grid gap-8 lg:grid-cols-3">
          {practiceCards.map((card, index) => (
            <article
              key={card.title}
              className="min-h-[260px] rounded-[12px] border border-[#eeeeee] bg-white px-8 py-12 shadow-[0_1px_2px_rgba(16,24,40,0.02)] [border-left:4px_solid_#ff5a2c]"
            >
              <div className="flex items-center gap-3">
                <FileText className="size-6 text-[#ff5a2c]" strokeWidth={1.8} />
                <h2 className="text-[18px] font-semibold tracking-normal text-[#111827]">
                  {card.title}
                </h2>
              </div>
              <p className="mt-6 min-h-[62px] max-w-[330px] text-[14px] leading-6 text-[#5e7190]">
                {card.body}
              </p>
              <button
                type="button"
                onClick={index === 1 ? onTopics : onSetup}
                className="mt-8 h-12 w-full rounded-[10px] border border-[#111111] text-[15px] font-semibold"
              >
                {card.action}
              </button>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-[10px] border border-[#e7e7e7] bg-white px-8 py-6">
          <div className="flex items-center gap-3">
            <Trophy className="size-5 text-[#ff5a2c]" />
            <h2 className="text-[24px] font-semibold tracking-normal">
              Popular Interview Topics
            </h2>
          </div>
          <p className="mt-5 text-[15px]">Most practiced topics by our community</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {popularTopics.map((topic) => (
              <button
                key={topic.title}
                type="button"
                onClick={onSetup}
                className="flex min-h-[126px] items-center justify-between rounded-[8px] border border-[#e9e9e9] bg-[#fbfbfb] px-4 text-left"
              >
                <div>
                  <h3 className="text-[16px] font-semibold">{topic.title}</h3>
                  <p className="mt-2 max-w-[500px] text-[13px] leading-5 text-[#808080]">
                    {topic.body}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-[#6c6c6c]">
                    <span
                      className={cn(
                        "rounded-full px-4 py-1",
                        topic.tag === "easy"
                          ? "bg-[#dff6e6] text-[#17a45b]"
                          : "bg-[#fff0eb] text-[#ff5a2c]",
                      )}
                    >
                      {topic.tag}
                    </span>
                    <span>{topic.time}</span>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </button>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function Topics({ onBack, onSetup }: { onBack: () => void; onSetup: () => void }) {
  return (
    <PageShell>
      <div className="flex h-[88px] items-center justify-end px-7">
        <button
          type="button"
          onClick={onBack}
          className="h-10 rounded-[4px] bg-[#ff5a2c] px-4 text-sm font-medium text-white"
        >
          Back to dashboard
        </button>
      </div>
      <section className="bg-[#fff0eb] px-5 py-12 text-center md:px-12">
        <h1 className="text-[28px] font-semibold leading-tight tracking-normal">
          What will you practice today?
        </h1>
        <div className="mx-auto mt-8 flex h-[54px] max-w-[760px] items-center gap-3 rounded-[8px] bg-white px-5 text-[#8a8a8a]">
          <Search className="size-6" strokeWidth={1.7} />
          <span className="text-[15px]">Search for interview topic</span>
        </div>
        <div className="mx-auto mt-7 flex max-w-[1120px] flex-wrap justify-center gap-4">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={cn(
                "h-[44px] min-w-[156px] rounded-[8px] bg-white px-8 py-3 text-[15px] text-[#6e6e6e]",
                tab === "Agentic & Gen AI" && "bg-[#ff5a2c] text-white",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>
      <section className="bg-[#f6f7f9] px-5 py-10 md:px-12 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {topicCards.map((topic) => (
            <article
              key={topic}
              className="min-h-[380px] overflow-hidden rounded-[10px] border border-[#dfe6ef] bg-white"
            >
              <div className="flex h-[108px] items-start justify-between bg-[#fff0eb] px-4 py-4">
                <span className="flex size-10 items-center justify-center rounded-[8px] bg-[#ffdcd1] text-[15px] font-medium text-[#ff5a2c]">
                  {topic[0]}
                </span>
                <span className="rounded-full bg-[#dff6e6] px-2 py-1 text-xs text-[#12a453]">
                  AI Ready
                </span>
              </div>
              <div className="-mt-12 px-4 pt-16">
                <h2 className="text-[16px] font-semibold tracking-normal">{topic}</h2>
                <p className="mt-12 max-w-[240px] text-[14px] leading-5 text-[#777777]">
                  Comprehensive agentic AI from fundamentals to production sys...
                </p>
                <p className="mt-8 text-sm text-[#777777]">15 mins</p>
                <span className="mt-3 inline-flex rounded-full bg-[#fff0eb] px-4 py-1 text-xs text-[#ff5a2c]">
                  Comprehensive
                </span>
                <button
                  type="button"
                  onClick={onSetup}
                  className="mt-8 flex items-center gap-1 text-[14px] text-[#ff5a2c]"
                >
                  Start Interview <ChevronRight className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function IdentityHeader({ topic = "Agentic AI - Complete Overview" }: { topic?: string }) {
  return (
    <div className="border-b border-[#dcdcdc] pb-8">
      <button className="mb-10 flex items-center gap-2 text-[14px] text-[#777777]">
        <ChevronRight className="size-5 rotate-180 text-black" />
        Back to Agentic AI
      </button>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex size-14 items-center justify-center rounded-[8px] bg-[#fff0eb] text-[32px] font-medium text-[#ff5a2c]">
            A
          </span>
          <div>
            <h1 className="text-[17px] font-semibold tracking-normal">{topic}</h1>
            <p className="mt-2 text-[15px]">
              General Practice <span className="ml-2 text-[#777777]">Agentic AI</span>
            </p>
          </div>
        </div>
        <span className="rounded-full bg-[#dff6e6] px-2 py-1 text-xs text-[#12a453]">
          AI Ready
        </span>
      </div>
    </div>
  );
}

function DeviceCard({ onLive }: { onLive: () => void }) {
  return (
    <section className="rounded-[10px] border border-[#ededed] bg-white p-9">
      <div className="mb-12 flex items-center gap-4">
        <Video className="size-6" />
        <h2 className="text-[20px] font-semibold tracking-normal">System Check</h2>
      </div>
      <div className="relative mx-auto h-[252px] max-w-[384px] overflow-hidden bg-[#d5d5d5]">
        <Image
          src="/assets/persons/member-ayo.png"
          alt="Camera preview"
          fill
          className="object-cover"
        />
        <button
          type="button"
          onClick={onLive}
          className="absolute left-5 right-5 top-1/2 h-11 -translate-y-1/2 rounded-[4px] bg-[#ff5a2c] text-white"
        >
          Start Interview
        </button>
      </div>
      <p className="mt-10 rounded-[8px] border-l-2 border-[#ff5a2c] bg-[#fff0eb] px-3 py-3 text-[14px]">
        Microphone denied: Permission denied
      </p>
      {[
        ["Camera", "Grant permission to access cameras"],
        ["Microphone", "Grant permission to access microphones"],
      ].map(([title, body]) => (
        <div
          key={title}
          className="mt-4 flex h-[82px] items-center justify-between rounded-[8px] border border-[#eeeeee] bg-[#fbfbfb] px-5 py-4"
        >
          <div className="flex items-center gap-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5a2c]">
              {title === "Camera" ? <Video className="size-5" /> : <Mic className="size-5" />}
            </span>
            <div>
              <p className="text-[16px] font-semibold">{title}</p>
              <p className="mt-2 text-sm text-[#777777]">{body}</p>
            </div>
          </div>
          <span className="rounded-full bg-[#fff0eb] px-3 py-1 text-xs text-[#ff5a2c]">
            Denied
          </span>
        </div>
      ))}
      <button className="mt-24 h-10 w-full rounded-[4px] bg-[#eeeeee] text-sm text-[#777777]">
        <LinkIcon className="mr-2 inline size-4" />
        Check Devices Again
      </button>
      <button className="mt-8 h-10 w-full rounded-[4px] bg-[#ff5a2c] text-sm text-white">
        Share Feedback
      </button>
    </section>
  );
}

function Guidelines() {
  return (
    <section className="rounded-[10px] border border-[#ededed] bg-white px-6 py-8 md:px-8">
      <div className="flex items-center gap-4">
        <span className="flex size-9 items-center justify-center rounded-[8px] bg-[#fff0eb] text-[#ff5a2c]">
          i
        </span>
        <h2 className="text-[30px] font-semibold leading-tight tracking-normal">Session Guidelines</h2>
      </div>
      <h3 className="mt-10 text-[16px] font-semibold">Overview</h3>
      <p className="mt-6 rounded-[8px] border border-[#e8e8e8] bg-[#fbfbfb] px-5 py-9 text-[15px] text-[#8a8a8a]">
        Comprehensive agentic AI from fundamentals to production systems
      </p>
      <h3 className="mt-8 text-[16px] font-semibold">Interview Agenda</h3>
      <div className="mt-8 space-y-10">
        {agenda.map((item, index) => (
          <div key={item.title} className="flex gap-6">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ff5a2c] text-xs font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <h4 className="text-[16px] font-semibold">{item.title}</h4>
              <p className="mt-3 max-w-[430px] text-sm leading-5 text-[#7d7d7d]">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-10 text-[16px] font-semibold">Before you start</h3>
      <div className="mt-6 space-y-4 text-sm text-[#777777]">
        {["Find a quiet environment", "Check your internet connection", "Have a notepad ready", "Speak clearly into the mic"].map((item, index) => (
          <p key={item}>
            <span className="mr-3 inline-flex size-5 items-center justify-center rounded-full bg-[#f4f4f4] text-xs">
              {index + 1}
            </span>
            {item}
          </p>
        ))}
      </div>
      <div className="mt-8 rounded-[8px] bg-[#fff0eb] px-6 py-5 text-[#ff5a2c]">
        <p className="text-[16px] font-medium">Note:</p>
        <p className="mt-2 max-w-[540px] text-[14px] leading-6">
          Once you start the interview, you cannot pause the timer. Ensure you are fully ready before clicking the start button.
        </p>
      </div>
    </section>
  );
}

function Setup({ onBack, onLive }: { onBack: () => void; onLive: () => void }) {
  return (
    <PageShell>
      <div className="px-5 pb-20 pt-4 md:px-10 lg:px-12">
        <div onClick={onBack}>
          <IdentityHeader />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(420px,560px)_1fr]">
          <DeviceCard onLive={onLive} />
          <Guidelines />
        </div>
      </div>
    </PageShell>
  );
}

function Live({ onBack, onDone }: { onBack: () => void; onDone: () => void }) {
  return (
    <PageShell>
      <div className="px-5 pb-20 pt-4 md:px-10 lg:px-12">
        <div className="border-b border-[#dcdcdc] pb-8">
          <button onClick={onBack} className="mb-10 flex items-center gap-2 text-[14px] text-[#777777]">
            <ChevronRight className="size-5 rotate-180 text-black" />
            Back to Agentic AI
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-[8px] bg-[#fff0eb] text-[32px] font-medium text-[#ff5a2c]">
                A
              </span>
              <div>
                <h1 className="text-[17px] font-semibold">AI Agent Fundamentals</h1>
                <p className="mt-2 text-[15px] text-[#777777]">Natural Language processing</p>
              </div>
            </div>
            <Moon className="size-6" />
          </div>
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[minmax(0,790px)_480px]">
          <section>
            <div className="relative h-[452px] overflow-hidden rounded-[8px] bg-[#d9ddd4]">
              <Image src="/assets/images/ai-lady.png" alt="Interviewer" fill className="object-cover" priority />
              <span className="absolute left-5 top-8 rounded-[9px] bg-black/35 px-4 py-3 text-[15px] font-medium text-white">
                <span className="mr-2 inline-block size-2 rounded-full bg-[#12a453]" />
                Smith john
              </span>
              <div className="absolute inset-x-5 bottom-[112px] h-[70px] rounded-[10px] bg-black/35 px-6 py-5 text-[16px] text-white">
                Starting
              </div>
              <button className="absolute bottom-16 left-1/2 h-10 -translate-x-1/2 rounded-[10px] bg-black/75 px-7 text-[15px] text-white">
                Tap when done
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3">
                <button onClick={onDone} className="h-9 rounded-full bg-white px-5 text-[15px]">
                  <X className="mr-1 inline size-4 text-red-500" />
                  End
                </button>
                <button className="flex size-10 items-center justify-center rounded-full bg-[#ff5a2c] text-white">
                  <Mic className="size-5" />
                </button>
                <span className="rounded-full bg-white px-5 py-2 text-[15px] font-semibold">
                  12:10 <span className="ml-2 inline-block size-2 rounded-full bg-[#12a453]" />
                </span>
              </div>
            </div>
          </section>

          <aside className="rounded-[10px] border border-[#ededed] bg-white px-6 py-6">
            <h2 className="text-[17px] font-semibold">Interview Agenda</h2>
            <div className="mt-9 space-y-14">
              {liveAgenda.map((item, index) => (
                <div key={item.title} className="flex gap-6">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ff5a2c] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-5 text-[#777777]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-6 h-[388px] overflow-hidden rounded-[8px]">
              <Image src="/assets/persons/member-ayo.png" alt="Candidate" fill className="object-cover" />
              <span className="absolute bottom-5 left-4 rounded-[9px] bg-black/70 px-6 py-3 text-[15px] text-white">
                You
              </span>
              <div className="absolute bottom-5 right-4 w-[180px] rounded-[8px] bg-white p-4 shadow-xl">
                {[
                  ["Attention", 76],
                  ["Positivity", 38],
                  ["Confidence", 94],
                  ["Uncomfortable", 11],
                ].map(([label, value]) => (
                  <div key={label as string} className="mb-3 last:mb-0">
                    <p className="mb-1 text-[13px]">{label as string}</p>
                    <div className="h-2 rounded-full bg-[#f0f0f0]">
                      <div className="h-2 rounded-full bg-[#ff5a2c]" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}

function CompleteModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4">
      <div className="w-full max-w-[360px] rounded-[8px] bg-white p-6 text-center">
        <button onClick={onClose} className="ml-auto flex size-6 items-center justify-center">
          <X className="size-4" />
        </button>
        <h2 className="mt-2 text-[18px] font-semibold">Interview time</h2>
        <p className="mt-4 text-sm text-[#777777]">
          Your interview session is complete. Review your report and next practice recommendations.
        </p>
        <button onClick={onClose} className="mt-6 h-10 w-full rounded-[4px] bg-[#ff5a2c] text-sm text-white">
          Show Report
        </button>
      </div>
    </div>
  );
}

export default function StudentAiCareerAgentPage() {
  const [screen, setScreen] = React.useState<Screen>("dashboard");
  const [showComplete, setShowComplete] = React.useState(false);

  return (
    <>
      {screen === "dashboard" && (
        <Dashboard onTopics={() => setScreen("topics")} onSetup={() => setScreen("setup")} />
      )}
      {screen === "topics" && (
        <Topics onBack={() => setScreen("dashboard")} onSetup={() => setScreen("setup")} />
      )}
      {screen === "setup" && (
        <Setup onBack={() => setScreen("dashboard")} onLive={() => setScreen("live")} />
      )}
      {screen === "live" && (
        <Live onBack={() => setScreen("setup")} onDone={() => setShowComplete(true)} />
      )}
      {showComplete && (
        <CompleteModal
          onClose={() => {
            setShowComplete(false);
            setScreen("dashboard");
          }}
        />
      )}
    </>
  );
}
