import { FeedComment, FeedRecord } from "@/lib/api/endpoints/feeds";

export interface FeedCommentData {
  id?: string;
  authorId: string;
  authorName: string;
  text: string;
  timeAgo: string;
}

export interface FeedPostData {
  id: string;
  authorId: string;
  authorName: string;
  authorSubtitle: string;
  authorAvatarUrl?: string;
  textContent?: string;
  imageUrl?: string;
  tags?: string[];
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLikedByMe: boolean;
  comments: FeedCommentData[];
}

function mapComment(comment: FeedComment): FeedCommentData {
  // The backend's comment sub-documents may or may not carry an `_id`
  // depending on how they were created - only expose delete affordances
  // when one is actually present.
  const raw = comment as FeedComment & { id?: string; _id?: string };
  return {
    id: raw.id ?? raw._id,
    authorId: comment.user?.id ?? "",
    authorName: comment.user?.name ?? "Unknown User",
    text: comment.text,
    timeAgo: timeAgo(comment.createdAt),
  };
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
  const comments = feed.comments ?? [];

  return {
    id: feed.id,
    authorId: feed.user?.id ?? "",
    authorName: feed.user?.name ?? "Unknown User",
    authorSubtitle: timeAgo(feed.createdAt),
    authorAvatarUrl: feed.user?.profile?.url,
    textContent: feed.content,
    imageUrl: feed.media?.url,
    tags: feed.tag,
    likesCount: likes.length,
    commentsCount: comments.length,
    sharesCount: feed.shares ?? 0,
    isLikedByMe: !!currentUserId && likes.includes(currentUserId),
    comments: comments.map(mapComment),
  };
}
