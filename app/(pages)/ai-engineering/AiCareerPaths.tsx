'use client';

import Image from 'next/image';
import { useState } from 'react';
import { agile, adineue, exo } from '@/app/fonts';
import RegistrationModal from '@/components/RegisterationModal';
// Setup role items array matching titles. They all reference the same base image for now.
const aiRoles = [
  { name: "AI Engineer", src: "/AI.png" },
  { name: "Generative AI Engineer", src: "/AI.png" },
  { name: "Agentic AI Engineer", src: "/AI.png" },
  { name: "Machine Learning Engineer", src: "/AI.png" },
  { name: "LLM Engineer", src: "/AI.png" },
  { name: "NLP Engineer", src: "/AI.png" },
  { name: "Computer Vision Engineer", src: "/AI.png" },
  { name: "Deep Learning Engineer", src: "/AI.png" },
  { name: "AI Product Engineer", src: "/AI.png" },
];

export default function AICareerPaths() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl w-full flex flex-col items-center">
          
          {/* Header Typography Group */}
          <div className="text-center max-w-3xl mb-4">
            <h2 className={`${agile.className} text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-tight tracking-tight`}>
              <span className="text-[#F25E25]">AI Career Paths</span> You Can Start Preparing For
            </h2>
            <p className="mt-4 text-[#55565A] font-normal text-base sm:text-[18px] tracking-tight">
              This masterclass will expose you to high-demand AI roles such as:
            </p>
          </div>

          {/* Roles Grid Display Frame */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-12 max-w-5xl w-full">
            {aiRoles.map((role, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center w-[160px] sm:w-[175px] group transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Illustrative Graphic Wrapper using your AI.png */}
                <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
                  <Image
                    src={role.src}
                    alt={`${role.name} icon illustration`}
                    width={80}
                    height={80}
                    priority
                    className="object-contain"
                  />
                </div>

                {/* Role Description Name */}
                <span className={`${exo.className} text-[#4A4B50] font-medium text-[15px] sm:text-[16px] leading-snug tracking-tight group-hover:text-black`}>
                  {role.name}
                </span>
              </div>
            ))}
          </div>

          {/* Subtext Footer Info */}
          <div className="mt-16 text-center max-w-md px-4">
            <p className="text-[#55565A] font-normal text-base sm:text-[17px] leading-relaxed">
              You don't need to know everything now.
            </p>
            <p className="text-[#121315] font-semibold text-base sm:text-[17px] mt-0.5">
              You just need the right roadmap.
            </p>
          </div>

          {/* Action Trigger Element */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-3 rounded-xl px-6 py-3.5 text-base font-bold text-white transition-transform active:scale-97 shadow-sm hover:opacity-95"
              style={{ background: "linear-gradient(90deg, #F25E25 0%, #FFA56E 100%)" }}
            >
              <span className="font-sans tracking-tight">
                I Want To Become An AI Builder
              </span>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F25E25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* State Controlled Modal Layer */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}