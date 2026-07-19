import { useQuery } from "@tanstack/react-query";
import { leaderboardApi, LeaderboardPeriod } from "@/lib/api/endpoints/leaderboard";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetLeaderboard = (period: LeaderboardPeriod = "all-time", limit = 10) => {
  return useQuery({
    queryKey: [...queryKeys.leaderboard.all, period, limit] as const,
    queryFn: () => leaderboardApi.get(period, limit),
  });
};
