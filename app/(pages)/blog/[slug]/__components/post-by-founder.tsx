"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { spectralSC } from "@/app/fonts";

export const PostByFounder = () => {
  const pathName = usePathname();
  const ayobamiBlogPath = "/blog/about-ayobami-awosanya-founder-of-ayonaire";

  if (pathName !== ayobamiBlogPath) return null;

  return (
    <section className="bg-linear-to-b from-[#FFE7DE] to-white py-12 lg:py-20">
      <div className="container">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Written By Label */}
          <p className="text-gray-600 text-sm mb-2">Written By:</p>

          {/* Author Name */}
          <h3
            className={`text-2xl font-bold text-[#141219] mb-8 ${spectralSC.className}`}
          >
            Ayobami Awosanya
          </h3>

          {/* Author Image */}
          <div className="relative w-64 h-64 mb-8">
            <Image
              src="/assets/images/ayo-written-by.svg"
              alt="Ayobami Awosanya - Founder of Ayonaire"
              fill
              className="object-contain"
            />
          </div>

          {/* Bio Text */}
          <div className="max-w-sm space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              I'm A <span className="text-primary font-semibold">Marketer</span>{" "}
              And An{" "}
              <span className="text-[#141219] font-semibold">
                SEO Professional
              </span>{" "}
              With Over 7 Years Of Experience. I Love Helping Law Firms Solve
              Complex Lead Generation Problems With Simple, Scalable Solutions.
            </p>
            <p>
              I'm Also The Founder Of Ayonaire Digital Academy. My SEO Expertise
              Is Featured On Semrush, Ahrefs, And Favikon.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-12 lg:gap-16">
          {/* Left Side - Written By Label and Name */}
          <div className="flex flex-col items-start shrink-0">
            <p className="text-gray-600 text-sm mb-2">Written By:</p>
            <div className="w-px h-24 bg-primary mb-4"></div>
            <h3
              className={`text-xl font-bold text-[#141219] ${spectralSC.className}`}
            >
              Ayobami Awosanya
            </h3>
          </div>

          {/* Center - Author Image */}
          <div className="relative w-80 h-80 shrink-0">
            <Image
              src="/assets/images/ayo-written-by.svg"
              alt="Ayobami Awosanya - Founder of Ayonaire"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Side - Bio Text */}
          <div className="flex-1 space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              I'm A <span className="text-primary font-semibold">Marketer</span>{" "}
              And An{" "}
              <span className="text-[#141219] font-semibold">
                SEO Professional
              </span>{" "}
              With Over 7 Years Of Experience. I Love Helping Law Firms Solve
              Complex Lead Generation Problems With Simple, Scalable Solutions.
            </p>
            <p>
              I'm Also The Founder Of Ayonaire Digital Academy. My SEO Expertise
              Is Featured On Semrush, Ahrefs, And Favikon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
