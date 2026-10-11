"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardMobileFooterWrapper } from "@/components/dashboard/dashboard-mobile-footer-wrapper";
import { PreviewStudentRouteBridge } from "./_components/preview-student-route-bridge";

export default function PreviewStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <PreviewStudentRouteBridge />
      <div className="min-h-dvh bg-[#F6F6F6]">
        <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-[13px] text-center py-2 px-4">
          Preview mode - the real student dashboard rendered with no login
          required.
        </div>
        {children}
        <DashboardMobileFooterWrapper />
      </div>
    </SidebarProvider>
  );
}
