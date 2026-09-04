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
        Can you build a <strong>Machine Learning system</strong> that learns
        from business data to predict outcomes, identify risks or support better
        decisions?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>fraud or network intrusion detection system</strong>{" "}
        that identifies suspicious patterns and flags potentially harmful
        activity?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>recommendation system</strong> that suggests
        relevant products, content or services based on user behaviour?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>forecasting system</strong> that uses historical
        data to predict future demand, sales, revenue or other business
        outcomes?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>Computer Vision system</strong> that analyses
        images to classify objects, detect defects or identify important visual
        patterns?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>Natural Language Processing system</strong> that
        can classify, summarise, translate or extract useful information from
        large volumes of text?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>Generative AI application</strong> that uses
        Large Language Models to solve a real business problem instead of simply
        creating another ChatGPT clone?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>RAG system</strong> that allows an organisation
        to securely ask questions across its own documents and retrieve answers
        grounded in its internal knowledge?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build an <strong>AI Agent</strong> that can understand a request,
        use tools, interact with APIs or databases and complete a multi-step
        workflow?
      </>
    ),
  },
  {
    text: (
      <>
        Can you build a <strong>Multi-Agent System</strong> where specialised AI
        Agents collaborate to research, analyse, evaluate and complete a larger
        task?
      </>
    ),
  },
  {
    text: (
      <>
        And when the system finally works, can you take it beyond your notebook
        and turn it into an API, containerise it, deploy it to the cloud,
        evaluate it, secure it, monitor it and keep it reliable in production?
      </>
    ),
  },
  {
    text: <>Because that is where the difference begins.</>,
  },
  {
    text: (
      <>
        <strong>DON'T JUST LEARN AI.</strong> DEVELOP THE CAPABILITY TO BUILD AI
        SYSTEMS THAT SOLVE REAL PROBLEMS.
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
    COMPANIES PAY FOR PEOPLE WHO CAN BUILD {renderTextWithAdineueA("AI")} SYSTEMS{" "}
    <span className="text-[#F25E25]">
      {"\u2014"} NOT JUST PEOPLE WHO CAN USE {renderTextWithAdineueA("AI")} TOOLS.
    </span>
  </h2>

  {/* Subtitle Section */}
  <p className={`${adineue.className} mt-4 text-[18px] sm:text-[22px] text-[#55565A] font-normal tracking-tight`}>
    Knowing how to use <strong className="font-bold text-black">ChatGPT</strong>,{" "}
    <strong className="font-bold text-black">Claude</strong> or automation tools can
    make you more productive. But when companies hire AI/ML Engineers, the
    bigger question is:
  </p>

  {/* Accent Question Callout */}
  <p className={`${exo.className} sm:${adineue.className} mt-2 text-[18px] sm:text-[22px] text-[#F25E25] font-semibold tracking-tight`}>
    WHAT CAN YOU ACTUALLY BUILD?
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
