"use client";

import { AssignmentsInfoAnalytics } from "@/components/dashboard/assignment/assignments-info-analytics";
import { AssignmentsList } from "@/components/dashboard/assignment/assignments-list";
import { AssignmentsPageHeader } from "@/components/dashboard/assignment/assignments-page-header";
import { AssignmentsTable } from "@/components/dashboard/assignment/assignments-table";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { useGetAssignments } from "@/hooks/api/use-assignments";

export default function InstrutorAssignmentsPage() {
  const { data } = useGetAssignments();
  const assignments = data?.assignments ?? [];

  const now = Date.now();
  const active = assignments.filter(
    (a) => a.status === "published" && (!a.dueDate || new Date(a.dueDate).getTime() > now),
  ).length;
  const pastDue = assignments.filter(
    (a) => a.status === "published" && a.dueDate && new Date(a.dueDate).getTime() <= now,
  ).length;
  const totalSubmissions = assignments.reduce((sum, a) => sum + a.submissionsCount, 0);

  const stats = [
    { heading: "Total Assignments", title: String(assignments.length) },
    { heading: "Active", title: String(active) },
    { heading: "Past Due", title: String(pastDue) },
    {
      heading: "Draft",
      title: String(assignments.filter((a) => a.status === "draft").length),
    },
    { heading: "Total Submissions", title: String(totalSubmissions) },
  ];

  return (
    <>
      <DashboardHeader
        title="Assignments"
        subTitle="Manage and track your students course work "
      />
      <AssignmentsPageHeader editRoute="/dashboard/instructor/assignments/create" />
      <AssignmentsInfoAnalytics data={stats} />
      <div className="hidden lg:block w-full pb-8">
        <AssignmentsTable type="instructor" />
      </div>
      <div className="block lg:hidden w-full pb-4">
        <AssignmentsList type="instructor" />
      </div>
    </>
  );
}
