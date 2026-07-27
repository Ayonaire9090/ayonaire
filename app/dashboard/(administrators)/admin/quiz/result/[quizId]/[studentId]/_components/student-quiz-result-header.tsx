"use client";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import { QuizRecord } from "@/lib/api/endpoints/quiz";
import { downloadCsv } from "@/lib/export-csv";
import {
  QuizAttempt,
  formatSubmittedOn,
  getPercentage,
  PASS_MARK_PERCENT,
} from "../../_components/quiz-result-data";

interface StudentQuizResultHeaderProps {
  attempt?: QuizAttempt;
  quiz?: QuizRecord;
}

export const StudentQuizResultHeader = ({
  attempt,
  quiz,
}: StudentQuizResultHeaderProps) => {
  const handleExport = () => {
    if (!attempt) {
      toast.error("No result loaded to export yet.");
      return;
    }
    const pct = getPercentage(attempt.score, quiz?.totalPoints);
    downloadCsv(
      `${attempt.student.name}-${quiz?.title ?? "quiz"}-result`,
      ["Student Name", "Email", "Quiz", "Course", "Score", "Percentage", "Status", "Submitted On"],
      [
        [
          attempt.student.name,
          attempt.student.email ?? "-",
          quiz?.title ?? "-",
          quiz?.course?.title ?? "-",
          quiz?.totalPoints
            ? `${attempt.score} / ${quiz.totalPoints}`
            : attempt.score,
          pct === null ? "-" : `${pct}%`,
          !attempt.completed
            ? "Pending"
            : pct === null
              ? "Graded"
              : pct >= PASS_MARK_PERCENT
                ? "Passed"
                : "Failed",
          formatSubmittedOn(attempt.submittedAt),
        ],
      ],
    );
  };

  return (
    <div className="w-full flex justify-between items-start gap-3 print:hidden">
      <DashboardSearch />
      <div className="flex items-center gap-3">
        <Button
          onClick={() => window.print()}
          variant="outline"
          className={`py-5! flex items-center cursor-pointer justify-center gap-2
                rounded-lg bg-white
                text-gray-500 focus:outline-0! shadow-0`}
        >
          Print Result
        </Button>
        <AdminDashboardButton
          onClick={handleExport}
          title="Export Result"
          icon={Upload}
        />
      </div>
    </div>
  );
};
