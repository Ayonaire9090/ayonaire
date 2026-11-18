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
  LayoutGrid,
  Home,
  BookOpen,
  MessagesSquare,
} from "lucide-react";
import { dashboardData } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FeedCreatePostModal } from "../feed/_components/feed-create-post-modal";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home01Icon, BubbleChatIcon, BookOpen01Icon } from "@hugeicons/core-free-icons";

const HomeFeedIcon = ({ className }: { className?: string }) => <HugeiconsIcon icon={Home01Icon} className={className} size={20} />;
const LearningIcon = ({ className }: { className?: string }) => <HugeiconsIcon icon={BookOpen01Icon} className={className} size={20} />;
const DiscussionIcon = ({ className }: { className?: string }) => <HugeiconsIcon icon={BubbleChatIcon} className={className} size={20} />;

const spacesNav = [
  { title: "Home feed", url: "/dashboard/student/feed", icon: HomeFeedIcon },
  {
    title: "Community",
    url: "/dashboard/student/community",
    icon: LayoutGrid,
  },
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
    icon: DiscussionIcon,
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
  const user = useAuthStore((state) => state.user);

  const isPinned = open;
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

  const defaultSpaceForPath = pathname.includes("/feed/introductions")
    ? "Introductions"
    : pathname.includes("/feed/general-discussion")
      ? "General Discussion"
      : "Service";

  return (
    <Sidebar className="bg-[#fffefa] border-r border-[#eeeae4]" {...props}>
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

            {!isCollapsed && (
              <>
                <div className="flex items-center gap-3 mb-3 rounded-xl border border-[#f0ece7] bg-[#faf9f7] p-3">
                  <Avatar className="h-10 w-10 border border-gray-200">
                    <AvatarImage
                      src={user?.profile?.url ?? dashboardData.user.avatar}
                      alt={user?.name ?? dashboardData.user.name}
                    />
                    <AvatarFallback>
                      {(user?.name ?? dashboardData.user.name).slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-gray-900">
                      {user?.name ?? dashboardData.user.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {user?.email ?? dashboardData.user.email}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="w-full bg-[#ec7045] hover:bg-[#d95d34] text-white shadow-none font-semibold h-11 rounded-xl cursor-pointer"
                >
                  <Pencil className="mr-2 size-4" /> Create a post
                </Button>
              </>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-transparent">
        <SidebarGroup>
          {!isCollapsed && <p className="px-3 pb-2 text-[10px] font-bold tracking-[0.16em] text-[#aaa29a]">YOUR LEARNING</p>}
          <SidebarMenu className="gap-1">
            {[{ title: "My courses", url: "/dashboard/student/courses", icon: LearningIcon }, { title: "Messages", url: "/dashboard/student/messages", icon: MessagesSquare }].map((item) => <SidebarMenuItem key={item.title}><SidebarMenuButton asChild tooltip={item.title} className="rounded-xl px-3 py-5 text-[#77716b] hover:bg-[#f7f4ef] hover:text-[#29231f]"><Link href={item.url}><item.icon className="size-5" />{!isCollapsed && <span className="text-sm">{item.title}</span>}</Link></SidebarMenuButton></SidebarMenuItem>)}
          </SidebarMenu>
        </SidebarGroup>
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
                  COMMUNITY
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
                            "text-[#77716b] py-5 px-3 rounded-xl hover:bg-[#f7f4ef] hover:text-[#29231f] transition-colors",
                            isActive && "bg-[#fff0e9] text-[#df6038] font-semibold hover:bg-[#fff0e9] hover:text-[#df6038]",
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
                  EXPLORE TOPICS
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
        defaultSpace={defaultSpaceForPath}
      />
    </Sidebar>
  );
}
