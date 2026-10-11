import { FeedPostHeader } from "./feed-post-header";
import { FeedPostContent } from "./feed-post-content";
import { FeedPostPoll } from "./feed-post-poll";
import { FeedInteractPost } from "./feed-interact-post";
import { FeedWriteComment } from "./feed-write-comment";
import { FeedCommentList } from "./feed-comment-list";
import { PostOption } from "./feed-post-actions";
import { FeedCommentData } from "./feed-data";

export interface FeedPostProps {
  feedId?: string;
  authorName?: string;
  authorAvatarUrl?: string;
  badge?: React.ReactNode;
  authorSubtitle?: string;
  isPinned?: boolean;
  tags?: string[];
  textContent?: string;
  imageUrl?: string;
  isPoll?: boolean;
  pollQuestion?: string;
  pollSubtitle?: string;
  pollOptions?: { text: string; percentage: number }[];
  pollTotalVotes?: string;
  postOptions?: PostOption[];
  onReportPost?: () => void;
  likesCount?: number;
  commentsCount?: number;
  sharesCount?: number;
  isLikedByMe?: boolean;
  comments?: FeedCommentData[];
  currentUserId?: string;
}

export const FeedPost = ({
  feedId,
  authorName,
  authorAvatarUrl,
  badge,
  authorSubtitle,
  isPinned,
  tags,
  textContent,
  imageUrl,
  isPoll,
  pollQuestion,
  pollSubtitle,
  pollOptions,
  pollTotalVotes,
  postOptions,
  onReportPost,
  likesCount,
  commentsCount,
  sharesCount,
  isLikedByMe,
  comments,
  currentUserId,
}: FeedPostProps) => {
  return (
    <div className="bg-white lg:rounded-2xl border border-gray-200/80 p-4 sm:p-6 flex flex-col w-full">
      {/* Header */}
      <FeedPostHeader
        title={authorName}
        avatarUrl={authorAvatarUrl}
        badge={badge}
        description={authorSubtitle}
        isPinned={isPinned}
        options={postOptions}
        onReport={onReportPost}
      />

      {/* Content (Text + Image) */}
      {(!isPoll || textContent || tags || imageUrl) && (
        <FeedPostContent text={textContent} tags={tags} imageUrl={imageUrl} />
      )}

      {/* Poll */}
      {isPoll && (
        <FeedPostPoll
          question={pollQuestion}
          subtitle={pollSubtitle}
          options={pollOptions}
          totalVotes={pollTotalVotes}
        />
      )}

      {/* Interaction Footer (Likes, Comments) */}
      <div className="mt-4">
        <FeedInteractPost
          feedId={feedId}
          likes={likesCount}
          comments={commentsCount}
          shares={sharesCount}
          isLikedByMe={isLikedByMe}
        />
      </div>

      {/* Comments */}
      {comments && comments.length > 0 && (
        <div className="mt-4">
          <FeedCommentList
            feedId={feedId}
            comments={comments}
            currentUserId={currentUserId}
          />
        </div>
      )}

      {/* Comment Input */}
      <div className="mt-4">
        <FeedWriteComment feedId={feedId} />
      </div>
    </div>
  );
};
