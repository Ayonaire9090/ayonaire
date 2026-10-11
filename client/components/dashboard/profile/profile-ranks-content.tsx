"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useAuthStore } from "@/store/auth.store";
import { useGetLeaderboard } from "@/hooks/api/use-leaderboard";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const ProfileRanksContent = () => {
  const user = useAuthStore((state) => state.user);
  const { data, isLoading, isError } = useGetLeaderboard("all-time", 10);
  const entries = data?.data ?? [];
  const currentUserRank = entries.find((entry) => entry.user.id === user?._id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-500 text-[15px]">
          Failed to load leaderboard rankings.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 my-6 w-full max-w-[96%] md:max-w-full mx-auto">
      <div className="flex gap-3 items-center">
        <Image
          src="/assets/logos/logo-dark.png"
          alt=""
          width={60}
          height={60}
          className="object-contain"
        />
        <div className="flex flex-col">
          <h2 className="font-extrabold text-3xl">
            {currentUserRank ? `Rank #${currentUserRank.rank}` : "Unranked"}
          </h2>
          <p className="font-bold text-[14px] text-gray-500">
            {currentUserRank
              ? `${currentUserRank.points} points`
              : "Complete course activity to enter the leaderboard"}
          </p>
        </div>
      </div>

      {entries.length === 0 ? (
        <div className="py-12 text-center text-[15px] text-gray-400">
          No leaderboard entries yet.
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {entries.map((entry) => (
            <div
              key={entry.user.id}
              className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="w-8 text-[14px] font-bold text-gray-500">
                  #{entry.rank}
                </span>
                <Avatar className="size-[42px] border border-orange-100">
                  <AvatarImage src={entry.user.profile?.url} alt={entry.user.name} />
                  <AvatarFallback className="text-sm font-bold bg-orange-100 text-orange-600">
                    {getInitials(entry.user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold text-gray-900">
                    {entry.user.name}
                  </p>
                  <p className="truncate text-[12px] text-gray-400">
                    {entry.user.email}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-[14px] font-bold text-primary">
                {entry.points}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
