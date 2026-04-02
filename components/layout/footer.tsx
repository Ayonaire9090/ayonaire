"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerData } from "@/constants";
import { cn } from "@/lib/utils";

// Social Icons
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const ArrowUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const socialIcons: Record<string, React.FC<{ className?: string }>> = {
  x: XIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

interface FooterLinkSectionProps {
  title: string;
  links: { label: string; link: string }[];
  className?: string;
}

const FooterLinkSection = ({
  title,
  links,
  className,
}: FooterLinkSectionProps) => (
  <div className={cn("flex flex-col gap-4", className)}>
    <h3 className="text-white font-semibold text-base md:text-lg">{title}</h3>
    <ul className="flex flex-col gap-2.5">
      {links.map((item, index) => (
        <li key={index}>
          <Link
            href={item.link}
            className="text-[#9a9a9a] text-sm hover:text-white transition-colors duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { topCourses, company, quickLinks, schools, contact, socials } =
    footerData;

  return (
    <footer
      className="relative overflow-hidden rounded-t-[40px] lg:rounded-t-[60px] mt-12 lg:mt-20"
      style={{
        background:
          "linear-gradient(180deg, rgb(43, 42, 42) 0%, rgb(20, 20, 20) 100%)",
      }}
    >
      {/* Background Decorative Logo - Desktop */}
      <div className="absolute hidden lg:block right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-5 pointer-events-none overflow-hidden">
        <Image
          src="/assets/logos/full-logo-light.png"
          alt=""
          fill
          className="object-contain object-center"
          aria-hidden="true"
        />
      </div>

      {/* Background Decorative Logo - Mobile */}
      <div className="absolute lg:hidden left-0 top-[45%] w-[350px] h-[350px] opacity-20 pointer-events-none overflow-hidden">
        <Image
          src="/assets/logos/logo-light.png"
          alt=""
          fill
          className="object-contain object-left"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 px-[19px] py-[32px] lg:px-[80px] lg:py-[80px]">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
          {/* Logo & Description Section */}
          <div className="flex flex-col gap-6 lg:w-[264px] shrink-0">
            <Link href="/" className="w-[158px] h-[39px] relative">
              <Image
                src="/assets/logos/full-logo-light.png"
                alt="Ayonaire Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-[#9a9a9a] text-sm leading-relaxed">
              Learning knows no limits. Here&apos;s to your journey of seamless
              learning. Pick your preferred course from the list of paid &amp;
              free resources.
            </p>
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white text-sm hover:text-primary transition-colors duration-200 group w-fit"
            >
              <span>Back to top</span>
              <span className="w-7 h-7 rounded-full border border-white/50 flex items-center justify-center group-hover:border-primary transition-colors duration-200">
                <ArrowUpIcon className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="flex-1 grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-6">
            <FooterLinkSection
              title={topCourses.title}
              links={topCourses.links}
            />
            <FooterLinkSection title={company.title} links={company.links} />
            <FooterLinkSection
              title={quickLinks.title}
              links={quickLinks.links}
            />
            <FooterLinkSection title={schools.title} links={schools.links} />

            {/* Contact Section */}
            <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
              <h3 className="text-white font-semibold text-base md:text-lg">
                {contact.title}
              </h3>

              {/* Emails */}
              <div className="flex flex-col gap-2.5">
                {contact.emails.map((email, index) => (
                  <Link
                    key={index}
                    href={email.link}
                    className="flex items-center gap-2 text-[#9a9a9a] text-sm hover:text-white transition-colors duration-200"
                  >
                    <MailIcon className="w-4 h-4 shrink-0" />
                    <span>{email.label}</span>
                  </Link>
                ))}
              </div>

              {/* Phones */}
              <div className="flex flex-col gap-2.5">
                {contact.phones.map((phone, index) => (
                  <Link
                    key={index}
                    href={phone.link}
                    className="flex items-center gap-2 text-[#9a9a9a] text-sm hover:text-white transition-colors duration-200"
                  >
                    <PhoneIcon className="w-4 h-4 shrink-0" />
                    <span>{phone.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Mobile Only (before copyright) */}
        <div className="flex lg:hidden items-center gap-4 mt-10">
          {socials.links.map((social, index) => {
            const IconComponent = socialIcons[social.icon];
            return (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors duration-200"
                aria-label={social.label}
              >
                {IconComponent && <IconComponent className="w-5 h-5" />}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Bar / Copyright Section */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[#9a9a9a] text-sm">
            © Ayonaire Academy. All Rights Reserved.
          </p>

          {/* Social Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-4">
            {socials.links.map((social, index) => {
              const IconComponent = socialIcons[social.icon];
              return (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
