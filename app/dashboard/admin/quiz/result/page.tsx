import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChevronRight } from "lucide-react";
import { QuizResultStats } from "./_components/quiz-result-stats";
import { QuizResultTable } from "./_components/quiz-result-table";
import { QuizResultList } from "./_components/quiz-result-list";

export default function AdminQuizResultPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Quiz Management"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Quiz Management <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-600 font-medium">Algebra 1</span>
          </div>
        }
      />

      {/* Stats */}
      <QuizResultStats />

      <div className="hidden lg:block w-full">
        <QuizResultTable />
      </div>
      <div className="block lg:hidden w-full">
        <QuizResultList />
      </div>
    </div>
  );
}
