"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LifeBuoy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DashboardUserDropDown } from "@/components/dashboard/dashboard-user-dropdown";
import { useAuthStore } from "@/store/auth.store";
import { studentFooterNav } from "../../_data/student-footer-nav";

function isNavActive(pathname: string, url: string) {
  return pathname === url || pathname.startsWith(url + "/");
}

// Messages is the only student-dashboard page that swaps out the section
// nav entirely for its own sidebar, so it's the one page where a viewer
// has no way back to Feed/Courses/etc. without the mobile footer or browser
// back. This rail keeps that navigation reachable on desktop too, reusing
// the same section list as the mobile footer nav.
export function StudentMessagesNavRail() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const supportUrl = "/dashboard/student/support";

  return (
    <nav
      aria-label="Sections"
      className="hidden md:flex w-16 shrink-0 flex-col items-center bg-white border-r border-gray-200 py-4 gap-1 h-svh"
    >
      <Link href="/dashboard/student/feed" className="mb-4 shrink-0">
        <Image
          src="/assets/logos/logo-dark.png"
          width={30}
          height={30}
          alt="Ayonaire"
          className="object-contain"
        />
      </Link>

      {studentFooterNav.map((item) => {
        const active = isNavActive(pathname, item.url);
        return (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.url}
                aria-label={item.title}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-gray-400 hover:bg-gray-100 hover:text-gray-700",
                )}
              >
                <item.icon
                  className="w-5 h-5"
                  {...(active
                    ? { fill: "currentColor", stroke: "currentColor" }
                    : {})}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.title}</TooltipContent>
          </Tooltip>
        );
      })}

      <div className="flex-1" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={supportUrl}
            aria-label="Support"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg transition-colors mb-2",
              isNavActive(pathname, supportUrl)
                ? "bg-primary/10 text-primary"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-700",
            )}
          >
            <LifeBuoy className="w-5 h-5" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Support</TooltipContent>
      </Tooltip>

      <DashboardUserDropDown align="end" side="right">
        <Avatar className="w-8 h-8 cursor-pointer border border-gray-200">
          <AvatarImage src={user?.profile?.url} alt={user?.name ?? "Profile"} />
          <AvatarFallback className="text-[11px]">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : "AY"}
          </AvatarFallback>
        </Avatar>
      </DashboardUserDropDown>
    </nav>
  );
}
