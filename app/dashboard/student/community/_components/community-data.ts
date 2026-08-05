import { FeedRecord } from "@/lib/api/endpoints/feeds";

export interface RecentActivityItem {
  id: string;
  authorName: string;
  authorAvatarUrl?: string;
  snippet: string;
  timeAgo: string;
}

function timeAgo(dateString?: string): string {
  if (!dateString) return "";
  const diffMs = Date.now() - new Date(dateString).getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function mapFeedRecordToRecentActivity(
  feed: FeedRecord,
): RecentActivityItem {
  return {
    id: feed.id,
    authorName: feed.user?.name ?? "Unknown User",
    authorAvatarUrl: feed.user?.profile?.url,
    snippet: feed.content,
    timeAgo: timeAgo(feed.createdAt),
  };
}
