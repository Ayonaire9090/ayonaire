'use client';

import { useState } from 'react';
import Image from 'next/image';
import RegistrationModal from './RegistrationModal';
import { CtaButton } from './_components/CtaButton';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating rounded bar over the hero background (scrolls with the page) */}
      <nav className="absolute left-0 right-0 top-3 z-50 px-4 md:top-4 md:px-10">
        <div className="mx-auto w-full max-w-[1280px] rounded-xl bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:rounded-2xl">
          <div className="flex h-[56px] items-center justify-between px-4 md:h-[72px] md:px-7">
            <a href="/" className="shrink-0">
              <Image
                src="/assets/logos/full-logo-dark.svg"
                alt="Ayonaire"
                width={140}
                height={35}
                priority
                className="h-6 w-auto object-contain md:h-8"
              />
            </a>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <CtaButton onClick={() => setModalOpen(true)}>
                Get free access now
              </CtaButton>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-end justify-center gap-[5px] p-2 md:hidden"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`h-[2px] rounded-full bg-[#F67219] transition-all duration-300 ${menuOpen ? 'w-3.5 translate-y-[7px] rotate-45' : 'w-3.5'}`}
              />
              <span
                className={`h-[2px] rounded-full bg-[#F67219] transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-5'}`}
              />
              <span
                className={`h-[2px] rounded-full bg-[#F67219] transition-all duration-300 ${menuOpen ? 'w-4 -translate-y-[7px] -rotate-45' : 'w-4'}`}
              />
            </button>
          </div>

          {/* Mobile dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="border-t border-gray-100 px-4 py-4">
              <CtaButton
                onClick={() => setModalOpen(true)}
                className="w-full justify-between"
                labelClassName="text-[13px]"
              >
                Get free access now
              </CtaButton>
            </div>
          </div>
        </div>
      </nav>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
