"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CourseStatus = "Completed" | "In Progress" | "Not Started";

interface ProfileCourseCardProps {
  imageSrc: string;
  title: string;
  description: string;
  slug: string;
  status?: CourseStatus;
}

const statusConfig: Record<
  CourseStatus,
  { label: string; bgColor: string; textColor: string }
> = {
  Completed: {
    label: "Completed",
    bgColor: "bg-[#22C55E]",
    textColor: "text-white",
  },
  "In Progress": {
    label: "In Progress",
    bgColor: "bg-[#F59E0B]",
    textColor: "text-white",
  },
  "Not Started": {
    label: "Not Started",
    bgColor: "bg-gray-400",
    textColor: "text-white",
  },
};

export const ProfileCourseCard = ({
  imageSrc,
  title,
  description,
  slug,
  status = "Not Started",
}: ProfileCourseCardProps) => {
  const currentStatus = statusConfig[status];

  return (
    <div className="w-full h-[420px] flex flex-col bg-white border-none rounded-3xl overflow-hidden shadow-md ">
      {/* Course Image with Status Badge */}
      <div className="relative flex-1 w-[calc(100%-16px)] mx-auto mt-3 mb-1 overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-[12px] font-semibold",
              currentStatus.bgColor,
              currentStatus.textColor,
            )}
          >
            {currentStatus.label}
          </span>
        </div>
      </div>

      {/* Course Info Section */}
      <div className="flex flex-1 flex-col justify-between p-3 md:px-4 bg-[#F6F6F6] w-[calc(100%-16px)] mx-auto mb-2 mt-1 rounded-2xl">
        <div className="flex flex-col gap-1">
          <h3 className="text-[18px] font-bold text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-[13px] text-gray-600 font-medium">
            By Ayonaire Academy
          </p>
          <p className="text-[14px] text-gray-600 mt-1 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
        {/* Go to Course Button */}
        <div className="pt-2">
          <Link
            href={`/courses/${slug}`}
            className="block w-full text-center py-3.5 bg-white border-none shadow-none rounded-xl text-[16px] font-semibold text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Go to Course
          </Link>
        </div>
      </div>
    </div>
  );
};
