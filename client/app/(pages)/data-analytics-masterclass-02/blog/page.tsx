
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  DollarSign,
  Zap,
  Brain,
  Sparkles,
  Wrench,
  Target,
  FolderCheck,
  MessagesSquare,
  ArrowRight,
} from "lucide-react";
import Navbar from "../Navbar";
import RegistrationModal from "../RegistrationModal";
import WhatYoullLearn from "../WhatYoullLearn";
import { CtaButton } from "../_components/CtaButton";
import { Footer } from "@/components/layout/footer";
import { sora } from "@/app/fonts";
import ScreeningChecklistSection from "../MasterClassCuriculum";

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/ILzKk6IHvKSGEvPqEYshTT?mode=gi_t";

const investReasons = [
  { title: "Drive revenue", icon: TrendingUp },
  { title: "Cut operating costs", icon: DollarSign },
  { title: "Beat competitors who are slower to figure this out", icon: Zap },
];

const nonTechProof = [
  {
    name: "Dr. Gospel Iyioku",
    from: "Agricultural Science",
    now: "Senior Data Analyst & Hiring Executive, McKinsey & Company",
  },
  {
    name: "Muhammad Jamilu",
    from: "Self-taught, zero formal tech background",
    now: "Remote Data Analyst for international companies",
  },
  {
    name: "Oluwapelumi",
    from: "Biochemistry",
    now: "Data Analyst",
  },
];

const careerTransitions = [
  { from: "HR professional", to: "HR Data Analyst" },
  { from: "Nurse", to: "Healthcare Analyst" },
  { from: "Banker", to: "Financial Analyst" },
  { from: "Marketer", to: "Marketing Analyst" },
  { from: "Supply chain professional", to: "Logistics Analyst" },
  { from: "Sales professional", to: "Sales Analyst" },
  { from: "Retail professional", to: "Retail/Merchandising Analyst" },
  { from: "Operations professional", to: "Operations Analyst" },
  { from: "IT professional", to: "Business/Systems Analyst" },
  { from: "Manufacturing professional", to: "Production/Quality Analyst" },
  { from: "Telecom professional", to: "Telecommunications Analyst" },
];
const screeningChecklist = [
  {
    title: "An Analytics Mindset",
    description:
      "Data Analytics starts in the mind, not in the software. Someone who only knows the tools but can't think analytically will stare at a dashboard and see nothing. If your training doesn't build this first, then it builds the wrong thing first.",
    icon: Sparkles, // Replace with your actual icon component import
  },
  {
    title: "AI-Knowledge",
    description:
      "Companies are adopting AI fast. They want analysts who use AI to move faster and decide smarter. Feel free to check Job descriptions and you'd see AI as a notable requirement. If you ignore it, then be ready to get left behind.",
    icon: Sparkles,
  },
  {
    title: "The Traditional Tools",
    description:
      "AI didn't remove the need for skill. You still need to know SQL, Python, Excel, and PowerBI. AI speeds up the work. It doesn't replace the worker who knows how to do it.",
    icon: Sparkles,
  },
  {
    title: "Domain Expertise",
    description:
      "Go check any job board. You'll almost never see \"Data Analyst.\" But you'll see Risk Analyst, Fraud Analyst, Inventory Analyst, Marketing Analyst. That's because companies are getting specific in their demand for solutions. Companies aren't hiring generalists. They're hiring people who understand a specific business problem well enough to solve it with data.",
    icon: Sparkles,
  },
  {
    title: "Real Experience",
    description:
      "Ten certificates on a CV impress nobody in the interview room. What gets you hired is proof you can do the job. That's why you need business-grade projects (not basic kaggle dataset projects), Internships, and real output that can help you talk on a business level during your interviews.",
    icon: Sparkles,
  },
  {
    title: "Soft Skills",
    description:
      "When five candidates have the same technical skill, the one who can communicate, manage stakeholders, and work with a team wins. Every time.",
    icon: Sparkles,
  },
];

const proofQuotes = [
  {
    handle: "@EnochOlorunjuwon",
    quote: "Eye opener — I never knew what hiring managers actually look for.",
  },
  {
    handle: "@dekeraannyon2768",
    quote: "Having domain knowledge makes you get hired quickly.",
  },
  {
    handle: "@ahmaduisreal880",
    quote: "Seriously, you need to be paid for this — it's too much, ma'am!",
  },
];

