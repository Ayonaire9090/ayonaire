"use client";

import { useState } from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import Image from "next/image";
import { useGetLeaderboard } from "@/hooks/api/use-leaderboard";
import { LeaderboardPeriod } from "@/lib/api/endpoints/leaderboard";
import { FeedCriteriaModal } from "./feed-leaderboard-criteria-modal";

type LeaderTab = "all-time" | "month" | "week";

const TABS: { key: LeaderTab; label: string }[] = [
  { key: "all-time", label: "All Time" },
  { key: "month", label: "Month" },
  { key: "week", label: "Week" },
];

function formatPoints(points: number): string {
  if (points >= 1000) return `${(points / 1000).toFixed(1)}k pts`;
  return `${points} pts`;
}

export const FeedLeaderBoard = () => {
  const [activeTab, setActiveTab] = useState<LeaderTab>("all-time");
  const [isCriteriaOpen, setIsCriteriaOpen] = useState(false);
  const { data, isLoading, isError } = useGetLeaderboard(
    activeTab as LeaderboardPeriod,
    8,
  );
  const leaders = data?.data ?? [];

  const getMedalSrc = (index: number) => {
    if (index === 0) return "/assets/icons/medal-1.svg";
    if (index === 1) return "/assets/icons/medal-2.svg";
    if (index === 2) return "/assets/icons/medal-3.svg";
    if (index === 3) return "/assets/icons/medal-4.svg";
    return "/assets/icons/solid-medal.svg";
  };

  return (
    <div className="w-full bg-white p-4 lg:p-5 lg:rounded-2xl flex flex-col gap-4 border border-gray-100/50">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
          Leaderboard
        </h2>
        <Info
          onClick={() => setIsCriteriaOpen(true)}
          className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer shrink-0"
        />
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-1 bg-[#F5F5F5] p-1 rounded-xl">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === tab.key
                ? "bg-[#FEECE5] text-[#F86432]"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Ranks list */}
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="py-8 text-center text-sm text-red-500">
          Failed to load leaderboard.
        </div>
      ) : leaders.length === 0 ? (
        <div className="py-8 text-center text-sm text-gray-500">
          No activity yet for this period.
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {leaders.map((leader, index) => (
            <div
              key={leader.user.id}
              className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition-all duration-300"
            >
              {/* Left: Medal and Name */}
              <div className="flex items-center gap-3 overflow-x-auto">
                <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                  <Image
                    src={getMedalSrc(index)}
                    alt={`Medal rank ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-gray-800 text-sm sm:text-base truncate max-w-[120px] sm:max-w-[180px]">
                  {leader.user.name}
                </span>
              </div>

              {/* Right: Star and Points */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#F86432] rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-xs sm:text-sm font-medium whitespace-nowrap">
                  {formatPoints(leader.points)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer CTA */}
      <Link
        href="/dashboard/student/feed/leaderboard"
        className="w-full bg-[#F86432] hover:bg-[#F86432]/90 text-white font-semibold py-3 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm md:text-base mt-1"
      >
        View all
      </Link>

      <FeedCriteriaModal isOpen={isCriteriaOpen} onClose={() => setIsCriteriaOpen(false)} />
    </div>
  );
};
