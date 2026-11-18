"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, BookOpen, CheckCircle2 } from "lucide-react";

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
  const safeProgress = Math.min(100, Math.max(0, Number.isFinite(progress) ? progress : 0));

  return (
    <div className="group w-full h-full flex flex-col bg-white border border-[#ebe7e1] rounded-[20px] overflow-hidden shadow-[0_3px_14px_rgba(40,30,20,0.035)] hover:shadow-[0_12px_32px_rgba(40,30,20,0.08)] hover:-translate-y-0.5 transition-all duration-200">
      {/* Course Image */}
      <div className="relative h-[180px] w-[calc(100%-16px)] mx-auto mt-2 overflow-hidden rounded-[14px] shrink-0 bg-[#f3f0ec]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#b95130] shadow-sm">{status}</span>
      </div>

      {/* Course Info Section */}
      <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-4">
        <div className="flex flex-col">
          <h3 className="text-[17px] font-bold text-[#28221e] leading-snug line-clamp-2">
            {title}
          </h3>
            <p className="text-[13px] text-[#91877e] mt-2 line-clamp-2 leading-5 min-h-[40px]">
              {description}
            </p>
          <div className="mt-5"><div className="mb-2 flex items-center justify-between text-xs"><span className="font-medium text-[#91877e]">Your progress</span><span className="font-bold text-[#d96037]">{Math.round(safeProgress)}%</span></div><div role="progressbar" aria-label={`${title} progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(safeProgress)} className="h-2 overflow-hidden rounded-full bg-[#f2eee9]"><div className="h-full rounded-full bg-[#ec7045] transition-all" style={{ width: `${safeProgress}%` }} /></div><p className="mt-3 flex items-center gap-1.5 text-xs text-[#9a9087]">{status === "Completed" ? <CheckCircle2 className="size-3.5 text-[#de6b43]" /> : <BookOpen className="size-3.5" />}{chaptersCompleted} {chaptersCompleted === 1 ? "lesson" : "lessons"} completed</p></div>
        </div>

        {/* Go to Course Button */}
        <div className="pt-5 mt-auto">
          <Link
            href={`/dashboard/student/courses/${slug}`}
            className="flex items-center justify-between w-full px-4 py-3 bg-[#faf7f3] rounded-xl text-sm font-semibold text-[#332b25] hover:bg-[#fff0e8] hover:text-[#d85c36] transition-colors"
          >
            {status === "Not Started" ? "Start learning" : "Continue learning"}<ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
