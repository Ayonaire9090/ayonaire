"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { BellDot, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import { dashboardData } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface FooterNavItem {
  title: string;
  url: string;
  icon?: any;
}

interface MobileDashboardFooterProps {
  items: FooterNavItem[];
  /** Number of items to show before collapsing into "More…" */
  maxVisible?: number;
  /** Profile section config – pass `null` to hide it */
  profile?: {
    name: string;
    avatar: string;
    fallback: string;
    href: string;
  } | null;
  className?: string;
}

export function MobileDashboardFooter({
  items,
  maxVisible = 4,
  profile = {
    name: dashboardData.user.name,
    avatar: dashboardData.user.avatar,
    fallback: "AY",
    href: "/dashboard/profile",
  },
  className,
}: MobileDashboardFooterProps) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setOpenMobile } = useSidebar();
  const router = useRouter();

  // Split items into visible and overflow
  const visibleItems = items.slice(0, maxVisible);
  const hasOverflow = items.length > maxVisible;

  // Reuse active-check logic from nav-main
  const isItemActive = (item: FooterNavItem) => {
    const isStrictlyActive = pathname === item.url;
    const isChildActive =
      pathname.startsWith(item.url + "/") &&
      item.url !== "/dashboard" &&
      item.url !== "/dashboard/admin" &&
      item.url !== "/dashboard/student" &&
      item.url !== "/dashboard/instructor";
    return isStrictlyActive || isChildActive;
  };

  return (
    <footer
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:hidden",
        className,
      )}
    >
      <div className="flex items-stretch h-[72px]">
        {/* Scrollable nav area */}
        {/* Add hide-scrollbar class to hide the scrollbar */}
        <div
          ref={scrollRef}
          className="flex flex-1 items-stretch overflow-x-auto"
        >
          {visibleItems.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 min-w-[76px] px-3 py-2 transition-colors",
                  active ? "text-primary" : "text-gray-500 hover:text-gray-700",
                )}
              >
                {item.icon && (
                  <item.icon
                    className={cn("h-6 w-6", active && "text-primary")}
                    {...(active
                      ? { fill: "currentColor", stroke: "currentColor" }
                      : {})}
                  />
                )}
                <span
                  className={cn(
                    "text-xs leading-tight whitespace-nowrap",
                    active && "font-semibold",
                  )}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}

          {/* "More…" button – opens the sidebar sheet */}
          {hasOverflow && (
            <button
              onClick={() => setOpenMobile(true)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 min-w-[76px] px-3 py-2 transition-colors",
                "text-gray-500 hover:text-gray-700",
              )}
            >
              <MoreVertical className="h-6 w-6" />
              <span className="text-xs leading-tight whitespace-nowrap">
                More...
              </span>
            </button>
          )}
        </div>

        {/* Fixed profile section – always visible at far right */}
        {profile && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 min-w-[72px] px-3 py-2 shrink-0 transition-colors cursor-pointer",
                  pathname.startsWith(profile.href)
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-700",
                )}
              >
                <Avatar className="h-7 w-7 border border-gray-200">
                  <AvatarImage src={profile.avatar} alt={profile.name} />
                  <AvatarFallback className="text-[10px]">
                    {profile.fallback}
                  </AvatarFallback>
                </Avatar>
                <span
                  className={cn(
                    "text-xs leading-tight whitespace-nowrap",
                    pathname.startsWith(profile.href) && "font-semibold",
                  )}
                >
                  Profile
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              side="top"
              sideOffset={8}
              className="w-48 rounded-xl border-0 bg-[#F2F2F2] shadow-sm p-2 space-y-1 mb-1 z-50"
            >
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
                <Image
                  src="/assets/icons/user-solid.svg"
                  alt="View Profile"
                  width={20}
                  height={20}
                  className="h-5 w-5 text-gray-700"
                />
                <button
                  onClick={() => router.push("/dashboard/admin/profile")}
                  className="flex w-full! h-full! cursor-pointer bg-transparent! flex-start! items-start"
                >
                  View Profile
                </button>
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
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
                <BellDot
                  className="bg-[#222222] p-1 rounded-full text-white font-bold w-5.5! h-5.5!"
                  strokeWidth={2.7}
                />
                Notifications
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
        )}
      </div>
    </footer>
  );
}
