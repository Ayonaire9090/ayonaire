'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import RegistrationModal from './RegistrationModal';
import { baiJamjuree } from '@/app/fonts';

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
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: heading + CTA */}
          <div className="flex w-full flex-col items-start gap-8 lg:max-w-sm lg:shrink-0">
            <h2 className={`${baiJamjuree.className} text-4xl sm:text-5xl font-bold leading-tight text-[#121315]`}>
              This Live Masterclass <span className="text-[#F67219]">Is For You If:</span>
            </h2>
            <button
              onClick={() => setModalOpen(true)}
              className="relative flex h-12 items-center gap-3 rounded-[14px] pl-6 pr-2 font-bold text-white bg-gradient-to-r from-[#F67219] to-[#FFDCC4] transition-transform hover:scale-[1.02] shadow-lg"
            >
              <span className="text-sm whitespace-nowrap">Give Me Instant Access</span>
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397" stroke="#F67219" strokeWidth="1.5" />
                  <path d="M0.000324288 8.62534L17.0875 8.92915" stroke="#F67219" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right: checklist */}
          <div className="flex w-full flex-col gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border-l-4 border-[#F67219] bg-white px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <Check size={22} strokeWidth={3} className="text-[#F67219]" />
                </span>
                <p className="text-[15px] sm:text-[18px] font-semibold leading-snug text-[#05040B]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
