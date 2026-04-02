import React from "react";
import Image from "next/image";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";
import { Spline_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

interface IndustryStat {
  icon: string;
  title: string;
  description: string;
  source: string;
}

interface SalaryInsight {
  location: string;
  montly: string;
}

interface CourseIndustryProps {
  courseTitle?: string;
  peopleInField?: string;
  industryStats?: IndustryStat[];
  salaryInsights?: SalaryInsight[];
}

const IndustryStatCard = ({
  icon,
  title,
  description,
  source,
}: IndustryStat) => {
  return (
    <article className="bg-white rounded-[16px] shadow-lg border border-primary/20 border-t-5 border-t-primary  overflow-hidden flex flex-col">
      {/* Card Content */}
      <div className="p-5 lg:p-6 flex-1">
        {/* Icon */}
        <div className="w-12 h-12 lg:w-14 lg:h-14 mb-4">
          <Image
            src={icon}
            alt={title}
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title */}
        <h3
          className={cn(
            "text-[24px] lg:text-[28px] font-bold text-gray-900 mb-2",
            splineSans.className
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] lg:text-[15px] text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Source Footer */}
      <div className="bg-primary text-white px-5 py-3 flex items-center gap-2">
        <span className="text-[13px] font-semibold">Source:</span>
        <span className="text-[13px]">{source}</span>
      </div>
    </article>
  );
};

export const CourseIndustry = ({
  courseTitle = "",
  peopleInField = "",
  industryStats = [],
  salaryInsights = [],
}: CourseIndustryProps) => {
  // Split stats into top row (first 3) and bottom row (remaining)
  const topRowStats = industryStats.slice(0, 3);
  const bottomRowStats = industryStats.slice(3, 5);

  return (
    <section className="container section-spacing">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Industry" />
        <AppHeading
          headingLevel="h2"
          title={`Join The Global ${courseTitle} Industry`}
          description={`From Billion-Dollar Startups To Government-Backed Innovation Hubs, Demand For Skilled ${peopleInField} Is Skyrocketing.`}
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center lg:w-[70%] mx-auto"
        />
      </div>

      {/* Section Subheading */}
      <h3
        className={cn(
          "text-[20px] lg:text-[24px] font-semibold text-gray-800 mb-6",
          splineSans.className
        )}
      >
        {courseTitle} Job Outlook & Industry Stats
      </h3>

      {/* Industry Stats Cards */}
      <div className="flex flex-col gap-4 lg:gap-6 mb-12">
        {/* Top Row - 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {topRowStats.map((stat, index) => (
            <IndustryStatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              description={stat.description}
              source={stat.source}
            />
          ))}
        </div>

        {/* Bottom Row - Centered 2 cards */}
        {bottomRowStats.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 lg:w-2/3 lg:mx-auto">
            {bottomRowStats.map((stat, index) => (
              <IndustryStatCard
                key={index + 3}
                icon={stat.icon}
                title={stat.title}
                description={stat.description}
                source={stat.source}
              />
            ))}
          </div>
        )}
      </div>

      {/* Salary Insights Section */}
      {salaryInsights.length > 0 && (
        <div className="mt-12">
          <h3
            className={cn(
              "text-[20px] lg:text-[24px] font-semibold text-gray-800 text-center mb-6",
              splineSans.className
            )}
          >
            Global {courseTitle} Salary Insights
          </h3>

          {/* Salary Table */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl border border-primary/10 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2 border-b border-primary/10">
              <div className="px-6 py-4">
                <span
                  className={cn(
                    "text-[15px] lg:text-[16px] font-semibold text-gray-800",
                    splineSans.className
                  )}
                >
                  Location
                </span>
              </div>
              <div className="px-6 py-4 text-right">
                <span
                  className={cn(
                    "text-[15px] lg:text-[16px] font-semibold text-gray-800",
                    splineSans.className
                  )}
                >
                  Avg. Monthly Salary
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {salaryInsights.map((insight, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-2",
                  index !== salaryInsights.length - 1 &&
                    "border-b border-primary/10"
                )}
              >
                <div className="px-6 py-4">
                  <span className="text-[14px] lg:text-[15px] text-gray-600">
                    {insight.location}
                  </span>
                </div>
                <div className="px-6 py-4 text-right">
                  <span className="text-[14px] lg:text-[15px] text-gray-600">
                    {insight.montly}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Source Attribution */}
          <p className="text-center text-[13px] text-gray-400 mt-6">
            <span className="font-semibold text-gray-600">Source:</span>{" "}
            Glassdoor, Levels.Fyi, PayScale, LinkedIn Jobs (2024)
          </p>
        </div>
      )}
    </section>
  );
};
