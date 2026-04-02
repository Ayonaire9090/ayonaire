"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spline_Sans } from "next/font/google";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

interface AppExpectCardProps {
  title: string;
  image: string;
  className?: string;
}

export const AppExpectCard = ({
  title,
  image,
  className,
}: AppExpectCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden  h-[250px]",
        "bg-linear-to-br from-[#F67219] via-[#F67219] to-[#FFE6D5]",
        className
      )}
    >
      {/* Image Section */}
      <div className="relative w-full h-[70%] rounded-2xl">
        <Image src={image} alt={title} fill className="object-cover rounded-2xl" />
      </div>

      {/* Title Section with gradient background */}
      <div className="flex flex-col justify-center items-start h-[30%] px-4 py-4 lg:px-6 lg:py-5">
        <h3
          className={cn(
            "text-white text-base lg:text-lg font-semibold leading-snug",
            splineSans.className
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default AppExpectCard;
