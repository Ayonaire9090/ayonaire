import { Calendar, Clock, MoreHorizontal, Video } from "lucide-react";
import React from "react";
import { StudentWorkshop } from "./workshop-data";

export interface WorkshopCalendarCardProps {
  month: string;
  day: string;
  label: string;
  dateText: string;
  time: string;
  title: string;
  author: string;
  link?: string;
  className?: string;
}

export const WorkshopCalendarCard = ({
  month,
  day,
  label,
  dateText,
  time,
  title,
  author,
  link,
  className = "",
}: WorkshopCalendarCardProps) => {
  return (
    <div
      className={`flex bg-white lg:bg-[#F8F9FA] lg:rounded-2xl border border-gray-100/80 overflow-hidden transition-all duration-300 hover:shadow-sm ${className}`}
    >
      {/* Left Date Column */}
      <div className="w-[72px] sm:w-[84px] flex flex-col shrink-0 border-r border-gray-100/50">
        <div className="h-10 sm:h-12 bg-[#F86432] flex items-center justify-center text-white font-semibold text-sm sm:text-base tracking-wide">
          {month}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-3 bg-white lg:bg-[#F8F9FA]">
          <span className="text-[#F86432] font-bold text-3xl sm:text-4xl leading-none">
            {day}
          </span>
          <span className="text-gray-500 font-medium text-xs sm:text-sm mt-1 sm:mt-1.5">
            {label}
          </span>
        </div>
      </div>

      {/* Right Content Column */}
      <div className="flex-1 flex flex-col p-3 sm:p-4 gap-3 sm:gap-4 min-w-0 bg-white lg:bg-[#F8F9FA]">
        {/* Top Row: Date & Time Info */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#F86432] text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} />
              <span>{dateText}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>{time}</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 rounded-full hover:bg-gray-50 shrink-0">
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Bottom Row: Topic Details */}
        <div className="flex flex-col min-w-0 mt-auto pt-1">
          <h3 className="font-medium sm:font-semibold text-gray-900 text-sm sm:text-base md:text-lg tracking-tight leading-snug line-clamp-2">
            {title}
          </h3>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="min-w-0 truncate text-gray-500 text-xs sm:text-sm">
              By {author}
            </p>
            <a
              href={link || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!link}
              className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                link
                  ? "bg-[#F86432] text-white hover:bg-[#e05a2d]"
                  : "pointer-events-none bg-gray-100 text-gray-400"
              }`}
            >
              <Video size={14} />
              <span>Join</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkshopCalendar = ({
  workshops,
  className = "",
}: {
  workshops: StudentWorkshop[];
  className?: string;
}) => {
  if (workshops.length === 0) {
    return (
      <div className={`flex items-center justify-center py-8 text-[15px] text-gray-500 ${className}`}>
        No upcoming workshops found.
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {workshops.map((item) => (
        <WorkshopCalendarCard key={item.id} {...item} />
      ))}
    </div>
  );
};
