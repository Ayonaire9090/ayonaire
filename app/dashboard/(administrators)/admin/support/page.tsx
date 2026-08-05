import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { SupportStats } from "./_components/support-stats";
import { SupportTicketList } from "./_components/support-ticket-list";

export default function AdminSupportPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Support"
        subTitle="Track and respond to support tickets from students and instructors"
      />

      <SupportStats />
      <SupportTicketList />
    </div>
  );
}
