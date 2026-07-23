'use client';

import { Lightbulb } from 'lucide-react';
import { baiJamjuree } from '@/app/fonts';

const items = [
  {
    title: 'AI-powered skill shift',
    description:
      'Why "traditional" Data Analysts are getting passed over — and the specific AI-powered skill shift that\'s replacing them.',
  },
  {
    title: 'Hiring manager filter',
    description:
      'How hiring managers actually filter candidates in 2026 — the exact criteria and checklist in use.',
  },
  {
    title: 'Precise learning roadmap',
    description:
      'The precise learning roadmap to become globally employable this year (no more guessing what to learn next).',
  },
  {
    title: 'Non-tech success',
    description:
      'How non-tech people broke into Data Analysis — the real path from zero background to working for global companies.',
  },
  {
    title: 'International remote roles',
    description:
      'How to land international internships and remote Data Analyst roles — even from outside the US/EU.',
  },
  {
    title: 'Build in Public strategy',
    description:
      'The "Build in Public" strategy top candidates are using to get noticed by recruiters before they even apply.',
  },
  {
    title: 'Industry specialization',
    description:
      "Why your background in finance, marketing, health, or accounting isn't a disadvantage, but your fastest path to a specialized, higher-paying analyst role.",
  },
  {
    title: 'Fatal portfolio mistakes',
    description: 'Plus the CV, portfolio, and interview mistakes quietly costing you job offers.',
  },
];

export default function WhatYoullLearn() {
  return (
    <section id="what-youll-learn" className="w-full bg-white px-4 py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-3xl w-full flex flex-col items-center gap-5 text-center">
        <span className={`${baiJamjuree.className} text-xs font-semibold uppercase tracking-[0.15em] text-[#F67219]`}>
          Curriculum
        </span>
        <h2 className={`${baiJamjuree.className} text-3xl sm:text-4xl md:text-[44px] font-bold text-[#121315] leading-tight`}>
          What <span className="text-[#F67219]">You&apos;ll Learn</span> Inside The Free Masterclass
        </h2>
        <p className={`${baiJamjuree.className} text-base text-gray-600 leading-relaxed max-w-md`}>
          Eight things top candidates already know that most people learning Data Analytics don&apos;t.
        </p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={item.title} className="relative pt-4">
            <span className="absolute left-3 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F67219] text-sm font-bold text-white shadow-md">
              {index + 1}
            </span>
            <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-white via-white to-[#FFE5DD]/40 p-6 shadow-[0_2px_14px_rgba(0,0,0,0.08)]">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F86432]/10">
                <Lightbulb size={26} strokeWidth={1.75} className="text-[#F67219]" />
              </div>
              <h3 className={`${baiJamjuree.className} mt-5 text-lg font-semibold tracking-tight text-[#121315]`}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#121315]/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
