import React from "react";
import Image from "next/image";

export interface EnrollmentCourseData {
  id: string;
  title: string;
  duration: string;
  price: string;
  imageSrc: string;
  dateStr?: string;
}

interface EnrollmentCourseCardProps {
  course: EnrollmentCourseData;
}

export const EnrollmentCourseCard = ({ course }: EnrollmentCourseCardProps) => {
  return (
    <div className="flex flex-col bg-[#F6F6F6] rounded-2xl overflow-hidden w-full md:max-w-[340px] h-fit shrink-0 border border-gray-100/50">
      {/* Image Block */}
      <div className="relative w-full h-[180px] bg-gray-200">
        <Image
          src={course.imageSrc}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Block */}
      <div className="p-5 flex flex-col pt-5 pb-6">
        <span className="text-[13px] text-gray-500 mb-1.5 font-medium">
          {course.dateStr || "Feb 19,2026 09:54 am"}
        </span>
        <h4 className="text-[18px] md:text-[19px] font-semibold text-gray-900 mb-6 line-clamp-2">
          {course.title}
        </h4>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="text-[13.5px] text-gray-500 mb-0.5 font-medium">
              Price
            </span>
            <span className="text-[16px] font-bold text-gray-900">
              {course.price}
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[13.5px] text-gray-500 mb-0.5 font-medium">
              Duration
            </span>
            <span className="text-[16px] font-bold text-gray-900">
              {course.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
