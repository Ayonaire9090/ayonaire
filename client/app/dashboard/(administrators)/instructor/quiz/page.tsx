import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorQuizHeader } from "./_components/instructor-quiz-header";
import { InstructorQuizTable } from "./_components/instructor-quiz-table";
import { InstructorQuizList } from "./_components/instructor-quiz-list";
import { InstructorAnalyticsCards } from "./_components/instructor-analytics-cards";

export default function InstrutorQuizPage() {
  return (
    <>
      <DashboardHeader
        title="Quiz Management"
        subTitle="Create, monitor, and analyze performance of your course assessments."
      />
      <InstructorQuizHeader />
      <div className="block lg:hidden">
        <InstructorAnalyticsCards />
      </div>

      <div className="hidden lg:block">
        <InstructorQuizTable />
      </div>
      <div className="block lg:hidden">
        <InstructorQuizList />
      </div>
      <div className="hidden lg:block">
        <InstructorAnalyticsCards />
      </div>
    </>
  );
}
