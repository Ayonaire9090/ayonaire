"use client";
import { AuthGuard } from "@/components/auth/auth-guard";
import { MobileDashboardFooter } from "@/components/dashboard/mobile-dashboard-footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  LayoutTemplate,
  Video,
  Briefcase,
  BookOpen,
  MessageSquare,
  Presentation,
} from "lucide-react";

const studentFooterNav = [
  { title: "Feed", url: "/dashboard/student/feed", icon: LayoutTemplate },
  { title: "Workshop", url: "/dashboard/student/workshop", icon: Video },
  {
    title: "Job Fair",
    url: "/dashboard/student/job-sessions",
    icon: Briefcase,
  },
  { title: "Courses", url: "/dashboard/student/courses", icon: BookOpen },
  {
    title: "Messages",
    url: "/dashboard/student/messages",
    icon: MessageSquare,
  },
  {
    title: "Career",
    url: "/dashboard/student/career-accelarator",
    icon: Presentation,
  },
];
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
