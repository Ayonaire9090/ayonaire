"use client";
import { FeedNewPost } from "./_components/feed-new-post";
import { FeedLivePost } from "./_components/feed-live-post";
import { FeedWorkShop } from "./_components/feed-workshop";
import { FeedPost } from "./_components/feed-post";
import { FeedUpcomingAnnouncements } from "./_components/feed-upcomming-announcements";
import { FeedUpcomingWorkShops } from "./_components/feed-upcomming-workshops";
import { FeedLeaderBoard } from "./_components/feed-leaderboard";
import { FeedFilter } from "./_components/feed-filter";
import { FeedCriteriaModal } from "./_components/feed-leaderboard-criteria-modal";

export default function StudentFeedPage() {
  return (
    <div className="flex flex-1 flex-col lg:grid grid-cols-3 gap-4 p-0 lg:p-6 pb-24 md:pb-6">
      <div className="@container/main flex flex-1 flex-col gap-6 lg:col-span-2">
        <FeedNewPost />
        <FeedLivePost />
        <FeedWorkShop />

        <div className="flex flex-col gap-6">
          {/* Feed Filter */}
          <FeedFilter />

          {/* Posts */}
          <FeedPost
            authorName="Aditya S."
            authorSubtitle="5d • Build AI Agents From Scrach Free Course"
            isPinned={true}
            textContent="Just 2 weeks left🚀 The Wait Is Over — Learn AI the MODERN Way in 2026! 🤖🔥 Best for anyone who wants to get started in Gen AI and Agentic AI The... See more"
            imageUrl="/assets/courses/ai-engineering.webp"
          />

          <FeedPost
            authorName="Aditya S."
            authorSubtitle="in about 7 hours"
            tags={["DeepLearning", "ComputerVision", "Python"]}
            textContent="Finally built my first image classifier! 87% accuracy i Code: https://github.com/aditya/cnn-project"
          />

          <FeedPost
            authorName="Ayobami Awosanya"
            authorSubtitle="1y • Ultimate Data Science & Gen AI - 1.0... +19"
            isPoll={true}
            pollQuestion="Which of the following best describes situated AI agents?"
            pollSubtitle="Also comment the reasons for your answers"
            pollOptions={[
              { text: "Dynamic interaction & learning", percentage: 84.34 },
              { text: "Static environment", percentage: 3.02 },
              { text: "Structured data only", percentage: 3.02 },
              { text: "No feedback", percentage: 8.52 },
            ]}
            pollTotalVotes="364 votes"
          />
        </div>
      </div>

      {/* Other Feed Page Content (Sidebar on mobile) */}
      <div className="flex flex-col gap-3 lg:col-span-1 rounded-xl h-fit lg:sticky lg:top-2">
        <FeedUpcomingAnnouncements />
        <FeedUpcomingWorkShops />
        <FeedLeaderBoard />
      </div>
      <FeedCriteriaModal />
    </div>
  );
}
