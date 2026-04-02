import { AppHeading } from "@/components/app-heading";
import {
  WaitlistDataTable,
  type WaitlistEntry,
} from "@/components/dashboard/waitlist-data-table";
import { headers } from "next/headers";

async function getWaitlistData(): Promise<WaitlistEntry[]> {
  try {
    // Get the host from headers for server-side fetching
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

    const res = await fetch(`${protocol}://${host}/api/dashboard/waitlist`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch waitlist data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return [];
  }
}

export default async function DashboardWaitlist() {
  const waitlistData = await getWaitlistData();

  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="px-4 lg:px-6">
        <AppHeading
          title="Community Waitlist"
          description="View and manage users who have joined the waitlist."
          headingLevel="h2"
          className="text-2xl md:text-3xl"
          descriptionClassName="text-sm pt-2"
        />
      </div>
      <WaitlistDataTable data={waitlistData} />
    </div>
  );
}
