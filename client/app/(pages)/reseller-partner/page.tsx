import { Footer } from "@/components/layout/footer";
import { ResellerBanner } from "@/components/sections/reseller-banner";
import { ResellerNotes } from "@/components/sections/reseller-notes";
import { ResellerPartnerHero } from "@/components/sections/reseller-partner-hero";
import { ResellerTimeline } from "@/components/sections/reseller-timeline";
import { ResellerWhoCanJoin } from "@/components/sections/reseller-who-can-join";
import { ResellerWhoToHelp } from "@/components/sections/reseller-who-to-help";
import { ResellerWhyBecomePartner } from "@/components/sections/reseller-why-become-partner";
import { Testimonial2 } from "@/components/sections/testimonial2";
import Image from "next/image";
import React from "react";

export default function ResellerPartner() {
  return (
    <>
      {/* Hero */}
      <ResellerPartnerHero />

      {/* Why Become Partner */}
      <ResellerWhyBecomePartner />

      {/* Who To Help */}
      <ResellerWhoToHelp />

      {/* Who Can Join */}
      <ResellerWhoCanJoin />

      {/* Testimonial */}
      <Testimonial2 />

      {/* Timeline */}
      <ResellerTimeline />

      {/* Banner */}
      <ResellerBanner />

      {/* Infos and warnings */}
      <ResellerNotes />

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
