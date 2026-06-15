"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { MobileDashboardFooter } from "@/components/dashboard/mobile-dashboard-footer";
import {
  LayoutTemplate,
  Video,
  Briefcase,
  BookOpen,
  MessageSquare,
  Presentation,
  ChevronRight,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StudentQuizPageHeader } from "./_components/student-quiz-page-header";
import { StudentQuizInfoAnalytics } from "./_components/student-quiz-info-analytics";
import { StudentQuizTable } from "./_components/student-quiz-table";
import { StudentQuizList } from "./_components/student-quiz-list";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";

const studentFooterNav = [
  { title: "Feed", url: "/dashboard/student", icon: LayoutTemplate },
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

export default function StudentQuizPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        <div className="px-4">
          <DashboardHeader
            title="Assessments"
            subTitle="View and manage all your assignments, quizzes, and exams in one place."
          />
        </div>
        <div className="flex flex-1 flex-col p-4 lg:p-6 pb-24 md:pb-6">
          <div className="@container/main flex flex-1 flex-col gap-6">
            <StudentQuizPageHeader />
            <StudentQuizInfoAnalytics />

            <div className="hidden lg:block w-full">
              <StudentQuizTable />
            </div>
            <div className="block lg:hidden w-full">
              <StudentQuizList />
            </div>
          </div>
        </div>

        {/* Mobile bottom navigation */}
        <MobileDashboardFooter items={studentFooterNav} maxVisible={4} />
      </SidebarInset>
    </SidebarProvider>
  );
}
