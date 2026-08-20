import { redirect } from "next/navigation";

export default function StudentLeaderboardRedirectPage() {
  redirect("/dashboard/student/feed/leaderboard");
}
