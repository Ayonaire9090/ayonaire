import React from "react";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { generateSEO } from "@/lib/seo";
import { Metadata } from "next";
import { AppConfetti } from "@/components/app-confetti";
import { sora } from "@/app/fonts";
import { CtaButton } from "./_components/CtaButton";

const WHATSAPP_LINK = "https://chat.whatsapp.com/IiKWjbdHhXJLM428Lbn9lA?s=cl&p=i&ilr=0"; 

export const metadata: Metadata = generateSEO({
  title: "Thank You - Data Analytics Masterclass | Ayonaire Academy",
  description:
    "You've successfully registered for the Free Data Analytics Masterclass 2026. Join the WhatsApp community to get the class link and updates.",
  keywords:
    "thank you, data analytics masterclass, confirmation, Ayonaire community",
  canonical: "/data-analytics-thank-you-02",
  noIndex: true,
});

export default function DataAnalyticsThankYou() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* Peach wash base */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, #FBE7DA 0%, #FDF0E7 55%, #FEF7F2 100%)",
          }}
        />
        {/* Soft vertical bars */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(248,100,50,0.10) 0px, rgba(248,100,50,0.01) 34px, rgba(248,100,50,0.01) 56px, rgba(248,100,50,0.10) 90px)",
          }}
        />
        {/* Center glow behind content */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(55% 70% at 50% 48%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div className="container relative z-10 flex flex-col items-center justify-center py-12 md:h-[614px] md:py-0">
          {/* Confetti */}
          <AppConfetti />

          {/* Party popper */}
          <Image
            src="/assets/icons/party-popper.svg"
            alt=""
            width={140}
            height={140}
            priority
            className="h-[120px] w-[120px] object-contain md:h-[140px] md:w-[140px]"
          />

          {/* Badge */}
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#F67219]/30 bg-[#FFF3EA] px-4 py-1.5 text-sm font-medium text-[#F67721] shadow-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F67721"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
              <path d="M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2L12 8z" fill="#F67721" stroke="none" />
            </svg>
            <span className="hidden md:inline">You&apos;re one step away!</span>
            <span className="md:hidden">Thank You — You&apos;re In!</span>
          </span>

          {/* Heading */}
          <h1
            className={`${sora.className} mt-6 max-w-3xl text-center text-[26px] font-black uppercase leading-[1.15] tracking-tight text-[#121315] sm:text-[34px] md:text-[40px]`}
          >
            <span className="block text-[#F25E25] md:inline">
              Congratulations,
            </span>{" "}
            Your Registration is Successful.
          </h1>

          {/* Subtext */}
          <p
            className={`${sora.className} mt-5 text-center text-base font-semibold text-[#121315] md:text-lg`}
          >
            But your next step is IMPORTANT!
          </p>

          {/* CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 w-full px-2 md:w-auto md:px-0"
          >
            <CtaButton
              size="lg"
              className="w-full justify-between md:w-fit md:justify-start"
              labelClassName="text-[12px] min-[400px]:text-[13px] md:text-sm"
            >
              TAKE ME TO THE COMMUNITY NOW!
            </CtaButton>
          </a>
        </div>
      </section>

      {/* ===== Successfully Registered ===== */}
      <section className="relative z-10 mt-10 bg-[#0B0C0D] px-4 py-6 md:mt-24 md:px-16 md:py-16">
        <div className="relative mx-auto max-w-[1290px] overflow-hidden rounded-[24px] bg-[#191A1C] px-6 py-12 text-center md:rounded-[32px] md:px-12 md:py-20">
          {/* Ring decorations */}
          {/* Ring up — arc bleeding off the upper right edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[150px] -top-[100px] h-[260px] w-[260px] rounded-full border-[3px] border-[#3A3B3D] md:-right-[280px] md:-top-[180px] md:h-[480px] md:w-[480px] md:border-4"
          />
          {/* Ring under — arc at the bottom-left corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[190px] -left-[110px] h-[260px] w-[260px] rounded-full border-[3px] border-[#3A3B3D] md:-bottom-[370px] md:-left-[200px] md:h-[500px] md:w-[500px] md:border-4"
          />
          {/* Diagonal accent line — bottom-right corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 right-6 h-10 w-[2px] origin-bottom rotate-[25deg] bg-[#3A3B3D] md:bottom-16 md:right-14 md:h-20 md:w-[2px]"
          />

          <h2 className={`${sora.className} mx-auto max-w-[850px] text-[24px] font-bold leading-snug text-white md:text-[40px]`}>
            You have{" "}
            <span className="relative box-decoration-clone bg-white/10 px-1.5 text-[#F25E25] md:px-2">
              successfully registered
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 hidden w-[2px] bg-[#F25E25] md:block"
              />
              <span
                aria-hidden="true"
                className="absolute inset-y-0 right-0 hidden w-[2px] bg-[#F25E25] md:block"
              />
            </span>{" "}
            for the Free AI-Data Analysis Masterclass.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-400 md:text-lg">
            But Registration alone is not enough.
            <br />
            The class link, reminders, and important updates will be shared
            with members of the community before the live session.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-full md:w-auto"
          >
            <CtaButton
              size="lg"
              className="w-full justify-between md:w-fit md:justify-start"
              labelClassName="text-[12px] min-[400px]:text-[13px] md:text-sm"
            >
              TAKE ME TO THE COMMUNITY NOW!
            </CtaButton>
          </a>
        </div>
      </section>

      {/* Footer With Logo Decoration */}
      <div className="relative w-full">
        {/* Watermark logo peeking above the footer */}
        <div className="pointer-events-none absolute left-0 right-0 -top-16 z-0 w-full lg:-top-48">
          <Image
            width={800}
            height={800}
            src="/assets/logos/full-logo-black.png"
            alt=""
            className="w-full h-auto object-contain opacity-5"
          />
        </div>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
