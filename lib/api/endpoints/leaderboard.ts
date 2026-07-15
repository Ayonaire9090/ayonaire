import { apiClient } from "../client";
import { ApiResponse } from "../types";

export type LeaderboardPeriod = "all-time" | "month" | "week";

export interface LeaderboardEntry {
  rank: number;
  user: {
    id: string;
    name: string;
    email: string;
    profile?: {
      url: string;
      publicId: string;
    } | null;
  };
  badge: "gold" | "silver" | "bronze" | null;
  points: number;
  services: string[];
}

export const leaderboardApi = {
  get: (period: LeaderboardPeriod = "all-time", limit = 10) => {
    const query = new URLSearchParams({ period, limit: String(limit) });
    return apiClient<ApiResponse<LeaderboardEntry[]>>(
      `/api/v1/auth/leaderboard?${query.toString()}`,
      {
        method: "GET",
        requireAuth: true,
      },
    );
  },
};
