import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CommunityStats {
  totalMembers: number;
  totalPosts: number;
  totalAnnouncements: number;
  postsToday: number;
}

export type CommunityPeriod = "week" | "month" | "all-time";
export interface CommunityLeaderboardEntry {
  rank: number;
  user: { id: string; name: string; profile?: { url: string; publicId: string } | null };
  points: number;
  posts: number;
  comments: number;
  answers: number;
}

export const communityApi = {
  getStats: () =>
    apiClient<ApiResponse<CommunityStats>>("/api/v1/feed/community-stats", {
      method: "GET",
      requireAuth: true,
    }),
  getLeaderboard: (period: CommunityPeriod, limit = 10) =>
    apiClient<ApiResponse<CommunityLeaderboardEntry[]>>(`/api/v1/feed/community-leaderboard?period=${period}&limit=${limit}`, { method: "GET", requireAuth: true }),
};
