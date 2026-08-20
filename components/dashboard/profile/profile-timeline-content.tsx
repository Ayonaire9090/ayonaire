"use client";

import Image from "next/image";
import { useAuthStore } from "@/store/auth.store";

function formatAction(action?: string) {
  if (!action) return "Activity recorded";
  return action
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export const ProfileTimelineContent = () => {
  const user = useAuthStore((state) => state.user);
  const activities = [...(user?.activity ?? [])]
    .sort(
      (a, b) =>
        new Date((b as any).performedAt).getTime() -
        new Date((a as any).performedAt).getTime(),
    )
    .slice(0, 10);

  if (activities.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-400 text-[15px]">
          No activity has been recorded yet.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[96%] mx-auto md:max-w-full flex flex-col gap-4 my-6">
      {activities.map((activity, index) => (
        <div
          key={`${(activity as any).performedAt}-${index}`}
          className="flex items-center gap-3 rounded-xl bg-white p-4"
        >
          <Image
            src="/assets/icons/award-badge.svg"
            alt=""
            width={50}
            height={50}
            className="w-11 h-11"
          />
          <div className="flex flex-col gap-0">
            <h2 className="font-extrabold text-lg md:text-xl">
              {formatAction((activity as any).action)}
            </h2>
            <p className="text-[13px] text-gray-500">
              {(activity as any).performedAt
                ? new Date((activity as any).performedAt).toLocaleString()
                : "Date unavailable"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
