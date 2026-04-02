import { Footer } from "@/components/layout/footer";
import { HireAproach } from "@/components/sections/hire-aproach";
import { HireBrands } from "@/components/sections/hire-brands";
import { HireFeatures } from "@/components/sections/hire-features";
import { HireGetStarted } from "@/components/sections/hire-get-started";
import { HireKeyBenefits } from "@/components/sections/hire-key-benefits";
import { HireTalentHero } from "@/components/sections/hire-talent-hero";
import { HireTalentInNumbers } from "@/components/sections/hire-talent-in-numbers";
import { HireTalentPool } from "@/components/sections/hire-talent-pool";
import { HireWorkforceBanner } from "@/components/sections/hire-workforce-banner";
import { HireWorkingProcess } from "@/components/sections/hire-working-process";
import { Testimonial2 } from "@/components/sections/testimonial2";
import { WhyHire } from "@/components/sections/why-hire";
import Image from "next/image";
import React from "react";

export default function HireTalentPage() {
  return (
    <>
      {/* Hero */}
      <HireTalentHero />

      {/* Brands */}
      <HireBrands />

      {/* Features */}
      <HireFeatures />

      {/* Why Hire */}
      <WhyHire />

      {/* Hire Aproach */}
      <HireAproach />

      {/* Hire Talent Pool */}
      <HireTalentPool />

      {/* Workforce Banner */}
      <HireWorkforceBanner />

      {/* Key Benefits */}
      <HireKeyBenefits />

      {/* TalentInNumbers */}
      <HireTalentInNumbers />

      {/* Hire Working Process */}
      <HireWorkingProcess />

      {/* testimonial */}
      <Testimonial2 />

      {/* Hire get Started */}
      <HireGetStarted />

      {/* Footer With Logo Decoration */}
      <div className="relative w-full">
        {/* Logo positioned to overlap between content and footer */}
        <div className="absolute left-0 right-0 -top-16 lg:-top-48 z-10 w-full">
          <Image
            width={800}
            height={800}
            src="/assets/logos/full-logo-black.png"
            alt=""
            className="w-full h-auto object-contain opacity-5"
          />
        </div>
        <div className="absolute left-0 right-0 -top-16 lg:-top-48 z-10 w-full">
          <Image
            width={800}
            height={800}
            src="/assets/logos/full-logo-black.png"
            alt=""
            className="w-full h-auto object-contain opacity-5 invert"
          />
        </div>
        <div className="-z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
