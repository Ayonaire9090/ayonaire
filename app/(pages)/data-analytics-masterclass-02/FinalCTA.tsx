"use client";
import { useState } from "react";
import { Video, Calendar, Clock, Wallet } from "lucide-react";
import RegistrationModal from "./RegistrationModal";
import { baiJamjuree } from "@/app/fonts";

const sessionDetails = [
  {
    icon: Video,
    label: "Venue",
    value: "YouTube Live",
    sub: "@Ayonaire Academy",
  },
  {
    icon: Calendar,
    label: "Date",
    value: "15th August, 2026",
    sub: "Saturday",
  },
  {
    icon: Clock,
    label: "Time",
    value: "7PM WAT",
    sub: "GMT +1",
  },
  {
    icon: Wallet,
    label: "Fee",
    value: "100% Free",
    sub: "Limited Access",
  },
];

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full px-6 py-6 sm:px-8 lg:px-12 flex justify-center mt-4">
        <div className="relative w-full rounded-[12px] overflow-hidden bg-[#121315] px-6 py-10 text-center text-white shadow-xl sm:px-12 sm:py-12">
          <div
            className="absolute inset-0 opacity-15 pointer-events-none bg-center bg-repeat mix-blend-overlay"
            style={{
              backgroundImage: "url('/Bg.png')",
              backgroundSize: "cover",
            }}
          />

          <div className="relative z-10 flex flex-col items-center font-sans">
            <h2 className={`${baiJamjuree.className} text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3`}>
              Get Instant <span className="text-[#F67219]">Access</span>
            </h2>

            <p className="max-w-2xl text-[15px] sm:text-lg font-medium text-white/95 tracking-wide mb-6">
              This free session gives more than most $200 masterclasses out there. The feedback says it all.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="relative flex h-11 items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white bg-[#F67219] transition-transform hover:scale-[1.02] shadow-xl"
            >
              <span className="text-sm whitespace-nowrap">Give Me Instant Access</span>

              <span className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397" stroke="#F67219" strokeWidth="1.5" />
                  <path d="M0.000324288 8.62534L17.0875 8.92915" stroke="#F67219" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full px-6 pb-16 sm:px-8 lg:px-12 flex justify-center">
        <div className="w-full max-w-6xl">
          <h3 className={`${baiJamjuree.className} mb-8 text-center text-3xl sm:text-4xl font-bold text-[#121315]`}>
            Live Session Details
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {sessionDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.label}
                  className="flex flex-col items-center gap-3 rounded-xl bg-[#F67219]/10 p-6 text-center"
                >
                  <span className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#F67219]/10">
                    <Icon size={30} strokeWidth={1.75} className="text-[#F67219]" />
                  </span>
                  <span className="text-sm text-gray-500">{detail.label}</span>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-black">{detail.value}</p>
                    <p className="text-sm sm:text-base text-[#F67219]">{detail.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
