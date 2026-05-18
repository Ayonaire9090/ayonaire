import { AppHeading } from "@/components/app-heading";
import {
  CourseWaitlistDataTable,
  CourseWaitlistEntry,
} from "@/components/dashboard/course-waitlist-data-table";
import {
  WaitlistDataTable,
  type WaitlistEntry,
} from "@/components/dashboard/waitlist-data-table";
import { headers } from "next/headers";

async function getCourseWaitlistData(): Promise<CourseWaitlistEntry[]> {
  try {
    // Get the host from headers for server-side fetching
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

    const res = await fetch(
      `${protocol}://${host}/api/dashboard/course-waitlists`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch waitlist data");
    }

    const result = await res.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return [];
  }
}

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
  const courseWaitlistData = await getCourseWaitlistData();

  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex flex-col gap-6 pb-6">
        <div className="">
          <AppHeading
            title="Course Waitlist"
            description="View and manage users who have joined the course waitlist."
            headingLevel="h2"
            className="text-2xl md:text-3xl"
            descriptionClassName="text-sm pt-2"
          />
        </div>
        <CourseWaitlistDataTable data={courseWaitlistData} />
      </div>

      <div className="flex flex-col gap-6 py-6">
        <div className="">
          <AppHeading
            title="Community Waitlist"
            description="View and manage users who have joined the community waitlist."
            headingLevel="h2"
            className="text-2xl md:text-3xl"
            descriptionClassName="text-sm pt-2"
          />
        </div>
        <WaitlistDataTable data={waitlistData} />
      </div>
    </div>
  );
}
