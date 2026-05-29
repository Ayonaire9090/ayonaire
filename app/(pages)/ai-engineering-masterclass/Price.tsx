"use client";
import { useState } from "react";
import { agile, adineue, exo } from "@/app/fonts";
import RegistrationModal from "./RegisterationModal";
export default function NextStepCallout() {
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
      <section className="w-full px-6 py-6 sm:px-8 lg:px-12 flex justify-center mt-14">
        <div
          className="relative w-full rounded-[12px] overflow-hidden px-6 py-10 text-center text-white shadow-xl sm:px-12 sm:py-12"
          style={{
            background: "linear-gradient(107deg, #FFDCC4 0%, #FFDCC4 10%, #F67721 35%, #F67721 100%)",
          }}
        >
          {/* White Grid/Squares Texture Overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none bg-center bg-repeat mix-blend-overlay"
            style={{
              backgroundImage: "url('/Bg.png')",
              backgroundSize: "cover",
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center font-sans">
            {/* Top Label */}
            <span className={`${adineue.className} text-[15px ] font-bold sm:text-[24px] tracking-wider text-white mb-2 drop-shadow-sm`}>
              Original Value
            </span>

            {/* Pricing Highlight */}
            <h2 className={`${exo.className} text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-2 mb-2`}>
              <span className="text-black/80 line-through decoration-2 decoration-black/60">
                $500
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
                →
              </span>
              <span className="text-white font-black">$0 Free Today</span>
            </h2>

            {/* Subtext */}
            <p className="text-[15px] sm:text-[20px] font-medium text-white/90 tracking-wide mb-6">
              Don't miss this. Your future self will thank you.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="relative flex h-11 items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white transition-transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
              }}
            >
              <span className="text-sm whitespace-nowrap">Reserve My Free Spot</span>

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
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
