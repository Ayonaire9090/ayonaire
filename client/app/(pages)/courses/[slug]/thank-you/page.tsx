import React from "react";
import Image from "next/image";
import { AppHeading } from "@/components/app-heading";
import { AppSectionButton } from "@/components/app-section-button";
import { ArrowRight, Bell, Zap, Map, Users, Mail } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { generateSEO } from "@/lib/seo";
import { Metadata, ResolvingMetadata } from "next";
import { AppConfetti } from "@/components/app-confetti";
import { courses } from "@/constants";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params;
  const course = courses
    .flatMap((c) => c.courses)
    .find((c) => c.slug === params.slug);

  const title = course ? course.title : "Ayonaire";

  return generateSEO({
    title: `Thank You - Welcome to ${title}`,
    description: `Congratulations! You've successfully joined the ${title} waitlist. Check your email for confirmation and next steps to get started.`,
    keywords: `thank you, confirmation, welcome, ${title} community, waitlist confirmation`,
    canonical: `/courses/${params.slug}/thank-you`,
    noIndex: true, // Typically thank you pages are not indexed
  });
}

export default async function ThankYouPage(props: {
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

  return (
    <>
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />

      <div className="container relative z-10 flex flex-col justify-center items-center py-16 overflow-hidden">
        {/* Confetti */}
        <AppConfetti />
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/assets/logos/full-logo-dark.svg"
            alt="Ayonaire Logo"
            width={158}
            height={39}
          />
        </div>

        {/* Thank You Icon */}
        <div className="mb-8">
          <Image
            src="/assets/icons/thank-you-icon.svg"
            alt="Thank You"
            width={133}
            height={138}
            className="object-contain"
          />
        </div>

        {/* Section Button */}
        <div className="mb-8">
          <AppSectionButton
            title="Thank You — You're In!"
            className="shadow-md"
          />
        </div>

        {/* Heading and Description */}
        <div className="text-center max-w-4xl">
          <AppHeading
            title="You're In!"
            headingLevel="h1"
            fontVariant="melodrama"
            description={
              <span className="text-center text-gray-800 text-lg lg:text-xl pt-2 font-medium">
                You’ve just taken a smart and profitable step toward becoming a{" "}
                <span className="font-bold">{courseTitle},</span> a decision
                you’ll be grateful for in the months ahead.
              </span>
            }
          />
        </div>
      </div>
      {/* Do This Immediately Section */}
      <section className="relative z-10 container flex justify-center pb-24">
        <div className="bg-white rounded-[24px] p-8 md:p-12 w-full max-w-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Do this immediately
          </h2>
          <p className="text-gray-800 text-lg mb-8">
            Click the button below to join{" "}
            <strong>200+ learners and professionals</strong> inside our
            community, where you'll receive:
          </p>

          <ul className="space-y-6 mb-10 w-full max-w-2xl">
            <li className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#F57C1F] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Bell className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-gray-900 font-semibold text-lg md:text-xl">
                Reminders about the Webinar
              </span>
            </li>
            <li className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#F57C1F] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Zap className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-gray-900 font-semibold text-lg md:text-xl">
                Timely updates
              </span>
            </li>
            <li className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#F57C1F] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Map className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-gray-900 font-semibold text-lg md:text-xl">
                Free resources
              </span>
            </li>
            <li className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#F57C1F] flex items-center justify-center shrink-0 shadow-sm text-white">
                <Users className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-gray-900 font-semibold text-lg md:text-xl">
                Live sessions and guidance
              </span>
            </li>
            <li className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#F57C1F] flex items-center justify-center shrink-0 shadow-sm text-white">
                <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-gray-900 font-semibold text-lg md:text-xl">
                Important next steps to keep you moving forward
              </span>
            </li>
          </ul>

          <a
            href="https://chat.whatsapp.com/IAz4IQXr22020WcNDfpPiA"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mb-8"
          >
            <button className="w-full bg-linear-to-r from-[#F57C1F] to-[#FFD5B8] hover:opacity-90 text-white font-bold text-lg md:text-xl py-4 lg:py-5 px-6 rounded-xl flex items-center justify-center gap-4 transition-opacity shadow-sm">
              CLICK TO JOIN THE COMMUNITY
              <div className="bg-white rounded-md flex items-center justify-center p-1">
                <ArrowRight
                  className="text-[#F57C1F] w-5 h-5"
                  strokeWidth={2}
                />
              </div>
            </button>
          </a>

          <div className="bg-[#FFF4ED] border border-[#FFD3B6] rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-10">
            <div className="bg-white p-3 rounded-lg shadow-sm shrink-0">
              <Mail className="w-7 h-7 text-[#F57C1F]" strokeWidth={1.5} />
            </div>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed pt-1">
              Also, keep an eye on your <strong>email inbox</strong> — that's
              where we'll be sending you key information and announcements.
            </p>
          </div>

          <p className="text-center text-gray-900 font-bold text-lg md:text-xl">
            We're excited to have you on this journey. See you inside! 🚀
          </p>
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
