"use client";

import * as React from "react";
import { NavMain } from "@/components/dashboard/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  LayoutGrid,
  Megaphone,
  Users2,
  HelpCircle,
  Video,
  BookOpen,
  MessageCircleMore,
  Folder,
  Trophy,
  ClipboardList,
  LifeBuoy,
} from "lucide-react";

const studentHomeSidebarNav = [
  { title: "Feed", url: "/dashboard/student/feed", icon: LayoutGrid },
  {
    title: "Announcements",
    url: "/dashboard/student/feed/announcements",
    icon: Megaphone,
  },
  {
    title: "Introductions",
    url: "/dashboard/student/feed/introductions",
    icon: Users2,
  },
  {
    title: "Ask For Help",
    url: "/dashboard/student/feed/ask-for-help",
    icon: HelpCircle,
  },
  { title: "Workshop", url: "/dashboard/student/workshop", icon: Video },
  { title: "Courses", url: "/dashboard/student/courses", icon: BookOpen },
  {
    title: "Assessments",
    url: "/dashboard/student/quiz",
    icon: ClipboardList,
  },
  {
    title: "Chatrooms",
    url: "/dashboard/student/messages",
    icon: MessageCircleMore,
  },
  { title: "Resources", url: "/dashboard/student/courses", icon: Folder },
  {
    title: "Leader board",
    url: "/dashboard/student/feed/leaderboard",
    icon: Trophy,
  },
  {
    title: "Support",
    url: "/dashboard/student/support",
    icon: LifeBuoy,
  },
];

export function StudentHomeSidebarContent({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar, open, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed" && !isMobile;
  const isPinned = open;

  return (
    <Sidebar className="bg-white border-r border-gray-200" {...props}>
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
        <NavMain items={studentHomeSidebarNav} />
      </SidebarContent>
    </Sidebar>
  );
}
