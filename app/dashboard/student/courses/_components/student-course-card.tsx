"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export type CourseStatus = "Completed" | "In Progress" | "Not Started";

export interface StudentCourseCardProps {
  imageSrc: string;
  title: string;
  description: string;
  slug: string;
  status?: CourseStatus;
  progress?: number;
  chaptersCompleted?: number;
}

export const StudentCourseCard = ({
  imageSrc,
  title,
  description,
  slug,
  status = "Not Started",
  progress = 0,
  chaptersCompleted = 0,
}: StudentCourseCardProps) => {
  const isStarted = status === "In Progress" || status === "Completed";

  return (
    <div className="w-full h-full flex flex-col bg-white border border-gray-100/80 rounded-[28px] overflow-hidden shadow-xs hover:shadow-md transition-shadow">
      {/* Course Image */}
      <div className="relative h-[220px] w-[calc(100%-16px)] mx-auto mt-2 overflow-hidden rounded-[20px] shrink-0 bg-gray-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Course Info Section */}
      <div className="flex flex-1 flex-col justify-between p-4 md:p-5 bg-[#F8F9FA] w-[calc(100%-16px)] mx-auto mb-2 mt-2 rounded-[20px]">
        <div className="flex flex-col">
          <h3 className="text-[17px] md:text-[18px] font-bold text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-[13px] text-gray-500 font-medium mt-1">
            By Ayonaire Academy
          </p>

          {!isStarted ? (
            <p className="text-[14px] text-gray-600 mt-4 line-clamp-3 leading-relaxed">
              {description}
            </p>
          ) : (
            <div className="flex flex-col mt-6 gap-3.5">
              {/* Progress Bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#10B981] rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {progress}%
                </span>
              </div>

              {/* Badge & Chapters */}
              <div className="flex items-center gap-2.5 mt-1">
                <span className="bg-[#E11D48] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">
                  NEW
                </span>
                <span className="text-sm">
                  <strong className="font-semibold text-gray-900">
                    {chaptersCompleted} chapter
                  </strong>{" "}
                  <span className="text-gray-500">Completed</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Go to Course Button */}
        <div className="pt-6 mt-auto">
          <Link
            href={`/courses/${slug}`}
            className="flex items-center justify-center w-full py-3.5 bg-white rounded-xl text-[15px] font-bold text-gray-900 hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm"
          >
            Go to Course
          </Link>
        </div>
      </div>
    </div>
  );
};
