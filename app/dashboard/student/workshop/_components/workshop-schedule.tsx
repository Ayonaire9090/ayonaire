import { MoreHorizontal, Video } from "lucide-react";
import React from "react";
import { StudentWorkshop } from "./workshop-data";

export interface WorkshopScheduleCardProps {
  label: string;
  isLive?: boolean;
  time: string;
  month: string;
  day: string;
  title: string;
  author: string;
  link?: string;
  endTime?: string;
  className?: string;
}

export const WorkshopScheduleCard = ({
  label,
  isLive,
  time,
  month,
  day,
  title,
  author,
  link,
  endTime,
  className = "",
}: WorkshopScheduleCardProps) => {
  return (
    <div
      className={`flex bg-white lg:bg-[#F8F9FA] lg:rounded-2xl overflow-hidden hover:shadow-md transition-all ${className}`}
    >
      {/* Left Orange Bar */}
      <div className="w-12 sm:w-14 md:w-16 bg-[#F86432] flex items-center justify-center shrink-0">
        <span className="text-white font-semibold text-base sm:text-[20px] tracking-[0.2em] -rotate-90 whitespace-nowrap inline-block">
          {label}
        </span>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col gap-3 sm:gap-4 min-w-0">
        {/* Top Info */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            {isLive && (
              <div className="flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Live
              </div>
            )}
            <span className="text-[#F86432] text-xs sm:text-sm font-medium">
              {time}
            </span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 p-1 -mr-1">
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Details */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FEECE5] rounded-xl flex flex-col items-center justify-center shrink-0">
            <span className="text-[#F86432] text-[10px] sm:text-xs font-semibold uppercase">
              {month}
            </span>
            <span className="text-[#F86432] text-base sm:text-lg font-bold leading-none mt-0.5">
              {day}
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg leading-tight truncate">
              {title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
              By {author}
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="flex items-center justify-between mt-1 sm:mt-2">
          <span className="text-xs sm:text-sm text-gray-500">
            {endTime && (
              <>
                End in{" "}
                <strong className="text-gray-900 font-semibold">
                  {endTime}
                </strong>
              </>
            )}
          </span>
          <a
            href={link || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!link}
            className={`flex items-center justify-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium transition-colors text-sm sm:text-base ml-auto ${
              link
                ? "bg-[#F86432]/10 sm:bg-[#F86432] hover:bg-[#F86432]/20 sm:hover:bg-[#e05a2d] text-[#F86432] sm:text-white"
                : "pointer-events-none bg-gray-100 text-gray-400"
            }`}
          >
            <Video size={18} className="hidden sm:block" />
            <Video size={16} className="sm:hidden" />
            <span>Join</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const WorkshopSchedule = ({
  workshops,
  className = "",
}: {
  workshops: StudentWorkshop[];
  className?: string;
}) => {
  if (workshops.length === 0) {
    return (
      <div className={`flex items-center justify-center py-8 text-[15px] text-gray-500 ${className}`}>
        No workshops scheduled for today.
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {workshops.map((item) => (
        <WorkshopScheduleCard key={item.id} {...item} />
      ))}
    </div>
  );
};
