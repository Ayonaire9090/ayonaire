import { Users2, MessageSquarePlus, MessagesSquare, Megaphone } from "lucide-react";
import { CommunityStats } from "@/lib/api/endpoints/community";
import { StatCard } from "@/components/dashboard/stat-card";

interface CommunityStatsBarProps {
  stats?: CommunityStats;
  isLoading: boolean;
}

const tiles = (stats?: CommunityStats) => [
  { label: "Members", value: stats?.totalMembers, icon: Users2, iconBg: "bg-[#3B82F6]" },
  { label: "Posts today", value: stats?.postsToday, icon: MessageSquarePlus, iconBg: "bg-[#24A164]" },
  { label: "Total discussions", value: stats?.totalPosts, icon: MessagesSquare, iconBg: "bg-[#8B5CF6]" },
  { label: "Announcements", value: stats?.totalAnnouncements, icon: Megaphone, iconBg: "bg-[#F59E0B]" },
];

export const CommunityStatsBar = ({
  stats,
  isLoading,
}: CommunityStatsBarProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {tiles(stats).map((tile) =>
        isLoading ? (
          <div
            key={tile.label}
            role="status"
            aria-label={`Loading ${tile.label}`}
            className="bg-white border border-gray-100 rounded-[16px] px-4 py-4 flex flex-col gap-3"
          >
            <div className="h-6 w-6 bg-[#f0ece7] rounded-full animate-pulse motion-reduce:animate-none" />
            <div className="h-7 w-16 bg-[#f0ece7] rounded animate-pulse motion-reduce:animate-none" />
          </div>
        ) : (
          <StatCard
            key={tile.label}
            label={tile.label}
            value={(tile.value ?? 0).toLocaleString()}
            icon={tile.icon}
            iconBg={tile.iconBg}
          />
        ),
      )}
    </div>
  );
};
