'use client';

import { useState } from 'react';
import RegistrationModal from './RegistrationModal';
import { baiJamjuree } from '@/app/fonts';

const OrangeCircleCheck = ({ id }: { id: string }) => (
  <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M46.3128 28.4374C44.6878 36.5624 38.5619 44.2117 29.963 45.9221C21.3643 47.6326 12.6384 43.6328 8.32119 36.0021C4.00399 28.3717 5.06979 18.8322 10.9646 12.3425C16.8594 5.85279 26.8128 4.06243 34.9378 7.31243"
      stroke={`url(#grad0_${id})`}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.6875 25.1875L26.8125 33.3125L46.3125 12.1875"
      stroke={`url(#grad1_${id})`}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id={`grad0_${id}`} x1="5.6875" y1="26.0214" x2="46.3128" y2="26.0214" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F67219" />
        <stop offset="1" stopColor="#F67219" />
      </linearGradient>
      <linearGradient id={`grad1_${id}`} x1="18.6875" y1="22.75" x2="46.3125" y2="22.75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F67219" />
        <stop offset="1" stopColor="#F67219" />
      </linearGradient>
    </defs>
  </svg>
);

const reasons = [
  "You're learning (or have learned) Data Analysis but aren't getting interviews",
  'You want to work remotely for international companies, not just local ones',
  "You're starting from a non-tech background and need proof it's possible",
  'You\'re tired of generic "learn Python" advice that ignores how hiring actually works',
  "You want to be part of the 1% that land a job faster because they know the industry's hiring secrets",
];

export default function WhoThisIsFor() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl w-full">
          <div className="text-center mb-12">
            <h2 className={`${baiJamjuree.className} text-3xl sm:text-4xl md:text-5xl font-bold text-[#121315]`}>
              This Is For You If:
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-5 rounded-2xl bg-[#F9FAFB] p-5 sm:p-6 border border-gray-50/50"
              >
                <div className="shrink-0">
                  <OrangeCircleCheck id={`reason-${index}`} />
                </div>
                <p className="text-[#2D3139] text-[16px] sm:text-[18px] leading-[1.5] max-w-xl">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[20px] bg-[#FFF5F1] px-6 py-8 text-center sm:px-12 sm:py-10">
            <h3 className={`${baiJamjuree.className} text-xl sm:text-2xl font-bold text-black`}>
              Register Before Slots Fill Up
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] text-[#F67219]">
              This Is A Live Masterclass, Not A Replay.
            </p>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#55565A]">
              We keep these sessions small so there's real Q&amp;A time with the panel. Once it fills, registration closes.
            </p>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setModalOpen(true)}
                className="relative flex h-11 items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white bg-[#F67219] transition-transform hover:scale-[1.02] shadow-lg"
              >
                <span className="text-sm whitespace-nowrap">Reserve My Free Seat</span>
                <span className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397" stroke="#F67219" strokeWidth="1.5" />
                    <path d="M0.000324288 8.62534L17.0875 8.92915" stroke="#F67219" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
