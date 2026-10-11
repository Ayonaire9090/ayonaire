"use client";

import { useState } from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StudentQuizPageHeader } from "./_components/student-quiz-page-header";
import { StudentQuizInfoAnalytics } from "./_components/student-quiz-info-analytics";
import { StudentQuizTable } from "./_components/student-quiz-table";
import { StudentQuizList } from "./_components/student-quiz-list";
import { StudentAssignmentTable } from "../assignments/_components/student-assignment-table";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";

type Tab = "quizzes" | "assignments";

export default function StudentQuizPage() {
  const [tab, setTab] = useState<Tab>("quizzes");

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

            {/* Tab Switcher */}
            <div className="flex items-center gap-2 bg-white w-fit p-1 rounded-lg border border-gray-100">
              <button
                onClick={() => setTab("quizzes")}
                className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors ${
                  tab === "quizzes" ? "bg-[#F97316] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Quizzes
              </button>
              <button
                onClick={() => setTab("assignments")}
                className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors ${
                  tab === "assignments" ? "bg-[#F97316] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Assignments
              </button>
            </div>

            {tab === "quizzes" ? (
              <>
                <StudentQuizInfoAnalytics />
                <div className="hidden lg:block w-full">
                  <StudentQuizTable />
                </div>
                <div className="block lg:hidden w-full">
                  <StudentQuizList />
                </div>
              </>
            ) : (
              <StudentAssignmentTable />
            )}
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
