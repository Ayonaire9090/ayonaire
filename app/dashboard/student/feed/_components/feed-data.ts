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
  const author =
    typeof feed.createdBy === "string" ? undefined : feed.createdBy;
  const likes = feed.likes ?? [];

  return {
    id: feed._id,
    authorName: author?.name ?? "Unknown User",
    authorSubtitle: timeAgo(feed.createdAt),
    textContent: feed.text,
    imageUrl: feed.image,
    tags: feed.tags,
    likesCount: likes.length,
    commentsCount: feed.comments?.length ?? 0,
    isLikedByMe: !!currentUserId && likes.includes(currentUserId),
  };
}
