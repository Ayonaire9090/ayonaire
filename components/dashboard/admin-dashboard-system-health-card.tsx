"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useGetWorkshops } from "@/hooks/api/use-workshops";
import { useGetSupportTickets } from "@/hooks/api/use-support";

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
      value: workshops.length,
      icon: "/assets/icons/blue-grad-hat.svg",
    },
    {
      label: "Live Now",
      value: liveCount,
      icon: "/assets/icons/red-tv.svg",
    },
    {
      label: "Upcoming",
      value: upcomingCount,
      icon: "/assets/icons/blue-calendar.svg",
    },
    {
      label: "Open Tickets",
      value: openTickets,
      icon: "/assets/icons/orange-person-talk.svg",
    },
  ];

  return (
    <div className="rounded-2xl bg-white overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#FFF5F1]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg">
            <Image
              src="/assets/icons/waypoints.png"
              alt="System Health"
              width={20}
              height={20}
            />
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-gray-900">
            System Health & Live Ops
          </h3>
        </div>
        {liveCount > 0 && (
          <div className="flex items-center gap-1.5">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2.5 bg-red-500"></span>
            </span>
            <span className="text-[10px] lg:text-xs font-semibold text-red-500 uppercase tracking-wider">
              Live
            </span>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="p-2 lg:p-4">
        <div className="grid grid-cols-2 gap-3">
          {statsGrid.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 p-4 lg:p-5 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center shrink-0 gap-1.5 mb-1">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-[10px] lg:text-[12px] font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 tabular-nums">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Tickets Banner - pinned to bottom */}
      <div className="mt-auto px-4 pb-4">
        <div className="flex items-center justify-between rounded-[12px] bg-[#F86432]/10 border border-[#EF4444]/20 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#EF4444]/10">
              <Image
                src="/assets/icons/support-face.png"
                alt="Support"
                width={20}
                height={20}
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                Open Support Tickets
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Tickets awaiting a response
              </p>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#EF4444] tabular-nums">
            {openTickets}
          </p>
        </div>
      </div>
    </div>
  );
};
