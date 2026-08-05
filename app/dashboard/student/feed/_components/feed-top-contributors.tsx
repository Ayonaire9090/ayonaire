"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useGetLeaderboard } from "@/hooks/api/use-leaderboard";

function formatPoints(points: number): string {
  if (points >= 1000) return `${(points / 1000).toFixed(1)}k pts`;
  return `${points} pts`;
}

export const FeedTopContributors = () => {
  const { data, isLoading, isError } = useGetLeaderboard("all-time", 3);
  const leaders = data?.data ?? [];

  return (
    <div className="flex flex-col gap-3 bg-white p-4 lg:rounded-2xl">
      <div className="flex items-center gap-2">
        <Sparkles className="text-primary w-5 h-5" />
        <h2 className="font-bold text-lg">Top Contributors</h2>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-6">
          <div className="w-5 h-5 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <p className="py-6 text-center text-sm text-red-500">
          Failed to load contributors.
        </p>
      ) : leaders.length === 0 ? (
        <p className="py-6 text-center text-sm text-gray-400">
          No activity yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {leaders.map((leader) => (
            <div key={leader.user.id} className="flex items-center gap-5">
              <Avatar className="-mr-3">
                <AvatarImage src={leader.user.profile?.url} />
                <AvatarFallback>
                  {leader.user.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <p className="flex flex-col font-semibold">
                {leader.user.name}
                <span className="text-gray-500 font-normal text-xs">
                  {formatPoints(leader.points)}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      <Button
        variant="ghost"
        className="w-fit self-start text-primary font-medium cursor-pointer! hover:bg-transparent!"
        asChild
      >
        <Link href="/dashboard/student/feed/leaderboard">
          View All Contributors <ArrowRight className="w-3 h-3 text-primary" />
        </Link>
      </Button>
    </div>
  );
};
