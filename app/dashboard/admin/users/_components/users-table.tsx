"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusBadge, UserActions, UserData } from "./users-data";

interface UsersTableProps {
  data: UserData[];
  isInstructor: boolean;
}

export const UsersTable = ({ data, isInstructor }: UsersTableProps) => {
  const studentColumns: ColumnDef<UserData>[] = [
    {
      key: "name",
      header: "Name",
      cell: (user) => (
        <div className="flex items-center gap-4">
          <Avatar className="size-11">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
              {user.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-900 text-[15px] whitespace-nowrap">
            {user.name}
          </span>
        </div>
      ),
    },
    {
      key: "uniqueId",
      header: "ID",
      cell: (user) => (
        <span className="text-gray-500 text-[15px] whitespace-nowrap">
          {user.uniqueId}
        </span>
      ),
    },
    {
      key: "email",
      header: "Email",
      cell: (user) => (
        <span className="text-gray-900 text-[15px] whitespace-nowrap">
          {user.email}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (user) => <StatusBadge status={user.status} />,
    },
    {
      key: "enrollments",
      header: "Enrollments",
      cell: (user) => (
        <span className="text-gray-700 text-[15px] pl-4">
          {user.enrollments}
        </span>
      ),
    },
    {
      key: "action",
      header: "Action",
      headerClassName: "pr-6",
      className: "pr-6",
      cell: () => <UserActions />,
    },
  ];

  const instructorColumns: ColumnDef<UserData>[] = [
    {
      key: "name",
      header: "Instructor",
      cell: (user) => (
        <div className="flex items-center gap-4">
          <Avatar className="size-11">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
              {user.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-900 text-[15px] whitespace-nowrap">
            {user.name}
          </span>
        </div>
      ),
    },
    {
      key: "uniqueId",
      header: "ID",
      cell: (user) => (
        <span className="text-gray-500 text-[15px] whitespace-nowrap">
          {user.uniqueId}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (user) => <StatusBadge status={user.status} />,
    },
    {
      key: "courses",
      header: "Courses",
      cell: (user) => (
        <span className="text-gray-700 text-[15px] whitespace-nowrap">
          {user.coursesCount || "-"}
        </span>
      ),
    },
    {
      key: "batch",
      header: "Batch",
      cell: (user) => (
        <span className="text-gray-700 text-[15px] whitespace-nowrap">
          {user.batch || "-"}
        </span>
      ),
    },
    {
      key: "joined",
      header: "Joined",
      cell: (user) => (
        <span className="text-gray-700 text-[15px] whitespace-nowrap">
          {user.joined || "-"}
        </span>
      ),
    },
    {
      key: "lastActive",
      header: "Last Active",
      cell: (user) => (
        <span className="text-gray-700 text-[15px] whitespace-nowrap">
          {user.lastActive || "-"}
        </span>
      ),
    },
    {
      key: "action",
      header: "Actions",
      headerClassName: "pr-6",
      className: "pr-6",
      cell: () => <UserActions />,
    },
  ];

  return (
    <div className="hidden md:block w-full overflow-x-auto">
      <DataTable
        data={data}
        columns={isInstructor ? instructorColumns : studentColumns}
        keyExtractor={(user) => user.id}
        selectable
      />
    </div>
  );
};
