"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { dashboardData } from "@/constants";
import {
  IconSparkles,
  IconBell,
  IconSettings,
  IconChevronDown,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  const pathname = usePathname();

  let role = "Student";
  let subtitle = "Continue your learning journey where you left off";

  if (pathname.includes("/dashboard/admin")) {
    role = "Admin";
    subtitle = "Monitor platform activity and manage operations efficiently";
  } else if (pathname.includes("/dashboard/instructor")) {
    role = "Instructor";
    subtitle = "Manage your courses and track student progress";
  }

  return (
    <header className="flex w-full shrink-0 flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-0 px-4 py-6 lg:px-6 ">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-2 md:hidden" />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
            Welcome Back, {role} <span>👋</span>
          </h1>
        </div>
        <p className="text-base text-gray-500">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="hidden md:flex items-center gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors">
            <IconSparkles className="h-5 w-5" />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors">
            <IconBell className="h-5 w-5" />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors">
            <IconSettings className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 ml-2 cursor-pointer hover:bg-black/5 p-1.5 rounded-full transition-colors">
            <Avatar className="h-11 w-11 border border-gray-200">
              <AvatarImage
                src={dashboardData.user.avatar}
                alt={dashboardData.user.name}
              />
              <AvatarFallback>AY</AvatarFallback>
            </Avatar>
            <div className="hidden lg:grid flex-1 text-left text-sm leading-tight pr-2">
              <span className="truncate font-semibold text-gray-900">
                {dashboardData.user.name}
              </span>
              <span className="truncate text-xs text-gray-500">
                {dashboardData.user.email}
              </span>
            </div>
            <IconChevronDown className="h-4 w-4 text-gray-500 hidden lg:block mr-2" />
          </div>
        </div>
      </div>
    </header>
  );
}
