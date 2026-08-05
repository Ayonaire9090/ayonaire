"use client";

// Auth-free preview of the ADMIN dashboard so it can be reviewed without
// real admin credentials. Reuses the real page components as-is (none of
// them touch the auth store directly - only React Query hooks), wrapped in
// a dedicated QueryClient pre-seeded with realistic sample data at the
// exact query keys those hooks use, so reads resolve instantly with no
// live backend call. Create/edit/delete buttons are NOT intercepted - they
// still hit the real API and fail with the normal error toast, since
// there's no backend session behind this preview. Safe to delete before
// launch.

import { useState } from "react";
import { usePathname } from "next/navigation";
import { QueryClientProvider } from "@tanstack/react-query";
import { PreviewAdminSidebar } from "./_components/preview-admin-sidebar";
import { DashboardMobileFooterWrapper } from "@/components/dashboard/dashboard-mobile-footer-wrapper";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { createSeededAdminQueryClient } from "./_seed/seed-query-client";

export default function PreviewAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noPadding = pathname.includes("/profile");
  const [queryClient] = useState(() => createSeededAdminQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider defaultOpen={false}>
        <PreviewAdminSidebar variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6]">
          <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-[13px] text-center py-2 px-4">
            Preview mode — the real admin dashboard rendered with sample
            data, no login required. Create/edit/delete actions will show a
            normal error since there&apos;s no backend behind this preview.
          </div>
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
    </QueryClientProvider>
  );
}
