"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { DataList } from "@/components/ui/data-list";
import { Crown, Award as AwardIcon } from "lucide-react";
import { useGetLeaderboard } from "@/hooks/api/use-leaderboard";
import { LeaderboardEntry, LeaderboardPeriod } from "@/lib/api/endpoints/leaderboard";

const TABS: { key: LeaderboardPeriod; label: string }[] = [
  { key: "all-time", label: "All Time" },
  { key: "month", label: "Month" },
  { key: "week", label: "Week" },
];

const DEFAULT_AVATAR = "/assets/icons/user-solid.svg";

interface TopUserProps {
  entry: LeaderboardEntry;
  position: 1 | 2 | 3;
  className?: string;
}

const TopCard = ({ entry, position, className }: TopUserProps) => {
  const isCenter = position === 1;
  return (
    <div
      className={`flex flex-col items-center bg-white rounded-[24px] shadow-sm snap-center shrink-0 ${isCenter ? "p-5 w-[350px]" : "p-4 w-[260px]"} ${className}`}
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-[#FFF0EC] text-[#F86432]">
        {isCenter ? (
          <Crown className="w-7 h-7" />
        ) : (
          <AwardIcon className="w-7 h-7" />
        )}
      </div>
      <Image
        src={entry.user.profile?.url || DEFAULT_AVATAR}
        alt={entry.user.name}
        width={isCenter ? 72 : 60}
        height={isCenter ? 72 : 60}
        className="rounded-full object-cover mb-4 bg-gray-100"
      />
      <h3
        className={`font-semibold text-gray-900 mb-2 text-center ${isCenter ? "text-xl" : "text-lg"}`}
      >
        {entry.user.name}
      </h3>
      <div className="flex items-center justify-center gap-1.5 bg-[#FFF0EC] text-[#F86432] px-3.5 py-1.5 rounded-md text-sm font-semibold">
        {entry.points} pts
      </div>
    </div>
  );
};

const RankBadge = ({ rank }: { rank: number }) => (
  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold text-sm">
    {rank}
  </div>
);

export const StudentFeedLeaderboard = ({
  onPeriodChange,
}: {
  onPeriodChange?: (label: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState<LeaderboardPeriod>("month");
  const { data, isLoading, isError } = useGetLeaderboard(activeTab, 50);
  const entries = data?.data ?? [];
  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  const handleTabChange = (period: LeaderboardPeriod, label: string) => {
    setActiveTab(period);
    onPeriodChange?.(label);
  };

  const columns: ColumnDef<LeaderboardEntry>[] = [
    {
      key: "rank",
      header: "Rank",
      cell: (item) => <RankBadge rank={item.rank} />,
      className: "w-20 pl-6",
      headerClassName: "pl-6",
    },
    {
      key: "user",
      header: "User",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <Image
            src={item.user.profile?.url || DEFAULT_AVATAR}
            alt={item.user.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover bg-gray-100"
          />
          <span className="font-semibold text-gray-900 text-[15px]">
            {item.user.name}
          </span>
        </div>
      ),
    },
    {
      key: "badge",
      header: "Badge",
      cell: (item) => (
        <span className="text-gray-500 font-medium capitalize">
          {item.badge ?? "-"}
        </span>
      ),
    },
    {
      key: "points",
      header: "Points",
      cell: (item) => (
        <div className="bg-[#EEF2FF] text-[#6366F1] px-3 py-1 rounded-full text-[13px] font-semibold w-max">
          {item.points}
        </div>
      ),
    },
    {
      key: "services",
      header: "Courses",
      cell: (item) => (
        <span className="text-gray-500 text-[15px] truncate block max-w-[220px]">
          {item.services.length > 0 ? item.services.join(", ") : "-"}
        </span>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center py-24 text-[15px] text-red-500">
        Failed to load leaderboard. Please try again.
      </div>
    );
  }

  return (
    <div className="w-full">
      {entries.length === 0 ? (
        <div className="flex items-center justify-center py-24 text-[15px] text-gray-500">
          No leaderboard activity for this period yet.
        </div>
      ) : (
        <>
          {/* Desktop Top Section */}
          {top3.length > 0 && (
            <div className="hidden md:block px-8 pb-12">
              <div className="grid grid-cols-3 justify-items-center max-w-5xl mx-auto relative">
                {top3[1] && <TopCard entry={top3[1]} position={2} />}
                {top3[0] && (
                  <TopCard className="-translate-y-8" entry={top3[0]} position={1} />
                )}
                {top3[2] && <TopCard entry={top3[2]} position={3} />}
              </div>
            </div>
          )}

          {/* Mobile Header Area */}
          <div className="block md:hidden px-4 pt-4 mb-6">
            <div className="mb-6">
              <h2 className="text-[28px] font-bold flex items-center gap-2 text-gray-900 mb-1">
                Leaderboard <span>👋</span>
              </h2>
              <p className="text-gray-500 text-[15px]">
                Top contributors this {activeTab === "all-time" ? "period" : activeTab}
              </p>
            </div>

            {top3.length > 0 && (
              <div
                className="flex gap-4 overflow-x-auto pb-4 snap-x items-end"
                style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                .flex::-webkit-scrollbar { display: none; }
              `,
                  }}
                />
                {top3[1] && <TopCard entry={top3[1]} position={2} />}
                {top3[0] && <TopCard entry={top3[0]} position={1} />}
                {top3[2] && <TopCard entry={top3[2]} position={3} />}
              </div>
            )}
          </div>

          {/* Bottom Area (Table/List) */}
          {rest.length > 0 && (
            <>
              <div className="bg-white md:rounded-3xl px-0 md:px-8 py-0 md:py-8 -mt-6 relative z-10 hidden md:block">
                {/* Tabs */}
                <div className="flex items-center gap-3 mb-12">
                  {TABS.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => handleTabChange(tab.key, tab.label)}
                      className={`px-6 py-2.5 rounded-[12px] text-[15px] font-medium transition-colors ${
                        activeTab === tab.key
                          ? "bg-[#F6F6F6] text-[#F86432]"
                          : "bg-white text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <DataTable
                  data={rest}
                  columns={columns}
                  keyExtractor={(item) => item.user.id}
                  className="w-full"
                />
              </div>

              <div className="block md:hidden p-3 bg-white">
                {/* Tabs */}
                <div className="flex items-center gap-3 mb-12">
                  {TABS.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => handleTabChange(tab.key, tab.label)}
                      className={`px-6 py-2.5 rounded-[12px] text-[15px] font-medium transition-colors ${
                        activeTab === tab.key
                          ? "bg-[#F6F6F6] text-[#F86432]"
                          : "bg-white text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <DataList
                  data={rest}
                  keyExtractor={(item) => item.user.id}
                  itemClassName="bg-[#F6F6F6] rounded-[20px] mb-4"
                  renderItem={(item) => (
                    <div className="w-full flex flex-col p-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Image
                            src={item.user.profile?.url || DEFAULT_AVATAR}
                            alt={item.user.name}
                            width={44}
                            height={44}
                            className="w-11 h-11 rounded-full object-cover bg-gray-100"
                          />
                          <span className="font-bold text-lg text-gray-900">
                            {item.user.name}
                          </span>
                        </div>
                        <RankBadge rank={item.rank} />
                      </div>
                      <div className="bg-[#EEF2FF] text-[#6366F1] px-3.5 py-1.5 rounded-full text-sm font-semibold w-max mb-3">
                        {item.points} pts
                      </div>
                      <div className="text-gray-500 text-[15px] truncate">
                        {item.services.length > 0 ? item.services.join(", ") : "-"}
                      </div>
                    </div>
                  )}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
