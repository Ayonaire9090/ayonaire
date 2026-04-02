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
  WhySchoolOfData,
  dataImpactData,
  whyDataSkills,
  dataMarketData,
  dataIndustryTestimony,
} from "@/constants";

export const metadata: Metadata = generateSEO({
  title: "School of Data - Master Data Analytics & Data Science | Ayonaire",
  description:
    "Launch your data career with Ayonaire's School of Data. Learn data analytics, data science, SQL, Python, Power BI, and Tableau through hands-on projects. Get certified and land high-paying data jobs.",
  keywords:
    "data analytics bootcamp, data science course, SQL training, Power BI course, Tableau training, data analyst career, data scientist, data certification, data jobs, business intelligence",
  canonical: "/schools/data",
});

// Filter courses to only include Data category
const schoolOfDataCourses = courses.filter((c) => c.category === "Data");

// Inside The School Of Data FAQ data
const insideSchoolOfDataFaqs = [
  {
    title: "Why Pursue a Career in Data Analytics & Data Science?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>
          Data is one of the fastest-growing industries with consistent job
          growth
        </li>
        <li>
          High earning potential with competitive salaries across all experience
          levels
        </li>
        <li>
          Work with cutting-edge tools that drive business decisions worldwide
        </li>
        <li>
          Diverse career paths across healthcare, finance, retail, tech, and
          more
        </li>
        <li>Strong job security as data becomes essential to every industry</li>
        <li>Opportunity to uncover insights that solve real-world problems</li>
        <li>Remote work flexibility with global demand for data talent</li>
        <li>
          Continuous learning with new tools and techniques emerging regularly
        </li>
      </ul>
    ),
  },
  {
    title:
      "What Job Opportunities Can You Expect After Completing Our Data Courses?",
    description: (
      <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
        <li>Data Analyst</li>
        <li>Data Scientist</li>
        <li>Business Intelligence Analyst</li>
        <li>Data Engineer</li>
        <li>Database Administrator</li>
        <li>Analytics Consultant</li>
        <li>Power BI / Tableau Developer</li>
        <li>SQL Developer</li>
        <li>Data Visualization Specialist</li>
      </ul>
    ),
  },
];

// Component for Inside The School Of Data FAQs
const InsideSchoolOfDataFaqs = () => {
  return (
    <AppFaqs
      titleClassName="text-base! lg:text-lg!"
      faqs={insideSchoolOfDataFaqs}
      initialVisibleCount={5}
    />
  );
};

export default function SchoolOfData() {
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
              { name: "School of Data", item: "/schools/data" },
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
                  title="Transform Data Into Career-Defining Opportunities"
                  headingLevel="h1"
                  description="Master data analytics, visualization, and business intelligence skills that top companies are hiring for right now."
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
                    <p className="hidden lg:block">Browse Our Data Bootcamps</p>
                  </Button>
                </div>
              </div>
              {/* Second Column */}
              <div className="flex w-full lg:w-[50%] self-center items-center lg:justify-end pt-8 lg:pt-0 gap-4">
                <Image
                  src="/assets/images/school-hero-img.png"
                  alt="School of Data Hero - Student learning data analytics"
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
        sectionTitleDesktop="Data Bootcamps Available in Our Data School"
        sectionTitleMobile="Data Bootcamps Available in Our Data School"
        courses={schoolOfDataCourses}
        showAccordion={false}
        desktopGridRows={2}
      />

      {/* Brand List */}
      <BrandList
        mobileTitleClassName="text-center!"
        mobileTitleContainerClassName="text-center!"
        titleContainerClassName="max-w-[90%]!"
        sectionTitle="Our graduates are analyzing data and driving insights at top companies across the globe"
        mobileSectionTitle="Where Our Data Talent Works"
      />

      {/* Why School Section */}
      <WhySchoolSection
        sectionButtonTitle="Data Matters"
        title="Why the School of Data Exists"
        description="Data is driving every major business decision today. Yet access to quality data education remains limited across Africa."
        features={WhySchoolOfData}
      />

      {/* Impact Section */}
      <ImpactSection
        sectionButtonTitle="Our Impact"
        title="Transforming Careers Through Data"
        description="Every skill gained is a step toward becoming a data-driven leader."
        data={dataImpactData}
      />

      {/* Section Data Skills */}
      <SchoolSkillsSection
        sectionButtonTitle="Data Skills"
        title="Why Data Skills Matter in Today's Job Market"
        description="Data skills unlock doors to stable, high-earning careers in a data-driven economy."
        skills={whyDataSkills}
      />

      {/* Market Data Section */}
      <MarketDataSection
        sectionButtonTitle="Market Insights"
        title="Join the Global Data Revolution"
        description="Data is the new currency, and companies globally are investing in skilled data professionals."
        data={dataMarketData}
        earningPotentialSource="Glassdoor & Indeed Salary Reports"
      />

      {/* Industry Testimony Section */}
      <IndustryTestimony
        sectionButtonTitle="Industry Voices"
        title="What Leaders Say About Data"
        testimonies={dataIndustryTestimony}
      />

      {/* Recognition Section */}
      <SchoolRecognition
        sectionButtonTitle="Get Certified"
        title="Earn Your Data Professional Certification"
        description="Complete your training and receive an industry-recognized certificate that validates your data expertise."
        imageAlt="Data Professional Certificate"
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
            title="What Should You Expect from Our Data Courses?"
            description="Our data courses help you build in-demand skills with hands-on experience that sets you apart"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
            descriptionClassName="pt-3! text-gray-500"
          />
        </div>

        {/* Expect Carousel */}
        <AppExpectCarousel />
      </section>

      {/* Inside the School of Data */}
      <section className="container section-spacing">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <AppSectionButton title="School of Data" />
          <AppHeading
            headingLevel="h2"
            title="Inside The School Of Data"
            className="w-full text-center text-[30px] lg:text-[48px] leading-tight!"
          />
        </div>

        {/* FAQ Cards */}
        <InsideSchoolOfDataFaqs />
      </section>

      {/* Advisor Banner */}
      <AppAdvisorBanner
        title="Ready To Launch Your Data Career?"
        headingClassName="text-4xl lg:text-5xl"
        description="Join a community of like-minded learners and start turning data into insights"
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
