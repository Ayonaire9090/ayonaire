import { BrandList } from "@/components/sections/brand-list";
import { FeaturedBrands } from "@/components/sections/featured-brands";
import { Hero } from "@/components/sections/hero";
import { OurBootcamps } from "@/components/sections/our-bootcamps";
import { Reviews } from "@/components/sections/reviews";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { SurveyPopup } from "@/components/sections/survey-popup";
import { IncludedFeatures } from "@/components/sections/included-features";
import { NewFeatures } from "@/components/sections/new-features";
import { LargeTextMarquee } from "@/components/sections/large-text-marquee";
import { Testimonial2 } from "@/components/sections/testimonial2";
import { OurMission } from "@/components/sections/our-mission";
import { HomeActionBanner } from "@/components/sections/home-action-banner";
import { OurProcess } from "@/components/sections/our-process";
import { Faqs } from "@/components/sections/faqs";
import { Footer } from "@/components/layout/footer";
import { generateOrganizationSchema, generateSEO } from "@/lib/seo";
import { Metadata } from "next";
import ChatbotWidget from "@/components/chatbot";

export const metadata: Metadata = generateSEO({
  title: "Ayonaire - Build a Future-Proof Career in Tech",
  description:
    "Future-proof your career with Ayonaire's cutting-edge tech training. Learn AI, Machine Learning, Full-Stack Development, and emerging technologies through real-world projects that land you your dream tech job.",
  keywords:
    "tech training, bootcamp, AI engineering, data science, software engineering, online learning, career transformation",
  canonical: "/",
});

export default function Home() {
  // Generate structured data for the organization
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero showPersons={false} />
      <FeaturedBrands
        titleClassName="text-base! lg:text-base!"
        imageClassName="w-[100px]! h-[20px]! object-contain"
        marqueeClassName="lg:hidden [--duration:30s]"
        marqueeContainerClassName="lg:hidden"
      />
      <Reviews />
      <OurBootcamps />
      <SurveyPopup mode="section" />
      <BrandList
        sectionTitle="Our Talents Have Worked With Many of These Top Leading Companies"
        mobileSectionTitle="Our Talents Have Worked With Many of These Top Leading Companies"
        mobileTitleClassName="font-medium! text-[20px]!"
      />
      <WhyChooseUs />
      <IncludedFeatures />
      <NewFeatures />
      <LargeTextMarquee />
      <div className="hidden lg:block py-8">
        <HomeActionBanner variant="primary" />
      </div>
      <Testimonial2 />
      <OurMission />
      <OurProcess />
      {/* Mobile Action Banner */}
      <div className="block lg:hidden pt-8">
        <HomeActionBanner variant="secondary" />
      </div>
      <Faqs />
      <SurveyPopup mode="popup" />
      {/* Chatbot Widget */}
      <ChatbotWidget />
      <Footer />
    </>
  );
}
