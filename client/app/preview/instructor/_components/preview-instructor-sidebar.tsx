"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardData } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const PREVIEW_ROOT = "/preview/instructor";

// Same nav data as the real instructor sidebar (components/dashboard/app-sidebar.tsx),
// just with URLs remapped from /dashboard/instructor/* to /preview/instructor/*
const previewNavItems = dashboardData.instructorNavMain.map((item) => ({
  ...item,
  url:
    item.title === "Dashboard"
      ? PREVIEW_ROOT
      : item.url.replace("/dashboard/instructor", PREVIEW_ROOT),
}));

function PreviewNavMain({
  items,
}: {
  items: { title: string; url: string; icon?: any }[];
}) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="gap-2">
          {items.map((item) => {
            const isRoot = item.url === PREVIEW_ROOT;
            const isItemActive = isRoot
              ? pathname === PREVIEW_ROOT
              : pathname === item.url || pathname.startsWith(item.url + "/");

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn(
                    "text-gray-500 py-6 px-3 rounded-[10px] hover:bg-transparent hover:text-primary hover:scale-105 transition-all",
                    isItemActive && "bg-white text-black font-bold",
                  )}
                >
                  <Link href={item.url}>
                    {item.icon && (
                      <item.icon
                        className={cn(
                          isCollapsed ? "h-6 w-6 shrink-0" : "h-5 w-5",
                          isItemActive && "text-primary",
                        )}
                        {...(isItemActive
                          ? { fill: "currentColor", stroke: "currentColor" }
                          : {})}
                      />
                    )}
                    <span
                      className={cn(
                        "text-base",
                        isItemActive && "text-primary",
                      )}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function PreviewInstructorSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar, open, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed" && !isMobile;
  const isPinned = open;

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
              <Link
                href={PREVIEW_ROOT}
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
              </Link>
              <button
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="Toggle Sidebar"
              >
                {isMobile ? (
                  <X className="w-5 h-5 text-primary! [&>svg]:stroke-primary! [&>svg]:text-primary!" />
                ) : !isPinned && !isCollapsed ? (
                  <X className="w-5 h-5 text-primary! [&>svg]:stroke-primary! [&>svg]:text-primary!" />
                ) : (
                  <Menu className="w-5 h-5 text-primary! [&>svg]:stroke-primary! [&>svg]:text-primary!" />
                )}
              </button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
        {!isCollapsed && (
          <div className="px-3 pt-4 pb-2 text-base font-medium text-black">
            Menu
          </div>
        )}
      </SidebarHeader>
      <SidebarContent className="bg-transparent">
        <PreviewNavMain items={previewNavItems} />
      </SidebarContent>
    </Sidebar>
  );
}
