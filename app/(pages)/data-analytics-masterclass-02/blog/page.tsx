'use client';

import { useState } from 'react';
import Image from 'next/image';
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
} from 'lucide-react';
import Navbar from '../Navbar';
import RegistrationModal from '../RegistrationModal';
import WhatYoullLearn from '../WhatYoullLearn';
import { CtaButton } from '../_components/CtaButton';
import { Footer } from '@/components/layout/footer';
import { sora } from '@/app/fonts';

const WHATSAPP_LINK = 'https://chat.whatsapp.com/ILzKk6IHvKSGEvPqEYshTT?mode=gi_t';

const investReasons = [
  { title: 'Drive revenue', icon: TrendingUp },
  { title: 'Cut operating costs', icon: DollarSign },
  { title: 'Beat competitors who are slower to figure this out', icon: Zap },
];

const nonTechProof = [
  {
    name: 'Dr. Gospel Iyioku',
    from: 'Agricultural Science',
    now: 'Senior Data Analyst & Hiring Executive, McKinsey & Company',
  },
  {
    name: 'Muhammad Jamilu',
    from: 'Self-taught, zero formal tech background',
    now: 'Remote Data Analyst for international companies',
  },
  {
    name: 'Oluwapelumi',
    from: 'Biochemistry',
    now: 'Data Analyst',
  },
];

const careerTransitions = [
  { from: 'HR professional', to: 'HR Data Analyst' },
  { from: 'Nurse', to: 'Healthcare Analyst' },
  { from: 'Banker', to: 'Financial Analyst' },
  { from: 'Marketer', to: 'Marketing Analyst' },
  { from: 'Supply chain professional', to: 'Logistics Analyst' },
];

const screeningChecklist = [
  {
    title: 'An Analytics Mindset',
    description:
      "Data Analytics starts in the mind, not in the software. Someone who only knows the tools but can't think analytically will stare at a dashboard and see nothing. If your training doesn't build this first, then it builds the wrong thing first.",
    icon: Brain,
  },
  {
    title: 'AI-Knowledge',
    description:
      "Companies are adopting AI fast. They want analysts who use AI to move faster and decide smarter. Check job descriptions and you'll see AI as a notable requirement. If you ignore it, be ready to get left behind.",
    icon: Sparkles,
  },
  {
    title: 'The Traditional Tools',
    description:
      "AI didn't remove the need for skill. You still need to know SQL, Python, Excel, and PowerBI. AI speeds up the work. It doesn't replace the worker who knows how to do it.",
    icon: Wrench,
  },
  {
    title: 'Domain Expertise',
    description:
      'Go check any job board. You\'ll almost never see "Data Analyst." You\'ll see Risk Analyst, Fraud Analyst, Inventory Analyst, Marketing Analyst. Companies aren\'t hiring generalists — they\'re hiring people who understand a specific business problem well enough to solve it with data.',
    icon: Target,
  },
  {
    title: 'Real Experience',
    description:
      'Ten certificates on a CV impress nobody in the interview room. What gets you hired is proof you can do the job — business-grade projects (not basic Kaggle datasets), internships, and real output you can talk through on a business level.',
    icon: FolderCheck,
  },
  {
    title: 'Soft Skills',
    description:
      'When five candidates have the same technical skill, the one who can communicate, manage stakeholders, and work with a team wins. Every time.',
    icon: MessagesSquare,
  },
];

const proofQuotes = [
  { handle: '@EnochOlorunjuwon', quote: 'Eye opener — I never knew what hiring managers actually look for.' },
  { handle: '@dekeraannyon2768', quote: 'Having domain knowledge makes you get hired quickly.' },
  { handle: '@ahmaduisreal880', quote: "Seriously, you need to be paid for this — it's too much, ma'am!" },
];

