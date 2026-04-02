import React from "react";
import Image from "next/image";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { ArrowRight } from "lucide-react";

interface CourseUpcomingProps {
  courseTitle?: string;
  peopleInField?: string;
}

// Sample upcoming classes data - can be moved to constants or fetched from API
const upcomingClasses = [
  {
    type: "Online",
    date: "January 1st",
    time: "05:00PM - 7:00PM (WAT)",
    originalPrice: "1,46646",
    discountPrice: "1,236,678",
    validTill: "January 15",
  },
  {
    type: "Online",
    date: "January 1st",
    time: "10:00AM - 12:00PM (WAT)",
    originalPrice: "1,46646",
    discountPrice: "1,236,678",
    validTill: "January 15",
  },
];

export const CourseUpComing = ({ 
    courseTitle = "",
    peopleInField = ""
}: CourseUpcomingProps) => {
    // Get the singular form by removing the last 's' if it exists
  const personInField = peopleInField.endsWith("s")
    ? peopleInField.slice(0, -1)
    : peopleInField;
  return (
    <section className="container section-spacing">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Upcoming" />
        <AppHeading
          headingLevel="h2"
          title={`Upcoming ${courseTitle} Online Classes`}
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center lg:w-[70%] mx-auto"
        />
      </div>

      {/* Upcoming Classes Cards */}
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        {upcomingClasses.map((classItem, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-[#FFE7DE]/50"
          >
            {/* Mobile Layout */}
            <div className="flex flex-col items-center lg:hidden">
              {/* Icons */}
              <div className="flex items-center gap-1 mb-4">
                <Image
                  src="/assets/icons/gray-code-laptop.svg"
                  alt="laptop"
                  width={40}
                  height={40}
                />
                <Image
                  src="/assets/icons/gray-plus.svg"
                  alt="plus"
                  width={20}
                  height={20}
                  className="opacity-60"
                />
                <Image
                  src="/assets/icons/gray-users.svg"
                  alt="users"
                  width={32}
                  height={32}
                />
              </div>

              {/* Divider */}
              <div className="w-full h-[2px] bg-[#FFE7DE] my-4" />

              {/* Course Info */}
              <h3 className="text-lg font-bold text-center mb-2">
                {personInField}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                Type: {classItem.type}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Date: {classItem.date}
              </p>
              <p className="text-sm text-gray-500 mb-4">{classItem.time}</p>

              {/* Divider */}
              <div className="w-full h-[2px] bg-[#FFE7DE] my-4" />

              {/* Pricing */}
              <p className="text-sm text-gray-400 line-through mb-1">
                Type: NGN {classItem.originalPrice}
              </p>
              <p className="text-xl font-bold text-primary mb-1">
                Ngn {classItem.discountPrice}
              </p>
              <p className="text-xs text-gray-400 uppercase mb-6">
                *Valid Till {classItem.validTill}
              </p>

              {/* CTA Button */}
              <button className="flex items-center gap-2 bg-linear-to-r from-primary to-primary/80 text-white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
                <span>Enquiry Now</span>
                <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between gap-8">
              {/* Left - Icons */}
              <div className="flex items-center gap-1 shrink-0">
                <Image
                  src="/assets/icons/gray-code-laptop.svg"
                  alt="laptop"
                  width={48}
                  height={48}
                />
                <Image
                  src="/assets/icons/gray-plus.svg"
                  alt="plus"
                  width={20}
                  height={20}
                  className="opacity-60"
                />
                <Image
                  src="/assets/icons/gray-users.svg"
                  alt="users"
                  width={36}
                  height={36}
                />
              </div>

              {/* Center Left - Course Info */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">{personInField}</h3>
                <p className="text-sm text-gray-500">Type: {classItem.type}</p>
                <p className="text-sm text-gray-500">Date: {classItem.date}</p>
                <p className="text-sm text-gray-500">{classItem.time}</p>
              </div>

              {/* Center Right - Pricing */}
              <div className="text-center shrink-0">
                <p className="text-sm text-gray-400 line-through">
                  Type: NGN {classItem.originalPrice}
                </p>
                <p className="text-xl font-bold text-primary">
                  Ngn {classItem.discountPrice}
                </p>
                <p className="text-xs text-gray-400 uppercase">
                  *Valid Till {classItem.validTill}
                </p>
              </div>

              {/* Right - CTA Button */}
              <button className="flex items-center gap-2 bg-linear-to-r from-primary to-primary/80 text-white rounded-xl px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 shrink-0">
                <span>Enquiry Now</span>
                <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
