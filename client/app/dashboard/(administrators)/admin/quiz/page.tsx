import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { QuizPageHeader } from "./_components/quiz-page-header";
import { QuizInfoAnalytics } from "./_components/quiz-info-analytics";
import { QuizTable } from "./_components/quiz-table";
import { QuizList } from "./_components/quiz-list";
import { ChevronRight } from "lucide-react";

export default function AdminQuizPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Quiz Management"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">Quiz</span>
          </div>
        }
      />

      <QuizPageHeader />
      <QuizInfoAnalytics />

      <div className="hidden lg:block w-full">
        <QuizTable />
      </div>
      <div className="block lg:hidden w-full">
        <QuizList />
      </div>
    </div>
  );
}
