"use client";

import { Bell, Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { AppLogo } from "@/components/app-logo";
import { DashboardUserDropDown } from "@/components/dashboard/dashboard-user-dropdown";
import { dashboardData } from "@/constants";
import { useAuthStore } from "@/store/auth.store";
import Link from "next/link";

export function CareerHomeHeader() {
  const { user } = useAuthStore();
  const firstName = user?.name?.split(" ")[0] || "there";

  return (
    <div className="flex flex-col gap-4 px-4 pt-4 lg:px-0 lg:pt-0">
      {/* Mobile top bar: logo + bell + settings */}
      <div className="flex items-center justify-between lg:hidden">
        <div className="h-8 w-32">
          <AppLogo />
        </div>
        <div className="flex items-center gap-2">
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <Bell className="h-4.5 w-4.5 text-gray-700" />
          </button>
          <Link
            href="/dashboard/student/profile/edit"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <Settings className="h-4.5 w-4.5 text-gray-700" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
            Welcome Back, {firstName} 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Ready to advance your career today?
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors">
            <Bell className="h-5 w-5 text-gray-700" />
          </button>
          <Link
            href="/dashboard/student/profile/edit"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors"
          >
            <Settings className="h-5 w-5 text-gray-700" />
          </Link>

          <DashboardUserDropDown>
            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar className="h-10 w-10 border-2 border-transparent hover:opacity-80 transition-opacity">
                <AvatarImage
                  src={user?.profile?.url}
                  alt={user?.name || dashboardData.user.name}
                  className="object-cover"
                />
                <AvatarFallback>
                  {user?.name ? user.name.slice(0, 2).toUpperCase() : "AY"}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium text-gray-900 leading-tight">
                  {firstName}
                </p>
                <p className="text-gray-500 leading-tight">{user?.email}</p>
              </div>
            </div>
          </DashboardUserDropDown>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-400" />
        <Input
          placeholder="Search quiz Apply"
          className="pl-11 rounded-full h-12 bg-white lg:bg-[#F6F6F6] border-none"
        />
      </div>
    </div>
  );
}
