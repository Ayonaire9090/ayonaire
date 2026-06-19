"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StudentQuizPageHeader } from "./_components/student-quiz-page-header";
import { StudentQuizInfoAnalytics } from "./_components/student-quiz-info-analytics";
import { StudentQuizTable } from "./_components/student-quiz-table";
import { StudentQuizList } from "./_components/student-quiz-list";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";

export default function StudentQuizPage() {
  return (
    <>
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
      </SidebarInset>
    </>
  );
}
