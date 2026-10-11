"use client";

import { cn } from "@/lib/utils";

const tabs = [
  "Profile",
  "Courses",
  "Achievements",
  "Points",
  "Ranks",
  "Timeline",
] as const;

type ProfileTab = (typeof tabs)[number];

interface ProfileTabsProps {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <div
      className="bg-white border-b border-gray-200 overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <nav className="flex gap-0 min-w-max" aria-label="Profile tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "px-4 md:px-5 py-3 text-[14px] md:text-[15px] font-medium transition-colors relative whitespace-nowrap",
              activeTab === tab
                ? "text-primary font-semibold"
                : "text-gray-400 hover:text-gray-600",
            )}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

export type { ProfileTab };
