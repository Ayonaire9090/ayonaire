import { AppActionButton } from "@/components/app-action-button";
import { OptInPopup } from "@/components/optin-popup";
import {
  ArrowRight,
  PlayCircle,
  Youtube,
  Calendar,
  Clock,
  BadgeCheck,
  Target,
  Wrench,
  Map,
  Briefcase,
  DollarSign,
  Award,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { OptinFeatureCard } from "@/components/optin-feature-card";
import { courses } from "@/constants";
import { Footer } from "@/components/layout/footer";
import { generateSEO } from "@/lib/seo";
import { Metadata, ResolvingMetadata } from "next";
import { melodrama } from "@/app/fonts";
import { AppSection } from "@/components/app-section";
import { AppSectionButton } from "@/components/app-section-button";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params;
  const course = courses
    .flatMap((c) => c.courses)
    .find((c) => c.slug === params.slug);
  // Remove the word "Certified" for the course titles
  const courseTitle = (course?.title || "This Course")
    .replace(/certified/i, "")
    .trim();

  return generateSEO({
    title: `Join ${courseTitle} Community Waitlist`,
    description: `Get free access to our exclusive ${courseTitle} community. Learn, ask questions, network, and find job opportunities.`,
    keywords: `${courseTitle} community, waitlist, free access, networking, job opportunities, tech learning, online community`,
    canonical: `/courses/${params.slug}/opt-in`,
  });
}

