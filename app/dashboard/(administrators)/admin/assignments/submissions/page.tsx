import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChevronRight } from "lucide-react";
import { AssignmentsSubmissionsFilters } from "./_components/assignments-submissions-filters";
import { AssignmentsSubmissionsStats } from "./_components/assignments-submissions-stats";
import { AssignmentsSubmissionsTable } from "./_components/assignments-submissions-table";
import { AssignmentsSubmissionsList } from "./_components/assignments-submissions-list";

export default function AdminAssignmentsSubmissionsPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Assignment Submissions"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Assignment Management <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Create Assignment <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-900 font-medium">Submissions</span>
          </div>
        }
      />

      <AssignmentsSubmissionsStats />

      {/* Desktop View */}
      <div className="hidden xl:flex flex-col w-full bg-white p-6 rounded-[16px] shadow-sm mt-4">
        <AssignmentsSubmissionsFilters />
        <div className="mt-4">
          <AssignmentsSubmissionsTable />
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="flex flex-col xl:hidden w-full gap-4 mt-2">
        <AssignmentsSubmissionsFilters />
        <AssignmentsSubmissionsList />
      </div>
    </div>
  );
}
