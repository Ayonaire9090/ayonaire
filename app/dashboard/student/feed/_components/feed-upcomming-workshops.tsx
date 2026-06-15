import { Calendar } from "lucide-react";
import Link from "next/link";

const DummyWorkshops = [
  {
    month: "Mar",
    day: "12",
    title: "Building RAG Agents with LangChain",
    author: "Ayobami Awosanya",
  },
  {
    month: "Mar",
    day: "20",
    title: "Intro to MLOps",
    author: "Ayobami Awosanya",
  },
];

export const FeedUpcomingWorkShops = () => {
  return (
    <div className="w-full bg-white p-4 lg:p-5 lg:rounded-2xl flex flex-col gap-4 border border-gray-100/50">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-[#F86432] shrink-0" />
        <h2 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
          Upcoming Workshops
        </h2>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {DummyWorkshops.map((workshop, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-2xl border border-gray-100/50 hover:shadow-sm transition-all duration-300"
          >
            {/* Left Date Badge */}
            <div className="flex flex-col items-center justify-center w-14 h-14 bg-[#FEECE5] rounded-xl shrink-0 select-none">
              <span className="text-[#F86432] font-semibold text-xs uppercase tracking-wide">
                {workshop.month}
              </span>
              <span className="text-[#F86432] font-bold text-lg leading-none mt-0.5">
                {workshop.day}
              </span>
            </div>

            {/* Right Topic Info */}
            <div className="flex flex-col min-w-0">
              <h3 className="font-semibold text-gray-950 text-sm sm:text-base leading-snug truncate">
                {workshop.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                By {workshop.author}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Workshops Link */}
      <Link
        href="#"
        className="text-[#F86432] text-sm font-medium hover:underline flex items-center gap-1 cursor-pointer w-fit mt-1"
      >
        View all workshops &rarr;
      </Link>
    </div>
  );
};
