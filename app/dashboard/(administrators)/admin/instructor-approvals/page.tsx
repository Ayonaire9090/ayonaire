import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorApprovalsList } from "./_components/instructor-approvals-list";

export default function AdminInstructorApprovalsPage() {
  return (
    <>
      <DashboardHeader
        title="Instructor Approvals"
        subTitle="Review and approve pending instructor applications"
      />
      <InstructorApprovalsList />
    </>
  );
}
