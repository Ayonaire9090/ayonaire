import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChevronRight } from "lucide-react";
import { StudentQuizResultStats } from "./_components/student-quiz-result-stats";
import { StudentQuizResultHeader } from "./_components/student-quiz-result-header";
import { StudentQuizResultAnswerReview } from "./_components/student-quiz-result-answer-review";

interface StudentQuizResultProps {
  params: Promise<{
    studentName: string;
  }>;
}
export default async function AdminStudentQuizResultPage({
  params,
}: StudentQuizResultProps) {
  const { studentName } = await params;
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
            <span className="flex items-center gap-1 text-gray-500">
              Algebra 1 <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-600 font-medium">{studentName}</span>
          </div>
        }
      />
      {/* Header */}
      <StudentQuizResultHeader />
      {/* Stats */}
      <StudentQuizResultStats />
      <StudentQuizResultAnswerReview />
    </div>
  );
}
