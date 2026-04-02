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
import {
  generateSEO,
  generateSchoolOfAISchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { courses } from "@/constants";

export const metadata: Metadata = generateSEO({
  title: "School of AI - Break Into AI's Fastest Growing Careers | Ayonaire",
  description:
    "Break into AI's fastest growing careers with Ayonaire's School of AI. Learn machine learning, deep learning, generative AI, and agentic AI through real-world projects. Get certified and land high-paying AI jobs.",
  keywords:
    "AI bootcamp, machine learning course, deep learning training, generative AI, artificial intelligence career, AI engineer, data science, AI certification, AI jobs, ML engineer",
  canonical: "/schools/ai",
});

// Filter courses to only include AI category
const schoolOfAiCourses = courses.filter((c) => c.category === "AI");

// Inside The School Of AI FAQ data
const insideSchoolOfAIFaqs = [
  {
    title: "Why Pursue a Career in Artificial Intelligence?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>
          AI is one of the fastest-growing industries with exponential job
          growth
        </li>
        <li>
          High earning potential with competitive salaries across all experience
          levels
        </li>
        <li>
          Work on cutting-edge technology that shapes the future of humanity
        </li>
        <li>
          Diverse career paths across healthcare, finance, entertainment, and
          more
        </li>
        <li>Strong job security as AI becomes essential to every industry</li>
        <li>Opportunity to solve complex real-world problems at scale</li>
        <li>Remote work flexibility with global demand for AI talent</li>
        <li>
          Continuous learning and intellectual stimulation in a dynamic field
        </li>
      </ul>
    ),
  },
  {
    title:
      "What Job Opportunities Can You Expect After Completing Our AI Courses?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>Artificial Intelligence Engineer</li>
        <li>Machine Learning Engineer</li>
        <li>Python Programmer Engineer</li>
        <li>Generative AI Engineer</li>
        <li>Data Scientist</li>
        <li>AI Research Associate</li>
        <li>Agentic AI Engineer</li>
        <li>AI Product Engineer</li>
        <li>NLP or Computer Vision Specialist</li>
      </ul>
    ),
  },
];

// Component for Inside The School Of AI FAQs
const InsideSchoolOfAIFaqs = () => {
  return (
    <AppFaqs
      titleClassName="text-base! lg:text-lg!"
      faqs={insideSchoolOfAIFaqs}
      initialVisibleCount={5}
    />
  );
};

export default function SchoolOfAI() {
  return (
    <>
      {/* Structured Data for School of AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchoolOfAISchema()),
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Schoools", item: "/schools" },
              { name: "School of AI", item: "/schools/ai" },
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
                  title="Break Into AI's Fastest Growing Careers"
                  headingLevel="h1"
                  description="Gain real-world AI skills and earn certifications that get you hired, all guided by top experts."
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
                    <p className="hidden lg:block">Browse Our AI Bootcamps</p>
                  </Button>
                </div>
              </div>
              {/* Second Column */}
              <div className="flex w-full lg:w-[50%] self-center items-center lg:justify-end pt-8 lg:pt-0 gap-4">
                <Image
                  src="/assets/images/school-hero-img.png"
                  alt="School of AI Hero - Student learning AI"
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
        sectionTitleDesktop="AI Bootcamps Available in Our AI School"
        sectionTitleMobile="AI Bootcamps Available in Our AI School"
        courses={schoolOfAiCourses}
        showAccordion={false}
        desktopGridRows={2}
      />

      {/* Brand List */}
      <BrandList
        mobileTitleClassName="text-center!"
        mobileTitleContainerClassName="text-center!"
        titleContainerClassName="max-w-[90%]!"
        sectionTitle="Our graduates are building and deploying real-world AI solutions at top companies across the globe"
        mobileSectionTitle="Where Our AI Talent Works"
      />

      {/* Why School Section */}
      <WhySchoolSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Section AI Skills */}
      <SchoolSkillsSection />

      {/* Market Data Section */}
      <MarketDataSection />

      {/* Industry Testimony Section */}
      <IndustryTestimony />

      {/* Recognition Section */}
      <SchoolRecognition />

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
            title="What Should You Expect from Our AI Courses?"
            description="Our AI courses help you build in-demand skills with hands-on experience that sets you apart"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
            descriptionClassName="pt-3! text-gray-500"
          />
        </div>

        {/* Expect Carousel */}
        <AppExpectCarousel />
      </section>

      {/* Inside the School of AI */}
      <section className="container section-spacing">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <AppSectionButton title="School of AI" />
          <AppHeading
            headingLevel="h2"
            title="Inside The School Of AI"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
          />
        </div>

        {/* FAQ Cards */}
        <InsideSchoolOfAIFaqs />
      </section>

      {/* Advisor Banner */}
      <AppAdvisorBanner
        title="Ready To Launch Into The AI Industry?"
        headingClassName="text-4xl lg:text-5xl"
        description="Join a community of Like-minded  Learners And  Start Building AI Systems"
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
