"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ElementType;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="gap-2">
          {items.map((item) => {
            const isActive =
              pathname === item.url ||
              (item.url !== "/dashboard" &&
                pathname.startsWith(item.url) &&
                item.url !== "/dashboard/admin" &&
                item.url !== "/dashboard/student" &&
                item.url !== "/dashboard/instructor");

            // Overriding checking logic:
            // If item.url is /dashboard/admin, only active if pathname is exactly /dashboard/admin so that /dashboard/admin/users doesn't make Admin active
            const isStrictlyActive = pathname === item.url;
            // But if it's like /dashboard/admin/users, and we are on /dashboard/admin/users/123, it should be active.
            const isChildActive =
              pathname.startsWith(item.url + "/") &&
              item.url !== "/dashboard" &&
              item.url !== "/dashboard/admin" &&
              item.url !== "/dashboard/student" &&
              item.url !== "/dashboard/instructor";

            const isItemActive = isStrictlyActive || isChildActive;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn(
                    "text-gray-500 py-6 px-3 rounded-[10px] hover:bg-transparent hover:text-primary hover:scale-105 transition-all", // Slightly taller items, gray default
                    isItemActive && "bg-white text-black font-bold",
                  )}
                >
                  <Link href={item.url}>
                    {item.icon && (
                      <item.icon
                        className={`${isActive && "text-primary"} h-5! w-5!`}
                      />
                    )}
                    <span className="text-base">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
