"use client";

import Image from "next/image";
import { useAuthStore } from "@/store/auth.store";
import { useGetCompletedCourses } from "@/hooks/api/use-enrollment";
import { useGetLeaderboard } from "@/hooks/api/use-leaderboard";

export const ProfilePointsContent = () => {
  const user = useAuthStore((state) => state.user);
  const { data: leaderboardData, isLoading: leaderboardLoading } =
    useGetLeaderboard("all-time", 100);
  const { data: completedData, isLoading: completedLoading } =
    useGetCompletedCourses();

  const leaderboardEntry = (leaderboardData?.data ?? []).find(
    (entry) => entry.user.id === user?._id,
  );
  const academyPoints = leaderboardEntry?.points ?? 0;
  const completedCourses = completedData?.data?.length ?? 0;

  if (leaderboardLoading || completedLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-start my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-center items-start">
            <div className="flex items-center gap-1.5">
              <Image
                src="/assets/icons/award-badge.svg"
                alt="Academy points"
                width={50}
                height={50}
                className="w-11 h-11"
              />
              <div className="flex flex-col">
                <span className="text-[22px] font-bold text-gray-800">
                  {academyPoints}
                </span>
                <span className="text-[16px] font-semibold text-gray-800">
                  Academy points
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-center items-start">
            <div className="flex items-center gap-1.5">
              <Image
                src="/assets/icons/thumbs-up.svg"
                alt="Completed courses"
                width={50}
                height={50}
                className="w-11 h-11"
              />
              <div className="flex flex-col">
                <span className="text-[22px] font-bold text-gray-800">
                  {completedCourses}
                </span>
                <span className="text-[16px] font-semibold text-gray-800">
                  Completed courses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
