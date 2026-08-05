"use client";

import { useState } from "react";
import Image from "next/image";
import RegistrationModal from "./RegistrationModal";
import { sora } from "@/app/fonts";
import { typeScale } from "./_components/type";

export default function RegisterBand() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#121315] px-4 py-8 sm:px-8 sm:py-16">
        {/* Outer Section Background Image */}
        <Image
          src="/assets/images/lgt.png"
          alt="Section Background"
          fill
          className="object-cover object-center "
          priority
        />
        <div className="absolute inset-0 bg-[#121315]/40" />

        {/* Inner Card Container */}
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 shadow-2xl border border-white/5">
          {/* Card Background Image: Changed to object-contain or adjusted opacity so logos/graphics show */}
          <Image
            src="/assets/images/bg.png"
            alt="Card Background"
            fill
            className="object-cover object-center opacity-85"
          />
          {/* Lighter overlay so the background image artwork/logo isn't hidden */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 flex max-w-3xl flex-col items-center gap-5">
            <h2
              className={`${sora.className} ${typeScale.h2} font-bold leading-tight`}
            >
              <span className="relative inline-block rounded-md bg-[#F25E25]/10 px-3 py-1 text-[#F67219]">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#e25614] md:bg-[#da501a]"
                >
                  <span className="absolute -top-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#cf4f1c] md:block" />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#e25615] md:bg-[#d34e1a]"
                >
                  <span className="absolute -bottom-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#e95318] md:block" />
                </span>
                Register before
              </span>{" "}
              <span className="text-white">
                Slots Fill Up, This is a Live Masterclass, not
                a Replay.
              </span>
            </h2>
            <p className={`${typeScale.body} text-gray-400`}>
              We keep these sessions small so there&apos;s real Q&amp;A time
              with the panel. Once it fills, registration closes.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="relative mt-2 flex h-12 items-center gap-3 rounded-[14px] pl-6 pr-2 font-bold text-white bg-gradient-to-r from-[#F67219] to-[#FFDCC4] transition-transform hover:scale-[1.02] shadow-lg"
            >
              <span className="text-sm whitespace-nowrap">
                Give Me Instant Access
              </span>
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397"
                    stroke="#F67219"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0.000324288 8.62534L17.0875 8.92915"
                    stroke="#F67219"
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
