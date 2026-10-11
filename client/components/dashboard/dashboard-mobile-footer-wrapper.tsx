"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { dashboardData } from "@/constants";
import { MobileDashboardFooter } from "./mobile-dashboard-footer";

type NavItem = { title: string; url: string; icon: React.ElementType };

export function DashboardMobileFooterWrapper() {
  const pathname = usePathname();
  const isPreviewAdmin = pathname.includes("/preview/admin");
  const isPreviewInstructor = pathname.includes("/preview/instructor");
  const isPreviewStudent = pathname.includes("/preview/student");

  let navItems: NavItem[] = dashboardData.studentNavMain as NavItem[];
  if (pathname.includes("/dashboard/admin") || isPreviewAdmin) {
    navItems = dashboardData.adminNavMain as NavItem[];
  } else if (
    pathname.includes("/dashboard/instructor") ||
    isPreviewInstructor
  ) {
    navItems = dashboardData.instructorNavMain as NavItem[];
  }

  const items = navItems.map((item) => {
    if (isPreviewAdmin) {
      return {
        ...item,
        url: item.url.replace("/dashboard/admin", "/preview/admin"),
      };
    }
    if (isPreviewInstructor) {
      return {
        ...item,
        url: item.url.replace("/dashboard/instructor", "/preview/instructor"),
      };
    }
    if (isPreviewStudent) {
      return {
        ...item,
        url: item.url.replace("/dashboard/student", "/preview/student"),
      };
    }
    return item;
  });

  const profile = isPreviewAdmin
    ? { name: "Preview Admin", fallback: "PA", href: "/preview/admin/profile" }
    : isPreviewInstructor
      ? {
          name: "Preview Instructor",
          fallback: "PI",
          href: "/preview/instructor/profile",
        }
      : isPreviewStudent
        ? {
            name: "Preview Student",
            fallback: "PS",
            href: "/preview/student/profile",
          }
        : undefined;

  return <MobileDashboardFooter items={items} profile={profile} />;
}
