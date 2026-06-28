import { AssignmentsInfoAnalytics } from "@/components/dashboard/assignment/assignments-info-analytics";
import { AssignmentsInfoAnalyticsCardProps } from "@/components/dashboard/assignment/assignments-info-analytics-card";
import { AssignmentsList } from "@/components/dashboard/assignment/assignments-list";
import { AssignmentsPageHeader } from "@/components/dashboard/assignment/assignments-page-header";
import { AssignmentsTable } from "@/components/dashboard/assignment/assignments-table";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

const STATS_MOCK_DATA: AssignmentsInfoAnalyticsCardProps[] = [
  {
    heading: "Total Assigments",
    title: "48",
    footerContent: (
      <span>
        <h4 className="text-[13px] font-medium text-green-500">
          +2% from last month
        </h4>
      </span>
    ),
  },
  {
    heading: "Active",
    title: "12",
    footerContent: (
      <span>
        <h4 className="text-[13px] font-medium text-gray-500">
          Currently accepting submissions
        </h4>
      </span>
    ),
  },
  {
    heading: "Past Due",
    title: "3",
    footerContent: (
      <span>
        <h4 className="text-[13px] font-medium text-rose-500">
          Required grading
        </h4>
      </span>
    ),
  },
  {
    heading: "Draft",
    title: "5",
    footerContent: (
      <span>
        <h4 className="text-[13px] font-medium text-gray-500">
          Not visible to students
        </h4>
      </span>
    ),
  },
  {
    heading: "Submitted",
    title: "95",
    footerContent: (
      <span>
        <h4 className="text-[13px] font-medium text-rose-400">79%</h4>
      </span>
    ),
  },
  {
    heading: "Graded",
    title: "65",
    footerContent: (
      <span>
        <h4 className="text-[13px] font-medium text-rose-400">From 95</h4>
      </span>
    ),
  },
  {
    heading: "Pending",
    title: "30",
    footerContent: (
      <span>
        <h4 className="text-[13px] font-medium text-primary">From 95</h4>
      </span>
    ),
  },
];

export default function InstrutorAssignmentsPage() {
  return (
    <>
      <DashboardHeader
        title="Assignments"
        subTitle="Manage and track your students course work "
      />
      <AssignmentsPageHeader editRoute="/dashboard/instructor/assignments/create" />
      <AssignmentsInfoAnalytics data={STATS_MOCK_DATA} />
      <div className="hidden lg:block w-full pb-8">
        <AssignmentsTable type="instructor" />
      </div>
      <div className="block lg:hidden w-full pb-4">
        <AssignmentsList type="instructor" />
      </div>
    </>
  );
}
