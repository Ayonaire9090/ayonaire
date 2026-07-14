"use client";
import { useState } from "react";
import { FeedNewPost } from "./_components/feed-new-post";
import { FeedLivePost } from "./_components/feed-live-post";
import { FeedWorkShop } from "./_components/feed-workshop";
import { FeedPost } from "./_components/feed-post";
import { FeedUpcomingAnnouncements } from "./_components/feed-upcomming-announcements";
import { FeedUpcomingWorkShops } from "./_components/feed-upcomming-workshops";
import { FeedLeaderBoard } from "./_components/feed-leaderboard";
import { FeedFilter } from "./_components/feed-filter";
import { FeedCriteriaModal } from "./_components/feed-leaderboard-criteria-modal";
import { FeedReportModal } from "./_components/feed-report-modal";
import { useGetFeeds } from "@/hooks/api/use-feeds";
import { useFeedRealtimeSync } from "@/hooks/socket/use-feed-realtime-sync";
import { useAuthStore } from "@/store/auth.store";
import { mapFeedRecordToFeedPost } from "./_components/feed-data";

export default function StudentFeedPage() {
  const user = useAuthStore((state) => state.user);
  const [tagFilter, setTagFilter] = useState<string | undefined>(undefined);
  const [reportingFeedId, setReportingFeedId] = useState<string | null>(null);
  useFeedRealtimeSync();
  const { data, isLoading, isError } = useGetFeeds({ tag: tagFilter });
  const posts = (data?.data ?? []).map((feed) =>
    mapFeedRecordToFeedPost(feed, user?._id),
  );

  return (
    <div className="flex flex-1 flex-col lg:grid grid-cols-3 gap-4 p-0 lg:p-6 pb-24 md:pb-6">
      <div className="@container/main flex flex-1 flex-col gap-6 lg:col-span-2">
        <FeedNewPost />
        <FeedLivePost />
        <FeedWorkShop />

        <div className="flex flex-col gap-6">
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
              <FeedPost
                key={post.id}
                feedId={post.id}
                authorName={post.authorName}
                authorSubtitle={post.authorSubtitle}
                tags={post.tags}
                textContent={post.textContent}
                imageUrl={post.imageUrl}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
                sharesCount={post.sharesCount}
                isLikedByMe={post.isLikedByMe}
                onReportPost={() => setReportingFeedId(post.id)}
              />
            ))
          )}
        </div>
      </div>

      {/* Other Feed Page Content (Sidebar on mobile) */}
      <div className="flex flex-col gap-3 lg:col-span-1 rounded-xl h-fit lg:sticky lg:top-2">
        <FeedUpcomingAnnouncements />
        <FeedUpcomingWorkShops />
        <FeedLeaderBoard />
      </div>
      <FeedCriteriaModal />
      <FeedReportModal
        feedId={reportingFeedId}
        onClose={() => setReportingFeedId(null)}
      />
    </div>
  );
}
