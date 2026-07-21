'use client';

import { useState } from 'react';
import Image from 'next/image';
import RegistrationModal from './RegistrationModal';
import Navbar from './Navbar';
import { agile, adineue } from '@/app/fonts';

const avatarStack = [
  '/assets/persons/student-1.png',
  '/assets/persons/student-2.png',
  '/assets/persons/student-3.png',
  '/assets/persons/student-1.png',
  '/assets/persons/student-2.png',
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />

      <Navbar />

      <section className="container relative">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-24 flex w-full max-w-3xl flex-col items-center gap-5 text-center py-6 sm:py-10">
            {/* Eyebrow */}
            <span className={`${adineue.className} flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#F25E25]`}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#F25E25]" />
              Free Live Masterclass 2026
            </span>

            {/* Main Heading */}
            <h1 className={`${agile.className} text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight tracking-tight text-[#121315]`}>
              Know What Hiring Managers <span className="text-[#F25E25]">Actually Look For</span> In Data Analysts
            </h1>

            {/* Subtitle */}
            <p className={`${adineue.className} max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg`}>
              A Senior Data Analyst, a Hiring Executive, and a Remote Data Analyst reveal what
              actually gets you hired in 2026.
            </p>

            {/* CTA row */}
            <div className="flex items-center justify-center mt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="relative flex h-12 items-center gap-3 rounded-[14px] pl-6 pr-2 font-bold text-white transition-transform hover:scale-[1.02] shadow-xl"
                style={{ background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)" }}
              >
                <span className="text-sm whitespace-nowrap">Reserve your free seat now</span>
                <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397" stroke="#F67721" strokeWidth="1.5" />
                    <path d="M0.000324288 8.62534L17.0875 8.92915" stroke="#F67721" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-3">
                {avatarStack.map((src, index) => (
                  <div
                    key={index}
                    className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm"
                  >
                    <Image src={src} alt="Community member" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                Join 1,800+ professionals already inside our community
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative z-10 mb-16 w-full max-w-4xl">
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] opacity-40 blur-2xl"
              style={{ background: "linear-gradient(135deg, #FFAC74 0%, #FFFFFF 70%)" }}
            />

            <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-2xl">
              <div className="relative aspect-video w-full">
                <Image
                  src="/assets/images/landing page hero image.png"
                  alt="Data Analytics Masterclass"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
