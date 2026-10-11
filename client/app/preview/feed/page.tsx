// Standalone, auth-free preview of the student feed screen so the real
// FeedPost component (with the new Facebook-style like/comment/share icons)
// can be reviewed without an account. Safe to delete before launch.

import { FeedPost } from "@/app/dashboard/student/feed/_components/feed-post";

export default function FeedScreenPreviewPage() {
  return (
    <div className="min-h-dvh bg-[#F6F6F6]">
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-[13px] text-center py-2 px-4">
        Preview mode — the real feed post component, rendered with sample
        posts, no login required. Like/comment/share are non-functional here
        (no feedId), styling only.
      </div>

      <div className="max-w-2xl mx-auto py-6 px-4 sm:px-0 flex flex-col gap-6">
        <FeedPost
          authorName="Ayo"
          authorAvatarUrl="/assets/persons/mr-ayo.png"
          authorSubtitle="Instructor · 2 hours ago"
          tags={["#DataScience"]}
          textContent="Don't forget the assignment is due Friday! Drop your questions below and I'll answer them live in tomorrow's session."
          likesCount={24}
          commentsCount={6}
          sharesCount={2}
          isLikedByMe={true}
        />

        <FeedPost
          authorName="Sarah Ahmed"
          authorAvatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
          authorSubtitle="Student · 5 hours ago"
          textContent="Just finished module 3, the SQL joins section finally clicked for me 🎉"
          likesCount={12}
          commentsCount={3}
          sharesCount={0}
          isLikedByMe={false}
        />

        <FeedPost
          authorName="Ali Hassan"
          authorAvatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
          authorSubtitle="Student · Yesterday"
          isPoll
          pollQuestion="Which project topic should we cover in next week's workshop?"
          pollOptions={[
            { text: "Recommendation systems", percentage: 62 },
            { text: "Time-series forecasting", percentage: 38 },
          ]}
          pollTotalVotes="142 votes"
          likesCount={8}
          commentsCount={1}
          sharesCount={0}
          isLikedByMe={false}
        />
      </div>
    </div>
  );
}
