import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { AnnouncementsTable } from "./_components/announcements-table";
import { AnnouncementsList } from "./_components/announcements-list";

const mockSummaryData = [
  { title: "All", number: "44" },
  { title: "Published", number: "20" },
  { title: "Draft", number: "1" },
  { title: "Scheduled", number: "3" },
];

export default async function AdminAnnouncementsPage() {
  return (
    <>
      <DashboardHeader
        title="Announcements"
        subTitle="Manage and broadcast your announcements"
      />

      <StatsSummary data={mockSummaryData} />

      {/* For Desktop */}
      <AnnouncementsTable />

      {/* For Mobile */}
      <AnnouncementsList />
    </>
  );
}
