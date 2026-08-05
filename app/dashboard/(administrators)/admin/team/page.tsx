import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InviteTeamMemberDialog } from "./_components/invite-team-member-dialog";
import { TeamMembersTable } from "./_components/team-members-table";

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <DashboardHeader
          title="Team"
          subTitle="Manage admins and instructors with platform access"
        />
        <InviteTeamMemberDialog />
      </div>

      <TeamMembersTable />
    </div>
  );
}
