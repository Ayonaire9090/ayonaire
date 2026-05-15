'use client';

import RegistrationModal from "./RegisterationModal";
import { useState } from 'react';

const CircleTick = ({ id }: { id: string }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M46.3128 28.4374C44.6878 36.5624 38.5619 44.2117 29.963 45.9221C21.3643 47.6326 12.6384 43.6328 8.32119 36.0021C4.00399 28.3717 5.06979 18.8322 10.9646 12.3425C16.8594 5.85279 26.8128 4.06243 34.9378 7.31243"
      stroke={`url(#grad0_${id})`}
      strokeWidth="1.9375"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.6875 25.1875L26.8125 33.3125L46.3125 12.1875"
      stroke={`url(#grad1_${id})`}
      strokeWidth="1.9375"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id={`grad0_${id}`} x1="5.6875" y1="26.0214" x2="46.3128" y2="26.0214" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F25E25" />
        <stop offset="1" stopColor="#F97F11" />
      </linearGradient>
      <linearGradient id={`grad1_${id}`} x1="18.6875" y1="22.75" x2="46.3125" y2="22.75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F25E25" />
        <stop offset="1" stopColor="#F97F11" />
      </linearGradient>
    </defs>
  </svg>
);

const cards = [
  {
    title: "Where to start",
    desc: "Because AI feels overwhelming and everyone seems to be learning differently.",
  },
  {
    title: "What to learn first",
    desc: "So you don't waste months jumping from one tutorial to another.",
  },
  {
    title: "How to become employable",
    desc: "By learning the skills, systems, and thinking modern AI companies value.",
  },
  {
    title: "What projects to build",
    desc: "To create proof of work that actually attracts recruiters and opportunities.",
  },
  {
    title: "Which roadmap fits your background",
    desc: "Whether you're a beginner, professional, graduate, or career switcher",
  },
];

export default function DreamSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#FFF7F3] px-4 py-16 sm:py-20 mt-8 sm:mt-24 md:mt-28 mb-20 sm:mx-12 rounded-2xl">
        <div className="mx-auto w-full max-w-5xl font-adineue">

          {/* Heading */}
          <div className="text-center">
            <h2 className="font-agile text-3xl leading-tight tracking-[-0.04em] text-center sm:text-4xl md:text-3xl lg:text-6xl">

              <span className="text-[#F4683F]">
                Dreaming of{' '}
              </span>

              <span className="text-black">
                Breaking Into{' '}
              </span>

              <span className="text-black">
                <span className="font-adineue font-bold">A</span>
                I Engineering?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[340px] sm:max-w-4xl text-center font-adineue text-[20px] font-medium leading-[1.5] tracking-[-0.02em] text-[#121315] sm:text-[28px]">
              <span className="block sm:inline">
                The AI revolution is happening now.
              </span>

              <span className="block mt-3 sm:mt-0 sm:inline">
                {" "}Don't let uncertainty hold you back.
              </span>
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-20">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`
          relative flex items-start gap-5
          rounded-2xl bg-white
          px-6 py-5
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          border-l-4 border-orange-500
          transition-all duration-300

          w-[92%] sm:w-[85%] md:w-full

          ${index % 2 === 1
                    ? "ml-auto md:ml-0 md:translate-y-10"
                    : ""
                  }

          
        `}
              >
                <div className="shrink-0">
                  <CircleTick id={`card-${index}`} />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-[20px] sm:text-[22px] font-normal leading-[1.3] text-[#121315] tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-[19px] sm:text-[16px] leading-relaxed text-[#121315]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-3 rounded-[14px] px-5 py-3 text-base font-bold text-white"
              style={{ background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)" }}
            >
              Reserve My Free Spot
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[7px] bg-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7442 2.73047L19.5805 9.90155L10.3766 16.7862" stroke="#F67721" strokeWidth="1.5" />
                  <path d="M9.29604e-05 9.67188L19.1346 9.97569" stroke="#F67721" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}