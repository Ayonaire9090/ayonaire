"use client";

import { useMemo } from "react";
import { Radio, MoreHorizontal, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { intervalToDuration } from "date-fns";
import { useGetWorkshops } from "@/hooks/api/use-workshops";
import { mapWorkshopRecordToStudentWorkshop } from "../../workshop/_components/workshop-data";

export const FeedLivePost = () => {
  const { data, isLoading } = useGetWorkshops(1, 20);

  const liveWorkshops = useMemo(() => {
    const records = data?.data?.workshops ?? [];
    return records
      .map((record) => ({
        record,
        workshop: mapWorkshopRecordToStudentWorkshop(record),
      }))
      .filter(({ workshop }) => workshop.isLive)
      .sort((a, b) => a.workshop.endDate.getTime() - b.workshop.endDate.getTime());
  }, [data]);

  if (isLoading || liveWorkshops.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full lg:p-5 lg:rounded-2xl lg:bg-white">
      {liveWorkshops.map(({ record, workshop }) => (
        <FeedLiveCard
          key={workshop.id}
          scheduled={workshop.label}
          date={workshop.dateText}
          time={workshop.time}
          topic={workshop.title}
          author={workshop.author}
          endDate={workshop.endDate}
          joinLink={record.platform?.link}
        />
      ))}
    </div>
  );
};

interface FeedLiveCardProps {
  scheduled?: string;
  date?: string;
  time?: string;
  topic?: string;
  author?: string;
  endDate: Date;
  joinLink?: string;
}

export const FeedLiveCard = ({
  scheduled = "Today",
  date = "Mar 12",
  time = "09:00 AM - 01:00 PM",
  topic = "Building RAG Agents with LangChain",
  author = "Ayobami Awosanya",
  endDate,
  joinLink,
}: FeedLiveCardProps) => {
  // Parse date into Month and Day
  const dateParts = date.split(" ");
  const month = dateParts[0] || "Mar";
  const day = dateParts[1] || "12";

  const duration = intervalToDuration({ start: new Date(), end: endDate });
  const endsIn = `${duration.hours ?? 0}h ${duration.minutes ?? 0}m`;

  return (
    <div className="w-full bg-white lg:bg-[#F6F6F6] lg:rounded-2xl border border-gray-100/80  flex overflow-hidden transition-all duration-300 hover:shadow-sm">
      {/* Left Accent Sidebar */}
      <div className="w-12 sm:w-16 bg-[#F86432] flex items-center justify-center relative shrink-0 select-none min-h-[140px]">
        <span className="font-bold text-white text-lg  tracking-wider transform -rotate-90 whitespace-nowrap absolute">
          {scheduled}
        </span>
      </div>

      {/* Right Content Side */}
      <div className="flex-1 flex flex-col p-3 sm:p-4 gap-3.5 min-w-0 justify-between">
        {/* Row 1: Live Status & Time Info */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-1">
            {/* Live Badge */}
            <div className="bg-[#fde8e8] text-[#F86432] rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold tracking-wider flex items-center gap-1.5 border border-red-100/30">
              <Radio size={14} className="animate-pulse" />
              <span>Live</span>
            </div>
            {/* Time */}
            <span className="text-[#F86432] font-bold text-xs sm:text-sm md:text-base tracking-wide">
              {time}
            </span>
          </div>

          {/* More Action Menu */}
          <button className="self-start text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-50 cursor-pointer">
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Row 2: Topic details & Join button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-0.5">
          {/* Left: Date Box & Text Details */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Date Box */}
            <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#fbf2ec] rounded-xl shrink-0 select-none">
              <span className="text-[#F86432] font-medium text-xs sm:text-sm uppercase tracking-wide">
                {month}
              </span>
              <span className="text-[#F86432] font-bold text-lg sm:text-xl leading-none mt-0.5">
                {day}
              </span>
            </div>

            {/* Topic Details */}
            <div className="flex flex-col min-w-0">
              <h3 className="font-medium text-gray-900 text-base sm:text-lg md:text-xl tracking-tight leading-snug line-clamp-1">
                {topic}
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">By {author}</p>
            </div>
          </div>

          {/* Right: Join Button & Countdown */}
          <div className="flex flex-col items-start sm:items-center justify-center shrink-0 w-full sm:w-auto gap-1">
            <Button
              asChild={!!joinLink}
              disabled={!joinLink}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-xl font-bold transition-all  active:scale-98 cursor-pointer text-base h-auto"
            >
              {joinLink ? (
                <a href={joinLink} target="_blank" rel="noopener noreferrer">
                  <Video className="text-white animate-pulse w-5! h-5!" />
                  <span>Join</span>
                </a>
              ) : (
                <span className="flex items-center gap-2">
                  <Video className="text-white animate-pulse w-5! h-5!" />
                  <span>Join</span>
                </span>
              )}
            </Button>
            <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap self-start sm:self-center mt-1 sm:mt-0.5">
              <span className="font-bold text-gray-950">End in </span>
              <span className="text-gray-400 font-medium">{endsIn}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
