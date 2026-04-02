import { ChatGPTContent } from "@/components/sections/chatgpt-content";
import { ChatGPTHero } from "@/components/sections/chatgpt-hero";
import { ChatGPTAd } from "@/components/sections/chatgpt-ad";
import React from "react";
import Image from "next/image";
import { Footer } from "@/components/layout/footer";

export default function ChatGPTPrompt() {
  return (
    <>
      {/* Hero */}
      <ChatGPTHero />
      {/* Intro */}
      <ChatGPTAd className="container mx-auto" />
      {/* Content */}
      <ChatGPTContent />

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
