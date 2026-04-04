import {
  GraduationCap,
  Play,
  CalendarDays,
  Users,
  Waypoints,
} from "lucide-react";
import Image from "next/image";

const statsGrid = [
  {
    label: "Active Classes",
    value: "14",
    icon: "/assets/icons/blue-grad-hat.svg",
    iconColor: "text-[#3B82F6]",
  },
  {
    label: "Live Now",
    value: "2",
    icon: "/assets/icons/red-tv.svg",
    iconColor: "text-[#F86432]",
  },
  {
    label: "Upcoming Today",
    value: "4",
    icon: "/assets/icons/blue-calendar.svg",
    iconColor: "text-[#3B82F6]",
  },
  {
    label: "Instructors Online",
    value: "6",
    icon: "/assets/icons/orange-person-talk.svg",
    iconColor: "text-[#F59E0B]",
  },
];

export const AdminDashboardSystemHealthCard = () => {
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
        <div className="flex items-center gap-1.5">
          <span className="relative flex size-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-2.5 bg-red-500"></span>
          </span>
          <span className="text-[10px] lg:text-xs font-semibold text-red-500 uppercase tracking-wider">
            Live
          </span>
        </div>
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
                Average response time: 14m
              </p>
            </div>
          </div>
          <p className="text-3xl font-bold text-[#EF4444] tabular-nums">3</p>
        </div>
      </div>
    </div>
  );
};
