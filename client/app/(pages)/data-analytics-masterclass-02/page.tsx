import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import WhatYoullLearn from "./WhatYoullLearn";
import WhoIsTeaching from "./WhoIsTeaching";
import WhoThisIsFor from "./WhoThisIsFor";
import RegisterBand from "./RegisterBand";
import HiringGameChanged from "./HiringGameChanged";
import FinalCTA from "./FinalCTA";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

export const metadata: Metadata = generateSEO({
  title: "Free Data Analytics Masterclass 2026 | Ayonaire Academy",
  description:
    "Join a Senior Data Analyst, a Hiring Executive, and a Remote Data Analyst as they reveal the hiring standards, career roadmap, and mistakes that determine who gets Data Analytics jobs in 2026.",
  keywords:
    "data analytics masterclass, data analyst hiring, AI-powered data analytics, remote data analyst jobs, data analytics career 2026",
  canonical: "/data-analytics-masterclass-02",
});

const DataAnalyticsMasterclass = () => {
  return (
    <main>
      <Hero />
      <WhatYoullLearn />
      <WhoThisIsFor />
      <Testimonials />
      <WhoIsTeaching />
      <RegisterBand />
      <HiringGameChanged />
      <FinalCTA />
      <div className="relative w-full mt-8">
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
    </main>
  );
};

export default DataAnalyticsMasterclass;
