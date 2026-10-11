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
  WhySchoolOfCybersecurity,
  cybersecurityImpactData,
  whyCybersecuritySkills,
  cybersecurityMarketData,
  cybersecurityIndustryTestimony,
} from "@/constants";

export const metadata: Metadata = generateSEO({
  title: "School of Cybersecurity - Defend the Digital World | Ayonaire",
  description:
    "Launch your cybersecurity career with Ayonaire's School of Cybersecurity. Learn ethical hacking, penetration testing, network security, and incident response through hands-on labs. Get certified and land high-paying security jobs.",
  keywords:
    "cybersecurity bootcamp, ethical hacking course, penetration testing training, network security course, information security career, security analyst, cybersecurity certification, security jobs, CEH training",
  canonical: "/schools/cybersecurity",
});

// Filter courses to only include Cybersecurity category
const schoolOfCybersecurityCourses = courses.filter(
  (c) => c.category === "Security",
);

// Inside The School Of Cybersecurity FAQ data
const insideSchoolOfCybersecurityFaqs = [
  {
    title: "Why Pursue a Career in Cybersecurity?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>
          Cybersecurity is one of the fastest-growing industries with massive
          talent shortage
        </li>
        <li>
          High earning potential with competitive salaries across all experience
          levels
        </li>
        <li>
          Work on critical missions protecting organizations and individuals
          from cyber threats
        </li>
        <li>
          Diverse career paths across finance, healthcare, government, and tech
        </li>
        <li>Strong job security as cyber threats continue to evolve</li>
        <li>Opportunity to become a digital defender and ethical hacker</li>
        <li>Remote work flexibility with global demand for security talent</li>
        <li>
          Continuous learning with new attack vectors and defense strategies
          emerging
        </li>
      </ul>
    ),
  },
  {
    title:
      "What Job Opportunities Can You Expect After Completing Our Cybersecurity Courses?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>Cybersecurity Analyst</li>
        <li>Penetration Tester</li>
        <li>Ethical Hacker</li>
        <li>Security Engineer</li>
        <li>Incident Response Analyst</li>
        <li>Security Operations Center (SOC) Analyst</li>
        <li>Network Security Engineer</li>
        <li>Security Consultant</li>
        <li>Chief Information Security Officer (CISO)</li>
      </ul>
    ),
  },
];

// Component for Inside The School Of Cybersecurity FAQs
const InsideSchoolOfCybersecurityFaqs = () => {
  return (
    <AppFaqs
      titleClassName="text-base! lg:text-lg!"
      faqs={insideSchoolOfCybersecurityFaqs}
      initialVisibleCount={5}
    />
  );
};

export default function SchoolOfCybersecurity() {
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
              {
                name: "School of Cybersecurity",
                item: "/schools/cybersecurity",
              },
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
                  title="Defend the Digital World"
                  headingLevel="h1"
                  description="Master ethical hacking, penetration testing, and security operations skills that organizations are desperately hiring for."
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
                      Browse Our Security Bootcamps
                    </p>
                  </Button>
                </div>
              </div>
              {/* Second Column */}
              <div className="flex w-full lg:w-[50%] self-center items-center lg:justify-end pt-8 lg:pt-0 gap-4">
                <Image
                  src="/assets/images/school-hero-img.png"
                  alt="School of Cybersecurity Hero - Student learning security"
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
        sectionTitleDesktop="Cybersecurity Bootcamps Available in Our Security School"
        sectionTitleMobile="Cybersecurity Bootcamps"
        courses={schoolOfCybersecurityCourses}
        showAccordion={false}
        desktopGridRows={2}
      />

      {/* Brand List */}
      <BrandList
        mobileTitleClassName="text-center!"
        mobileTitleContainerClassName="text-center!"
        titleContainerClassName="max-w-[90%]!"
        sectionTitle="Our graduates are protecting systems and networks at top organizations across the globe"
        mobileSectionTitle="Where Our Security Talent Works"
      />

      {/* Why School Section */}
      <WhySchoolSection
        sectionButtonTitle="Security Matters"
        title="Why the School of Cybersecurity Exists"
        description="Cyber threats are evolving faster than ever. Yet access to quality cybersecurity education remains limited across Africa."
        features={WhySchoolOfCybersecurity}
      />

      {/* Impact Section */}
      <ImpactSection
        sectionButtonTitle="Our Impact"
        title="Transforming Careers Through Security"
        description="Every skill gained is a step toward becoming a digital defender."
        data={cybersecurityImpactData}
      />

      {/* Section Cybersecurity Skills */}
      <SchoolSkillsSection
        sectionButtonTitle="Security Skills"
        title="Why Cybersecurity Skills Matter in Today's Job Market"
        description="Cybersecurity skills unlock doors to stable, high-earning careers in a threat-filled digital landscape."
        skills={whyCybersecuritySkills}
      />

      {/* Market Data Section */}
      <MarketDataSection
        sectionButtonTitle="Market Insights"
        title="Join the Global Cybersecurity Frontline"
        description="Cyber threats are increasing, and organizations globally are investing heavily in skilled security professionals."
        data={cybersecurityMarketData}
        earningPotentialSource="Glassdoor & CyberSeek Salary Data"
      />

      {/* Industry Testimony Section */}
      <IndustryTestimony
        sectionButtonTitle="Industry Voices"
        title="What Leaders Say About Cybersecurity"
        testimonies={cybersecurityIndustryTestimony}
      />

      {/* Recognition Section */}
      <SchoolRecognition
        sectionButtonTitle="Get Certified"
        title="Earn Your Cybersecurity Professional Certification"
        description="Complete your training and receive an industry-recognized certificate that validates your security expertise."
        imageAlt="Cybersecurity Professional Certificate"
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
            title="What Should You Expect from Our Cybersecurity Courses?"
            description="Our cybersecurity courses help you build in-demand skills with hands-on labs that set you apart"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
            descriptionClassName="pt-3! text-gray-500"
          />
        </div>

        {/* Expect Carousel */}
        <AppExpectCarousel />
      </section>

      {/* Inside the School of Cybersecurity */}
      <section className="container section-spacing">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <AppSectionButton title="School of Cybersecurity" />
          <AppHeading
            headingLevel="h2"
            title="Inside The School Of Cybersecurity"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
          />
        </div>

        {/* FAQ Cards */}
        <InsideSchoolOfCybersecurityFaqs />
      </section>

      {/* Advisor Banner */}
      <AppAdvisorBanner
        title="Ready To Launch Your Security Career?"
        headingClassName="text-4xl lg:text-5xl"
        description="Join a community of like-minded learners and start defending the digital world"
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
