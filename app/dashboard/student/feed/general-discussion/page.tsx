import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { FeedNewPost } from "../_components/feed-new-post";
import { FeedPost } from "../_components/feed-post";

export default function StudentFeedGeneralDiscussionPage() {
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
          <FeedNewPost />
          <div className="flex flex-col gap-6">
            {/* Posts */}
            <FeedPost
              authorName="Aisha Kumar"
              authorSubtitle="In About 7 Hours"
              isPinned={false}
              textContent="Hi everyone! I'm Aisha from Mumbai IN. Excited to learn ML and build real-world Al apps! Can't wait to connect with all of you."
            />
            <FeedPost
              authorName="Rohan patel"
              authorSubtitle="in About 8 Hours"
              isPinned={false}
              textContent="Hey everyone! Rohan here from Delhi. Background in software engineering, now diving deep into ML. Looking forward to learning together!"
            />
            <FeedPost
              authorName="Priya Sharma"
              authorSubtitle="in About 9 Hours"
              isPinned={false}
              textContent="Hi everyone, I'm Priya. I work as a data analyst and am looking to transition into machine learning. Excited to be part of this community!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
