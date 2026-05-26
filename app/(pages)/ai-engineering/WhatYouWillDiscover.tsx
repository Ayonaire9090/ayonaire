'use client';

import RegistrationModal from '@/components/RegisterationModal';
import { useState } from 'react';
import { agile, adineue, exo } from '@/app/fonts';

// Updated dataset matching the exact copywriting from the new screenshot
const masterclassItems = [
  {
    heading: "What AI Engineering Really Means",
    desc: "Understand what AI Engineering is beyond using ChatGPT or automation tools.",
  },
  {
    heading: "The difference between AI users and AI builders",
    desc: "See why companies value people who can build real systems, not just use AI tools.",
  },
  {
    heading: "The 3 best paths into AI Engineering",
    desc: "Discover the Traditional, Modern, and Advanced routes into AI Engineering.",
  },
  {
    heading: "The skills companies are hiring for",
    desc: "Learn the practical skills needed for modern AI roles and real-world projects.",
  },
  {
    heading: "The real-world AI projects you should build",
    desc: "Know the kind of AI systems that can help you create strong proof of work.",
  },
  {
    heading: "How to stop learning randomly and start building with structure",
    desc: "Get a clear roadmap so you know what to learn, what to build, and what to do next.",
  },
];

export default function WhatYoullDiscover() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl w-full">
          
          {/* Main Layout Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`${agile.className} text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#121315] leading-tight`}>
              What You Will Learn Inside <br className="hidden sm:inline" /> The Free Masterclass
            </h2>
          </div>

          {/* Cards Display Grid (Responsive 1 to 3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterclassItems.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 sm:p-8 border border-[#FFEBE4] shadow-[0_4px_25px_rgba(254,110,40,0.02)] flex flex-col items-start gap-4"
              >
                {/* Numeric Indicator Badge */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF2ED]">
                  <span className={`${exo.className} font-bold text-base text-[#F25E25]`}>
                    01
                  </span>
                </div>

                {/* Content Frame */}
                <div className="flex flex-col gap-2">
                  <h3 className={`${exo.className} text-[20px] sm:text-[21px] font-bold leading-[1.3] text-[#121315] tracking-tight`}>
                    {item.heading}
                  </h3>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-relaxed text-[#55565A]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Masterclass Button */}
          <div className="mt-14 flex justify-center">
              <button
                            onClick={() => setModalOpen(true)}
                            className="relative flex h-11 items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white transition-transform hover:scale-[1.02]"
                            style={{
                                background:
                                    "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
                            }}
                        >
                            <span className="text-sm whitespace-nowrap">
                                Join the Free Masterclass
                            </span>

                            <span className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397"
                                        stroke="#F67721"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M0.000324288 8.62534L17.0875 8.92915"
                                        stroke="#F67721"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </span>
                        </button>
          </div>

        </div>
      </section>

      {/* Embedded Application Modal logic */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}