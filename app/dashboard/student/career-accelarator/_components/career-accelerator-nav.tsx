"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export interface CareerAcceleratorNavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export function CareerAcceleratorNav({
  items,
}: {
  items: CareerAcceleratorNavItem[];
}) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="gap-1">
          {items.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn(
                    "text-gray-500 py-5 px-3 rounded-[10px] hover:bg-transparent hover:text-primary transition-all",
                    isActive && "bg-white text-black font-bold",
                  )}
                >
                  <Link href={item.url}>
                    <item.icon
                      className={cn(
                        isCollapsed ? "h-6 w-6 shrink-0" : "h-5 w-5",
                        isActive && "text-primary",
                      )}
                    />
                    <span className={cn("text-sm", isActive && "text-primary")}>
                      {item.title}
                    </span>
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
