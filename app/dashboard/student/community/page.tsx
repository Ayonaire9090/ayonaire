"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, HelpCircle, Megaphone, MessageCircle, Trophy, Users2, Pencil, Trash2, Copy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
import { StudentFeedSidebarContent } from "../_components/student-feed-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import { useGetCommunityLeaderboard, useGetCommunityStats } from "@/hooks/api/use-community";
import { useGetFeeds } from "@/hooks/api/use-feeds";
import { useFeedRealtimeSync } from "@/hooks/socket/use-feed-realtime-sync";
import { useAuthStore } from "@/store/auth.store";
import { FeedNewPost } from "../feed/_components/feed-new-post";
import { FeedPost } from "../feed/_components/feed-post";
import { FeedEditPostModal } from "../feed/_components/feed-edit-post-modal";
import { FeedDeletePostDialog } from "../feed/_components/feed-delete-post-dialog";
import { FeedReportModal } from "../feed/_components/feed-report-modal";
import { mapFeedRecordToFeedPost } from "../feed/_components/feed-data";

const spaces = [
  { title: "Announcements", detail: "News from Ayonaire", href: "/dashboard/student/feed/announcements", icon: Megaphone },
  { title: "Introductions", detail: "Meet your peers", href: "/dashboard/student/feed/introductions", icon: Users2 },
  { title: "General discussion", detail: "Start a conversation", href: "/dashboard/student/feed/general-discussion", icon: MessageCircle },
  { title: "Ask for help", detail: "Learn from each other", href: "/dashboard/student/feed/ask-for-help", icon: HelpCircle },
];

