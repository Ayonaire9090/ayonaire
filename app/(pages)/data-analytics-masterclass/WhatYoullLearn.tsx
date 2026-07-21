'use client';

import { useState } from 'react';
import RegistrationModal from './RegistrationModal';
import { agile, adineue } from '@/app/fonts';

const items = [
  'Why traditional Data Analysts are getting passed over — and the AI skill shift replacing them',
  'Exactly how hiring managers filter candidates in 2026',
  'The roadmap to becoming globally employable, no guesswork',
  'How non-tech people broke into Data Analysis from zero',
  'How to land remote and international roles, even outside the US/EU',
  'The "Build in Public" strategy that gets you noticed before you apply',
  'Why a finance, marketing, or health background is your fastest path in',
  'The CV, portfolio, and interview mistakes costing you offers',
];

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const VISIBLE_ON_MOBILE = 4;

export default function WhatYoullLearn() {
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <section id="what-youll-learn" className="w-full bg-white px-4 py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl w-full flex flex-col items-center gap-10 lg:gap-12">
          {/* Heading + CTA */}
          <div className="flex flex-col items-center gap-5 text-center">
            <span className={`${adineue.className} text-xs font-semibold uppercase tracking-[0.15em] text-[#F25E25]`}>
              Curriculum
            </span>
            <h2 className={`${agile.className} text-3xl sm:text-4xl md:text-[44px] font-bold text-[#121315] leading-tight`}>
              What You'll Learn Inside The Free Masterclass
            </h2>
            <p className={`${adineue.className} text-base text-gray-600 leading-relaxed max-w-md`}>
              Eight things top candidates already know that most people learning Data Analytics don't.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="relative mt-2 flex h-11 w-fit items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white transition-transform hover:scale-[1.02] shadow-lg"
              style={{
                background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
              }}
            >
              <span className="text-sm whitespace-nowrap">Join the Free Masterclass</span>
              <span className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397" stroke="#F67721" strokeWidth="1.5" />
                  <path d="M0.000324288 8.62534L17.0875 8.92915" stroke="#F67721" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
          </div>

          {/* Curriculum module list */}
          <div className="w-full rounded-2xl border border-gray-100 bg-[#F9FAFB] overflow-hidden">
            {items.map((item, index) => {
              const hiddenOnMobile = index >= VISIBLE_ON_MOBILE && !expanded;
              return (
                <div
                  key={index}
                  className={`group items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 border-b border-gray-100 last:border-b-0 hover:bg-white transition-colors ${
                    hiddenOnMobile ? 'hidden lg:flex' : 'flex'
                  }`}
                >
                  <span className="text-sm font-bold text-[#F25E25] w-6 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="flex-1 text-[15px] leading-snug text-[#2D3139]">{item}</p>
                  <span className="shrink-0 text-gray-300 group-hover:text-[#F25E25] transition-colors">
                    <ChevronIcon />
                  </span>
                </div>
              );
            })}

            {items.length > VISIBLE_ON_MOBILE && (
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="flex w-full items-center justify-center gap-2 border-t border-gray-100 px-5 py-4 text-sm font-semibold text-[#F25E25] hover:bg-white transition-colors lg:hidden"
                aria-expanded={expanded}
              >
                {expanded ? 'Show less' : 'Show more'}
                <span className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon />
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
