"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusBadge, UserActions, UserData } from "./users-data";

interface UsersListProps {
  data: UserData[];
  isInstructor: boolean;
}

export const UsersList = ({ data, isInstructor }: UsersListProps) => {
  return (
    <div className="md:hidden mt-2">
      <DataList
        data={data}
        keyExtractor={(user) => user.id}
        className="gap-3"
        itemClassName="bg-white border border-gray-100 rounded-xl px-3 py-3"
        renderItem={(user) => (
          <>
            <Avatar className="size-11 shrink-0">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 flex flex-col gap-0.5 min-w-0 pr-6">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className="font-medium text-[14px] text-gray-900 truncate">
                  {user.name}
                </span>
                <StatusBadge status={user.status} userId={user.id} />
              </div>
              <div className="text-[13px] text-gray-500 truncate">
                {user.uniqueId}{" "}
                <span className="mx-1.5 text-gray-400">&bull;</span>
                {isInstructor
                  ? user.coursesCount || "-"
                  : `${user.enrollments} Enrollments`}
              </div>
              <div className="text-[13px] text-gray-700 truncate">
                {isInstructor ? user.batch || "No Batch" : user.email}
              </div>
            </div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2">
              <UserActions userId={user.id} />
            </div>
          </>
        )}
      />
    </div>
  );
};
