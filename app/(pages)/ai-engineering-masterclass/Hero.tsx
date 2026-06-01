'use client';

import Image from 'next/image';
import { useState } from 'react';
import RegistrationModal from './RegisterationModal';
import { agile, adineue } from '@/app/fonts';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const renderTextWithAdineueA = (text: string) => {
    return text.split('').map((char, index) => {
      if (char === 'A') {
        return (
          <span key={index} className={`${adineue.className} inline-block`}>
            {char}
          </span>
        );
      }
      return <span key={index}>{char}</span>;
    });
  };

  return (
    <>
      <main
        className="relative bg-[#DBDBDB] bg-cover bg-center "
        style={{
          backgroundImage: "url('/Bg.png')",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(89.33% 89.33% at 50% 23.35%, #FFF 0%, rgba(255,255,255,0.00) 73.09%)",
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 pt-16 sm:px-8">
          <div className="mt-4 flex w-full max-w-4xl flex-col items-center gap-5 text-center">

            {/* Top Badge: Masterclass Label */}
            <div className="flex items-center gap-2 mt-6">
              <span className= {`${adineue.className}   font-bold uppercase tracking-wider text-lg sm:text-xl md:text-2xl text-[#F25E25] `}>
                {renderTextWithAdineueA('AI ENGINEERING')} <span className='font-bold text-black'>LIVE MASTER CLASS</span>
              </span>
            </div>

            {/* Price Info Pill */}
            <div className="flex items-center gap-2  text-xs ">
              <span className="rounded-md bg-[#F99450] px-3 py-2 font-semibold text-white">
                Original Masterclass Value = $500
              </span>
              <span className="px-2 font-medium text-gray-600 rounded-md  bg-white/80 p-2 backdrop-blur-sm">
                Today = $0 (Free)
              </span>
            </div>

            {/* Main Heading */}
       <h1
  className={`${agile.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-black`}
>
  Don't miss out on{' '}
  <span className="text-[#F4683F]">
    {renderTextWithAdineueA('$300K')}–{renderTextWithAdineueA('500K')}/
  </span>
  <br />
  <span className="text-[#F4683F] font-normal lowercase">
    {renderTextWithAdineueA('year')}
  </span>{' '}
  {renderTextWithAdineueA('AI Engineering salaries')}
</h1>

            {/* Subtitle / Paragraph */}
            <p className={`${adineue.className} max-w-2xl text-base leading-relaxed text-[#4A4A4A] sm:text-lg md:text-xl`}>
              Become the kind of <strong className="font-bold text-black">AI Builder companies</strong> are urgently hiring for <strong className="font-bold text-black">globally</strong>.
            </p>

            {/* CTA Button */}
          <button
                onClick={() => setModalOpen(true)}
                className="relative flex h-11 items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white transition-transform hover:scale-[1.02] shadow-xl"
                style={{
                  background:
                    "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
                }}
              >
                <span className="text-sm whitespace-nowrap">
                  Reserve My Free spot
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

          {/* Hero Visual Image container */}
          <div className="relative z-20 mt-12 mb-[-70px] w-full max-w-5xl px-4 md:mb-[-120px] lg:mb-[-150px]">
            <Image
              src="/h.jpeg"
              alt="Hero visual"
              width={1200}
              height={800}
              priority
              className="h-auto w-full rounded-t-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
      </main>

      {/* Next Section Spacing Spacer */}
      <section className="bg-white pt-24 md:pt-40 lg:pt-52"></section>

      {/* Modal injection */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
