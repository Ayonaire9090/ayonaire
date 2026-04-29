import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChevronRight } from "lucide-react";
import { GradingPageContent } from "./_components/grading-page-content";

export default function AdminAssignmentsGradingPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Grading"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Attendance Management <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Class <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">Session</span>
          </div>
        }
      />
      <GradingPageContent />
    </div>
  );
}
