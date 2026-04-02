import React from "react";
import { Header } from "../layout/header";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const GetStartedHero = () => {
  return (
    <>
      {/* Decoration Background */}
      <div className="absolute bg-linear-to-b from-[#FFE7DE] to-white inset-0 min-h-[872px] h-screen" />
      <div className="relative">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <Header />
            <div className="relative z-10 flex flex-col justify-center items-center gap-4 py-16 lg:py-24">
              <AppSectionButton
                className="bg-white"
                title="Join Africa's Leading Instructor Network"
              />
              <AppHeading
                headingLevel="h1"
                title="Get Started With Ayonaire"
                className="text-center w-full lg:max-w-2xl mx-auto  leading-tight! pt-4"
                description="Begin your learning journey in AI, Data, Cyber, Cloud, and more."
                descriptionClassName="text-[#141414] text-base lg:text-lg text-center w-full max-w-[80%] mx-auto font-semibold"
              />
              <AppActionButton className="rounded-xl!">
                <p>See Bootcamps</p>
                <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                  <ArrowRight size={25} className="text-primary  rounded" />
                </span>
              </AppActionButton>
            </div>
          </div>
        </div>
        {/* Bottom Hero SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            src="/assets/images/get-started-vector.svg"
            alt="Get Started"
            className="w-full h-auto"
            width={1440}
            height={145}
          />
        </div>
      </div>
    </>
  );
};
