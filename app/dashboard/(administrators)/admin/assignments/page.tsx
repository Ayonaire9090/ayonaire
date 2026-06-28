import { AssignmentsInfoAnalytics } from "@/components/dashboard/assignment/assignments-info-analytics";
import { AssignmentsList } from "@/components/dashboard/assignment/assignments-list";
import { AssignmentsPageHeader } from "@/components/dashboard/assignment/assignments-page-header";
import { AssignmentsTable } from "@/components/dashboard/assignment/assignments-table";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChevronRight } from "lucide-react";

export default function AdminAssignmentsPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Assignments Dashboard"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">Assignments</span>
          </div>
        }
      />

      <AssignmentsPageHeader />
      <AssignmentsInfoAnalytics />

      <div className="hidden lg:block w-full">
        <AssignmentsTable />
      </div>
      <div className="block lg:hidden w-full">
        <AssignmentsList />
      </div>
    </div>
  );
}
