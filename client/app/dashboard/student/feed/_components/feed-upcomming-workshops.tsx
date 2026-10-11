"use client";

import { useMemo } from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { useGetWorkshops } from "@/hooks/api/use-workshops";
import { mapWorkshopRecordToStudentWorkshop } from "../../workshop/_components/workshop-data";

export const FeedUpcomingWorkShops = () => {
  const { data, isLoading } = useGetWorkshops(1, 20);

  const upcomingWorkshops = useMemo(() => {
    const workshops = (data?.data?.workshops ?? []).map(
      mapWorkshopRecordToStudentWorkshop,
    );
    return workshops
      .filter((w) => w.status === "upcoming")
      .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
      .slice(0, 3);
  }, [data]);

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
      {isLoading ? (
        <div className="flex items-center justify-center py-4">
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : upcomingWorkshops.length === 0 ? (
        <p className="text-gray-500 text-sm">No upcoming workshops.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {upcomingWorkshops.map((workshop) => (
            <div
              key={workshop.id}
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
      )}

      {/* View All Workshops Link */}
      <Link
        href="/dashboard/student/workshop"
        className="text-[#F86432] text-sm font-medium hover:underline flex items-center gap-1 cursor-pointer w-fit mt-1"
      >
        View all workshops &rarr;
      </Link>
    </div>
  );
};
