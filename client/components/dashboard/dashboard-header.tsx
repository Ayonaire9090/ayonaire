"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { dashboardData } from "@/constants";
import {
  IconSparkles,
  IconBell,
  IconSettings,
  IconChevronDown,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { DashboardUserDropDown } from "./dashboard-user-dropdown";
import { useAuthStore } from "@/store/auth.store";

interface DashboardHeaderProps {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  className?: string;
}

export function DashboardHeader({
  title,
  subTitle,
  className,
}: DashboardHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuthStore();

  // Get the profile path based on route (update this later to be session based):
  const profilePath = pathname.includes("/admin")
    ? "admin"
    : pathname.includes("instructor")
      ? "/instructor"
      : pathname.includes("/student")
        ? "student"
        : "";

  // Only admin and instructor have a real notifications page; only admin has
  // a real settings page. Student has neither, and instructor has no
  // settings page - those show an honest "not available yet" toast instead
  // of a dead button or a made-up destination.
  const notificationsPath = pathname.includes("/admin")
    ? pathname.includes("/preview/admin")
      ? "/preview/admin/notifications"
      : "/dashboard/admin/notifications"
    : pathname.includes("/instructor")
      ? "/dashboard/instructor/notifications"
      : null;
  const settingsPath = pathname.includes("/admin")
    ? pathname.includes("/preview/admin")
      ? "/preview/admin/system-settings"
      : "/dashboard/admin/system-settings"
    : null;

  const handleNotificationsClick = () => {
    if (notificationsPath) router.push(notificationsPath);
    else toast.info("Notifications aren't available for this dashboard yet.");
  };
  const handleSettingsClick = () => {
    if (settingsPath) router.push(settingsPath);
    else toast.info("Settings aren't available for this dashboard yet.");
  };
  const handleAiClick = () => {
    toast.info("AI assistant isn't available here yet.");
  };

  return (
    <>
      {/*MOBILE HEADER*/}
      <header
        className={`flex md:hidden flex-col gap-5 pt-5 pb-2 ${className}`}
      >
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
            <button
              onClick={handleNotificationsClick}
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            >
              <IconBell
                className="h-[22px] w-[22px] text-gray-800"
                stroke={1.8}
              />
            </button>
            <button
              onClick={handleSettingsClick}
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            >
              <IconSettings
                className="h-[22px] w-[22px] text-gray-800"
                stroke={1.8}
              />
            </button>
          </div>
        </div>

        {/* Row 2: Avatar + welcome text */}
        <div className="flex items-center gap-3">
          <DashboardUserDropDown align="start">
            <div className="cursor-pointer">
              <Avatar className="h-12 w-12 border-2 border-orange-200 shrink-0">
                <AvatarImage
                  src={user?.profile?.url}
                  alt={user?.name || dashboardData.user.name}
                />
                <AvatarFallback>{user?.name ? user.name.slice(0, 2).toUpperCase() : "AY"}</AvatarFallback>
              </Avatar>
            </div>
          </DashboardUserDropDown>
          <div className="flex flex-col gap-0.5">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
            {typeof subTitle === "string" ? (
              <p className="text-sm text-gray-400 leading-snug">{subTitle}</p>
            ) : (
              subTitle
            )}
          </div>
        </div>
      </header>

      {/*DESKTOP HEADER*/}
      <header
        className={`hidden md:flex w-full shrink-0 flex-row items-center justify-between gap-4 border-b-0 py-6 ${className}`}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-2 md:hidden" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              {title}
            </h1>
          </div>
          {typeof subTitle === "string" ? (
            <p className="text-base text-gray-500">{subTitle}</p>
          ) : (
            subTitle
          )}
        </div>

        <div className="flex items-center gap-4 w-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={handleAiClick}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors"
            >
              <IconSparkles className="h-5 w-5" />
            </button>
            <button
              onClick={handleNotificationsClick}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors"
            >
              <IconBell className="h-5 w-5" />
            </button>
            <button
              onClick={handleSettingsClick}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors"
            >
              <IconSettings className="h-5 w-5" />
            </button>

            <DashboardUserDropDown align="end">
              <div className="flex items-center gap-3 ml-2 cursor-pointer bg-white hover:bg-white/80 p-1.5 rounded-full transition-colors">
                <Avatar className="h-11 w-11 border border-gray-200">
                  <AvatarImage
                    src={user?.profile?.url}
                    alt={user?.name || dashboardData.user.name}
                  />
                  <AvatarFallback>{user?.name ? user.name.slice(0, 2).toUpperCase() : "AY"}</AvatarFallback>
                </Avatar>
                <div className="hidden lg:grid flex-1 text-left text-sm leading-tight pr-2">
                  <span className="truncate font-semibold text-gray-900">
                    {user?.name || dashboardData.user.name}
                  </span>
                  <span className="truncate text-xs text-gray-500">
                    {user?.email || dashboardData.user.email}
                  </span>
                </div>
                <IconChevronDown className="h-4 w-4 text-gray-500 hidden lg:block mr-2" />
              </div>
            </DashboardUserDropDown>
          </div>
        </div>
      </header>
    </>
  );
}
