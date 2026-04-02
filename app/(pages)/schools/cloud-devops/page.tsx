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
  WhySchoolOfCloudDevOps,
  cloudDevOpsImpactData,
  whyCloudDevOpsSkills,
  cloudDevOpsMarketData,
  cloudDevOpsIndustryTestimony,
} from "@/constants";

export const metadata: Metadata = generateSEO({
  title: "School of Cloud & DevOps - Master Cloud Infrastructure | Ayonaire",
  description:
    "Launch your cloud and DevOps career with Ayonaire's School of Cloud & DevOps. Learn AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipelines through hands-on projects. Get certified and land high-paying cloud engineering jobs.",
  keywords:
    "cloud computing bootcamp, DevOps course, AWS training, Azure certification, Kubernetes course, Docker training, cloud engineer career, DevOps engineer, cloud certification, CI/CD pipelines",
  canonical: "/schools/cloud-devops",
});

// Filter courses to only include DevOps category
const schoolOfCloudDevOpsCourses = courses.filter(
  (c) => c.category === "DevOps",
);

// Inside The School Of Cloud & DevOps FAQ data
const insideSchoolOfCloudDevOpsFaqs = [
  {
    title: "Why Pursue a Career in Cloud & DevOps?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>
          Cloud and DevOps are among the most in-demand skills in tech today
        </li>
        <li>
          High earning potential with competitive salaries across all experience
          levels
        </li>
        <li>Work on critical infrastructure that powers modern applications</li>
        <li>
          Diverse career paths across startups, enterprises, fintech, and more
        </li>
        <li>Strong job security as cloud adoption accelerates globally</li>
        <li>Opportunity to build and scale systems used by millions</li>
        <li>Remote work flexibility with global demand for cloud talent</li>
        <li>
          Continuous learning with new cloud services and DevOps tools emerging
        </li>
      </ul>
    ),
  },
  {
    title:
      "What Job Opportunities Can You Expect After Completing Our Cloud & DevOps Courses?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>Cloud Engineer</li>
        <li>DevOps Engineer</li>
        <li>Site Reliability Engineer (SRE)</li>
        <li>Cloud Architect</li>
        <li>Platform Engineer</li>
        <li>Infrastructure Engineer</li>
        <li>CI/CD Engineer</li>
        <li>Kubernetes Administrator</li>
        <li>Cloud Security Engineer</li>
      </ul>
    ),
  },
];

// Component for Inside The School Of Cloud & DevOps FAQs
const InsideSchoolOfCloudDevOpsFaqs = () => {
  return (
    <AppFaqs
      titleClassName="text-base! lg:text-lg!"
      faqs={insideSchoolOfCloudDevOpsFaqs}
      initialVisibleCount={5}
    />
  );
};

export default function SchoolOfCloudDevOps() {
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
                name: "School of Cloud & DevOps",
                item: "/schools/cloud-devops",
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
                  title="Master Cloud Infrastructure & DevOps"
                  headingLevel="h1"
                  description="Build, deploy, and scale modern applications with cloud platforms and DevOps practices that power the world's leading companies."
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
                      Browse Our Cloud & DevOps Bootcamps
                    </p>
                  </Button>
                </div>
              </div>
              {/* Second Column */}
              <div className="flex w-full lg:w-[50%] self-center items-center lg:justify-end pt-8 lg:pt-0 gap-4">
                <Image
                  src="/assets/images/school-hero-img.png"
                  alt="School of Cloud & DevOps Hero - Student learning cloud infrastructure"
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
        sectionTitleDesktop="Cloud & DevOps Bootcamps Available in Our Cloud School"
        sectionTitleMobile="Cloud & DevOps Bootcamps"
        courses={schoolOfCloudDevOpsCourses}
        showAccordion={false}
        desktopGridRows={2}
      />

      {/* Brand List */}
      <BrandList
        mobileTitleClassName="text-center!"
        mobileTitleContainerClassName="text-center!"
        titleContainerClassName="max-w-[90%]!"
        sectionTitle="Our graduates are managing cloud infrastructure and DevOps pipelines at top companies across the globe"
        mobileSectionTitle="Where Our Cloud Talent Works"
      />

      {/* Why School Section */}
      <WhySchoolSection
        sectionButtonTitle="Cloud Matters"
        title="Why the School of Cloud & DevOps Exists"
        description="Cloud computing and DevOps are transforming how software is built and deployed. Yet access to quality cloud education remains limited across Africa."
        features={WhySchoolOfCloudDevOps}
      />

      {/* Impact Section */}
      <ImpactSection
        sectionButtonTitle="Our Impact"
        title="Transforming Careers Through Cloud"
        description="Every skill gained is a step toward becoming a world-class cloud professional."
        data={cloudDevOpsImpactData}
      />

      {/* Section Cloud & DevOps Skills */}
      <SchoolSkillsSection
        sectionButtonTitle="Cloud Skills"
        title="Why Cloud & DevOps Skills Matter in Today's Job Market"
        description="Cloud and DevOps skills unlock doors to high-paying infrastructure and platform engineering roles."
        skills={whyCloudDevOpsSkills}
      />

      {/* Market Data Section */}
      <MarketDataSection
        sectionButtonTitle="Market Insights"
        title="Join the Global Cloud Revolution"
        description="Cloud adoption is accelerating, and companies globally are investing in skilled cloud and DevOps professionals."
        data={cloudDevOpsMarketData}
        earningPotentialSource="Glassdoor & Levels.fyi Salary Data"
      />

      {/* Industry Testimony Section */}
      <IndustryTestimony
        sectionButtonTitle="Industry Voices"
        title="What Leaders Say About Cloud & DevOps"
        testimonies={cloudDevOpsIndustryTestimony}
      />

      {/* Recognition Section */}
      <SchoolRecognition
        sectionButtonTitle="Get Certified"
        title="Earn Your Cloud & DevOps Certification"
        description="Complete your training and receive an industry-recognized certificate that validates your cloud expertise."
        imageAlt="Cloud & DevOps Certificate"
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
            title="What Should You Expect from Our Cloud & DevOps Courses?"
            description="Our cloud courses help you build in-demand skills with hands-on labs that set you apart"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
            descriptionClassName="pt-3! text-gray-500"
          />
        </div>

        {/* Expect Carousel */}
        <AppExpectCarousel />
      </section>

      {/* Inside the School of Cloud & DevOps */}
      <section className="container section-spacing">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <AppSectionButton title="School of Cloud & DevOps" />
          <AppHeading
            headingLevel="h2"
            title="Inside The School Of Cloud & DevOps"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
          />
        </div>

        {/* FAQ Cards */}
        <InsideSchoolOfCloudDevOpsFaqs />
      </section>

      {/* Advisor Banner */}
      <AppAdvisorBanner
        title="Ready To Launch Your Cloud Career?"
        headingClassName="text-4xl lg:text-5xl"
        description="Join a community of like-minded learners and start building scalable cloud infrastructure"
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
