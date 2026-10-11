"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CalendarDays } from "lucide-react";

export default function InstructorJobSessionsPage() {
  return (
    <>
      <DashboardHeader
        title="Job Fair Sessions"
        subTitle="Upcoming job fair sessions will appear here."
      />
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 bg-white p-8 text-center">
        <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#F86432]/10 text-[#F86432]">
          <CalendarDays className="size-7" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">
          No job fair sessions scheduled
        </h2>
        <p className="mt-2 max-w-md text-sm text-gray-500">
          Sessions created for instructors will show here as soon as they are available.
        </p>
      </div>
    </>
  );
}
