import { useQuery } from "@tanstack/react-query";
import { communityApi, CommunityPeriod } from "@/lib/api/endpoints/community";

export const useGetCommunityStats = () => {
  return useQuery({
    queryKey: ["community", "stats"] as const,
    queryFn: () => communityApi.getStats(),
    refetchInterval: 60000,
  });
};

export const useGetCommunityLeaderboard = (period: CommunityPeriod = "all-time", limit = 10) => useQuery({
  queryKey: ["community", "leaderboard", period, limit] as const,
  queryFn: () => communityApi.getLeaderboard(period, limit),
  refetchInterval: 60000,
});
