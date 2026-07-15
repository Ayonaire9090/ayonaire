"use client";

import { useMemo } from "react";
import { WorkshopCalendarCard } from "../../workshop/_components/workshop-calendar";
import Link from "next/link";
import { useGetWorkshops } from "@/hooks/api/use-workshops";
import { mapWorkshopRecordToStudentWorkshop } from "../../workshop/_components/workshop-data";

export const FeedWorkShop = () => {
  const { data, isLoading } = useGetWorkshops(1, 20);

  const upcomingWorkshops = useMemo(() => {
    const workshops = (data?.data?.workshops ?? []).map(
      mapWorkshopRecordToStudentWorkshop,
    );
    return workshops
      .filter((w) => w.status === "upcoming")
      .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
      .slice(0, 6);
  }, [data]);

  if (!isLoading && upcomingWorkshops.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-4 bg-white p-2 lg:p-4 lg:rounded-2xl ">
      {/* Header */}
      <div className="flex items-center justify-between px-4 lg:px-0">
        <h2 className="text-lg lg:text-xl font-bold text-gray-900">
          Upcoming workshops
        </h2>
        <Link
          href="/dashboard/student/workshop"
          className="text-[#F86432] text-sm font-medium hover:underline"
        >
          View all
        </Link>
      </div>

      {/* Cards Scrollable Container */}
      <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 lg:px-0 pb-2">
        {isLoading ? (
          <div className="flex items-center justify-center py-4 w-full">
            <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          upcomingWorkshops.map((workshop) => (
            <WorkshopCalendarCard
              key={workshop.id}
              month={workshop.month}
              day={workshop.day}
              label={workshop.label}
              dateText={workshop.dateText}
              time={workshop.time}
              title={workshop.title}
              author={workshop.author}
              className="min-w-[300px] sm:min-w-[380px] md:min-w-[420px] shrink-0"
            />
          ))
        )}
      </div>
    </div>
  );
};
