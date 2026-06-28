import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorAssignmentsForm } from "./_components/instructor-assignments-form";
import { ChevronRight } from "lucide-react";

export default function InstructorCreateAssignment() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 pb-10">
      <DashboardHeader
        title="Create Assignment"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Assignments <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-900 font-medium">Create</span>
          </div>
        }
      />

      <InstructorAssignmentsForm />
    </div>
  );
}
