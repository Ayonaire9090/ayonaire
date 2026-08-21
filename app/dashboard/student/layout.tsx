"use client";
import { AuthGuard } from "@/components/auth/auth-guard";
import { MobileDashboardFooter } from "@/components/dashboard/mobile-dashboard-footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { studentFooterNav } from "./_data/student-footer-nav";
export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard allowedRoles={["admin", "student"]}>
      <SidebarProvider defaultOpen={false}>
        {children}
        {/* Mobile bottom navigation */}
        <MobileDashboardFooter items={studentFooterNav} maxVisible={5} />
      </SidebarProvider>
    </AuthGuard>
  );
}
