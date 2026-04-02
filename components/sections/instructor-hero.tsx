import React from "react";
import { Header } from "../layout/header";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";

export const InstructorHero = () => {
  return (
    <>
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="relative z-10 flex flex-col justify-center items-center gap-4 py-10 lg:py-12">
            <AppSectionButton
              className="bg-white"
              title="Join Africa's Leading Instructor Network"
            />
            <AppHeading
              headingLevel="h1"
              title="Teach. Impact. Earn."
              description="You have the knowledge, we have the platform. Join us to upskill the next wave of tech leaders and get paid for impacting knowledge."
              descriptionClassName="text-[#141414] text-center w-full lg:max-w-[40%] mx-auto font-medium"
              className="text-center w-full lg:max-w-2xl mx-auto  leading-tight! pt-4"
            />
            <AppActionButton className="rounded-xl! mt-3">
              <p>Become an Instructor</p>
              <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                <ArrowRight size={25} className="text-primary  rounded" />
              </span>
            </AppActionButton>

            <p className="my-6 lg:my-12 font-medium text-lg lg:text-xl opacity-80 text-center">
              Our Instructors Come from the World's Leading Companies
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