export default function StudentCommunityPage() {
  const user = useAuthStore((state) => state.user);
  const reducedMotion = useReducedMotion();
  const [editing, setEditing] = useState<{ feedId: string; content: string } | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [reporting, setReporting] = useState<string | null>(null);
  useFeedRealtimeSync();
  const stats = useGetCommunityStats();
  const feed = useGetFeeds({ limit: 8 });
  const leaderboard = useGetCommunityLeaderboard("all-time", 3);
  const posts = (feed.data?.data ?? []).map((post) => mapFeedRecordToFeedPost(post, user?._id));
  const figures = [{ label: "Members", value: stats.data?.data?.totalMembers }, { label: "Posts today", value: stats.data?.data?.postsToday }, { label: "Discussions", value: stats.data?.data?.totalPosts }];

  return <><StudentFeedSidebarContent variant="sidebar" collapsible="icon" /><SidebarInset className="min-h-screen bg-[#f7f6f3]"><StudentDashboardHeader /><div className="flex items-center justify-between border-b border-[#eeeae4] bg-white px-4 py-3 md:hidden"><span className="text-sm font-bold text-[#29231f]">Ayonaire <span className="text-[#e46d42]">/</span> Community</span><SidebarTrigger aria-label="Open community navigation" /></div>
    <main className="mx-auto w-full max-w-[1450px] px-4 pb-28 pt-7 sm:px-6 lg:px-8"><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#df6842]">Your community</p><h1 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[#24201d] sm:text-4xl">Better together<span className="text-[#ed7045]">.</span></h1><p className="mt-2 text-sm text-[#90877e]">Share what you’re learning and connect with your peers.</p></div><a href="#new-post" className="rounded-xl bg-[#ec7045] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#d95d34]">Create a post <span aria-hidden="true">＋</span></a></div>
    <div className="mb-6 grid grid-cols-3 gap-2 sm:gap-3">{figures.map((figure) => <div key={figure.label} className="rounded-2xl border border-[#ebe6df] bg-white px-4 py-3 sm:p-4"><p className="text-lg font-bold text-[#2d2722] sm:text-2xl">{stats.isLoading ? <span className="inline-block h-6 w-10 animate-pulse rounded bg-[#f0ece7] motion-reduce:animate-none" /> : stats.isError ? "—" : (figure.value ?? 0).toLocaleString()}</p><p className="mt-1 text-xs text-[#9d9288]">{figure.label}</p></div>)}</div>
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_310px] xl:items-start"><section className="min-w-0 space-y-4" aria-label="Community discussions"><div id="new-post"><FeedNewPost /></div><div className="flex items-center justify-between pt-2"><div><h2 className="text-lg font-bold text-[#302923]">The conversation</h2><p className="mt-1 text-xs text-[#a0988e]">Recent posts from your community</p></div><Link href="/dashboard/student/feed" className="flex items-center gap-1 text-xs font-bold text-[#dc6038]">View feed <ArrowUpRight className="size-4" /></Link></div>
      {feed.isLoading ? <StudentLoadingSkeleton variant="feed" /> : feed.isError ? <div role="alert" className="rounded-2xl bg-white p-6 text-sm text-[#a34d3c]">Could not load posts. <button className="font-semibold underline" onClick={() => feed.refetch()}>Try again</button></div> : posts.length === 0 ? <div className="rounded-2xl border border-[#ebe6df] bg-white p-10 text-center"><p className="font-semibold text-[#302923]">Start the conversation</p><p className="mt-1 text-sm text-[#9c9188]">Share a question or an update with your peers.</p></div> : posts.map((post, index) => {
        const options = [{ label: "Copy link", icon: <Copy size={16} />, onClick: () => navigator.clipboard.writeText(`${window.location.origin}/dashboard/student/feed?post=${post.id}`).then(() => toast.success("Post link copied")).catch(() => toast.error("Could not copy the link")) }];
        if (post.authorId === user?._id) options.push({ label: "Edit post", icon: <Pencil size={16} />, onClick: () => setEditing({ feedId: post.id, content: post.textContent ?? "" }) }, { label: "Delete post", icon: <Trash2 size={16} />, onClick: () => setDeleting(post.id) });
        return <motion.div key={post.id} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.15) }}><FeedPost feedId={post.id} authorName={post.authorName} authorAvatarUrl={post.authorAvatarUrl} authorSubtitle={post.authorSubtitle} tags={post.tags} textContent={post.textContent} imageUrl={post.imageUrl} likesCount={post.likesCount} commentsCount={post.commentsCount} sharesCount={post.sharesCount} isLikedByMe={post.isLikedByMe} comments={post.comments} currentUserId={user?._id} postOptions={options} onReportPost={() => setReporting(post.id)} /></motion.div>;
      })}</section>
      <aside className="space-y-4 xl:sticky xl:top-4"><section className="rounded-2xl border border-[#ebe6df] bg-white p-5"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#df6842]">Making a difference</p><h2 className="mt-1 font-bold text-[#302923]">Community leaderboard</h2></div><span className="grid size-10 place-items-center rounded-xl bg-[#fff0e9]"><Trophy className="size-5 text-[#df6842]" /></span></div><p className="mt-2 text-xs text-[#a0988e]">All-time posts, comments and answers</p>{leaderboard.isLoading ? <div className="mt-4"><StudentLoadingSkeleton /></div> : leaderboard.isError ? <p className="mt-4 text-sm text-[#a34d3c]">Leaderboard unavailable.</p> : (leaderboard.data?.data ?? []).length === 0 ? <p className="mt-4 text-sm text-[#a0988e]">No contributions yet.</p> : <div className="mt-4 space-y-3">{leaderboard.data?.data?.map((entry) => <div key={entry.user.id} className="flex items-center gap-3"><span className="w-4 text-xs font-bold text-[#b2a59a]">{entry.rank}</span><Avatar className="size-9"><AvatarImage src={entry.user.profile?.url} alt="" /><AvatarFallback>{entry.user.name.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar><p className="min-w-0 flex-1 truncate text-sm font-semibold text-[#433831]">{entry.user.name}</p><span className="text-xs font-bold text-[#df6842]">{entry.points} pts</span></div>)}</div>}<Link href="/dashboard/student/feed/leaderboard" className="mt-5 flex items-center justify-between rounded-xl bg-[#faf7f3] px-3.5 py-3 text-xs font-bold text-[#5c4e43] hover:bg-[#fff0e9] hover:text-[#d85c36]">Explore leaderboard <ArrowUpRight className="size-4" /></Link></section>
      <section className="rounded-2xl border border-[#ebe6df] bg-white p-5"><h2 className="font-bold text-[#302923]">Explore spaces</h2><div className="mt-3 space-y-1">{spaces.map(({ title, detail, href, icon: Icon }) => <Link key={title} href={href} className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#faf7f3]"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#fff3ec] text-[#df6842]"><Icon className="size-4" /></span><span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-[#433831]">{title}</span><span className="block text-xs text-[#a0988e]">{detail}</span></span><ArrowUpRight className="size-4 text-[#c3b7ac] group-hover:text-[#df6842]" /></Link>)}</div></section></aside></div>
    </main><FeedEditPostModal feedId={editing?.feedId ?? null} initialContent={editing?.content ?? ""} onClose={() => setEditing(null)} /><FeedDeletePostDialog feedId={deleting} onClose={() => setDeleting(null)} /><FeedReportModal feedId={reporting} onClose={() => setReporting(null)} /></SidebarInset></>;
}
