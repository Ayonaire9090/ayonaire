import React from "react";
import { Header } from "../layout/header";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AppSectionButton } from "../app-section-button";

export const HireTalentHero = () => {
  return (
    <>
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="pl-0 basis-full">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8 my-8">
              {/* First Column */}
              <div className="flex flex-col justify-center lg:w-[60%]">
                <AppSectionButton
                  title="Zero-Cost Recruitment Platform"
                  className="my-4 bg-white w-fit"
                />
                <AppHeading
                  headingLevel="h1"
                  title={
                    <>
                      <p>Ayonaire Hire.</p>
                      <p>Build Your Dream Tech Team</p>
                    </>
                  }
                  className="leading-tight!"
                  description="Streamline hiring with zero-cost recruitment and access a curated pool of pre-vetted, job-ready talent across AI/ML, Data, Cybersecurity, UI/UX, Cloud, and Product Management."
                  descriptionClassName="pt-3 text-[16px] lg:text-[18px] text-[#141414] "
                />

                <div className="grid grid-cols-2 lg:flex items-center gap-4 pt-8 md:py-12">
                  <Link href="/hire-talent#getStartedHiring">
                    <AppActionButton
                      variant="fading"
                      className="py-6 lg:py-8 px-8 text-[16px] rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group"
                    >
                      <p>Start Hiring</p>
                      <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                        <ArrowRight
                          size={25}
                          className="text-primary  rounded"
                        />
                      </span>
                    </AppActionButton>
                  </Link>
                </div>
              </div>
              {/* Second Column */}
              <div className="flex w-full lg:w-[40%] self-center items-center lg:justify-end pt-6 lg:pt-0 gap-4">
                <Image
                  src="/assets/images/pleased-lady-holding-books.png"
                  alt="Hire Smart Talent- Ayonaire"
                  width={350}
                  height={350}
                  className="w-full lg:h-auto lg:max-w-[90%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
