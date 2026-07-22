import React from "react";
import Image from "next/image";
import { AppHeading } from "@/components/app-heading";
import { AppSectionButton } from "@/components/app-section-button";
import { AppActionButton } from "@/components/app-action-button";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { generateSEO } from "@/lib/seo";
import { Metadata } from "next";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { AppConfetti } from "@/components/app-confetti";

const WHATSAPP_LINK = "https://chat.whatsapp.com/ILzKk6IHvKSGEvPqEYshTT?mode=gi_t";

export const metadata: Metadata = generateSEO({
  title: "Thank You - Data Analytics Masterclass | Ayonaire Academy",
  description:
    "You've successfully registered for the Free Data Analytics Masterclass 2026. Join the WhatsApp community to get the class link and updates.",
  keywords:
    "thank you, data analytics masterclass, confirmation, Ayonaire community",
  canonical: "/data-analytics-thank-you-02",
  noIndex: true,
});

export default function DataAnalyticsThankYou() {
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
            title="Registration Successful"
            className="shadow-md"
          />
        </div>

        {/* Heading and Description */}
        <div className="text-center max-w-4xl">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-[#F25E25] mb-3">
            You're One Step Away!
          </p>
          <AppHeading
            title="Congratulations, Your Registration Is Successful."
            description="But your next step is IMPORTANT!"
            descriptionClassName="text-gray-600 text-base md:text-lg font-semibold pt-3"
            headingLevel="h1"
          />
        </div>
      </div>

      {/* What Happens Next Section */}
      <section className="relative z-10 pl-6 md:pl-16 pb-12">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="max-w-lg">
            <AppHeading
              title="What Happens Next?"
              headingLevel="h2"
              className="mb-4"
              description="Click the button below to join the community to get the masterclass link & updates."
              descriptionClassName="pt-0 pb-3 text-gray-600 text-base md:text-lg"
            />

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppActionButton className="group">
                <p>TAKE ME TO THE COMMUNITY NOW!</p>
                <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                  <ArrowRight
                    size={25}
                    className="text-primary rounded block group-hover:hidden"
                  />
                  <IconBrandWhatsapp
                    size={25}
                    className="text-primary rounded hidden group-hover:block"
                  />
                </span>
              </AppActionButton>
            </a>
          </div>

          {/* Right Decoration - Hidden on mobile */}
          <div className="hidden lg:block">
            <Image
              src="/assets/icons/pointing-hand.svg"
              alt="Pointing Hand"
              width={350}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative z-10 pl-6 md:pl-16 py-12">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="max-w-lg">
            <AppHeading
              title="You're In! Welcome Aboard"
              headingLevel="h2"
              description="You have successfully registered for the Free AI-Data Analysis Masterclass. But registration alone is not enough — the class link, reminders, and important updates will be shared with members of the community before the live session."
              className=""
              descriptionClassName="text-gray-600 text-base md:text-lg mb-4"
            />
            <p className="text-gray-500 text-sm md:text-base mb-8 italic">
              Join now so you don't miss any information about the masterclass. Click the button below to join the community now!
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppActionButton className="group">
                <p>TAKE ME TO THE COMMUNITY NOW!</p>
                <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                  <ArrowRight
                    size={25}
                    className="text-primary rounded block group-hover:hidden"
                  />
                  <IconBrandWhatsapp
                    size={25}
                    className="text-primary rounded hidden group-hover:block"
                  />
                </span>
              </AppActionButton>
            </a>
          </div>

          {/* Right Decoration - Hidden on mobile */}
          <div className="hidden lg:block">
            <Image
              src="/assets/icons/pointing-hand.svg"
              alt="Pointing Hand"
              width={350}
              height={400}
            />
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
