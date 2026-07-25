'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import RegistrationModal from './RegistrationModal';
import { sora } from '@/app/fonts';
import { CtaButton } from './_components/CtaButton';
import { typeScale } from './_components/type';

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
      <section className="w-full bg-white py-8 md:py-14">
        {/* Gradient box — 75% of page width on desktop, full-bleed on mobile */}
        <div
          className="mx-auto w-full px-4 py-12 md:rounded-[24px] md:px-12 md:py-16"
          style={{
            background:
              'linear-gradient(180deg, #FFFFFF 0%, #FEF3EC 50%, #FDE8DD 100%)',
          }}
        >
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
            {/* Left: heading + CTA */}
            <div className="flex w-full flex-col items-start gap-7 lg:max-w-[320px] lg:shrink-0">
              <h2
                className={`${sora.className} ${typeScale.h2} w-full text-center font-bold leading-tight text-[#121315] lg:text-left`}
              >
                This Live Masterclass{' '}
                <span className="block text-[#F25E25]">Is For You If:</span>
              </h2>

              <div className="w-full md:w-auto">
                <CtaButton
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="w-full justify-between md:w-fit md:justify-start"
                >
                  Give Me Instant Access
                </CtaButton>
              </div>
            </div>

            {/* Right: checklist */}
            <div className="flex w-full flex-col gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl border-l-4 border-[#F25E25] bg-white px-5 py-4 shadow-[0_2px_14px_rgba(0,0,0,0.08)] md:px-6"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center">
                    <Check
                      size={20}
                      strokeWidth={3}
                      className="text-[#F25E25]"
                    />
                  </span>
                  <p
                    className={`${sora.className} ${typeScale.body} font-semibold leading-snug text-[#121315]`}
                  >
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
