"use client";

import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { useMemo } from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
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
    <div className="w-full min-w-0 flex flex-col gap-4 rounded-2xl border border-[#ebe8e3] bg-white p-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-base font-bold text-[#26211e]">
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
      <div className="flex min-w-0 flex-col gap-2.5">
        {isLoading ? (
          <div className="flex items-center justify-center py-4 w-full">
            <StudentLoadingSkeleton variant="feed" />
          </div>
        ) : (
          upcomingWorkshops.slice(0, 3).map((workshop) => (
            <div key={workshop.id} className="flex min-w-0 items-start gap-3 rounded-xl bg-[#faf8f5] p-3">
              <div className="flex w-11 shrink-0 flex-col items-center rounded-lg bg-[#fff0e9] py-2 text-[#dc6038]"><span className="text-[10px] font-bold uppercase">{workshop.month}</span><span className="text-lg font-bold leading-5">{workshop.day}</span></div>
              <div className="min-w-0 flex-1"><p className="break-words text-sm font-semibold leading-5 text-[#2c2723]">{workshop.title}</p><p className="mt-1 flex items-center gap-1 text-xs text-[#8b8178]"><CalendarDays className="size-3 shrink-0" /> <span className="break-words">{workshop.dateText} · {workshop.time}</span></p><p className="mt-1 truncate text-xs text-[#a09991]">{workshop.author}</p></div>
              {workshop.link && <a href={workshop.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${workshop.title}`} className="rounded-lg p-1.5 text-[#de643c] hover:bg-[#fff0e9]"><ArrowUpRight className="size-4" /></a>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
