import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardMobileFooterWrapper } from "@/components/dashboard/dashboard-mobile-footer-wrapper";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar variant="sidebar" />
      <SidebarInset className="bg-[#F6F6F6]">
        {/* Header – responsive (handles mobile/desktop internally) */}
        <DashboardHeader />
        <div className="flex flex-1 flex-col px-4 lg:px-6 pb-20 md:pb-0">
          <div className="@container/main flex flex-1 flex-col gap-6">
            {children}
          </div>
        </div>
        {/* Mobile bottom navigation */}
        <DashboardMobileFooterWrapper />
      </SidebarInset>
    </SidebarProvider>
  );
}
