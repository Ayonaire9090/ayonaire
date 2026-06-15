"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { DataList } from "@/components/ui/data-list";
import {
  MoreVertical,
  Star,
  Crown,
  Award as AwardIcon,
  CircleDot,
} from "lucide-react";

// Mock Data
const tabs = ["All Time", "Month", "Week"];

const top3Users = [
  {
    id: "2",
    name: "Aditya S.",
    points: 760,
    rank: 2,
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: "1",
    name: "Aditya S.",
    points: 820,
    rank: 1,
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: "3",
    name: "Aditya S.",
    points: 690,
    rank: 3,
    image: "https://i.pravatar.cc/150?u=3",
  },
];

const restUsers = [
  {
    id: "4",
    name: "Aditya S.",
    points: 420,
    rankIcon: "/assets/icons/medal-1.svg",
    badge: "-",
    service: "2.0 Live Agentic AI And ...",
    image: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: "5",
    name: "Aditya S.",
    points: 420,
    rankIcon: "/assets/icons/medal-2.svg",
    badge: "-",
    service: "2.0 Live Agentic AI And ...",
    image: "https://i.pravatar.cc/150?u=5",
  },
  {
    id: "6",
    name: "Aditya S.",
    points: 420,
    rankIcon: "/assets/icons/medal-3.svg",
    badge: "-",
    service: "Ultimate RAG Bootcamp: Bu...",
    image: "https://i.pravatar.cc/150?u=6",
  },
  {
    id: "7",
    name: "Aditya S.",
    points: 420,
    rankIcon: "/assets/icons/medal-4.svg",
    badge: "-",
    service: "2.0 Live Agentic AI And",
    image: "https://i.pravatar.cc/150?u=7",
  },
  {
    id: "8",
    name: "Aditya S.",
    points: 420,
    rankIcon: "/assets/icons/medal-1.svg",
    badge: "-",
    service: "Ultimate Data Science And...",
    image: "https://i.pravatar.cc/150?u=8",
  },
  {
    id: "9",
    name: "Aditya S.",
    points: 420,
    rankIcon: "icon-award",
    badge: "-",
    service: "Krishnaik Academy Pro sub...",
    image: "https://i.pravatar.cc/150?u=9",
  },
  {
    id: "10",
    name: "Aditya S.",
    points: 420,
    rankIcon: "icon-circle",
    badge: "-",
    service: "Krishnaik Academy Pro sub...",
    image: "https://i.pravatar.cc/150?u=10",
  },
];

interface TopUserProps {
  user: (typeof top3Users)[0];
  position: 1 | 2 | 3;
  className?: string;
}

