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
  WhySchoolOfEngineering,
  engineeringImpactData,
  whyEngineeringSkills,
  engineeringMarketData,
  engineeringIndustryTestimony,
} from "@/constants";

export const metadata: Metadata = generateSEO({
  title:
    "School of Software Engineering - Build the Future with Code | Ayonaire",
  description:
    "Launch your software engineering career with Ayonaire's School of Engineering. Learn full-stack development, Python, React, Node.js, and DevOps through hands-on projects. Get certified and land high-paying developer jobs.",
  keywords:
    "software engineering bootcamp, full-stack development course, Python training, React course, Node.js training, web developer career, software engineer, coding certification, developer jobs, programming",
  canonical: "/schools/software-engineering",
});

// Filter courses to only include Engineering category
const schoolOfEngineeringCourses = courses.filter(
  (c) => c.category === "Engineering",
);

// Inside The School Of Engineering FAQ data
const insideSchoolOfEngineeringFaqs = [
  {
    title: "Why Pursue a Career in Software Engineering?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>
          Software engineering is the foundation of every digital product and
          service
        </li>
        <li>
          High earning potential with competitive salaries across all experience
          levels
        </li>
        <li>Work on innovative products that millions of people use daily</li>
        <li>
          Diverse career paths across startups, enterprises, fintech, and more
        </li>
        <li>
          Strong job security as software becomes essential to every industry
        </li>
        <li>Opportunity to build solutions that solve real-world problems</li>
        <li>Remote work flexibility with global demand for developer talent</li>
        <li>
          Continuous learning with new frameworks and technologies emerging
          regularly
        </li>
      </ul>
    ),
  },
  {
    title:
      "What Job Opportunities Can You Expect After Completing Our Engineering Courses?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>Full-Stack Developer</li>
        <li>Frontend Developer</li>
        <li>Backend Developer</li>
        <li>Python Developer</li>
        <li>Software Engineer</li>
        <li>Web Developer</li>
        <li>Mobile App Developer</li>
        <li>DevOps Engineer</li>
        <li>Technical Lead</li>
      </ul>
    ),
  },
];

// Component for Inside The School Of Engineering FAQs
const InsideSchoolOfEngineeringFaqs = () => {
  return (
    <AppFaqs
      titleClassName="text-base! lg:text-lg!"
      faqs={insideSchoolOfEngineeringFaqs}
      initialVisibleCount={5}
    />
  );
};

export default function SchoolOfEngineering() {
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
                name: "School of Software Engineering",
                item: "/schools/software-engineering",
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
                  title="Build the Future with Code"
                  headingLevel="h1"
                  description="Master full-stack development, modern frameworks, and DevOps skills that top tech companies are hiring for right now."
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
                      Browse Our Engineering Bootcamps
                    </p>
                  </Button>
                </div>
              </div>
              {/* Second Column */}
              <div className="flex w-full lg:w-[50%] self-center items-center lg:justify-end pt-8 lg:pt-0 gap-4">
                <Image
                  src="/assets/images/school-hero-img.png"
                  alt="School of Software Engineering Hero - Student learning to code"
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
        sectionTitleDesktop="Softeware Engineering Bootcamps Available in Our Engineering School"
        sectionTitleMobile="Software Engineering Bootcamps"
        courses={schoolOfEngineeringCourses}
        showAccordion={false}
        desktopGridRows={2}
      />

      {/* Brand List */}
      <BrandList
        mobileTitleClassName="text-center!"
        mobileTitleContainerClassName="text-center!"
        titleContainerClassName="max-w-[90%]!"
        sectionTitle="Our graduates are building and shipping production-ready software at top companies across the globe"
        mobileSectionTitle="Where Our Engineers Work"
      />

      {/* Why School Section */}
      <WhySchoolSection
        sectionButtonTitle="Code Matters"
        title="Why the School of Software Engineering Exists"
        description="Software powers every digital experience today. Yet access to quality programming education remains limited across Africa."
        features={WhySchoolOfEngineering}
      />

      {/* Impact Section */}
      <ImpactSection
        sectionButtonTitle="Our Impact"
        title="Transforming Careers Through Code"
        description="Every line of code learned is a step toward becoming a world-class developer."
        data={engineeringImpactData}
      />

      {/* Section Engineering Skills */}
      <SchoolSkillsSection
        sectionButtonTitle="Dev Skills"
        title="Why Software Engineering Skills Matter in Today's Job Market"
        description="Software development skills unlock doors to stable, high-earning careers in the digital economy."
        skills={whyEngineeringSkills}
      />

      {/* Market Data Section */}
      <MarketDataSection
        sectionButtonTitle="Market Insights"
        title="Join the Global Developer Community"
        description="Software is transforming every industry, and companies globally are investing in skilled developers."
        data={engineeringMarketData}
        earningPotentialSource="Glassdoor & Stack Overflow Developer Survey"
      />

      {/* Industry Testimony Section */}
      <IndustryTestimony
        sectionButtonTitle="Industry Voices"
        title="What Leaders Say About Software"
        testimonies={engineeringIndustryTestimony}
      />

      {/* Recognition Section */}
      <SchoolRecognition
        sectionButtonTitle="Get Certified"
        title="Earn Your Software Engineering Certification"
        description="Complete your training and receive an industry-recognized certificate that validates your development expertise."
        imageAlt="Software Engineering Certificate"
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
            title="What Should You Expect from Our Engineering Courses?"
            description="Our engineering courses help you build production-ready skills with hands-on experience that sets you apart"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
            descriptionClassName="pt-3! text-gray-500"
          />
        </div>

        {/* Expect Carousel */}
        <AppExpectCarousel />
      </section>

      {/* Inside the School of Engineering */}
      <section className="container section-spacing">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <AppSectionButton title="School of Engineering" />
          <AppHeading
            headingLevel="h2"
            title="Inside The School Of Software Engineering"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
          />
        </div>

        {/* FAQ Cards */}
        <InsideSchoolOfEngineeringFaqs />
      </section>

      {/* Advisor Banner */}
      <AppAdvisorBanner
        title="Ready To Launch Your Developer Career?"
        headingClassName="text-4xl lg:text-5xl"
        description="Join a community of like-minded learners and start building real-world applications"
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
