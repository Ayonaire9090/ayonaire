'use client';

import { useState } from "react";
import Image from "next/image";
import RegistrationModal from "./RegistrationModal";
import Navbar from "./Navbar";
import { sora } from "@/app/fonts";
import { CtaButton } from "./_components/CtaButton";
import { typeScale } from "./_components/type";

const VideoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F67219"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="15" height="14" x="1" y="5" rx="2" />
    <path d="m22 8-6 4 6 4V8Z" />
  </svg>
);

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      <section className="relative bg-white">
        {/* Hero wash — starts at the very top (behind the floating navbar)
            and fades out to white above the hero image */}
        <div className="relative overflow-hidden">
          <Image
            src="/assets/images/bgHero.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="pointer-events-none object-cover object-top"
          />
          {/* Bottom fade to white */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white md:h-36"
            aria-hidden="true"
          />

          <div className="container relative z-10 flex flex-col items-center pb-10 pt-24 text-center md:pb-12 md:pt-32">
            {/* Badge */}
            <span
              className={`${sora.className} inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#121315] shadow-[0_4px_16px_rgba(0,0,0,0.06)]`}
            >
              <VideoIcon />
              Free Live Masterclass
            </span>

            {/* Heading */}
            <h1
              className={`${sora.className} ${typeScale.h1} mt-6 max-w-[980px] font-bold leading-[1.18] tracking-tight text-[#121315] lg:leading-[1.14]`}
            >
              Before You Learn <span className="text-[#F25E25]">Data</span>
              <br className="hidden lg:block" />{" "}
              <span className="relative box-decoration-clone bg-[#F25E25]/10 px-2 text-[#F25E25]">
                Analytics In 2026,
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#F8A47E] md:bg-[#F25E25]"
                >
                  <span className="absolute -top-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F25E25] md:block" />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 h-[1.05em] w-[2px] -translate-y-1/2 bg-[#F8A47E] md:bg-[#F25E25]"
                >
                  <span className="absolute -bottom-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F25E25] md:block" />
                </span>
              </span>{" "}
              Know What
              <br className="hidden lg:block" /> Hiring Managers Actually Look
              For
            </h1>

            {/* Subtitle */}
            <p
              className={`${sora.className} ${typeScale.body} mt-[15px] max-w-[560px] font-semibold leading-relaxed text-[#26282B] lg:max-w-[600px]`}
            >
              Join a Senior Data Analyst, a Hiring Executive, and a Remote Data
              Analyst as they reveal the hiring standards, career roadmap, and
              mistakes that determine who gets jobs — and who never hears back.
            </p>

            {/* CTA */}
            <div className="mt-8 w-full px-2 md:w-auto md:px-0">
              <CtaButton
                size="lg"
                onClick={() => setModalOpen(true)}
                className="w-full justify-between md:w-fit md:justify-start"
              >
                Give Me Instant Access
              </CtaButton>
            </div>
          </div>
        </div>

        {/* Hero visual — on plain white, below the faded wash */}
        <div className="container relative z-10 flex flex-col items-center pb-16 pt-2 md:pb-24 md:pt-3">
          <div className="relative w-full max-w-[960px]">
            <Image
              src="/assets/images/become-data-analyst-hero.png"
              alt="Become the Data Analyst that gets hired Fast"
              width={1770}
              height={978}
              priority
              className="h-auto w-full rounded-[16px] drop-shadow-[0_24px_50px_rgba(0,0,0,0.18)] md:rounded-[24px]"
            />
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