const TopCard = ({ user, position, className }: TopUserProps) => {
  const isCenter = position === 1;
  return (
    <div
      className={`flex flex-col items-center bg-white rounded-[24px] shadow-sm snap-center shrink-0 ${isCenter ? "p-5 w-[350px]" : "p-4 w-[260px]"} ${className}`}
    >
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${isCenter ? "bg-[#FFF0EC] text-[#F86432]" : "bg-[#FFF0EC] text-[#F86432]"}`}
      >
        {isCenter ? (
          <Crown className="w-7 h-7" />
        ) : (
          <AwardIcon className="w-7 h-7" />
        )}
      </div>
      <Image
        src={user.image}
        alt={user.name}
        width={isCenter ? 72 : 60}
        height={isCenter ? 72 : 60}
        className="rounded-full object-cover mb-4"
      />
      <h3
        className={`font-semibold text-gray-900 mb-2 ${isCenter ? "text-xl" : "text-lg"}`}
      >
        {user.name}
      </h3>
      <div
        className={`flex items-center justify-center gap-1.5 bg-[#FFF0EC] text-[#F86432] px-3.5 py-1.5 rounded-md text-sm font-semibold`}
      >
        {isCenter && <Star className="w-4 h-4 fill-[#F86432]" />}
        {user.points} pts
      </div>
    </div>
  );
};

export const StudentFeedLeaderboard = () => {
  const [activeTab, setActiveTab] = useState("Month");

  const columns: ColumnDef<(typeof restUsers)[0]>[] = [
    {
      key: "rank",
      header: "Rank",
      cell: (item) => {
        if (item.rankIcon === "icon-award")
          return <AwardIcon className="w-6 h-6 text-gray-900" />;
        if (item.rankIcon === "icon-circle")
          return <CircleDot className="w-6 h-6 text-gray-900" />;
        return (
          <Image
            src={item.rankIcon}
            alt="rank"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        );
      },
      className: "w-20 pl-6",
      headerClassName: "pl-6",
    },
    {
      key: "user",
      header: "User",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <Image
            src={item.image}
            alt={item.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-900 text-[15px]">
            {item.name}
          </span>
        </div>
      ),
    },
    {
      key: "badge",
      header: "Badge",
      cell: (item) => (
        <span className="text-gray-500 font-medium">{item.badge}</span>
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
      header: "Services",
      cell: (item) => (
        <span className="text-gray-500 text-[15px]">{item.service}</span>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Desktop Top Section */}
      <div className="hidden md:block px-8 pb-12">
        {/* Top 3 desktop */}
        <div className="grid grid-cols-3 justify-items-center max-w-5xl mx-auto relative">
          <TopCard user={top3Users[0]} position={2} />
          <TopCard
            className="-translate-y-8"
            user={top3Users[1]}
            position={1}
          />
          <TopCard user={top3Users[2]} position={3} />
        </div>
      </div>

      {/* Mobile Header Area */}
      <div className="block md:hidden px-4 pt-4 mb-6">
        <div className="mb-6">
          <h2 className="text-[28px] font-bold flex items-center gap-2 text-gray-900 mb-1">
            Leaderboard <span>👋</span>
          </h2>
          <p className="text-gray-500 text-[15px]">
            Top contributors this month
          </p>
        </div>

        {/* Top 3 mobile */}
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
          <TopCard user={top3Users[0]} position={2} />
          <TopCard user={top3Users[1]} position={1} />
          <TopCard user={top3Users[2]} position={3} />
        </div>
      </div>

      {/* Bottom Area (Table/List) */}
      <div className="bg-white md:rounded-3xl px-0 md:px-8 py-0 md:py-8 -mt-6 relative z-10 hidden md:block">
        {/* Tabs */}
        <div className="flex items-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-[12px] text-[15px] font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#F6F6F6] text-[#F86432]"
                  : "bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <DataTable
          data={restUsers}
          columns={columns}
          keyExtractor={(item) => item.id}
          className="w-full"
        />
      </div>

      <div className="block md:hidden p-3 bg-white">
        {/* Tabs */}
        <div className="flex items-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-[12px] text-[15px] font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#F6F6F6] text-[#F86432]"
                  : "bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <DataList
          data={restUsers}
          keyExtractor={(item) => item.id}
          itemClassName="bg-[#F6F6F6] rounded-[20px] mb-4"
          renderItem={(item) => (
            <div className="w-full flex flex-col p-1">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <span className="font-bold text-lg text-gray-900">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {item.rankIcon === "icon-award" ? (
                    <AwardIcon className="w-6 h-6 text-gray-900" />
                  ) : item.rankIcon === "icon-circle" ? (
                    <CircleDot className="w-6 h-6 text-gray-900" />
                  ) : (
                    <Image
                      src={item.rankIcon}
                      alt="rank"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  {/* <MoreVertical className="w-5 h-5 text-gray-900 cursor-pointer" /> */}
                </div>
              </div>
              <div className="bg-[#EEF2FF] text-[#6366F1] px-3.5 py-1.5 rounded-full text-sm font-semibold w-max mb-3">
                {item.points}
              </div>
              <div className="text-gray-500 text-[15px]">{item.service}</div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
