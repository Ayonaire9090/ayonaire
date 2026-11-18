"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const [commentsOpen, setCommentsOpen] = useState(false);
  const commentArea = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const openComments = () => {
    if (commentsOpen) { setCommentsOpen(false); return; }
    setCommentsOpen(true);
    requestAnimationFrame(() => commentArea.current?.querySelector("textarea")?.focus());
  };
  return (
    <article className="bg-white rounded-2xl border border-[#ebe8e3] p-4 sm:p-6 flex flex-col w-full shadow-[0_2px_10px_rgba(39,31,23,0.035)]">
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
          onComment={openComments}
          commentsOpen={commentsOpen}
        />
      </div>

      {/* Comments */}
      <AnimatePresence initial={false}>
        {commentsOpen && <motion.div ref={commentArea} initial={reducedMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reducedMotion ? undefined : { opacity: 0, height: 0 }} transition={{ duration: 0.18 }} className="overflow-hidden">
          <div className="space-y-4 pt-4">
            {comments && comments.length > 0 && <FeedCommentList feedId={feedId} comments={comments} currentUserId={currentUserId} />}
            <FeedWriteComment feedId={feedId} />
          </div>
        </motion.div>}
      </AnimatePresence>
    </article>
  );
};
