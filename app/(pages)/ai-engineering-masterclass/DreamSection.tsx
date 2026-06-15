"use client";
import RegistrationModal from "./RegisterationModal";
import { useState } from "react";
import { agile, adineue, exo } from "@/app/fonts";
import DifferenceSection from "./DifferenceSection";

// Reusable Circle Checkmark Component tailored to the design image
const OrangeCircleCheck = ({ id }: { id: string }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
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
      <linearGradient
        id={`grad0_${id}`}
        x1="5.6875"
        y1="26.0214"
        x2="46.3128"
        y2="26.0214"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F25E25" />
        <stop offset="1" stopColor="#F97F11" />
      </linearGradient>
      <linearGradient
        id={`grad1_${id}`}
        x1="18.6875"
        y1="22.75"
        x2="46.3125"
        y2="22.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F25E25" />
        <stop offset="1" stopColor="#F97F11" />
      </linearGradient>
    </defs>
  </svg>
);

// Updated items reflecting the exact text from the image
const builderChallenges = [
  {
    text: (
      <>
        Can you build a <strong>RAG document search system</strong> that helps
        companies ask questions from internal documents?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>recommendation system</strong> like{" "}
        <strong>Amazon</strong> and <strong>Netflix</strong> that suggests
        products, movies, or content based on user behaviour?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build an <strong>AI career assistant</strong> that improves
        resumes, prepares users for jobs, and strengthens their profiles?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build an <strong>insurance claim support agent</strong> that
        helps customers process claims and retrieve policy information?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>customer support agent</strong> that remembers
        conversations and solves customer issues automatically?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>tumor detection system</strong> that supports
        medical image analysis?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>loan approval system</strong> that helps lenders
        assess credit risk and customer eligibility?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>business intelligence agent</strong> that
        analyzes company data and generates reports automatically?
      </>
    ),
  },
];

export default function AIBuildersSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const renderTextWithAdineueA = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === "A") {
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
      {/* Changed background from pinkish-orange to crisp white/light gray wrapper if needed */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl font-sans">
          {/* Header Section */}
   <div className="text-center mb-16 max-w-[340px] sm:max-w-[900px] mx-auto px-4">
  {/* Header Section */}
  <h2 className={`${exo.className} text-[22px] sm:text-5xl lg:text-[48px] font-bold tracking-[-2.56px] sm:tracking-tight text-[#000000] sm:text-[#121315] leading-[33px] sm:leading-tight`}>
    Companies Pay For{" "}
    <span className="text-[#F25E25]">
      {renderTextWithAdineueA("AI")} Builders,
    </span>{" "}
    Not {renderTextWithAdineueA("AI")}
    <br className="block sm:hidden" /> {/* Forces "Consumers." onto the next line exactly like Figma */}
    <span className="text-[#F25E25]"> Consumers.</span>
  </h2>

  {/* Subtitle Section */}
  <p className={`${adineue.className} mt-4 text-[18px] sm:text-[22px] text-[#55565A] font-normal tracking-tight`}>
    Using {renderTextWithAdineueA("AI")} tools is not enough anymore.
  </p>

  {/* Accent Question Callout */}
  <p className={`${exo.className} sm:${adineue.className} mt-2 text-[18px] sm:text-[22px] text-[#F25E25] font-semibold tracking-tight`}>
    The real question is:
  </p>
</div>

          {/* Core Content Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {builderChallenges.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 rounded-2xl bg-[#F9FAFB] p-6 border border-gray-50/50 transition-all duration-200 hover:shadow-sm"
              >
                {/* Custom SVG Checkmark Icon */}
                <div className="shrink-0">
                  <OrangeCircleCheck id={`challenge-${index}`} />
                </div>

                {/* Question Text */}
                <div
                  className={`${adineue.className} text-[#2D3139] text-[17px] font-normal sm:text-[18px] leading-[1.5]`}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          <DifferenceSection />

          {/* CTA Button Wrapper */}
          <div className="mt-1 flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="relative flex h-11 items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white transition-transform hover:scale-[1.02] shadow-xl"
              style={{
                background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
              }}
            >
              <span className="text-sm whitespace-nowrap">
                Show me the AI Roadmap
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
        </div>
      </section>

      {/* Modal Alignment */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
