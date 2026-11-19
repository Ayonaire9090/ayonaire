"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
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
  const pathname = usePathname();

  return (
    <Sidebar {...props} variant="floating" className="dashboard-glass-sidebar">
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                "flex items-center",
                isCollapsed
                  ? "flex-col justify-center gap-4 mt-2"
                  : "justify-between px-2 pt-3 pb-5",
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
          <div className="px-3 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#aaa29a]">
            Student dashboard
          </div>
        )}
      </SidebarHeader>
      <SidebarContent className="bg-transparent">
        <SidebarGroup><SidebarMenu className="gap-1">{studentHomeSidebarNav.filter((item) => item.title !== "Resources").map((item) => {
          const matches = pathname === item.url || pathname.startsWith(`${item.url}/`);
          const active = matches && !studentHomeSidebarNav.some((other) => other.url !== item.url && other.url.startsWith(`${item.url}/`) && (pathname === other.url || pathname.startsWith(`${other.url}/`)));
          return <SidebarMenuItem key={item.title}><SidebarMenuButton asChild tooltip={item.title} className={cn("dashboard-glass-nav-item", active && "dashboard-glass-nav-active")}><Link href={item.url} onClick={() => { if (isMobile) toggleSidebar(); }}><item.icon className="size-5 shrink-0" />{!isCollapsed && <span className="text-sm">{item.title}</span>}</Link></SidebarMenuButton></SidebarMenuItem>;
        })}</SidebarMenu></SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
