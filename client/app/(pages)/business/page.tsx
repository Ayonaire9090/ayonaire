import { BusinessCaseStudy } from "@/components/sections/business-case-study";
import { BusinessDeliverValue } from "@/components/sections/business-deliver-value";
import { BusinessHero } from "@/components/sections/business-hero";
import { BusinessTestimonials } from "@/components/sections/business-testimonials";
import { BusinessTrustedBy } from "@/components/sections/business-trusted-by";
import { BusinessWeHelp } from "@/components/sections/business-we-help";
import { BusinessWhyPartner } from "@/components/sections/business-why-partner";
import { Faqs } from "@/components/sections/faqs";
import { GetStartedBootCamp } from "@/components/sections/get-started-bootcamp";
import React from "react";
import { BusinessBanner } from "@/components/sections/business-banner";
import { BusinessHire } from "@/components/sections/business-hire";
import { Footer } from "@/components/layout/footer";

const BusinessPage = () => {
  return (
    <>
      {/* Hero */}
      <BusinessHero />

      {/* Trusted By */}
      <BusinessTrustedBy />

      {/* Why Partner */}
      <BusinessWhyPartner />

      {/* We Help */}
      <BusinessWeHelp />

      {/* Bootcamp */}
      <GetStartedBootCamp
        showStats
        sectionButtonTitle="Top Corporate Courses"
        headingTitle="Our Top Corporate Learning Tracks"
        headingDescription="Empower your team with in-demand, industry-aligned courses designed for growth and performance."
      />

      {/* Deliver Value */}
      <BusinessDeliverValue />

      {/* CaseStudy */}
      <BusinessCaseStudy />

      {/* Testimonials */}
      <BusinessTestimonials />

      {/* Faq */}
      <Faqs />

      {/* Banner */}
      <BusinessBanner />

      {/* Hire */}
      <BusinessHire />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BusinessPage;
