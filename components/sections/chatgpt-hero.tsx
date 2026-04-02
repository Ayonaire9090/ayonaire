"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "../layout/header";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { Share2 } from "lucide-react";

export const ChatGPTHero = () => {
  return (
    <>
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="relative z-10 flex flex-col justify-center items-center gap-4 pt-10 lg:py-12">
            <AppSectionButton className="bg-white" title="Chatgpt Prompt" />
            <AppHeading
              headingLevel="h1"
              title="How To Write ChatGPT Prompts: Your 2026 Guide"
              description="Written by Coursera Staff • Updated on Dec 5, 2025"
              className="text-center w-full lg:max-w-[80%] mx-auto leading-tight! pt-4"
              descriptionClassName="text-[#141414] text-center w-full lg:max-w-[40%] mx-auto font-medium"
            />

            <AppActionButton>
              Share
              <span className="ml-2 bg-white p-1 rounded-lg">
                <Share2 className="text-primary rotate-180" />
              </span>
            </AppActionButton>

            <p className="font-bold text-primary text-center w-full lg:max-w-[80%] mx-auto">
              Discover foundational and advanced prompting strategies to unlock
              ChatGPT’s power.
            </p>

            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              <>
                <Image
                  src="/assets/images/ai-lady.png"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