export default function DataAnalyticsBlogPost() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      <article
        className={`${sora.className} w-full bg-white pt-28 pb-8 md:pt-36`}
      >
        {/* Title block */}
        <header className="container">
          <h1
            className={`${sora.className} uppercase text-2xl font-black leading-[1.15] tracking-tight text-[#121315] md:text-4xl`}
          >
            Data Analytics{" "}
            <span className="relative box-decoration-clone bg-[#F25E25]/10 px-2 text-[#F25E25]">
              Hiring In 2026
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#F8A47E] md:bg-[#F25E25]"
              >
                <span className="absolute -top-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F25E25] md:block" />
              </span>
              <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#F8A47E] md:bg-[#F25E25]"
              >
                <span className="absolute -bottom-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F25E25] md:block" />
              </span>
            </span>{" "}
            Has Changed.
            <br /> Here&apos;s What Nobody Is Telling You.
          </h1>
        </header>

        {/* Intro */}
        <section className="container mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#121315] md:text-[17px]">
          <div className="flex flex-col gap-2">
            <p className="font-bold">You clicked on this for one reason.</p>
            <p className="font-medium">
              Maybe you&apos;ve heard Data Analytics is the new oil industry.
            </p>
            <p className="font-medium">
              Or you&apos;ve heard it can be 3x your current income.
            </p>
            <p className="font-medium">
              Or maybe, just maybe, you&apos;ve heard it&apos;s your ticket into
              tech, without needing a tech degree.
            </p>
            <p className="font-medium">None of that is false.</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">But here&apos;s what nobody tells you:</p>
            <p className="font-medium">
              Only 1% of people who learn Data Analytics ever get to experience
              any of those benefits.
            </p>
            <p className="font-medium">
              Not because they&apos;re not smart enough nor because they
              didn&apos;t take the right DA course.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">It&apos;s because of one thing.</p>
            <p className="font-medium">
              They don&apos;t know how companies actually hire.
            </p>
            <p className="font-medium">
              And that&apos;s the part most online gurus skip.
            </p>
          </div>
        </section>

        {/* The industry has changed */}
        <section
          className="w-full py-14 md:py-20"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #FEF3EC 50%, #FDE8DD 100%)",
          }}
        >
          <div className="container">
            <h2
              className={`${sora.className} text-center text-[26px] font-black leading-[1.2] text-[#121315] md:text-[38px]`}
            >
              The Data Analysis
              <br /> industry{" "}
              <span className="text-[#F67219]">has changed.</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-14 sm:grid-cols-2">
              <div
                className={`${sora.className} flex flex-col gap-3 rounded-2xl border-l-4 border-[#F67219] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]`}
              >
                <p className="text-[15px] font-extrabold text-[#121315] md:text-base">
                  3–5 years ago, hiring was simple.
                </p>
                <p className="text-[15px] leading-relaxed text-[#3F4145]">
                  Learn SQL. Learn Excel. Learn PowerBI. Learn a bit of Python.
                  Get hired as a Data Analyst.
                </p>
                <p className="text-[15px] leading-relaxed text-[#3F4145]">
                  But that route has closed.
                </p>
              </div>

              <div
                className={`${sora.className} flex flex-col gap-3 rounded-2xl border-l-4 border-[#F67219] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]`}
              >
                <p className="text-[15px] font-bold text-[#121315] md:text-base">
                  In 2026, companies aren&apos;t hiring &quot;Data
                  Analysts&quot; anymore.
                </p>
                <p className="text-[15px] leading-relaxed text-[#3F4145]">
                  They&apos;re hiring{" "}
                  <span className="font-bold text-[#121315]">
                    AI-powered Data Analysts
                  </span>{" "}
                  and{" "}
                  <span className="font-bold text-[#121315]">
                    domain experts.
                  </span>
                </p>
                <p className="text-[15px] leading-relaxed text-[#3F4145]">
                  If you miss that shift, you can have every certificate in the
                  world and still hear nothing back from HRs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Money's word for it */}
        <section className="container mt-14">
          <h2
            className={`${sora.className} text-2x text-center font-bold text-[#121315] md:text-[24px]`}
          >
            Don&apos;t take my word for it. Take the{" "}
            <span className="relative box-decoration-clone bg-[#F25E25]/10 px-2 text-[#F25E25]">
              money&apos;s word for it.
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#F8A47E] md:bg-[#F25E25]"
              >
                <span className="absolute -top-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F25E25] md:block" />
              </span>
              <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#F8A47E] md:bg-[#F25E25]"
              >
                <span className="absolute -bottom-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F25E25] md:block" />
              </span>
            </span>
          </h2>

          <p
            className={`${sora.className} text-center mt-4 text-[15px]  text-[#121315] md:text-[13px]`}
          >
            Late 2025, Goldman Sachs published a report on why AI companies may
            invest over $500 billion in 2026.
            <br /> A few months ago, CBS News also reported that Big Tech is
            spending trillions on AI and data infrastructure.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <Image
              src="/assets/images/goldman-sachs-report-citation.png"
              alt="Goldman Sachs: Why AI Companies May Invest More than $500 Billion in 2026"
              width={1440}
              height={574}
              className="h-auto w-full"
            />
          </div>

          <p
            className={`${sora.className} text-center mt-6 text-[15px] font-bold text-[#121315] md:text-[15px]`}
          >
            That&apos;s not hype. That&apos;s capital. And capital doesn&apos;t
            move on guesses.
          </p>

          <h2
            className={`${sora.className} mt-10 text-2xl font-bold text-[#121315] text-center md:text-[26px]`}
          >
            <span className="text-[#F25E25] ">Why are companies pouring</span>{" "}
            this much into data and AI?
          </h2>

          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-[15px] text-center font-semibold text-[#121315] md:text-[17px]">
              Three reasons:
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {investReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className={`${sora.className} flex items-center gap-3 rounded-2xl border-l-4 border-[#F67219] bg-[#f671191e] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]`}
                  >
                    <p className="text-[12px] font-semibold leading-snug text-[#121315]">
                      {reason.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <p
            className={`${sora.className} mt-6 mb-8 text-[15px] leading-relaxed text-[#3F4145] md:text-[14px]`}
          >
            If you can turn raw data into a decision,{" "}
            <span className="font-bold text-[#121315]">
              {" "}
              you&apos;ve just made or saved a company money.
            </span>
            <br /> If you can speed up your process with AI, you
            <span className="font-bold text-[#121315] mb-12">
              {" "}
              become a HOT CAKE.
            </span>
            <br />
          </p>

          <p
            className={`${sora.className} mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[14px]`}
          >
            And That&apos;s the whole game.
            <br /> That&apos;s also why a Data Analyst today can{" "}
            <span className="font-bold text-[#121315]">
              earn up to $8,000 a month
            </span>
            , depending on seniority.
          </p>
        </section>

        {/* The angry part */}
        <section
          className={`${sora.className} container flex flex-col gap-4 mt-14`}
        >
          {/* 1. Updated Headline Text & Styling */}
          <h2
            className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[28px]`}
          >
            Here&apos;s The Part That Should Make You Curious!
          </h2>

          {/* 2. Removed Statistics Box. Replaced with normal text paragraphs. */}
          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            There are over{" "}
            <span className="font-bold text-[#121315]">
              48,000 Data Analytics jobs
            </span>{" "}
            open on job boards right now.
            <br /> {/* Added line break to match design */}
            Right now.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            <span className="relative box-decoration-clone bg-[#F25E25]/10 px-2  ">
              Not because there&apos;s a shortage of people who &quot;know Data
              Analytics.&quot;
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#F8A47E] md:bg-[#F25E25]"
              >
                <span className="absolute -top-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F25E25] md:block" />
              </span>
              <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#F8A47E] md:bg-[#F25E25]"
              >
                <span className="absolute -bottom-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F25E25] md:block" />
              </span>
            </span>
          </p>

          {/* 3. Updated text with bolding */}
          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            It&apos;s because there&apos;s a shortage of people who match{" "}
            <span className="font-semibold text-[#121315]">
              what hiring managers are actually screening for in 2026.
            </span>
          </p>

          {/* 4. Updated text with color */}
          <p className="mt-4 text-[15px] font-semibold text-[#121315] md:text-[17px]">
            <span className="text-[#F67219]">That gap is the opportunity,</span>{" "}
            but most people just don&apos;t know it exists.
          </p>

          {/* 5. Added final paragraph from design */}
          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            Before I tell you what Hiring Managers are checking for in 2026, let
            me take 50secs to address your little fear:
          </p>
        </section>

        {/* No technical background */}
        <section className={`${sora.className} container mt-14`}>
          <h2
            className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}
          >
            &ldquo;But I don&apos;t have a technical background!&rdquo;
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            Instead of trying to convince you into seeing that you can still
            become a Data Analyst without tech background.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            I&apos;ll rather show you people like you.
            <br />
            Meet people who learned AI-powered Data Analytics with Ayonaire
            Academy, coming from backgrounds like Business Management, Sales,
            Agricultural Science, Civil engineering, Education etc
            <br />
            They were scared too. They didn&apos;t think they had the
            &quot;brain&quot; for this.
          </p>

          {/* WhatsApp Screenshot */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-[320px] rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-100 bg-white p-2">
              <img
                src="/assets/images/wt.png"
                alt="WhatsApp chat proof from Kemi"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>

          <p className="mt-8 text-[15px] text-center leading-relaxed text-[#3F4145] md:text-[17px]">
            If they did it, the only real question is whether you&apos;ll let
            fear talk you out of trying.
          </p>
        </section>

        {/* Already employed */}
        <section className={`${sora.className} container mt-14`}>
          <h2
            className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}
          >
            &quot;But I am A non-tech Employee?&quot;
          </h2>
          <p className="mt-4 text-[15px]  text-[#121315] md:text-[17px]">
            Well, that gives you an unfair advantage. It&apos;s called DOMAIN
            EXPERTISE
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            If you're already working, you don't need to start from zero.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            You only need to add Data Analytics skills to what you already know.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed font-bold text-[#3F4145] md:text-[17px]">
            And you can move from
          </p>

          <div className="mt-6 overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <table
              className={`${sora.className} w-full border-collapse text-left`}
            >
              <thead>
                <tr className="border-b-2 border-[#f864323f] bg-[#f8f2f0]">
                  <th
                    className={`${sora.className} border-r border-[#f864325b] px-5 py-4 text-sm font-bold text-[#121315] sm:text-base`}
                  >
                    Current Profession
                  </th>
                  <th
                    className={`${sora.className} px-5 py-4 text-sm font-bold text-[#121315] sm:text-base`}
                  >
                    Career Transition
                  </th>
                </tr>
              </thead>
              <tbody>
                {careerTransitions.map((row) => (
                  <tr
                    key={row.from}
                    className="border-t border-[#f864323b] bg-[#f8f2f0]"
                  >
                    <td className="border-r border-[#f864323f] px-5 py-3.5 text-[13px] text-[#3F4145] sm:text-[15px]">
                      {row.from}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#3F4145] sm:text-[15px]">
                      {row.to}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            Your current job isn&apos;t a detour from Data Analytics. It&apos;s
            transition made EASY!
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            It&apos;s your head start, because every company and industry has
            data that can turn into revenue.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            You already understand the industry. Data Analytics just gives you a
            new language to solve its biggest problems, faster than someone
            starting fresh ever could.
          </p>
        </section>

        <section className="container mt-14">
          <h2
            className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}
          >
            Here&apos;s where it becomes interesting:
          </h2>

          <p
            className={`${sora.className} mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]`}
          >
            Asides looking for an AI-powered Data Analyst, Hiring Managers are
            also looking for Domain Experts.
          </p>

          <p
            className={`${sora.className} mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]`}
          >
            Not just people who know the technical tools but those who also
            understand the specific industry.{" "}
            <span className="font-semibold text-[#121315]">
              That is why you see specific open roles like these:
            </span>
          </p>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-gray-100 bg-white p-3 shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
              <img
                src="/assets/images/tag.png"
                alt="Specific open roles showing domain expert data analyst jobs"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>

          <p
            className={`${sora.className} mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]`}
          >
            These are 1-day old screenshots of actual open roles on job boards.
            <br />
            Companies want analysts who understand a domain deeply and can solve
            their specific problems.
          </p>

          <p
            className={`${sora.className} mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]`}
          >
            You see, your background gives you an edge in understanding an
            industry or domain&apos;s data more than those who have no such
            background and you are the candidate companies want to hire!
          </p>
        </section>

        {/* The real checklist */}
        {/* The real checklist */}

        <ScreeningChecklistSection />

        <section className="container mt-14">
          <h2
            className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}
          >
            Here&apos;s the <span className="text-[#F67219]">truth</span> this
            whole post has been building to.
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            Learning Data Analytics was never the hard part.
          </p>

          <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#121315] md:text-[17px]">
            Positioning yourself the way companies are actually hiring in 2026 —
            that&apos;s the part 99% of people skip.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            That&apos;s the exact gap Ayonaire Academy was built to close.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            It&apos;s not another academy that hands you a certificate and
            wishes you luck.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            Ayonaire has built a system around the six things above, the
            analytics mindset, the AI-knowledge, the tools, the domain
            expertise, the real experience, and the soft skills — so you walk
            into interviews already matching what hiring managers are screening
            for.
          </p>

          <p
            className={`${sora.className} mt-8 text-lg font-bold text-[#121315]`}
          >
            These feedbacks are enough proof:
          </p>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-gray-100 bg-white p-3 shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
              <img
                src="/assets/images/feed.png"
                alt="Student feedback and testimonials for Ayonaire Academy"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </section>

        <section className="container mt-14">
          <p
            className={`${sora.className} text-[15px] font-semibold leading-relaxed text-[#121315] md:text-[17px]`}
          >
            These aren&apos;t actors. These aren&apos;t paid reviews.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            These are real names, real screenshots, from people who once sat
            exactly where you&apos;re sitting right now — unsure, doubting
            themselves, wondering if this was really for someone like them.
          </p>

          <p
            className={`${sora.className} mt-4 text-[15px] font-semibold leading-relaxed text-[#121315] md:text-[17px]`}
          >
            Today, they&apos;re living what you&apos;re still dreaming about.
          </p>

          <h2
            className={`${sora.className} mt-8 text-2xl font-bold text-[#121315] md:text-[32px]`}
          >
            You don&apos;t have to figure this out alone.
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            You see, dreaming about becoming a Data Analyst is the easy part.
            Everyone does that part.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            The people in those screenshots did the harder thing — they stopped
            dreaming and followed a structured roadmap instead.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            You don&apos;t need another 40-part YouTube playlist that leaves you
            more confused than when you started.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            You don&apos;t need another certificate that means nothing to the
            hiring manager reading your CV.
          </p>
        </section>

        <section className="container mt-14">
          <div className="rounded-2xl bg-gradient-to-b from-white via-[#FDEEE5] to-[#FBD9C3] p-6 md:p-10">
            <h2
              className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[24px]`}
            >
              What{" "}
              <span className="rounded-md bg-[#F67219]/15 px-1.5 text-[#F67219]">
                actually gets
              </span>{" "}
              you from beginner to hired is:
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
              A curriculum built around what companies are hiring for in 2026 —
              not what was true three years ago
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
              Tutors who&apos;ve done the job themselves, not just people who
              can explain the theory
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
              A learning environment that pushes you forward, not one where you
              are neglected and abandoned.
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
              Business-grade projects that give you real proof of work — not
              just a course you can talk about
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
              Career support that puts you in front of real interview rooms, not
              just a certificate at the end.
            </p>
          </div>
        </section>

        <section className="container mt-14">
          <p
            className={`${sora.className} text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]`}
          >
            That&apos;s the actual gap between learning Data Analytics and
            becoming employable as a Data Analyst.
          </p>

          <p
            className={`${sora.className} mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]`}
          >
            If you want to see the exact roadmap — the one that moves you from
            beginner to employable — and ask real questions to people
            who&apos;ve already walked it, this is where it starts.
          </p>

          <p
            className={`${sora.className} mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]`}
          >
            Lucky you, you are seeing this at the right time because a Free
            Masterclass is coming up!
          </p>

          <div className="mt-6 flex justify-center">
            <CtaButton size="lg" onClick={() => setModalOpen(true)}>
              Register for free now
            </CtaButton>
          </div>
        </section>
      </article>

      {/* Curriculum recap */}
      <WhatYoullLearn />

      <div className="relative w-full mt-8">
        {/* Watermark logo peeking above the footer */}
        <div className="pointer-events-none absolute left-0 right-0 -top-16 z-0 w-full lg:-top-48">
          <Image
            width={800}
            height={800}
            src="/assets/logos/full-logo-black.png"
            alt=""
            className="w-full h-auto object-contain opacity-5"
          />
        </div>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>

      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
