"use client";
import { AuthGuard } from "@/components/auth/auth-guard";
import { MobileDashboardFooter } from "@/components/dashboard/mobile-dashboard-footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { studentFooterNav } from "./_data/student-footer-nav";
import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard allowedRoles={["admin", "student"]} loadingFallback={<div className="mx-auto w-full max-w-6xl p-6"><StudentLoadingSkeleton variant="cards" /></div>}>
      <SidebarProvider defaultOpen={true}>
        {children}
        {/* Mobile bottom navigation */}
        <MobileDashboardFooter items={studentFooterNav} maxVisible={5} />
      </SidebarProvider>
    </AuthGuard>
  );
}
