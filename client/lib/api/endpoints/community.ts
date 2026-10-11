import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CommunityStats {
  totalMembers: number;
  totalPosts: number;
  totalAnnouncements: number;
  postsToday: number;
}

export const communityApi = {
  getStats: () =>
    apiClient<ApiResponse<CommunityStats>>("/api/v1/feed/community-stats", {
      method: "GET",
      requireAuth: true,
    }),
};
