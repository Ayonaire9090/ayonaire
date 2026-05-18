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

export const metadata: Metadata = generateSEO({
  title: "Thank You - Welcome to Ayonaire Community",
  description:
    "Congratulations! You've successfully joined the Ayonaire waitlist. Check your email for confirmation and next steps to get started.",
  keywords:
    "thank you, confirmation, welcome, Ayonaire community, waitlist confirmation",
  canonical: "/thank-you",
  noIndex: true, // Typically thank you pages are not indexed
});


const benefits = [
  "Masterclass reminders",
  "Important updates",
  "Free AI learning resources",
  "Live session notifications",
  "Next steps before the masterclass",
];

const CheckIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.5083 0.800049C30.0501 0.800049 29.2066 0.887729 27.9755 1.05957C26.7445 1.23237 25.9486 1.39909 25.5899 1.55717C25.2299 1.71525 24.5794 2.26373 23.6402 3.19653C22.7 4.13253 21.3362 5.86021 19.5528 8.37797C17.7672 10.8983 16.1013 13.5588 14.5528 16.362C12.9822 19.2091 11.5353 22.1227 10.2162 25.0948C8.97489 22.9693 7.85329 21.5284 6.84561 20.7706C5.84049 20.0096 4.99249 19.6301 4.30289 19.6301C3.76465 19.6301 3.09009 19.9172 2.27633 20.4887C1.46353 21.0621 1.05713 21.6231 1.05713 22.1764C1.05713 22.577 1.42993 23.1706 2.17585 23.9556C3.65297 25.5162 4.96049 27.1712 6.09233 28.9232C6.78353 29.9709 7.24305 30.6141 7.47217 30.8484C7.70001 31.0807 8.39441 31.2 9.55537 31.2C11.171 31.2 12.1304 30.993 12.4354 30.576C12.7381 30.1751 13.2978 28.9792 14.1141 26.9856C16.131 21.9943 18.6389 17.2279 21.636 12.6896C24.636 8.15301 27.3838 4.72133 29.8853 2.39653C30.3835 1.95493 30.683 1.66853 30.7883 1.53637C30.8907 1.40357 30.9432 1.27013 30.9432 1.13125C30.9432 0.911729 30.7976 0.800049 30.5083 0.800049Z"
      fill="url(#check-gradient)"
    />

    <defs>
      <linearGradient
        id="check-gradient"
        x1="1.05713"
        y1="16"
        x2="30.9432"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F25E25" />
        <stop offset="1" stopColor="#F97F11" />
      </linearGradient>
    </defs>
  </svg>
);

export default function ThankYouPage() {
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
            title="Your Spot Has Been Reserved Successfully."
            headingLevel="h1"
            description="You've just taken an important step toward understanding the roadmap into AI Engineering and how modern AI systems are built."
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
              description="Be sure to join our Exclusive WhatsApp Community."
              descriptionClassName="pt-0 pb-3 text-gray-600 text-base md:text-lg"
            />

            <a
              href="https://chat.whatsapp.com/BAZx2ojKiV66jm3ABeOSwu?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppActionButton className="group">
                <p>CLICK HERE TO GET IN INSTANTLY</p>
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
              title="Join The AI Builder Community"
              headingLevel="h2"
              description="Check your email now, we've sent important details about what's"
              className=""
              descriptionClassName="text-gray-600 text-base md:text-lg mb-4"
            />
            <p className="text-gray-500 text-sm md:text-base mb-8 italic">
              Note: Please If you don't see it, check Spam, Promotions, or
              Updates.
            </p>

            <a
              href="https://chat.whatsapp.com/BAZx2ojKiV66jm3ABeOSwu?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppActionButton className="group">
                <p>CLICK HERE TO GET IN INSTANTLY</p>
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


      {/* What You'll Get Section */}
<section className="relative z-10 px-6 md:px-16 py-16">
  <div className="mx-auto max-w-6xl">
    <div className="text-center mb-10">
      <AppHeading
        title="What You'll Get"
        headingLevel="h2"
        description="Here's what to expect after joining the community."
        descriptionClassName="text-gray-600 text-base md:text-lg"
      />
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((item) => (
        <div
          key={item}
          className="flex items-start gap-4 rounded-2xl border-l-4 border-[#F25E25] bg-white px-6 py-5 shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
        >
          <CheckIcon />

          <span className="text-base text-[#121315] md:text-lg">
            {item}
          </span>
        </div>
      ))}
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
