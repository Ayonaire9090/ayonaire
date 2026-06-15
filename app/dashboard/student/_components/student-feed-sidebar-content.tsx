"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Megaphone,
  Users2,
  MessageCircle,
  HelpCircle,
  Shield,
  Sparkles,
  Atom,
  X,
  Menu,
  Pencil,
  Trophy,
} from "lucide-react";
import { dashboardData } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FeedCreatePostModal } from "../feed/_components/feed-create-post-modal";

const spacesNav = [
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
    title: "General Discussion",
    url: "/dashboard/student/feed/general-discussion",
    icon: MessageCircle,
  },
  {
    title: "Leaderboard",
    url: "/dashboard/student/feed/leaderboard",
    icon: Trophy,
  },
  {
    title: "Ask for Help",
    url: "/dashboard/student/feed/ask-for-help",
    icon: HelpCircle,
  },
];

const tagsNav = [
  {
    title: "Cyber Security",
    url: "/dashboard/student/feed/tags/cyber-security",
    icon: Shield,
    colorClass: "text-[#F15D34]",
    bgClass: "bg-[#F15D34]/10",
  },
  {
    title: "AI Engineering",
    url: "/dashboard/student/feed/tags/ai-engineering",
    icon: Sparkles,
    colorClass: "text-green-600",
    bgClass: "bg-green-100",
  },
  {
    title: "Data Science",
    url: "/dashboard/student/feed/tags/data-science",
    icon: Atom,
    colorClass: "text-blue-600",
    bgClass: "bg-blue-100",
  },
];

export function StudentFeedSidebarContent({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar, open, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed" && !isMobile;
  const pathname = usePathname();

  const isPinned = open;
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

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

            {!isCollapsed && (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <Avatar className="h-10 w-10 border border-gray-200">
                    <AvatarImage src={dashboardData.user.avatar} alt="Ayo" />
                    <AvatarFallback>AY</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-gray-900">
                      Ayo
                    </span>
                    <span className="text-xs text-gray-500">
                      ayo.holt@example.com
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="w-full bg-[#F15D34] hover:bg-[#F15D34]/90 text-white shadow-none font-medium h-10 rounded-md cursor-pointer"
                >
                  Create
                </Button>
              </>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-transparent">
        {/* SPACES */}
        <SidebarGroup
          className={cn(
            "flex justify-start items-start",
            isCollapsed && "items-center",
          )}
        >
          <Collapsible defaultOpen className="group/collapsible">
            {!isCollapsed && (
              <CollapsibleTrigger className="flex w-full items-center gap-0 px-2  py-0 data-[state=open]:mb-1 mb-0  mt-0 cursor-pointer outline-none">
                <ChevronDown
                  className="w-4 h-4 text-black font-bold transition-transform duration-200 group-data-[state=closed]/collapsible:-rotate-90"
                  strokeWidth={3}
                />
                <span className="font-semibold text-[15px] text-black">
                  Spaces
                </span>
              </CollapsibleTrigger>
            )}
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {spacesNav.map((item) => {
                    const isActive = pathname === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          tooltip={item.title}
                          className={cn(
                            "text-gray-500 py-5 px-3 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors",
                            isActive && "bg-[#F15D34] text-white font-medium",
                          )}
                        >
                          <Link href={item.url}>
                            <item.icon
                              className={cn(
                                "h-5 w-5",
                                isCollapsed && "h-6 w-6 shrink-0 mx-auto",
                              )}
                            />
                            {!isCollapsed && (
                              <span className="text-sm">{item.title}</span>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* TAGS */}
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            {!isCollapsed && (
              <CollapsibleTrigger className="flex w-full items-center gap-0 px-2  py-0 data-[state=open]:mb-1 mb-0  mt-0 cursor-pointer outline-none">
                <ChevronDown
                  className="w-4 h-4 text-black font-bold transition-transform duration-200 group-data-[state=closed]/collapsible:-rotate-90"
                  strokeWidth={3}
                />
                <span className="font-semibold text-[15px] text-black">
                  Tags
                </span>
              </CollapsibleTrigger>
            )}
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-2 ">
                  {tagsNav.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        className={cn(
                          "py-5 px-3 rounded-xl transition-all border border-transparent hover:opacity-90",
                          item.bgClass,
                          isCollapsed && "justify-center",
                        )}
                      >
                        <Link href={item.url} className={item.colorClass}>
                          <item.icon
                            className={cn(
                              "h-4 w-4",
                              isCollapsed && "h-5 w-5 shrink-0",
                            )}
                          />
                          {!isCollapsed && (
                            <span className="text-sm">{item.title}</span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* Ask for help tips when pathname === "/dashboard/student/feed/ask-for-help" */}
        {pathname === "/dashboard/student/feed/ask-for-help" &&
          !isCollapsed && (
            <SidebarGroup className="mt-4">
              <div className="bg-[#F86432]/10 rounded-2xl p-4 flex flex-col gap-4">
                <h3 className="font-bold text-gray-900 text-sm">
                  Tips for Great Questions
                </h3>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5 text-gray-850 text-sm sm:text-[15px] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F86432] mt-2 shrink-0" />
                    <span>Be specific about your problem</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-850 text-sm sm:text-[15px] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F86432] mt-2 shrink-0" />
                    <span>Include code snippets or error messages</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-850 text-sm sm:text-[15px] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F86432] mt-2 shrink-0" />
                    <span>Describe what you've already tried</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-850 text-sm sm:text-[15px] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F86432] mt-2 shrink-0" />
                    <span>Use relevant tags for visibility</span>
                  </li>
                </ul>
              </div>
            </SidebarGroup>
          )}
      </SidebarContent>

      <FeedCreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </Sidebar>
  );
}
