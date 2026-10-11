import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { courses } from "@/constants";
import { BusinessStats } from "./business-stats";

interface GetStartedBootCampProps {
  sectionButtonTitle?: string;
  headingTitle?: string;
  headingDescription?: string;
  showStats?: boolean;
}
export const GetStartedBootCamp = ({
  sectionButtonTitle = "Bootcamp",
  headingTitle = "What is the Best Learning Program for You?",
  headingDescription,
  showStats = false,
}: GetStartedBootCampProps) => {
  return (
    <section className="container section-spacing pb-6 lg:pb-12">
      <div className="flex flex-col justify-center items-center">
        <AppSectionButton title={sectionButtonTitle} />
        <AppHeading
          headingLevel="h2"
          title={headingTitle}
          className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
          description={headingDescription}
          descriptionClassName="text-center text-lg pt-3 w-full lg:max-w-[90%] mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {courses
          .flatMap((category) => category.courses)
          .map((course, index) => (
            <GetStartedBootCampCard
              key={course.slug}
              courseTitle={course.title}
              image={course.imageSrc}
              link={`/courses/${course.slug}`}
            />
          ))}
      </div>

      <div className="flex justify-center items-center my-16">
        <AppActionButton className="rounded-xl!">
          <p>View All Courses</p>
          <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
            <ArrowRight size={25} className="text-primary  rounded" />
          </span>
        </AppActionButton>
      </div>

      {showStats && <BusinessStats />}
    </section>
  );
};

interface GetStartedBootCampCardProps {
  courseTitle: string;
  image: string;
  link: string;
}
const GetStartedBootCampCard = ({
  courseTitle,
  image,
  link,
}: GetStartedBootCampCardProps) => {
  return (
    <Link href={link}>
      <div className="flex flex-col gap-4 p-4 py-6 rounded-[22px] bg-white shadow-glow-blur hover:scale-105 transition-all duration-300">
        <Image
          src={image}
          alt=""
          width={500}
          height={500}
          className="w-full h-[200px] object-cover rounded-[12px]"
        />
        <h2 className="text-[22px] lg:text-[30px]">
          Train Your Team In{" "}
          <span className="font-extrabold">{courseTitle}</span>
        </h2>
        {/* View Courses CTA */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-xl text-[#141219]">View Courses</span>
          <div className="relative flex items-center justify-end p-2 rounded-full bg-linear-to-r from-primary to-primary/5 w-[70px] h-[50px] lg:h-[60px] group-hover:border-none transition-all duration-300">
            <div className="flex items-center justify-center rounded-full bg-black/10 w-10 h-10">
              <img
                className="w-5 h-5"
                src="/assets/icons/arrow.svg"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
