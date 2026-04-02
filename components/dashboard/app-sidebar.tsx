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
} from "@/components/ui/sidebar";
import { dashboardData } from "@/constants";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // Determine which navigation to use based on the pathname
  let navItems: { title: string; url: string; icon?: React.ElementType }[] =
    dashboardData.studentNavMain;
  if (pathname.includes("/dashboard/admin")) {
    navItems = dashboardData.adminNavMain;
  } else if (pathname.includes("/dashboard/instructor")) {
    navItems = dashboardData.instructorNavMain;
  }

  return (
    <Sidebar collapsible="none" className="bg-white" {...props}>
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! bg-white/90 hover:bg-transparent h-[50px]  rounded-[10px]!"
            >
              <a href="/dashboard">
                <Image
                  src="/assets/logos/dashboard-logo.svg"
                  width={120}
                  height={120}
                  alt="logo"
                />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-3 pt-4 text-base font-medium text-black">Menu</div>
      </SidebarHeader>
      <SidebarContent className="bg-transparent">
        <NavMain items={navItems} />
      </SidebarContent>
    </Sidebar>
  );
}
