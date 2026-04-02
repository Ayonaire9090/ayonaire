import { AppActionButton } from "@/components/app-action-button";
import { AppHeading } from "@/components/app-heading";
import { ArrowRight, Link2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Spline_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { OptinFeatureCard } from "@/components/optin-feature-card";
import { communityOptinFeatures } from "@/constants";
import { OptinFormCommunity } from "@/components/optin-form-community";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Join Ayonaire Tech Community Waitlist",
  description:
    "Get free access to our exclusive tech community. Learn, ask questions, network, and find job opportunities. Join fellow tech enthusiasts and professionals.",
  keywords:
    "tech community, waitlist, free access, networking, job opportunities, tech learning, online community",
  canonical: "/opt-in",
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

export default function OptInPage() {
  return (
    <>
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />

      <div className="container relative z-10 flex flex-col justify-center items-center min-h-screen py-20">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/assets/logos/full-logo-dark.svg"
            alt="Ayonaire Logo"
            width={158}
            height={39}
          />
        </div>

        {/* Heading and Description */}
        <div className="text-center max-w-4xl">
          <AppHeading
            title="Here is the Tech community waitlist you said you wanted to Join"
            headingLevel="h1"
            description="Get Taught. Ask Questions. Network and Find Job Opportunities"
            className="text-2xl md:text-4xl lg:text-5xl font-bold"
            descriptionClassName="text-gray-900 text-base md:text-lg leading-relaxed"
          />
        </div>
        <Link href="#freeAccessFormOptin">
          <AppActionButton className="mt-5">
            <p className="capitalize">GET FREE ACCESS NOW</p>
            <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
              <ArrowRight size={25} className="text-primary  rounded" />
            </span>
          </AppActionButton>
        </Link>
        <Image
          className="mt-5"
          src="/assets/images/optin-hero.png"
          alt="Optin Image"
          width={800}
          height={800}
        />

        <div className="flex flex-col items-center justify-center my-6 lg:my-12">
          <h2
            className={cn(
              "text-[24px] md:text-[32px] lg:text-[48px] font-bold",
              splineSans.className,
            )}
          >
            This Community Is Perfect for{" "}
            <span className="bg-[#FFDCC4]">You If…</span>
          </h2>
        </div>

        {/* Feature Cards Flex - Staggered Layout */}
        {(() => {
          const basicData = communityOptinFeatures[0].items;
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

        <div className="my-12 lg:my-24 flex flex-col items-center justify-center rounded-[10px] bg-[#FFEBDE] p-12 w-full max-w-4xl">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <Image
              src="/assets/icons/lock.svg"
              alt="Lock Icon"
              width={20}
              height={20}
            />
            <p className="font-medium text-center">
              Once we’re filled up, the doors close permanently.
            </p>
          </div>
          <Link href="#freeAccessFormOptin">
            <AppActionButton className="mt-5">
              <p className="capitalize">GET FREE ACCESS NOW</p>
              <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                <ArrowRight size={25} className="text-primary  rounded" />
              </span>
            </AppActionButton>
          </Link>
        </div>

        {/* Inside Community */}
        <div className="w-full  space-y-3 lg:space-y-6">
          <div className="flex flex-col justify-start items-start">
            <h2
              className={cn(
                "text-[24px] md:text-[32px] lg:text-[40px] font-bold",
                splineSans.className,
              )}
            >
              Inside This Free Community{" "}
            </h2>
            <h2
              className={cn(
                "text-[24px] md:text-[32px] lg:text-[40px] font-bold bg-[#FFDCC4]",
                splineSans.className,
              )}
            >
              You'll Get...
            </h2>
            <Link href="#freeAccessFormOptin">
              <div className="block lg:hidden">
                <AppActionButton className="mt-3 rounded-md! px-4! rotate-0 lg:rotate-6 w-fit">
                  <Link2 className="text-white w-6! h-6!" />
                  <p className="capitalize">GET FREE ACCESS NOW</p>
                </AppActionButton>
              </div>
            </Link>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 mt-2 lg:mt-8">
            {/* first grid only button */}
            <Link href="#freeAccessFormOptin">
              <AppActionButton className="mt-0 hidden lg:flex lg:mt-24 rounded-md! px-4! rotate-0 lg:rotate-6 w-fit">
                <Link2 className="text-white w-6! h-6!" />
                <p className="capitalize">GET FREE ACCESS NOW</p>
              </AppActionButton>
            </Link>

            {/* second flex items */}
            <div className="flex flex-col gap-7 mt-6 lg:mt-0">
              {communityOptinFeatures[1].items.map((item, index) => (
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

      {/* Secure Your Spot Section */}
      <section
        id="freeAccessFormOptin"
        className="relative pb-6 lg:pb-12 pt-0 lg:pt-24"
      >
        {/* Gradient from bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-[#FFE7DE] via-[#FFE7DE] to-[#FFFFFF]" />

        <div className="container relative z-10 flex flex-col items-center">
          {/* Title */}
          <h2
            className={cn(
              "text-[28px] md:text-[36px] lg:text-[48px] font-bold text-center",
              splineSans.className,
            )}
          >
            Secure Your Spot Now
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Enter your details below to join the waitlist.
          </p>

          {/* Form Card */}
          <div
            id="form"
            className="w-full max-w-xl mt-8 bg-white rounded-2xl shadow-lg p-6 lg:p-10"
          >
            <OptinFormCommunity />

            {/* Security Message */}
            <p className="text-center text-gray-500 text-sm mt-6">
              🔒 Your information is secure and will never be shared.
            </p>
          </div>
        </div>
      </section>

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
