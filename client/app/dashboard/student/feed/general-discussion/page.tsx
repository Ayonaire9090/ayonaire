"use client";

import { useEffect, useState } from "react";
import { Eye, Copy, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { FeedNewPost } from "../_components/feed-new-post";
import { FeedPost } from "../_components/feed-post";
import { FeedReportModal } from "../_components/feed-report-modal";
import { FeedEditPostModal } from "../_components/feed-edit-post-modal";
import { FeedDeletePostDialog } from "../_components/feed-delete-post-dialog";
import { PostOption } from "../_components/feed-post-actions";
import { useGetFeeds } from "@/hooks/api/use-feeds";
import { useAuthStore } from "@/store/auth.store";
import { FeedPostData, mapFeedRecordToFeedPost } from "../_components/feed-data";

const copyPostLink = (feedId: string) => {
  const url = `${window.location.origin}${window.location.pathname}?post=${feedId}`;
  navigator.clipboard
    .writeText(url)
    .then(() => toast.success("Link copied"))
    .catch(() => toast.error("Couldn't copy link"));
};

const copyCaption = (textContent?: string) => {
  if (!textContent) {
    toast.error("This post has no caption to copy");
    return;
  }
  navigator.clipboard
    .writeText(textContent)
    .then(() => toast.success("Caption copied"))
    .catch(() => toast.error("Couldn't copy caption"));
};

const viewPost = (feedId: string) => {
  const el = document.getElementById(`feed-post-${feedId}`);
  if (!el) {
    toast.error("This post isn't in the current view");
    return;
  }
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add("ring-2", "ring-[#F86432]");
  setTimeout(() => el.classList.remove("ring-2", "ring-[#F86432]"), 1500);
};

export default function StudentFeedGeneralDiscussionPage() {
  const user = useAuthStore((state) => state.user);
  const [reportingFeedId, setReportingFeedId] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<{ feedId: string; content: string } | null>(null);
  const [deletingFeedId, setDeletingFeedId] = useState<string | null>(null);

  const { data, isLoading, isError } = useGetFeeds({ channel: "general-discussion" });
  const posts = (data?.data ?? []).map((feed) =>
    mapFeedRecordToFeedPost(feed, user?._id),
  );

  // Deep-link support for "View post" / "Copy link": scroll the target post
  // into view once its data has loaded.
  useEffect(() => {
    if (isLoading) return;
    const targetId = new URLSearchParams(window.location.search).get("post");
    if (!targetId) return;
    const el = document.getElementById(`feed-post-${targetId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [isLoading, posts.length]);

  const buildPostOptions = (post: FeedPostData): PostOption[] => {
    const options: PostOption[] = [
      { label: "View post", icon: <Eye size={18} strokeWidth={2} />, onClick: () => viewPost(post.id) },
      { label: "Copy link", icon: <Copy size={18} strokeWidth={2} />, onClick: () => copyPostLink(post.id) },
      {
        label: "Copy Caption",
        icon: <Copy size={18} strokeWidth={2} />,
        onClick: () => copyCaption(post.textContent),
      },
    ];

    if (user?._id && post.authorId === user._id) {
      options.push(
        {
          label: "Edit post",
          icon: <Pencil size={18} strokeWidth={2} />,
          onClick: () => setEditingPost({ feedId: post.id, content: post.textContent ?? "" }),
        },
        {
          label: "Delete post",
          icon: <Trash2 size={18} strokeWidth={2} />,
          onClick: () => setDeletingFeedId(post.id),
        },
      );
    }

    return options;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="pb-2 lg:py-2 px-4 lg:px-6">
        <div className="hidden lg:flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              General Discussion
            </h1>
          </div>
          <p className="text-base text-gray-500">
            Share your thoughts, ideas, and experiences with the community
          </p>
        </div>
        <div className="md:hidden">
          <DashboardHeader
            title="General Discussion"
            subTitle="Share your thoughts, ideas, and experiences with the community"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-0 lg:p-6 pb-24 md:pb-6">
        <div className="@container/main flex flex-1 flex-col gap-6 ">
          <FeedNewPost channel="general-discussion" />
          <div className="flex flex-col gap-6">
            {/* Posts */}
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : isError ? (
              <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
                Failed to load posts. Please try again.
              </div>
            ) : posts.length === 0 ? (
              <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
                No discussions yet. Be the first to share something!
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.id} id={`feed-post-${post.id}`} className="rounded-2xl transition-all">
                  <FeedPost
                    feedId={post.id}
                    authorName={post.authorName}
                    authorAvatarUrl={post.authorAvatarUrl}
                    authorSubtitle={post.authorSubtitle}
                    tags={post.tags}
                    textContent={post.textContent}
                    imageUrl={post.imageUrl}
                    likesCount={post.likesCount}
                    commentsCount={post.commentsCount}
                    sharesCount={post.sharesCount}
                    isLikedByMe={post.isLikedByMe}
                    comments={post.comments}
                    currentUserId={user?._id}
                    postOptions={buildPostOptions(post)}
                    onReportPost={() => setReportingFeedId(post.id)}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <FeedReportModal
        feedId={reportingFeedId}
        onClose={() => setReportingFeedId(null)}
      />
      <FeedEditPostModal
        feedId={editingPost?.feedId ?? null}
        initialContent={editingPost?.content ?? ""}
        onClose={() => setEditingPost(null)}
      />
      <FeedDeletePostDialog
        feedId={deletingFeedId}
        onClose={() => setDeletingFeedId(null)}
      />
    </div>
  );
}