export default function DataAnalyticsBlogPost() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      <article className="w-full bg-white pt-28 pb-8 md:pt-36">
        {/* Title block */}
        <header className="container max-w-3xl">
          <h1
            className={`${sora.className} uppercase text-[28px] font-black leading-[1.15] tracking-tight text-[#121315] md:text-[48px]`}
          >
            Data Analytics <span className="text-[#F67219]">Hiring In 2026</span> Has Changed. Here&apos;s
            What Nobody Is Telling You.
          </h1>
        </header>

        {/* Intro */}
        <section className="container max-w-3xl mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#121315] md:text-[17px]">
          <div className="flex flex-col gap-2">
            <p className="font-bold">You clicked on this for one reason.</p>
            <p className="font-medium">Maybe you&apos;ve heard Data Analytics is the new oil industry.</p>
            <p className="font-medium">Or you&apos;ve heard it can be 3x your current income.</p>
            <p className="font-medium">
              Or maybe, just maybe, you&apos;ve heard it&apos;s your ticket into tech, without needing a
              tech degree.
            </p>
            <p className="font-medium">None of that is false.</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">But here&apos;s what nobody tells you:</p>
            <p className="font-medium">
              Only 1% of people who learn Data Analytics ever get to experience any of those benefits.
            </p>
            <p className="font-medium">
              Not because they&apos;re not smart enough nor because they didn&apos;t take the right DA
              course.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">It&apos;s because of one thing.</p>
            <p className="font-medium">They don&apos;t know how companies actually hire.</p>
            <p className="font-medium">And that&apos;s the part most online gurus skip.</p>
          </div>
        </section>

        {/* The industry has changed */}
        <section
          className="w-full py-14 md:py-20"
          style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FEF3EC 50%, #FDE8DD 100%)' }}
        >
          <div className="container max-w-4xl">
            <h2
              className={`${sora.className} text-center text-[26px] font-black leading-[1.2] text-[#121315] md:text-[38px]`}
            >
              The Data Analysis industry <span className="text-[#F67219]">has changed.</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-2xl border-l-4 border-[#F67219] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <p className="text-[15px] font-bold text-[#121315] md:text-base">
                  3–5 years ago, hiring was simple.
                </p>
                <p className="text-[15px] leading-relaxed text-[#3F4145]">
                  Learn SQL. Learn Excel. Learn PowerBI. Learn a bit of Python. Get hired as a Data Analyst.
                </p>
                <p className="text-[15px] leading-relaxed text-[#3F4145]">But that route has closed.</p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border-l-4 border-[#F67219] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <p className="text-[15px] font-bold text-[#121315] md:text-base">
                  In 2026, companies aren&apos;t hiring &quot;Data Analysts&quot; anymore.
                </p>
                <p className="text-[15px] leading-relaxed text-[#3F4145]">
                  They&apos;re hiring <span className="font-bold text-[#121315]">AI-powered Data Analysts</span> and{' '}
                  <span className="font-bold text-[#121315]">domain experts.</span>
                </p>
                <p className="text-[15px] leading-relaxed text-[#3F4145]">
                  If you miss that shift, you can have every certificate in the world and still hear nothing
                  back from HRs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Money's word for it */}
        <section className="container max-w-3xl mt-14">
          <h2 className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}>
            Don&apos;t take my word for it. <span className="text-[#F67219]">Take the money&apos;s word for it.</span>
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#121315] md:text-[17px]">
            Late 2025, Goldman Sachs published a report on why AI companies may invest over $500 billion in
            2026. A few months ago, CBS News also reported that Big Tech is spending trillions on AI and
            data infrastructure.
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

          <p className="mt-6 text-[15px] font-bold text-[#121315] md:text-[17px]">
            That&apos;s not hype. That&apos;s capital. And capital doesn&apos;t move on guesses.
          </p>

          <h2 className={`${sora.className} mt-10 text-2xl font-bold text-[#121315] md:text-[32px]`}>
            <span className="text-[#F67219]">Why are companies pouring</span> this much into data and AI?
          </h2>

          <p className="mt-4 text-[15px] font-semibold text-[#121315] md:text-[17px]">Three reasons:</p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {investReasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F67219]/10">
                    <Icon size={18} strokeWidth={2} className="text-[#F67219]" />
                  </span>
                  <p className="text-[15px] font-semibold leading-snug text-[#121315]">{reason.title}</p>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            If you can turn raw data into a decision, you&apos;ve just made or saved a company money. If you
            can speed up your process with AI, you become a hot cake. That&apos;s the whole game — and it&apos;s
            also why a Data Analyst today can earn up to{' '}
            <span className="font-bold text-[#121315]">$8,000 a month</span>, depending on seniority.
          </p>
        </section>

        {/* The angry part */}
        <section className="container max-w-3xl mt-14">
          <h2 className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}>
            Here&apos;s The Part That Should <span className="text-[#F67219]">Make You Angry.</span>
          </h2>

          <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl bg-[#FFF5F1] p-8 text-center">
            <p className="text-4xl font-black text-[#F67219] md:text-6xl">40,000+</p>
            <p className={`${sora.className} text-sm font-semibold text-[#121315] md:text-base`}>
              Data Analytics jobs open on job boards right now
            </p>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            And companies still can&apos;t fill them. Not because there&apos;s a shortage of people who
            &quot;know Data Analytics.&quot; It&apos;s because there&apos;s a shortage of people who match
            what hiring managers are actually screening for in 2026.
          </p>
          <p className="mt-4 text-[15px] font-semibold text-[#121315] md:text-[17px]">
            That gap is the opportunity. Most people just don&apos;t know it exists.
          </p>
        </section>

        {/* No technical background */}
        <section className="container max-w-3xl mt-14">
          <h2 className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}>
            &quot;I Don&apos;t Have A Technical Background.&quot;{' '}
            <span className="text-[#F67219]">Good. Neither Did They.</span>
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            Meet people who learned AI-powered Data Analytics with Ayonaire Academy — coming from backgrounds
            like Agricultural Science, Biochemistry, and more. They were scared too. They didn&apos;t think
            they had the &quot;brain&quot; for this.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {nonTechProof.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                <p className="text-sm font-bold text-[#121315]">{person.name}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">From</p>
                <p className="text-[13px] text-[#3F4145]">{person.from}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Now</p>
                <p className="text-[13px] text-[#3F4145]">{person.now}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            If they did it, the only real question is whether you&apos;ll let fear talk you out of trying.
          </p>
        </section>

        {/* Already employed */}
        <section className="container max-w-3xl mt-14">
          <h2 className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}>
            &quot;But I Already Have A Non-Tech Job?&quot;
          </h2>
          <p className="mt-4 text-[15px] font-semibold text-[#121315] md:text-[17px]">
            Good. You have an unfair advantage.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            If you&apos;re already working, you don&apos;t need to start from zero. You only need to add
            Data Analytics skill to what you already know.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
            <div className="grid grid-cols-2 bg-[#121315] text-white">
              <p className={`${sora.className} px-4 py-3 text-xs font-bold uppercase tracking-wide sm:text-sm`}>
                Current Profession
              </p>
              <p className={`${sora.className} px-4 py-3 text-xs font-bold uppercase tracking-wide sm:text-sm`}>
                Career Transition
              </p>
            </div>
            {careerTransitions.map((row, index) => (
              <div
                key={row.from}
                className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}`}
              >
                <p className="px-4 py-3 text-[13px] text-[#3F4145] sm:text-[15px]">{row.from}</p>
                <p className="flex items-center gap-1.5 px-4 py-3 text-[13px] font-semibold text-[#121315] sm:text-[15px]">
                  <ArrowRight size={14} className="shrink-0 text-[#F67219]" />
                  {row.to}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            Your current job isn&apos;t a detour from Data Analytics. It&apos;s your head start — because
            every company and industry has data that can turn into revenue. You already understand the
            industry. Data Analytics just gives you a new language to solve its biggest problems, faster
            than someone starting fresh ever could.
          </p>
        </section>

        {/* The real checklist */}
        <section className="container max-w-3xl mt-14">
          <h2 className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}>
            What Are Companies Actually <span className="text-[#F67219]">Screening For?</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            This is the part the gurus never show you. Here&apos;s exactly what separates a hired candidate
            from an ignored one.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {screeningChecklist.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F67219]/10 text-sm font-bold text-[#F67219]">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon size={16} strokeWidth={2} className="text-[#F67219]" />
                      <p className="text-[15px] font-bold text-[#121315] md:text-base">{item.title}</p>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#3F4145] md:text-[14px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* The truth this has been building to */}
        <section className="container max-w-3xl mt-14">
          <h2 className={`${sora.className} text-2xl font-bold text-[#121315] md:text-[32px]`}>
            Here&apos;s The Truth This Whole Post <span className="text-[#F67219]">Has Been Building To.</span>
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            Learning Data Analytics was never the hard part. Positioning yourself the way companies are
            actually hiring in 2026 — that&apos;s the part 99% of people skip.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3F4145] md:text-[17px]">
            That&apos;s the exact gap Ayonaire Academy was built to close. Not another course that hands you
            a certificate and wishes you luck — a system built around the six things above: the analytics
            mindset, the AI-knowledge, the tools, the domain expertise, the real experience, and the soft
            skills. So you walk into interviews already matching what hiring managers are screening for.
          </p>

          <p className="mt-6 text-[15px] font-semibold text-[#121315] md:text-[17px]">
            The feedback is enough proof:
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {proofQuotes.map((item) => (
              <div
                key={item.handle}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                <span className="text-2xl leading-none text-[#F67219]">&ldquo;</span>
                <p className="mt-1 text-[13px] leading-relaxed text-[#2D3139]">{item.quote}</p>
                <p className="mt-3 text-xs font-semibold text-gray-400">{item.handle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community CTA */}
        <section className="container max-w-3xl mt-14">
          <div className="rounded-2xl bg-gradient-to-br from-[#121315] to-[#2B2430] p-8 text-center text-white md:p-12">
            <h2 className={`${sora.className} text-2xl font-bold md:text-[32px]`}>
              You Don&apos;t Have To Figure This Out <span className="text-[#F67219]">Alone.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/85 md:text-[17px]">
              If you want to see exactly how this works, and ask real questions to people who&apos;ve done
              it, come sit inside our WhatsApp community. Join 1,800+ professionals who are enthusiastic
              about building a formidable career in AI-powered Data Analysis.
            </p>
            <div className="mt-6 flex justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <CtaButton size="lg">Join The Ayonaire Community</CtaButton>
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50">
              Spots for the next FREE Data Analytics Hiring Masterclass are limited. The people who join the
              community first are the ones who hear about it first.
            </p>
          </div>
        </section>

        {/* Secondary registration nudge */}
        <section className="container max-w-3xl mt-14 flex justify-center">
          <CtaButton size="lg" onClick={() => setModalOpen(true)}>
            Give Me Instant Access To The Masterclass
          </CtaButton>
        </section>
      </article>

      {/* Curriculum recap */}
      <WhatYoullLearn />

      <Footer />

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
