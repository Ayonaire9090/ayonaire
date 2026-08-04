import { CommunityStats } from "@/lib/api/endpoints/community";

interface CommunityStatsBarProps {
  stats?: CommunityStats;
  isLoading: boolean;
}

const tiles = (stats?: CommunityStats) => [
  { label: "Members", value: stats?.totalMembers },
  { label: "Posts today", value: stats?.postsToday },
  { label: "Total discussions", value: stats?.totalPosts },
  { label: "Announcements", value: stats?.totalAnnouncements },
];

export const CommunityStatsBar = ({
  stats,
  isLoading,
}: CommunityStatsBarProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {tiles(stats).map((tile) => (
        <div
          key={tile.label}
          className="bg-white border border-gray-200/80 rounded-2xl px-4 py-4 flex flex-col gap-1"
        >
          <span className="text-2xl font-bold text-gray-900 tabular-nums">
            {isLoading ? (
              <span className="inline-block h-7 w-10 bg-gray-100 rounded animate-pulse" />
            ) : (
              (tile.value ?? 0).toLocaleString()
            )}
          </span>
          <span className="text-xs text-gray-500">{tile.label}</span>
        </div>
      ))}
    </div>
  );
};
