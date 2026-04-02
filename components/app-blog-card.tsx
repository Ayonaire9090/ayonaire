"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { formatDate } from "@/lib/utils";
import { Spline_Sans } from "next/font/google";
import { Calendar } from "lucide-react";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

export interface AppBlogCardProps {
  title: string;
  excerpt: string;
  featuredImage: string;
  createdAt: string;
  author: {
    name: string;
    avatar?: string;
  };
  slug: string;
}

export const AppBlogCard: React.FC<AppBlogCardProps> = ({
  title,
  excerpt,
  featuredImage,
  createdAt,
  author,
  slug,
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative block w-full max-w-[400px] transition-all duration-300 ease-in-out cursor-pointer hover:z-10"
    >
      <Card className="bg-white rounded-[22px] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 py-0 overflow-visible">
        <CardContent className="p-4 lg:p-5 flex flex-col gap-4">
          {/* Image Section Container */}
          <div className="relative w-full aspect-16/10">
            {/* Tilted Decorative Card - Orange background */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary to-[#f97f11] rounded-[16px] -rotate-3 origin-center transition-all duration-300 group-hover:-rotate-5" />

            {/* Main Image */}
            <div className="relative w-full h-full rounded-[16px] overflow-hidden z-10 shadow-lg">
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-2 pt-2">
            {/* Title */}
            <h3
              className={`${splineSans.className} font-bold text-[#141219] text-lg lg:text-xl leading-tight line-clamp-2`}
            >
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed line-clamp-2">
              {excerpt}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 mt-1">
              <div className="p-1.5 bg-primary/10 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-gray-600">
                {formatDate(createdAt)}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 rounded-full">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">
                Ayonaire Digital Academy
              </span>
            </div>

            {/* Start Reading CTA */}
            <div className="flex items-center justify-between mt-2 pt-2">
              <span className="font-bold text-base lg:text-lg text-[#141219]">
                Start Reading
              </span>
              <div className="relative flex items-center justify-end p-2 rounded-full bg-none border border-gray-200 group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-primary/5 w-[70px] h-[50px] lg:h-[60px] group-hover:border-none transition-all duration-300">
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
        </CardContent>
      </Card>
    </Link>
  );
};
