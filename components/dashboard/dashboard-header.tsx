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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, UserCircle, LogOut } from "lucide-react";
import { DashboardSearch } from "./dashboard-search";
import Image from "next/image";

export function DashboardHeader() {
  const pathname = usePathname();

  let role = "Student";
  let subtitle = "Continue your learning journey where you left off";
  let firstName = "Student";

  if (pathname.includes("/dashboard/admin")) {
    role = "Admin";
    subtitle = "Monitor platform activity and manage operations efficiently";
    firstName = "Ayo";
  } else if (pathname.includes("/dashboard/instructor")) {
    role = "Instructor";
    subtitle = "Manage your courses and track student progress";
    firstName = "Instructor";
  }

  return (
    <>
      {/* ───────── MOBILE HEADER ───────── */}
      <header className="flex md:hidden flex-col gap-5 px-4 pt-5 pb-2">
        {/* Row 1: Logo + action icons */}
        <div className="flex items-center justify-between">
          <Image
            src="/assets/logos/full-logo-dark.svg"
            alt="Ayonaire"
            width={140}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
              <IconBell
                className="h-[22px] w-[22px] text-gray-800"
                stroke={1.8}
              />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
              <IconSettings
                className="h-[22px] w-[22px] text-gray-800"
                stroke={1.8}
              />
            </button>
          </div>
        </div>

        {/* Row 2: Avatar + welcome text */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <Avatar className="h-12 w-12 border-2 border-orange-200 shrink-0">
                  <AvatarImage
                    src={dashboardData.user.avatar}
                    alt={dashboardData.user.name}
                  />
                  <AvatarFallback>AY</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="w-48 rounded-xl border-0 bg-[#F2F2F2] shadow-sm p-2 space-y-1"
            >
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
                <Image
                  src="/assets/icons/user-solid.svg"
                  alt="View Profile"
                  width={20}
                  height={20}
                  className="h-5 w-5 text-gray-700"
                />
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
                <Image
                  src="/assets/icons/account-solid.svg"
                  alt="My account"
                  width={20}
                  height={20}
                  className="h-5 w-5 text-gray-700"
                />
                My account
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-red-500 hover:bg-white focus:bg-white hover:text-red-500 focus:text-red-500">
                <Image
                  src="/assets/icons/round-logout.svg"
                  alt="Logout"
                  width={20}
                  height={20}
                  className="h-5 w-5 text-[#EF4444]"
                />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-col gap-0.5">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Welcome Back, {firstName} <span>👋</span>
            </h1>
            <p className="text-sm text-gray-400 leading-snug">{subtitle}</p>
          </div>
        </div>

        {/* Row 3: Search bar */}
        <DashboardSearch />
      </header>

      {/* ───────── DESKTOP HEADER ───────── */}
      <header className="hidden md:flex w-full shrink-0 flex-row items-center justify-between gap-4 border-b-0 px-4 py-6 lg:px-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-2 md:hidden" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              Welcome Back, {role} <span>👋</span>
            </h1>
          </div>
          <p className="text-base text-gray-500">{subtitle}</p>
        </div>

        <div className="flex items-center gap-4 w-auto">
          <div className="flex items-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors">
              <IconSparkles className="h-5 w-5" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors">
              <IconBell className="h-5 w-5" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors">
              <IconSettings className="h-5 w-5" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-3 ml-2 cursor-pointer bg-white hover:bg-white/80 p-1.5 rounded-full transition-colors">
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
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-48 rounded-xl border-0 bg-[#F2F2F2] shadow-sm p-2 space-y-1"
              >
                <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
                  <Image
                    src="/assets/icons/user-solid.svg"
                    alt="View Profile"
                    width={20}
                    height={20}
                    className="h-5 w-5 text-gray-700"
                  />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
                  <Image
                    src="/assets/icons/account-solid.svg"
                    alt="My account"
                    width={20}
                    height={20}
                    className="h-5 w-5 text-gray-700"
                  />
                  My account
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-red-500 hover:bg-white focus:bg-white hover:text-red-500 focus:text-red-500">
                  <Image
                    src="/assets/icons/round-logout.svg"
                    alt="Logout"
                    width={20}
                    height={20}
                    className="h-5 w-5 text-[#EF4444]"
                  />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}
