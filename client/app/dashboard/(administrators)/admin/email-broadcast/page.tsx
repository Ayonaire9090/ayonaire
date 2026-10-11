import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { EmailBroadcastComposer } from "./_components/email-broadcast-composer";
import { EmailBroadcastHistory } from "./_components/email-broadcast-history";

export default function AdminEmailBroadcastPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Email Broadcast"
        subTitle="Send one-off email announcements to students, instructors, or everyone"
      />

      <EmailBroadcastComposer />
      <EmailBroadcastHistory />
    </div>
  );
}
