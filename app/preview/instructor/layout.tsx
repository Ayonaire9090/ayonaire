"use client";

// Auth-free preview of the INSTRUCTOR dashboard so it can be reviewed without
// real instructor credentials. Same approach as app/preview/admin/layout.tsx.
// Unlike the admin preview, no seeded QueryClient is needed here yet - only
// pages with zero React Query hooks (e.g. analytics-reporting, which is
// currently fully static mock UI) are wired up under this route so far.
// Add seeding here if a page with real data hooks gets added to this preview.

import { usePathname } from "next/navigation";
import { PreviewInstructorSidebar } from "./_components/preview-instructor-sidebar";
import { PreviewInstructorRouteBridge } from "./_components/preview-instructor-route-bridge";
import { DashboardMobileFooterWrapper } from "@/components/dashboard/dashboard-mobile-footer-wrapper";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function PreviewInstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noPadding = pathname.includes("/profile");

  return (
    <SidebarProvider defaultOpen={false}>
      <PreviewInstructorRouteBridge />
      <PreviewInstructorSidebar variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-[13px] text-center py-2 px-4">
          Preview mode — the real instructor dashboard rendered with no login
          required.
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
  );
}
