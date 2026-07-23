'use client';

import { useState } from 'react';
import RegistrationModal from './RegistrationModal';
import { baiJamjuree } from '@/app/fonts';

export default function RegisterBand() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#171717] px-4 py-6 sm:px-8">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden rounded-3xl bg-[#222222] px-6 py-16 text-center sm:px-12">
          <div className="relative z-10 flex max-w-3xl flex-col items-center gap-5">
            <h2 className={`${baiJamjuree.className} text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight`}>
              <span className="text-[#F67219]">Register before</span>{' '}
              <span className="text-white">Slots Fill Up, This is a Live Masterclass, not a Replay.</span>
            </h2>
            <p className="text-base text-white/50">
              We keep these sessions small so there&apos;s real Q&amp;A time with the panel. Once it fills, registration
              closes.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="relative mt-2 flex h-12 items-center gap-3 rounded-[14px] pl-6 pr-2 font-bold text-white bg-gradient-to-r from-[#F67219] to-[#FFDCC4] transition-transform hover:scale-[1.02] shadow-lg"
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
        </div>
      </section>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
