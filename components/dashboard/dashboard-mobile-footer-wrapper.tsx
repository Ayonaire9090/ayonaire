"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { dashboardData } from "@/constants";
import { MobileDashboardFooter } from "./mobile-dashboard-footer";

/** Shared shape that all three icon libraries satisfy at runtime. */
type NavItem = { title: string; url: string; icon: React.ElementType };

/**
 * Thin client-side wrapper that resolves the correct nav items
 * based on the current pathname and passes them to the reusable
 * MobileDashboardFooter component.
 */
export function DashboardMobileFooterWrapper() {
  const pathname = usePathname();

  // Pick the right nav set — same logic as AppSidebar
  let navItems: NavItem[] = dashboardData.studentNavMain as NavItem[];
  if (pathname.includes("/dashboard/admin")) {
    navItems = dashboardData.adminNavMain as NavItem[];
  } else if (pathname.includes("/dashboard/instructor")) {
    navItems = dashboardData.instructorNavMain as NavItem[];
  }

  return <MobileDashboardFooter items={navItems} />;
}
