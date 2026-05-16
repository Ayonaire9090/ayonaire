// components/MasterclassSection.tsx
'use client';

import { Inter } from 'next/font/google';
import RegistrationModal from './RegisterationModal';
import { useState } from 'react';
import { agile, adineue } from '@/app/fonts';
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const CheckIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.5083 0.800049C30.0501 0.800049 29.2066 0.887729 27.9755 1.05957C26.7445 1.23237 25.9486 1.39909 25.5899 1.55717C25.2299 1.71525 24.5794 2.26373 23.6402 3.19653C22.7 4.13253 21.3362 5.86021 19.5528 8.37797C17.7672 10.8983 16.1013 13.5588 14.5528 16.362C12.9822 19.2091 11.5353 22.1227 10.2162 25.0948C8.97489 22.9693 7.85329 21.5284 6.84561 20.7706C5.84049 20.0096 4.99249 19.6301 4.30289 19.6301C3.76465 19.6301 3.09009 19.9172 2.27633 20.4887C1.46353 21.0621 1.05713 21.6231 1.05713 22.1764C1.05713 22.577 1.42993 23.1706 2.17585 23.9556C3.65297 25.5162 4.96049 27.1712 6.09233 28.9232C6.78353 29.9709 7.24305 30.6141 7.47217 30.8484C7.70001 31.0807 8.39441 31.2 9.55537 31.2C11.171 31.2 12.1304 30.993 12.4354 30.576C12.7381 30.1751 13.2978 28.9792 14.1141 26.9856C16.131 21.9943 18.6389 17.2279 21.636 12.6896C24.636 8.15301 27.3838 4.72133 29.8853 2.39653C30.3835 1.95493 30.683 1.66853 30.7883 1.53637C30.8907 1.40357 30.9432 1.27013 30.9432 1.13125C30.9432 0.911729 30.7976 0.800049 30.5083 0.800049Z"
      fill="url(#check-gradient)"
    />
    <defs>
      <linearGradient
        id="check-gradient"
        x1="1.05713"
        y1="16"
        x2="30.9432"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F25E25" />
        <stop offset="1" stopColor="#F97F11" />
      </linearGradient>
    </defs>
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <rect width="33.3301" height="33.3301" rx="7" fill="white" />
    <path
      d="M17.1353 9.45215L23.8261 16.6232L16.8569 23.5079"
      stroke="#F67721"
      strokeWidth="1.5"
    />
    <path
      d="M9 16.3936L23.4887 16.6974"
      stroke="#F67721"
      strokeWidth="1.5"
    />
  </svg>
);

const items = [
  "You want to break into AI Engineering but don't know where to start.",
  "You are a beginner, graduate, professional, or career switcher looking for a structured roadmap.",
  "You are tired of random tutorials and want to understand the right learning path.",
  "You want to know how modern AI systems are actually built.",
  "You want to build real projects, not just collect certificates.",
  "You want to understand how AI Engineering can open local and global opportunities.",
  "You are serious about building a future-proof skill the right way.",
];

export default function MasterclassSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1263px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-start">

          {/* Left */}
          <div className="flex flex-col justify-center gap-10 lg:w-[577px] lg:shrink-0 lg:self-stretch">

            <h2 className={`${agile.className} text-3xl leading-tight tracking-[-0.04em] text-left sm:text-4xl md:text-5xl lg:text-[56px]`}>
              
              <span className="text-black">
                This Live Masterclass Is For You If:
              </span>

            </h2>

            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-5 rounded-[14px] pl-5 pr-3 py-2 w-fit cursor-pointer border-0 transition hover:shadow-lg"
              style={{
                background:
                  'linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)',
              }}
            >
              <span
                className={` text-white font-bold text-base leading-normal`}
              >
                Show Me The{' '}
                <span className="font-adineue font-bold">A</span>
                I Roadmap
              </span>

              <ArrowIcon />
            </button>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 flex-1 w-full">
            {items.map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-[12px] border-l-4 border-[#F25E25] px-[30px] py-[13px] shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_0_rgba(0,0,0,0.12)] transition"
              >
                <CheckIcon />

                <p
                
                  className="
                    text-[#05040B]
                    leading-[132%]
                    tracking-[-0.03em]
                    text-[23px]
                    sm:text-lg
                    lg:text-[22px]
                  "
                >
                  {text}
                </p>
              </div>
            ))}
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