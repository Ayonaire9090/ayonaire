import { FeedRecord } from "@/lib/api/endpoints/feeds";

export interface FeedPostData {
  id: string;
  authorName: string;
  authorSubtitle: string;
  textContent?: string;
  imageUrl?: string;
  tags?: string[];
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLikedByMe: boolean;
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
    year: "numeric",
  });
}

export function mapFeedRecordToFeedPost(
  feed: FeedRecord,
  currentUserId?: string,
): FeedPostData {
  const likes = feed.likes ?? [];

  return {
    id: feed.id,
    authorName: feed.user?.name ?? "Unknown User",
    authorSubtitle: timeAgo(feed.createdAt),
    textContent: feed.content,
    imageUrl: feed.media?.url,
    tags: feed.tag,
    likesCount: likes.length,
    commentsCount: feed.comments?.length ?? 0,
    sharesCount: feed.shares ?? 0,
    isLikedByMe: !!currentUserId && likes.includes(currentUserId),
  };
}
