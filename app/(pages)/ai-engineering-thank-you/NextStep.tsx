"use client";

import { agile, adineue, exo } from "@/app/fonts";

export default function NextStepCallout() {
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
    /* Removed padding and max-width limitations to let the card extend full-width across its horizontal container */
    <section className="w-full px-6 py-6 sm:px-8 lg:px-12 flex justify-center mt-14 ">
      <div
        className="relative w-full rounded-[12px]  overflow-hidden px-6 py-14 text-center text-white shadow-xl sm:px-12 sm:py-16"
        style={{
          /* Applied the exact linear gradient stops shown in your Figma panel color-picker */
          background: "linear-gradient(107deg, #FFDCC4 0%, #F67721 100%)",
        }}
      >
        {/* White Grid/Squares Texture Overlay (Matches the subtle square blocks in your hero asset) */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none bg-center bg-repeat mix-blend-overlay"
          style={{
            backgroundImage: "url('/Bg.png')",
            backgroundSize: "cover",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Main Header Title */}
          <h2
            className={`${exo.className} text-[22px] font-extrabold tracking-tight sm:text-4xl md:text-5xl max-w-3xl leading-tight text-black`}
          >
            Your Next Step{" "}
            <span className="font-normal text-white">Is Important</span>
          </h2>

          {/* Subtext Bundle */}
          <div className="mt-6 max-w-3xl space-y-2 text-sm font-medium leading-relaxed text-black/80 sm:text-base md:text-lg">
            <p className=" text-white">Registration alone is not enough.</p>
            <p className="font-normal text-white">
              The class link, reminders, and important updates will be shared
              with members of the community before the live session.
            </p>
            <p className="font-extrabold text-black pt-2">
              Join now so you don't miss any information about the masterclass.
            </p>
          </div>

          {/* CTA Link Button Component */}
          <a
            href="https://chat.whatsapp.com/ILzKk6IHvKSGEvPqEYshTT?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className={`${adineue.className} group relative mt-8 flex h-14 items-center gap-4 rounded-[14px] pl-7 pr-4 text-lg sm:text-lg  text-white transition-all duration-300 hover:scale-[1.03] shadow-lg`}
            style={{
              background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
            }}
          >
            <span className="text-lg sm:text-lg whitespace-nowrap">
              Reserve My Free Spot
            </span>

            <span className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-[8px] bg-white transition-transform group-hover:translate-x-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397"
                  stroke="#F67721"
                  strokeWidth="2"
                />
                <path
                  d="M0.000324288 8.62534L17.0875 8.92915"
                  stroke="#F67721"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
