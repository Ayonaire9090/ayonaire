import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AnnouncementsTable } from "./_components/announcements-table";
import { AnnouncementsList } from "./_components/announcements-list";
import { AnnouncementsSummary } from "./_components/announcements-summary";

export default function AdminAnnouncementsPage() {
  return (
    <>
      <DashboardHeader
        title="Announcements"
        subTitle="Manage and broadcast your announcements"
      />

      <AnnouncementsSummary />

      {/* For Desktop */}
      <AnnouncementsTable />

      {/* For Mobile */}
      <AnnouncementsList />
    </>
  );
}