export default async function OptInPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const course = courses
    .flatMap((c) => c.courses)
    .find((c) => c.slug === params.slug);
  // Remove the word "Certified" for the course titles
  const courseTitle = (course?.title || "This Course")
    .replace(/certified/i, "")
    .trim();
  const courseThumbnail = course?.thumbnail;
  const courseRole = course?.peopleInField?.endsWith("s")
    ? course.peopleInField.slice(0, -1)
    : course?.peopleInField || "Data Analyst";

  const optinFeatures = [
    {
      title: "Basic Data",
      items: [
        "Learn the official career paths you can follow from scratch",
        "Understand the earning potential at each career stage",
        "Discover proven job-landing strategies used by successful professionals",
        "Get clear next steps to start and grow, even from zeroYou want scholarships, internship openings, and real tech job opportunities",
      ],
    },
    {
      title: "More Data",
      items: [
        "You’re an African tired of financial pressure and want a skill that gives you leverage.",
        "You’re currently employed but frustrated with low (“peanut”) salaries and limited growth.",
        `You’re confused about what ${courseTitle} truly is, and unsure of the exact roadmap that makes someone globally employable.`,
        `You want to know how people land ${courseTitle} roles faster than the average applicant….without guessing or wasting years.`,
        `You’re ready to enter ${courseTitle} but need a practical, structured guide, real-world direction, and mentorship.`,
        "This is not for people looking for shortcuts or overnight success.",
        "This is for people serious about building a global, employable skill the right way",
      ],
    },
  ];

  const learningOutcomes = [
    {
      title: "What Hiring Managers Actually Look For in 2026",
      description:
        "Why most applications get rejected and the specific signals recruiters use to shortlist candidates.",
      icon: Target,
      number: 1,
      fullWidth: true,
    },
    {
      title: "The Exact Skills & Tools That Are Globally Recognized",
      description:
        "So you don't waste months stacking certificates, tools, or skills employers don't value.",
      icon: Wrench,
      number: 2,
      fullWidth: false,
    },
    {
      title: "A Clear 3–6 Month Roadmap to Becoming Job-Ready",
      description:
        "A step-by-step path showing what to learn, what to practice, and what to build — without guesswork.",
      icon: Map,
      number: 3,
      fullWidth: false,
    },
    {
      title: "How to Build a Portfolio That Makes Recruiters Stop Scrolling",
      description:
        'Not just "projects," but problem-solving case studies that make employers see you as the solution.',
      icon: Briefcase,
      number: 4,
      fullWidth: true,
    },
    {
      title: `What ${courseTitle} Really Is…and What It Actually Pays`,
      description:
        "The real job expectations, career paths, and earning potential both locally and internationally.",
      icon: DollarSign,
      number: 5,
      fullWidth: false,
    },
    {
      title: "How to Position Yourself for Interviews & Global Opportunities",
      description:
        "How to present your skills on your CV, LinkedIn, and during interviews so you stand out from thousands.",
      icon: Award,
      number: 6,
      fullWidth: false,
    },
    {
      title: "Why Most Beginners Stay Stuck & How to Avoid Their Mistakes",
      description:
        "The common traps that waste years of effort, and what successful candidates do differently.",
      icon: AlertTriangle,
      number: 7,
      fullWidth: true,
    },
  ];

  return (
    <>
      {/* Hero Decoration Wrapper */}
      <div
        className="absolute inset-x-0 top-0 w-full min-h-[920px] -z-10 bg-[linear-gradient(110deg,#0a0100_30%,#F54920_120%)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
      />

      <div className="container relative z-10 flex flex-col justify-start items-center min-h-[90vh] pt-12 pb-20">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/assets/logos/full-logo-dark.svg"
            alt="Ayonaire Logo"
            width={160}
            height={40}
            className="brightness-0 invert"
          />
        </div>

        {/* Heading and Description */}
        <div className="text-center max-w-4xl tracking-wide px-4">
          <h1
            className={`text-4xl md:text-5xl lg:text-[56px] font-medium capitalize! ${melodrama.className} text-white leading-tight md:leading-[1.15]`}
          >
            How To Break Into <br className="md:hidden" /> {courseTitle} &{" "}
            <br className="hidden md:block" /> Become{" "}
            <span className="bg-white text-[#F54920] px-3 md:px-3 py-1 md:py-1 inline-block mt-2 md:mt-2 font-semibold shadow-sm leading-tight">
              Globally <span className="hidden md:inline">Employable</span>
            </span>
            <br className="md:hidden" />
            <span className="md:hidden bg-white text-[#F54920] px-3 py-1 inline-block mt-2 font-semibold shadow-sm leading-tight">
              Employable
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-[20px] leading-relaxed mt-6 mb-8 font-light max-w-2xl mx-auto px-4 md:px-0">
            Even Without a Technical Background…using the Exact Skills Employers
            Hire For
          </p>
        </div>

        <div className="w-full px-6 md:px-0 md:w-auto z-20">
          <OptInPopup
            courseThumbnail={courseThumbnail}
            courseName={courseTitle}
            slug={params.slug}
          >
            <button className="group mt-2 mb-8 flex items-center justify-between gap-4 bg-white text-[#F54920] font-bold tracking-wide px-4 py-3  md:pl-6 rounded-2xl md:rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl w-full md:w-auto">
              <span className="text-base md:text-base mx-auto md:mx-0">
                GET FREE ACCESS NOW
              </span>
              <span className="bg-[#F54920] p-2 md:p-1.5 rounded-xl md:rounded-md text-white group-hover:translate-x-1 transition-transform duration-300 shrink-0">
                <ArrowRight
                  className="w-6 h-6 md:w-[18px] md:h-[18px]"
                  strokeWidth={2.5}
                />
              </span>
            </button>
          </OptInPopup>
        </div>

        {/* Hero Image */}
        <Image
          className={`mt-6 sm:mt-12 max-w-[95%] w-auto ${course?.thumbnail && "rounded-3xl"}`}
          src={course?.thumbnail || "/assets/images/optin-hero.png"}
          alt="Optin Image"
          width={850}
          height={850}
        />

        <div className="w-full lg:max-w-2xl flex flex-col items-center justify-center mb-12 mt-33 lg:mt-12 text-center">
          <h2
            className={cn(
              "hidden lg:block text-[20px] md:text-[24px] lg:text-[32px] font-medium",
              melodrama.className,
            )}
          >
            If You've been Dreaming of{" "}
            <span className="bg-[#FFDCC4]">Breaking Into Tech</span> &{" "}
            <span className="bg-[#FFDCC4]">Working Remotely</span> for
            <span className="bg-[#FFDCC4] ml-1">
              International Companies
            </span>{" "}
            as {courseRole.match(/^[AEIOU]/i) ? "an" : "a"}
            <span className="bg-[#FFDCC4] ml-1">{courseRole}, </span>But You’re
            Unsure of the right Roadmap, Skills, Spike Projects or Next Steps…
          </h2>
          <h2
            className={cn(
              "block lg:hidden text-[27px] font-medium",
              melodrama.className,
            )}
          >
            Dreaming Of Breaking Into Tech and Working Remotely As{" "}
            {courseRole.match(/^[AEIOU]/i) ? "An" : "A"}{" "}
            <span className="bg-[#FFDCC4] font-bold">{courseRole}?</span>
          </h2>
          <p className="text-start block lg:hidden text-[20px] font-medium pt-2">
            But unsure of the right roadmap, skills, spike projects, or next
            steps?
          </p>
        </div>

        {/* Feature Cards Flex - Staggered Layout */}
        {(() => {
          const basicData = optinFeatures[0].items;
          return (
            <div className="w-full max-w-6xl">
              {/* Desktop Layout - with offset */}
              <div className="hidden lg:flex lg:flex-col gap-x-8 gap-y-6">
                {/* First Row */}
                <div className="flex flex-row mr-24 gap-16">
                  <OptinFeatureCard title={basicData[0]} />
                  <OptinFeatureCard title={basicData[1]} />
                </div>

                {/* Second row */}
                <div className="flex flex-row ml-24 gap-16 mt-10">
                  <OptinFeatureCard title={basicData[2]} />
                  <OptinFeatureCard title={basicData[3]} />
                </div>
              </div>

              {/* Mobile Layout - Alternating left/right */}
              <div className="flex lg:hidden flex-col gap-4">
                <div className="self-start w-[85%]">
                  <OptinFeatureCard title={basicData[0]} />
                </div>
                <div className="self-end w-[85%]">
                  <OptinFeatureCard title={basicData[2]} />
                </div>
                <div className="self-start w-[85%]">
                  <OptinFeatureCard title={basicData[1]} />
                </div>
                <div className="self-end w-[85%]">
                  <OptinFeatureCard title={basicData[3]} />
                </div>
              </div>
            </div>
          );
        })()}

        <OptInPopup
          courseThumbnail={courseThumbnail}
          courseName={courseTitle}
          slug={params.slug}
        >
          <AppActionButton className="my-10 px-6 py-6">
            <p className="capitalize">GET FREE ACCESS NOW</p>
            <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300 flex items-center justify-center">
              <ArrowRight
                size={20}
                className="text-primary rounded"
                strokeWidth={2.5}
              />
            </span>
          </AppActionButton>
        </OptInPopup>

        {/* Inside Community */}
        <div className="w-full  space-y-3 lg:space-y-6 mt-10">
          <div className="flex flex-col justify-start items-start py-5">
            <h2
              className={cn(
                "w-full max-w-[60%] lg:max-w-[30%] text-[24px] md:text-[28px] font-medium lg:text-[32px]",
                melodrama.className,
              )}
            >
              This In-Depth Live Session is for you{" "}
              <span
                className={cn(
                  "text-[24px] md:text-[32px] lg:text-[40px] bg-[#FFDCC4]",
                  melodrama.className,
                )}
              >
                if and only
              </span>{" "}
              if:
            </h2>
            <OptInPopup
              courseThumbnail={courseThumbnail}
              courseName={courseTitle}
              slug={params.slug}
            >
              <div className="block lg:hidden cursor-pointer pt-5">
                <AppActionButton className="my-4 rounded-md! px-4! rotate-0 lg:rotate-6 w-fit pointer-events-none">
                  <PlayCircle className="text-white w-6! h-6!" />
                  <p className="capitalize">Watch Webinar</p>
                </AppActionButton>
              </div>
            </OptInPopup>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 mt-2 lg:mt-8">
            {/* first grid only button */}
            <OptInPopup
              courseThumbnail={courseThumbnail}
              courseName={courseTitle}
              slug={params.slug}
            >
              <AppActionButton className="mt-0 hidden lg:flex lg:mt-24 rounded-md! px-4! rotate-0 lg:rotate-6 w-fit">
                <PlayCircle className="text-white w-6! h-6!" />
                <p className="capitalize">Watch Webinar</p>
              </AppActionButton>
            </OptInPopup>

            {/* second flex items */}
            <div className="flex flex-col gap-7 mt-6 lg:mt-0">
              {optinFeatures[1].items.map((item, index) => (
                <OptinFeatureCard
                  key={index}
                  title={item}
                  className="gap-4"
                  icon={
                    <div className="flex items-center justify-center w-[35px] h-[35px] lg:w-[52px] lg:h-[52px] rounded-full bg-[#FFE6D5] shrink-0">
                      <span className="text-[12px] lg:text-[20px] font-semibold text-gray-800">
                        {index + 1}
                      </span>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Optin Section */}
      <AppSection variant="gradient" direction="bottom" className="pb-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <AppSectionButton
            title="Why"
            showIcon={true}
            className="bg-white border-[#FFE7DE] px-4 text-[#F54920] h-10 shadow-sm"
          />

          <h2
            className={cn(
              "text-3xl lg:text-5xl font-medium tracking-tight mt-2 text-[#1A1A1A]",
              melodrama.className,
            )}
          >
            Live session details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full max-w-7xl mt-10">
            {/* Venue Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#F59F0A] to-[#F97A1F] flex items-center justify-center shrink-0">
                  <Youtube className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-900 font-medium tracking-wide text-sm uppercase">
                  VENUE
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Youtube Live
              </h3>
              <p className="text-gray-500 text-sm">
                Youtube Live (Access link will be shared in your email &
                Whatsapp)
              </p>
            </div>

            {/* Date Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#F59F0A] to-[#F97A1F] flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-900 font-medium tracking-wide text-sm uppercase">
                  DATE
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                March Edition
              </h3>
            </div>

            {/* Time Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#F59F0A] to-[#F97A1F] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-900 font-medium tracking-wide text-sm uppercase">
                  TIME
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">7PM WAT</h3>
            </div>

            {/* Fee Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#F59F0A] to-[#F97A1F] flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-900 font-medium tracking-wide text-sm uppercase">
                  FEE
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% FREE
              </h3>
              <p className="text-gray-500 text-sm">
                (Only Registration is Required)
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-[#F54920] flex items-center gap-2 text-sm md:text-base font-medium">
            <span>⚠️</span> Registration closes as soon as slots are filled.
          </div>

          <OptInPopup
            courseThumbnail={courseThumbnail}
            courseName={courseTitle}
            slug={params.slug}
          >
            <button className="group mt-2 flex items-center justify-between gap-4 bg-white text-[#F54920] font-bold tracking-wide px-4 py-3 md:px-2 md:py-1.5 md:pl-6 rounded-2xl md:rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl w-full md:w-auto cursor-pointer">
              <span className="text-base md:text-base mx-auto md:mx-0">
                GET FREE ACCESS NOW
              </span>
              <span className="bg-[#F54920] p-2 md:p-1.5 rounded-xl md:rounded-md text-white group-hover:translate-x-1 transition-transform duration-300 shrink-0">
                <ArrowRight
                  className="w-6 h-6 md:w-[18px] md:h-[18px]"
                  strokeWidth={2.5}
                />
              </span>
            </button>
          </OptInPopup>
        </div>
      </AppSection>

      {/* What Will You Learn Section */}
      <AppSection className="py-12 lg:py-24 bg-[#FDF7F5]">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2
            className={cn(
              "text-3xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] mb-8 lg:mb-12",
              melodrama.className,
            )}
          >
            What will you learn?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full max-w-7xl">
            {learningOutcomes.map((item) => (
              <div
                key={item.number}
                className={cn(
                  "bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col items-start text-left",
                  item.fullWidth ? "md:col-span-2" : "md:col-span-1",
                )}
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#F25E25] to-[#F97F11] flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-linear-to-b from-[#F25E25]/50 to-transparent flex items-center justify-center shrink-0 font-medium text-gray-900">
                    {item.number}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AppSection>

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
