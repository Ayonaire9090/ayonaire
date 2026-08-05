import { useQuery } from "@tanstack/react-query";
import { communityApi } from "@/lib/api/endpoints/community";

export const useGetCommunityStats = () => {
  return useQuery({
    queryKey: ["community", "stats"] as const,
    queryFn: () => communityApi.getStats(),
  });
};
