"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { NavMain } from "@/components/dashboard/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { dashboardData } from "@/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { state, toggleSidebar, open } = useSidebar();
  const isCollapsed = state === "collapsed";
  const isPinned = open;

  // Determine which navigation to use based on the pathname
  let navItems: { title: string; url: string; icon?: any }[] =
    dashboardData.studentNavMain;
  if (pathname.includes("/dashboard/admin")) {
    navItems = dashboardData.adminNavMain;
  } else if (pathname.includes("/dashboard/instructor")) {
    navItems = dashboardData.instructorNavMain;
  }

  return (
    <Sidebar className="bg-white" {...props}>
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                "flex items-center",
                isCollapsed
                  ? "flex-col justify-center gap-4 mt-2"
                  : "justify-between p-1.5 bg-white/90 rounded-[10px]",
              )}
            >
              <a
                href="/dashboard"
                className="shrink-0 flex items-center justify-center"
              >
                {isCollapsed ? (
                  <Image
                    src="/assets/logos/logo-dark.png"
                    width={32}
                    height={32}
                    alt="logo"
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src="/assets/logos/full-logo-dark.svg"
                    width={150}
                    height={120}
                    alt="logo"
                  />
                )}
              </a>
              <button
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="Toggle Sidebar"
              >
                {!isPinned ? (
                  <Menu className="w-5 h-5" />
                ) : (
                  <X className="w-5 h-5" />
                )}
              </button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
        {!isCollapsed && (
          <div className="px-3 pt-4 text-base font-medium text-black">Menu</div>
        )}
      </SidebarHeader>
      <SidebarContent className="bg-transparent">
        <NavMain items={navItems} />
      </SidebarContent>
    </Sidebar>
  );
}
