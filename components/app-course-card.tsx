import React from "react";
import Link from "next/link";

import { Card, CardContent } from "./ui/card";

import { formatDate } from "@/lib/utils";
import { splineSans } from "@/app/fonts";

export interface AppCourseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  nextCohortDate: string;
  duration: string;
  showBackgroundBorderMobile?: boolean;
  slug: string;
}

export const AppCourseCard: React.FC<AppCourseCardProps> = ({
  title,
  description,
  imageSrc,
  nextCohortDate,
  duration,
  showBackgroundBorderMobile,
  slug,
}) => {
  const programDetails = [
    {
      icon: "/assets/icons/calendar.svg",
      label: "Next Cohort:",
      value: formatDate(nextCohortDate),
    },
    {
      icon: "/assets/icons/clock.svg",
      label: "Duration:",
      value: duration,
    },
  ];

  return (
    <Link
      href={`/courses/${slug}`}
      className="group relative block w-full max-w-[500px] h-[550px] xs:h-[550px] sm:h-[700px] md:h-auto md:aspect-500/800 transition-all duration-300 ease-in-out cursor-pointer hover:z-10 hover:scale-[1.02]"
    >
      {/* Background/Shadow Element */}
      <div className="absolute inset-0 flex rounded-[26px] bg-linear-to-br from-primary via-primary to-primary/30 md:bg-linear-to-t md:from-gray-100 md:via-white md:to-white transition-all duration-300 ease-in-out md:group-hover:bg-linear-to-br md:group-hover:from-primary md:group-hover:via-primary md:group-hover:to-primary/30">
        <div className="flex mt-auto w-[90%] mx-auto mb-4 lg:mb-3 relative items-center justify-between z-0">
          <div className="relative font-semibold text-white md:text-inherit md:group-hover:text-white text-lg lg:text-xl transition-colors duration-300">
            View Program
          </div>

          <div className="relative flex items-center justify-end p-2 rounded-full bg-linear-to-r from-primary to-primary/5 border-none md:bg-none md:border md:border-gray-200 md:group-hover:bg-linear-to-r md:group-hover:from-primary md:group-hover:to-primary/5 w-[70px] h-[50px] lg:h-[60px] md:group-hover:border-none">
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

      {/* Main Card Content */}
      <Card
        className={`absolute h-[85%] bg-white rounded-[22px] border-0 z-10 py-0 overflow-visible lg:w-[98.5%] lg:left-[0.75%] lg:top-[0.5%] ${
          showBackgroundBorderMobile
            ? "w-[98.9%] left-[0.5%] top-[0.4%]"
            : "top-0 left-0 w-full"
        }`}
      >
        <CardContent className="p-0 flex flex-col h-full overflow-visible">
          {/* Image Section Container - positioned with enough margin for tilted card */}
          <div className="relative w-[95%] h-[42%] mx-auto mt-[4%]  shrink-0">
            {/* Tilted Decorative Card - sized and positioned to stay within card bounds */}
            <div className="absolute top-0 md:-top-[1%] left-0 w-full h-full bg-linear-to-br shadow-lg from-primary to-[#f97f11] rounded-[16px] -rotate-4 origin-center transition-all duration-300 md:group-hover:-rotate-6" />

            {/* Background Image */}
            <div
              className="relative w-full h-full rounded-[16px] bg-cover bg-center bg-no-repeat z-10"
              style={{
                backgroundImage: `url(${imageSrc})`,
                boxShadow:
                  "0 10px 25px -5px #BF744085, 0 8px 10px -6px #BF744085",
              }}
            >
              {/* {rating !== undefined && (
                <Badge className="absolute top-3 left-3 bg-white/95 text-black hover:bg-white flex items-center gap-1.5 px-3 py-1.5 ">
                  <StarIcon className="w-5 h-5 fill-primary text-primary" />
                  <span className=" font-bold text-lg leading-none pt-0.5">
                    {rating!.toFixed(1)}
                  </span>
                </Badge>
              )} */}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col h-fit  px-3 pt-10">
            <h2
              className={`${splineSans.className} font-bold text-[#141219] text-[20px] leading-tight line-clamp-2`}
            >
              {title}
            </h2>

            <p className="mt-2 font-medium text-[15px] leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="mt-auto pt-4 space-y-3">
              {programDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1.5 bg-primary/5 rounded-full">
                    <img
                      src={detail.icon}
                      className="w-4 h-4 text-primary"
                      alt=""
                    />
                  </div>
                  <div className="text-sm lg:text-[14px]">
                    <span className="text-gray-500 font-medium">
                      {detail.label}
                    </span>
                    <span className="font-bold ml-1">{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
