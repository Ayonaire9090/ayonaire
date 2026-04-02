import { AboutCoreValues } from "@/components/sections/about-core-values";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutOurGoal } from "@/components/sections/about-our-goal";
import { AboutWeStandFor } from "@/components/sections/about-we-stand-for";
import { AboutWhoWeAre } from "@/components/sections/about-who-we-are";
import { AboutImpact } from "@/components/sections/about-impact";
import React from "react";
import { AboutDifference } from "@/components/sections/about-difference";
import { AboutCulture } from "@/components/sections/about-culture";
import { AboutStory } from "@/components/sections/about-story";
import { AboutTeam } from "@/components/sections/about-team";
import { AboutContact } from "@/components/sections/about-contact";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <AboutHero />

      {/* Who We Are */}
      <AboutWhoWeAre />

      {/* Our Goal */}
      <AboutOurGoal />

      {/* Core Values */}
      <AboutCoreValues />

      {/* We Stand For */}
      <AboutWeStandFor />

      {/* Culture */}
      <AboutCulture />

      {/* Impact */}
      <AboutImpact />

      {/* Difference */}
      <AboutDifference />

      {/* Story */}
      <AboutStory />

      {/* Team */}
      <AboutTeam />

      {/* Contact */}
      <AboutContact />

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
