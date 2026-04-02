import { AppHeading } from "@/components/app-heading";
import { Header } from "@/components/layout/header";
import { BrandList } from "@/components/sections/brand-list";
import { FeaturedBrands } from "@/components/sections/featured-brands";
import { OurBootcamps } from "@/components/sections/our-bootcamps";
import { WhySchoolSection } from "@/components/sections/why-school";
import { ImpactSection } from "@/components/sections/impact-section";
import { SchoolSkillsSection } from "@/components/sections/school-skills-section";
import { MarketDataSection } from "@/components/sections/market-data-section";
import { IndustryTestimony } from "@/components/sections/industry-testimony";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SchoolRecognition } from "@/components/sections/school-recognition";
import { AppAdvisorBanner } from "@/components/appadvisor-banner";
import { AppActionButton } from "@/components/app-action-button";
import { AppSectionButton } from "@/components/app-section-button";
import { AppTestimonial2Carousel } from "@/components/app-testimonial2-carousel";
import { Faqs } from "@/components/sections/faqs";

import { AppFaqs } from "@/components/app-faqs";
import { AppExpectCarousel } from "@/components/app-expect-carousel";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import {
  courses,
  WhySchoolOfMarketing,
  marketingImpactData,
  whyMarketingSkills,
  marketingMarketData,
  marketingIndustryTestimony,
} from "@/constants";

export const metadata: Metadata = generateSEO({
  title:
    "School of Marketing - Master AI Marketing & Digital Growth | Ayonaire",
  description:
    "Launch your marketing career with Ayonaire's School of Marketing. Learn AI marketing, search marketing, SEO, social media, and performance marketing through hands-on projects. Get certified and land high-paying marketing jobs.",
  keywords:
    "digital marketing bootcamp, AI marketing course, SEO training, search marketing course, social media marketing, marketing manager career, Google Ads, Meta Ads, marketing certification, growth marketing",
  canonical: "/schools/marketing",
});

// Filter courses to only include Marketing category
const schoolOfMarketingCourses = courses.filter(
  (c) => c.category === "Marketing",
);

// Inside The School Of Marketing FAQ data
const insideSchoolOfMarketingFaqs = [
  {
    title: "Why Pursue a Career in Digital Marketing?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>
          Digital marketing is essential for every business in the modern
          economy
        </li>
        <li>
          High earning potential with competitive salaries across all experience
          levels
        </li>
        <li>Work on creative campaigns that drive real business results</li>
        <li>
          Diverse career paths across agencies, startups, e-commerce, and brands
        </li>
        <li>
          Strong job security as digital advertising spend continues to grow
        </li>
        <li>
          Opportunity to leverage AI and automation in marketing campaigns
        </li>
        <li>Remote work flexibility with global demand for marketing talent</li>
        <li>
          Continuous learning with new platforms and AI tools emerging regularly
        </li>
      </ul>
    ),
  },
  {
    title:
      "What Job Opportunities Can You Expect After Completing Our Marketing Courses?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>Digital Marketing Manager</li>
        <li>AI Marketing Specialist</li>
        <li>SEO Specialist</li>
        <li>Search Marketing Manager</li>
        <li>Social Media Manager</li>
        <li>Performance Marketing Manager</li>
        <li>Growth Marketing Manager</li>
        <li>Content Marketing Strategist</li>
        <li>Chief Marketing Officer (CMO)</li>
      </ul>
    ),
  },
];

// Component for Inside The School Of Marketing FAQs
const InsideSchoolOfMarketingFaqs = () => {
  return (
    <AppFaqs
      titleClassName="text-base! lg:text-lg!"
      faqs={insideSchoolOfMarketingFaqs}
      initialVisibleCount={5}
    />
  );
};

