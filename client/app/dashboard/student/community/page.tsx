"use client";

import { useMemo } from "react";
import { Megaphone, Users2, MessageCircle, HelpCircle, Trophy } from "lucide-react";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentFeedSidebarContent } from "../_components/student-feed-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import { useGetCommunityStats } from "@/hooks/api/use-community";
import { useGetFeeds } from "@/hooks/api/use-feeds";
import { CommunityStatsBar } from "./_components/community-stats-bar";
import { CommunitySpaceCard } from "./_components/community-space-card";
import { CommunityRecentActivity } from "./_components/community-recent-activity";
import { mapFeedRecordToRecentActivity } from "./_components/community-data";
import { FeedTopContributors } from "../feed/_components/feed-top-contributors";

const spaces = [
  {
    title: "Announcements",
    description: "Updates and news from Ayonaire staff",
    href: "/dashboard/student/feed/announcements",
    icon: Megaphone,
  },
  {
    title: "Introductions",
    description: "Say hello and meet fellow students",
    href: "/dashboard/student/feed/introductions",
    icon: Users2,
  },
  {
    title: "General Discussion",
    description: "Chat about anything course-related",
    href: "/dashboard/student/feed/general-discussion",
    icon: MessageCircle,
  },
  {
    title: "Ask for Help",
    description: "Stuck on something? Get help here",
    href: "/dashboard/student/feed/ask-for-help",
    icon: HelpCircle,
  },
  {
    title: "Leaderboard",
    description: "See who's leading the community",
    href: "/dashboard/student/feed/leaderboard",
    icon: Trophy,
  },
];

export default function StudentCommunityPage() {
  const { data: statsData, isLoading: isStatsLoading } =
    useGetCommunityStats();
  const { data: feedsData, isLoading: isFeedsLoading, isError: isFeedsError } =
    useGetFeeds({ limit: 5 });

  const recentActivity = useMemo(
    () => (feedsData?.data ?? []).map(mapFeedRecordToRecentActivity),
    [feedsData],
  );

  return (
    <>
      <StudentFeedSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />

        <div className="flex flex-1 flex-col gap-6 p-4 lg:p-8 pb-24 lg:max-w-5xl lg:mx-auto w-full">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Community
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Everything happening across Ayonaire, in one place.
            </p>
          </div>

          <CommunityStatsBar stats={statsData?.data} isLoading={isStatsLoading} />

          <div>
            <h2 className="font-bold text-lg text-gray-900 mb-3">Spaces</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {spaces.map((space) => (
                <CommunitySpaceCard key={space.title} {...space} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <CommunityRecentActivity
                items={recentActivity}
                isLoading={isFeedsLoading}
                isError={isFeedsError}
              />
            </div>
            <div className="lg:col-span-1">
              <FeedTopContributors />
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
