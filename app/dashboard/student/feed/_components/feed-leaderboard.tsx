"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import Image from "next/image";

type LeaderTab = "all-time" | "month" | "week";

interface LeaderUser {
  name: string;
  points: string;
}

const mockLeaders: Record<LeaderTab, LeaderUser[]> = {
  "all-time": [
    { name: "Dhaval joshi", points: "9.8k Leader" },
    { name: "Aditya S.", points: "9.5k Leader" },
    { name: "Ayobami Awosanya", points: "9.2k Leader" },
    { name: "Jane Doe", points: "8.9k Leader" },
    { name: "John Smith", points: "8.5k Leader" },
    { name: "Sarah Connor", points: "8.1k Leader" },
    { name: "Bruce Wayne", points: "7.8k Leader" },
    { name: "Peter Parker", points: "7.5k Leader" },
  ],
  month: [
    { name: "Ayobami Awosanya", points: "3.4k Leader" },
    { name: "Dhaval joshi", points: "3.1k Leader" },
    { name: "Aditya S.", points: "2.9k Leader" },
    { name: "Peter Parker", points: "2.5k Leader" },
    { name: "Jane Doe", points: "2.2k Leader" },
    { name: "Sarah Connor", points: "2.0k Leader" },
    { name: "John Smith", points: "1.8k Leader" },
    { name: "Bruce Wayne", points: "1.5k Leader" },
  ],
  week: [
    { name: "Aditya S.", points: "1.2k Leader" },
    { name: "Ayobami Awosanya", points: "1.0k Leader" },
    { name: "Dhaval joshi", points: "950 Leader" },
    { name: "Bruce Wayne", points: "800 Leader" },
    { name: "Jane Doe", points: "750 Leader" },
    { name: "Peter Parker", points: "700 Leader" },
    { name: "John Smith", points: "650 Leader" },
    { name: "Sarah Connor", points: "600 Leader" },
  ],
};

export const FeedLeaderBoard = () => {
  const [activeTab, setActiveTab] = useState<LeaderTab>("all-time");

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
        <Info className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer shrink-0" />
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-1 bg-[#F5F5F5] p-1 rounded-xl">
        <button
          onClick={() => setActiveTab("all-time")}
          className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
            activeTab === "all-time"
              ? "bg-[#FEECE5] text-[#F86432]"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          All Time
        </button>
        <button
          onClick={() => setActiveTab("month")}
          className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
            activeTab === "month"
              ? "bg-[#FEECE5] text-[#F86432]"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Month
        </button>
        <button
          onClick={() => setActiveTab("week")}
          className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
            activeTab === "week"
              ? "bg-[#FEECE5] text-[#F86432]"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Week
        </button>
      </div>

      {/* Ranks list */}
      <div className="flex flex-col gap-2">
        {mockLeaders[activeTab].map((leader, index) => (
          <div
            key={index}
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
                {leader.name}
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
                {leader.points}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <button className="w-full bg-[#F86432] hover:bg-[#F86432]/90 text-white font-semibold py-3 rounded-xl transition-all duration-200 cursor-pointer text-center text-sm md:text-base mt-1">
        View all
      </button>
    </div>
  );
};
