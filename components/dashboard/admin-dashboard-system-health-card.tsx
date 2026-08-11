"use client";

import { CalendarDays, CircleHelp, Radio, Tv } from "lucide-react";
import { useMemo } from "react";
import { useGetWorkshops } from "@/hooks/api/use-workshops";
import { useGetSupportTickets } from "@/hooks/api/use-support";
import { StatCard } from "@/components/dashboard/stat-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const AdminDashboardSystemHealthCard = () => {
  const { data: workshopsData } = useGetWorkshops(1, 200);
  const { data: ticketsData } = useGetSupportTickets({ limit: 200 });

  const workshops = workshopsData?.data?.workshops ?? [];
  const tickets = ticketsData?.tickets ?? [];

  const liveCount = useMemo(
    () => workshops.filter((w) => w.status === "live").length,
    [workshops],
  );
  const upcomingCount = useMemo(
    () => workshops.filter((w) => w.status === "upcoming").length,
    [workshops],
  );
  const openTickets = useMemo(
    () =>
      tickets.filter((t) => t.status === "open" || t.status === "in-progress")
        .length,
    [tickets],
  );

  const statsGrid = [
    {
      label: "Total Workshops",
      value: String(workshops.length),
      icon: Tv,
      iconBg: "bg-[#3B82F6]",
    },
    {
      label: "Live Now",
      value: String(liveCount),
      icon: Radio,
      iconBg: "bg-[#EF4444]",
    },
    {
      label: "Upcoming",
      value: String(upcomingCount),
      icon: CalendarDays,
      iconBg: "bg-[#8B5CF6]",
    },
    {
      label: "Open Tickets",
      value: String(openTickets),
      icon: CircleHelp,
      iconBg: "bg-[#F59E0B]",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl p-2 lg:p-4 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4 pb-4">
        <div>
          <h3 className="text-[18px] font-semibold text-gray-900">
            System Health & Live Ops
          </h3>
          <p className="mt-1 text-[14px] text-gray-500">
            Workshop availability and support queue status
          </p>
        </div>
        {liveCount > 0 && (
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#EF4444]/10 px-3 py-1.5">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2.5 bg-red-500"></span>
            </span>
            <span className="text-[12px] font-semibold text-red-500">
              Live
            </span>
          </div>
        )}
      </div>

      <div className="lg:hidden">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {statsGrid.map((stat) => (
              <CarouselItem
                key={stat.label}
                className="pl-3 basis-[75%] sm:basis-[48%] md:basis-[48%]"
              >
                <StatCard
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                  iconBg={stat.iconBg}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="hidden lg:grid grid-cols-2 gap-3">
        {statsGrid.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            iconBg={stat.iconBg}
          />
        ))}
      </div>
    </div>
  );
};
