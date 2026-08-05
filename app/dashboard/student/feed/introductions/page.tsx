"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { FeedNewPost } from "../_components/feed-new-post";
import { FeedPost } from "../_components/feed-post";
import { FeedUpcomingAnnouncements } from "../_components/feed-upcomming-announcements";
import { FeedUpcomingWorkShops } from "../_components/feed-upcomming-workshops";
import { FeedWelcomePost } from "../_components/feed-welcome-post";
import { FeedTopContributors } from "../_components/feed-top-contributors";
import { useGetFeeds } from "@/hooks/api/use-feeds";
import { useAuthStore } from "@/store/auth.store";
import { mapFeedRecordToFeedPost } from "../_components/feed-data";

const TAG = "introductions";

export default function StudentFeedIntroductionsPage() {
  const user = useAuthStore((state) => state.user);
  const { data, isLoading, isError } = useGetFeeds({ tag: TAG });
  const posts = (data?.data ?? []).map((feed) =>
    mapFeedRecordToFeedPost(feed, user?._id),
  );

  return (
    <>
      <div className="pb-2 lg:py-2 px-4 lg:px-6">
        <div className="hidden lg:flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              Introductions
            </h1>
          </div>
          <p className="text-base text-gray-500">Meet your fellow learners</p>
        </div>
        <div className="md:hidden">
          <DashboardHeader
            title="Introductions"
            subTitle="Meet your fellow learners"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col lg:grid grid-cols-3 gap-4 p-0 lg:p-6 pb-24 md:pb-6">
        <div className="@container/main flex flex-1 flex-col gap-6 lg:col-span-2">
          <FeedNewPost tag={TAG} />
          <FeedWelcomePost />

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
                No introductions yet. Say hello to the community!
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
                />
              ))
            )}
          </div>
        </div>

        {/* Other Feed Page Content (Sidebar on mobile) */}
        <div className="flex flex-col gap-3 lg:col-span-1 rounded-xl h-fit lg:sticky lg:top-2">
          <FeedUpcomingAnnouncements />
          <FeedUpcomingWorkShops />
          <FeedTopContributors />
        </div>
      </div>
    </>
  );
}
