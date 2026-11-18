"use client";
import { useEffect, useState } from "react";
import { Eye, Copy, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { FeedNewPost } from "./_components/feed-new-post";
import { FeedLivePost } from "./_components/feed-live-post";
import { FeedWorkShop } from "./_components/feed-workshop";
import { FeedPost } from "./_components/feed-post";
import { FeedUpcomingAnnouncements } from "./_components/feed-upcomming-announcements";
import { FeedUpcomingWorkShops } from "./_components/feed-upcomming-workshops";
import { FeedLeaderBoard } from "./_components/feed-leaderboard";
import { FeedFilter } from "./_components/feed-filter";
import { FeedReportModal } from "./_components/feed-report-modal";
import { FeedEditPostModal } from "./_components/feed-edit-post-modal";
import { FeedDeletePostDialog } from "./_components/feed-delete-post-dialog";
import { PostOption } from "./_components/feed-post-actions";
import { useGetFeeds } from "@/hooks/api/use-feeds";
import { useFeedRealtimeSync } from "@/hooks/socket/use-feed-realtime-sync";
import { useAuthStore } from "@/store/auth.store";
import { FeedPostData, mapFeedRecordToFeedPost } from "./_components/feed-data";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

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

export default function StudentFeedPage() {
  const user = useAuthStore((state) => state.user);
  const reducedMotion = useReducedMotion();
  const [tagFilter, setTagFilter] = useState<string | undefined>(undefined);
  const [reportingFeedId, setReportingFeedId] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<{ feedId: string; content: string } | null>(null);
  const [deletingFeedId, setDeletingFeedId] = useState<string | null>(null);
  useFeedRealtimeSync();
  const { data, isLoading, isError } = useGetFeeds({ tag: tagFilter });
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
    <div className="mx-auto w-full max-w-[1500px] px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div><div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d85c36]"><span className="h-2 w-2 rounded-full bg-[#ed7045]" /> Ayonaire community</div><h1 className="text-[30px] font-bold tracking-[-0.04em] text-[#201d1a] sm:text-[38px]">Your space to grow<span className="text-[#ed7045]">.</span></h1><p className="mt-1 text-sm text-[#817a73]">Learn together, share your progress, and find your people.</p></div>
        <Link href="/dashboard/student/courses" className="rounded-xl border border-[#e8e3dd] bg-white px-4 py-2.5 text-sm font-semibold text-[#3e3833] transition hover:border-[#ed7045] hover:text-[#d85c36]">My learning <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="flex flex-col gap-7 xl:grid xl:grid-cols-[minmax(0,1fr)_310px] xl:items-start">
      <div className="@container/main flex min-w-0 flex-col gap-5">
        <FeedNewPost />

        <div className="flex flex-col gap-4">
          {/* Feed Filter */}
          <FeedFilter selectedTag={tagFilter} onApply={setTagFilter} />

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
              No posts yet. Be the first to share something!
            </div>
          ) : (
            posts.map((post) => (
              <motion.div key={post.id} id={`feed-post-${post.id}`} initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} className="rounded-2xl transition-all">
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
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Other Feed Page Content (Sidebar on mobile) */}
      <aside className="flex flex-col gap-4 rounded-xl h-fit xl:sticky xl:top-4">
        <div className="rounded-2xl border border-[#ebe8e3] bg-[#25221f] p-5 text-white"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffac88]">A little progress goes a long way</p><h2 className="mt-3 text-lg font-semibold leading-snug">Keep showing up for your goals.</h2><p className="mt-2 text-sm leading-6 text-white/65">Pick up where you left off and make today count.</p><Link href="/dashboard/student/courses" className="mt-4 inline-flex rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-[#25221f] transition hover:bg-[#fff0e8]">Continue learning <span className="ml-2">↗</span></Link></div>
        <FeedLivePost />
        <FeedWorkShop />
        <FeedUpcomingAnnouncements />
        <FeedUpcomingWorkShops />
        <FeedLeaderBoard />
      </aside>
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
    </div>
  );
}
