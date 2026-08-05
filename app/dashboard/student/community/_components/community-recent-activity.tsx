import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RecentActivityItem } from "./community-data";

interface CommunityRecentActivityProps {
  items: RecentActivityItem[];
  isLoading: boolean;
  isError: boolean;
}

export const CommunityRecentActivity = ({
  items,
  isLoading,
  isError,
}: CommunityRecentActivityProps) => {
  return (
    <div className="flex flex-col gap-3 bg-white p-4 lg:rounded-2xl border border-gray-200/80">
      <h2 className="font-bold text-lg text-gray-900">Recent activity</h2>

      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="py-8 text-center text-sm text-red-500">
          Failed to load recent activity.
        </div>
      ) : items.length === 0 ? (
        <div className="py-8 text-center text-sm text-gray-500">
          No activity yet. Be the first to post!
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-gray-100">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/dashboard/student/feed?post=${item.id}`}
              className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 hover:opacity-80 transition-opacity"
            >
              <Avatar className="w-9 h-9 shrink-0">
                <AvatarImage src={item.authorAvatarUrl} />
                <AvatarFallback>
                  {item.authorName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0">
                <p className="text-sm text-gray-900 leading-snug">
                  <span className="font-semibold">{item.authorName}</span>{" "}
                  <span className="text-gray-600 line-clamp-2">
                    {item.snippet}
                  </span>
                </p>
                <span className="text-xs text-gray-400 mt-0.5">
                  {item.timeAgo}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