export default function SchoolOfMarketing() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Schools", item: "/schools" },
              { name: "School of Marketing", item: "/schools/marketing" },
            ]),
          ),
        }}
      />

      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="pl-0 basis-full">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8 my-8">
              {/* First Column */}
              <div className="flex flex-col justify-center lg:w-[50%]">
                <AppHeading
                  title="Master AI Marketing & Digital Growth"
                  headingLevel="h1"
                  description="Learn AI-powered marketing, search marketing, and data-driven strategies that drive real business results."
                  descriptionClassName="pt-6 text-[16px] lg:text-[18px] text-[#141414] "
                />

                <div className="grid grid-cols-2 lg:flex items-center gap-4 pt-12 md:py-18">
                  <Link href="/opt-in#freeAccessFormOptin">
                    <AppActionButton
                      variant="fading"
                      className="py-6 lg:py-8 text-[16px] rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group"
                    >
                      <p>Talk to us</p>
                      <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                        <ArrowRight
                          size={25}
                          className="text-primary  rounded"
                        />
                      </span>
                    </AppActionButton>
                  </Link>
                  <Button
                    variant="outline"
                    className="py-6 lg:py-8 text-[16px] rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 hover:text-white cursor-pointer"
                  >
                    <p className="block lg:hidden">Select Course</p>
                    <p className="hidden lg:block">
                      Browse Our Marketing Bootcamps
                    </p>
                  </Button>
                </div>
              </div>
              {/* Second Column */}
              <div className="flex w-full lg:w-[50%] self-center items-center lg:justify-end pt-8 lg:pt-0 gap-4">
                <Image
                  src="/assets/images/school-hero-img.png"
                  alt="School of Marketing Hero - Student learning digital marketing"
                  width={350}
                  height={350}
                  className="w-full lg:h-auto lg:max-w-[90%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Brands */}
      <FeaturedBrands
        titleClassName="text-base! lg:text-base!"
        imageClassName="w-[100px]! h-[20px]! object-contain"
        marqueeClassName="lg:hidden [--duration:30s]"
        marqueeContainerClassName="lg:hidden"
      />
      {/* Our Bootcamps */}
      <OurBootcamps
        sectionTitleDesktop="Marketing Bootcamps Available in Our Marketing School"
        sectionTitleMobile="Marketing Bootcamps"
        courses={schoolOfMarketingCourses}
        showAccordion={false}
        desktopGridRows={2}
      />

      {/* Brand List */}
      <BrandList
        mobileTitleClassName="text-center!"
        mobileTitleContainerClassName="text-center!"
        titleContainerClassName="max-w-[90%]!"
        sectionTitle="Our graduates are driving growth and leading marketing campaigns at top companies across the globe"
        mobileSectionTitle="Where Our Marketing Talent Works"
      />

      {/* Why School Section */}
      <WhySchoolSection
        sectionButtonTitle="Marketing Matters"
        title="Why the School of Marketing Exists"
        description="Digital marketing is evolving with AI and automation. Yet access to quality marketing education remains limited across Africa."
        features={WhySchoolOfMarketing}
      />

      {/* Impact Section */}
      <ImpactSection
        sectionButtonTitle="Our Impact"
        title="Transforming Careers Through Marketing"
        description="Every skill gained is a step toward becoming a growth-driving marketer."
        data={marketingImpactData}
      />

      {/* Section Marketing Skills */}
      <SchoolSkillsSection
        sectionButtonTitle="Marketing Skills"
        title="Why Marketing Skills Matter in Today's Job Market"
        description="Digital marketing skills unlock doors to creative, high-impact roles in every industry."
        skills={whyMarketingSkills}
      />

      {/* Market Data Section */}
      <MarketDataSection
        sectionButtonTitle="Market Insights"
        title="Join the Global Marketing Revolution"
        description="AI is transforming marketing, and companies globally are investing in skilled digital marketers."
        data={marketingMarketData}
        earningPotentialSource="Glassdoor & LinkedIn Salary Insights"
      />

      {/* Industry Testimony Section */}
      <IndustryTestimony
        sectionButtonTitle="Industry Voices"
        title="What Leaders Say About Marketing"
        testimonies={marketingIndustryTestimony}
      />

      {/* Recognition Section */}
      <SchoolRecognition
        sectionButtonTitle="Get Certified"
        title="Earn Your Digital Marketing Certification"
        description="Complete your training and receive an industry-recognized certificate that validates your marketing expertise."
        imageAlt="Digital Marketing Certificate"
      />

      {/* Testimonial */}
      <section className="section-spacing overflow-hidden bg-white">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <AppSectionButton title="Testimonial" />
          <AppHeading
            headingLevel="h2"
            title="Hear From Our Students"
            description="Here's what they have to say about learning with Ayonaire"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
            descriptionClassName="pt-3! text-gray-500"
          />
        </div>

        {/* Testimonials Carousel - Simple variant, no buttons */}
        <AppTestimonial2Carousel cardVariant="simple" enableButtons={false} />
      </section>

      {/* What we offer section */}
      <section className="section-spacing overflow-hidden bg-white px-2">
        <div className=" w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-4 mb-8 px-2">
          <AppSectionButton title="What We Offer" />
          <AppHeading
            headingLevel="h2"
            title="What Should You Expect from Our Marketing Courses?"
            description="Our marketing courses help you build in-demand skills with hands-on campaigns that set you apart"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
            descriptionClassName="pt-3! text-gray-500"
          />
        </div>

        {/* Expect Carousel */}
        <AppExpectCarousel />
      </section>

      {/* Inside the School of Marketing */}
      <section className="container section-spacing">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <AppSectionButton title="School of Marketing" />
          <AppHeading
            headingLevel="h2"
            title="Inside The School Of Marketing"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
          />
        </div>

        {/* FAQ Cards */}
        <InsideSchoolOfMarketingFaqs />
      </section>

      {/* Advisor Banner */}
      <AppAdvisorBanner
        title="Ready To Launch Your Marketing Career?"
        headingClassName="text-4xl lg:text-5xl"
        description="Join a community of like-minded learners and start driving growth with AI-powered marketing"
        ctaSection={
          <div className="flex justify-center items-center gap-2 lg:gap-4">
            {/* First Button */}
            <AppActionButton
              id="apply_now"
              className="bg-white text-primary p-5 lg:p-8 rounded-lg lg:rounded-xl hover:bg-white/90!"
            >
              <div className="flex justify-between items-center gap-1">
                <span className="text-sm lg:text-base">Apply Now</span>
                <div className="bg-primary rounded-md p-1 flex justify-center items-center">
                  <ArrowRight size={18} className="text-white lg:hidden" />
                  <ArrowRight
                    size={25}
                    className="text-white hidden lg:block"
                  />
                </div>
              </div>
            </AppActionButton>

            {/* Second Button */}
            <Link href="/opt-in#freeAccessFormOptin">
              <AppActionButton
                id="chat_advisor"
                variant="outline"
                className="border-white text-white p-5 lg:p-8 rounded-lg lg:rounded-xl"
              >
                <div className="flex justify-between items-center gap-1">
                  <span className="text-sm lg:text-base">
                    Chat with Advisor
                  </span>
                  <div className="bg-white rounded-md p-1 flex justify-center items-center">
                    <ArrowRight size={18} className="text-primary lg:hidden" />
                    <ArrowRight
                      size={25}
                      className="text-primary hidden lg:block"
                    />
                  </div>
                </div>
              </AppActionButton>
            </Link>
          </div>
        }
      />

      {/* Faq */}
      <Faqs />

      {/* Footer */}
      <Footer />
    </>
  );
}
