// components/WhatYoullDiscover.tsx
'use client';

import RegistrationModal from "./RegisterationModal";
import { useState } from 'react';
import { agile, adineue, exo } from '@/app/fonts';
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
  {
    num: "01",
    heading: "How to move from AI Consumer → AI Builder",
    desc: "Learn how to transition from only using AI tools to understanding how real AI systems are built.",
  },
  {
    num: "02",
    heading: "The 3 best paths to learn AI Engineering",
    desc: "Discover the Traditional, Modern, and Advanced routes, and which one fits your current level.",
  },
  {
    num: "03",
    heading: "The skills companies are hiring for in 2026",
    desc: "See the kinds of AI applications, workflows, and systems companies actually care about.",
  },
  {
    num: "04",
    heading: "Real AI projects and use cases employers value",
    desc: "See the kinds of AI applications, workflows, and systems companies actually care about.",
  },
  {
    num: "05",
    heading:
      "How Newbies, Pro, and career switchers can enter AI Strategically",
    desc: "Learn how different backgrounds can transition into AI Engineering without learning randomly.",
  },
  {
    num: "06",
    heading:
      "How to build a portfolio and projects that prove your skill",
    desc: "Understand how to create proof of work that makes recruiters take you seriously.",
  },
];



export default function WhatYoullDiscover() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white px-4 py-20">

        {/* Heading */}
        <div className="mx-auto flex max-w-5xl flex-col items-center">

          <h2 className={`${agile.className} text-center text-4xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl`}>

            <span className="text-black">
              What You'll Discover
            </span>

          </h2>
        </div>

        {/* Box */}
        <div className="mx-auto mt-12 w-full max-w-[1203px] overflow-hidden rounded-3xl">

          {/* Background Wrapper */}
          <div className="relative overflow-hidden rounded-3xl bg-[#F25E25]">

            {/* Sky Background */}
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/ac02e8824e54ecaddcd5c5e7795681630f9ddf48?width=2526')",
              }}
            />

            {/* Content */}
            <div className="relative z-10 px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">

              {/* Grid */}
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 rounded-2xl bg-white px-6 py-10 md:grid-cols-2 md:px-10 md:py-12 lg:grid-cols-3 lg:px-12 lg:py-14">

                {items.map((item) => (
                  <div
                    key={item.num}
                    className="flex flex-col gap-4 border-b border-[rgba(248,100,50,0.46)] pb-6"
                  >

                    {/* Number */}
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[rgba(248,100,50,0.10)]">

                      <span className="font-agile text-2xl font-bold tracking-[-0.04em] text-[#F25E25]">
                        {item.num}
                      </span>

                    </div>

                    {/* Text */}
                    {/* Text */}
                    <div className="flex flex-col gap-2">

                      <h3 className={`${exo.className} text-xl leading-[1.3] tracking-[-0.04em] text-[#533520] md:text-2xl`}>

                        {
                          item.heading
                        }

                      </h3>

                      <p className="font-adineue font-light text-base text-[18px] leading-[1.6] tracking-[-0.03em] text-[#533520] md:text-lg">


                        {
                          item.desc
                        }

                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-10 flex justify-center">

                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-4 rounded-[14px] px-5 py-[7px] font-bold text-white transition hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
                  }}
                >
                  <span className="font-adineue text-sm tracking-[-0.03em] md:text-base">
                    Join The Free{' '}
                    <span className="font-adineue font-bold">A</span>
                    I Engineering Masterclass
                  </span>

                  <ArrowIcon />
                </button>
              </div>
            </div>
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