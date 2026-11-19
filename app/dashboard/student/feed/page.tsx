"use client";
import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { useEffect, useState } from "react";
import { Eye, Copy, Pencil, Trash2, Search, MessageCircle, Users2, Megaphone } from "lucide-react";
import { toast } from "sonner";
import { FeedNewPost } from "./_components/feed-new-post";
import { FeedPost } from "./_components/feed-post";
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
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"latest" | "discussed">("latest");
  const [limit, setLimit] = useState(20);
  const [reportingFeedId, setReportingFeedId] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<{ feedId: string; content: string } | null>(null);
  const [deletingFeedId, setDeletingFeedId] = useState<string | null>(null);
  useFeedRealtimeSync();
  const { data, isLoading, isError, refetch, isFetching } = useGetFeeds({ tag: tagFilter, limit });
  const posts = (data?.data ?? []).map((feed) =>
    mapFeedRecordToFeedPost(feed, user?._id),
  ).filter((post) => `${post.authorName} ${post.textContent ?? ""} ${(post.tags ?? []).join(" ")}`.toLowerCase().includes(search.trim().toLowerCase()));
  if (sort === "discussed") posts.sort((a, b) => b.commentsCount - a.commentsCount);

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
    <div className="mx-auto w-full max-w-[1050px] px-4 pb-28 pt-5 sm:px-6 lg:pt-7">
      <header className="mb-4 rounded-2xl border border-border bg-card px-5 pt-5 sm:px-7 sm:pt-6"><div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-medium text-muted-foreground">Ayonaire / Community</p><h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Community feed</h1></div></div><nav aria-label="Community spaces" className="mt-5 flex gap-1 overflow-x-auto border-t border-border pt-1 text-sm"><Link href="/dashboard/student/feed" aria-current="page" className="flex shrink-0 items-center gap-2 border-b-2 border-foreground px-3 py-3 font-semibold text-foreground"><MessageCircle className="size-4" />Feed</Link><Link href="/dashboard/student/feed/general-discussion" className="flex shrink-0 items-center gap-2 border-b-2 border-transparent px-3 py-3 text-muted-foreground transition hover:text-foreground"><Users2 className="size-4" />Discussions</Link><Link href="/dashboard/student/feed/ask-for-help" className="shrink-0 border-b-2 border-transparent px-3 py-3 text-muted-foreground transition hover:text-foreground">Ask for help</Link><Link href="/dashboard/student/feed/announcements" className="flex shrink-0 items-center gap-2 border-b-2 border-transparent px-3 py-3 text-muted-foreground transition hover:text-foreground"><Megaphone className="size-4" />Announcements</Link></nav></header>
      <div className="flex min-w-0 flex-col gap-4">
        <FeedNewPost />

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3 px-1 pt-2"><div className="flex items-center gap-5" aria-label="Sort posts"><button type="button" onClick={() => setSort("latest")} aria-pressed={sort === "latest"} className={`border-b-2 pb-2 text-sm transition ${sort === "latest" ? "border-foreground font-semibold text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>Latest</button><button type="button" onClick={() => setSort("discussed")} aria-pressed={sort === "discussed"} className={`border-b-2 pb-2 text-sm transition ${sort === "discussed" ? "border-foreground font-semibold text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>Most discussed</button></div><div className="flex items-center gap-2"><label className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2"><Search className="size-4 text-muted-foreground" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search loaded posts" aria-label="Search loaded posts" className="w-28 bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground sm:w-40" /></label><FeedFilter selectedTag={tagFilter} onApply={(tag) => { setLimit(20); setTagFilter(tag); }} /></div></div>
          {sort === "discussed" && <p className="px-1 text-xs text-muted-foreground">Sorted by comments among the posts loaded below.</p>}

          {/* Posts */}
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <StudentLoadingSkeleton variant="feed" />
            </div>
          ) : isError ? (
            <div role="alert" className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card py-16 text-sm text-muted-foreground">
              <p>Could not load posts.</p><button type="button" onClick={() => refetch()} className="font-semibold text-foreground underline underline-offset-4">Try again</button>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
              {search ? "No loaded posts match your search." : "No posts here yet. Start the conversation above."}
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
          {!isLoading && !isError && (data?.data?.length ?? 0) >= limit && <button type="button" disabled={isFetching} onClick={() => setLimit((current) => current + 20)} className="mx-auto my-3 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition hover:bg-muted disabled:opacity-50">{isFetching ? "Loading…" : "Load more posts"}</button>}
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
