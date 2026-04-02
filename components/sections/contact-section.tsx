"use client";

import React from "react";
import { AppActionButton } from "@/components/app-action-button";
import { AppSection } from "@/components/app-section";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

// Contact info card component
const ContactInfoCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="text-gray-600 text-sm mt-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Social media button component
const SocialButton = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity"
    >
      {icon}
    </Link>
  );
};

// Social icons (inline SVGs for Facebook, Instagram, Twitter, LinkedIn)
const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted");
  };

  return (
    <AppSection
      id="contactUs"
      variant="gradient"
      containerClassName="z-10 py-8 lg:py-16"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Side - Contact Info Cards (on desktop) / appears second on mobile */}
        <div className="flex flex-col gap-4 order-2 lg:order-1">
          {/* Phone Number Card */}
          <ContactInfoCard icon={Phone} title="Phone Number">
            <p>+234 9067835701</p>
            <p>+234 9067835701</p>
          </ContactInfoCard>

          {/* Email Address Card */}
          <ContactInfoCard icon={Mail} title="Email Address">
            <p>info@ayonaire.com</p>
          </ContactInfoCard>

          {/* Location Card */}
          <ContactInfoCard icon={MapPin} title="Location">
            <p>Lagos, Nigeria</p>
          </ContactInfoCard>

          {/* Social Media Card */}
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center justify-center gap-4">
              <SocialButton
                href="https://facebook.com/ayonaire"
                icon={<FacebookIcon />}
                label="Facebook"
              />
              <SocialButton
                href="https://instagram.com/ayonaire"
                icon={<InstagramIcon />}
                label="Instagram"
              />
              <SocialButton
                href="https://twitter.com/ayonaire"
                icon={<TwitterIcon />}
                label="Twitter"
              />
              <SocialButton
                href="https://linkedin.com/company/ayonaire"
                icon={<LinkedInIcon />}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form (on desktop) / appears first on mobile */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm order-1 lg:order-2">
          <h2 className="text-2xl font-bold mb-2">Send Message</h2>
          <p className="text-gray-600 text-sm mb-6">
            Do you have questions about enrollment or any of our courses? We
            reply in less than 12 hours, 24/7. Fill the form below and we will
            be in touch with you
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Row 2: Phone & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>

            {/* Row 3: Message */}
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              required
            />

            {/* Submit Button */}
            <AppActionButton type="submit" variant="fading" className="w-full">
              <span>Send</span>
              <span className="bg-white p-1 rounded shrink-0 ml-2">
                <ArrowRight className="text-primary w-4 h-4 lg:w-5 lg:h-5" />
              </span>
            </AppActionButton>
          </form>
        </div>
      </div>
    </AppSection>
  );
};
