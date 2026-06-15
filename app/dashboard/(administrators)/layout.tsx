"use client";
import { AuthGuard } from "@/components/auth/auth-guard";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { DashboardMobileFooterWrapper } from "@/components/dashboard/dashboard-mobile-footer-wrapper";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is just a Quick Fix and Temporary. We can later move the pasdiings to their
  // Individual oages, which is the industry-standard approach.
  const pagesWithNoMobilePadding = [
    "/dashboard/admin/profile",
    "/dashboard/student/profile",
    "/dashboard/instructor/profile",
    "/dashboard/admin/profile/edit",
    "/dashboard/student/profile/edit",
    "/dashboard/instructor/profile/edit",
  ];
  const pathname = usePathname();
  const noPadding = pagesWithNoMobilePadding.includes(pathname);

  const getAllowedRoles = () => {
    if (pathname.includes("/dashboard/admin")) {
      return ["admin"];
    } else if (pathname.includes("/dashboard/instructor")) {
      return ["admin", "instructor"];
    }
  };
  return (
    <AuthGuard allowedRoles={getAllowedRoles()}>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6]">
          <div
            className={`flex flex-1 flex-col pb-20 md:pb-0 ${noPadding ? "px-0 lg:px-6" : "px-4 lg:px-6"}`}
          >
            <div className="@container/main flex flex-1 flex-col gap-6">
              {children}
            </div>
          </div>
          {/* Mobile bottom navigation */}
          <DashboardMobileFooterWrapper />
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  );
}
