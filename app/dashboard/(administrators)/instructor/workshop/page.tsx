"use client";

import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { useGetWorkshops } from "@/hooks/api/use-workshops";
import { WorkshopDateFilter } from "@/app/dashboard/student/workshop/_components/workshop-date-filter";
import { WorkshopSchedule } from "@/app/dashboard/student/workshop/_components/workshop-schedule";
import { WorkshopCalendar } from "@/app/dashboard/student/workshop/_components/workshop-calendar";
import { WorkshopHistory } from "@/app/dashboard/student/workshop/_components/workshop-history";
import {
  groupWorkshopsByDate,
  isWithinDateRange,
  mapWorkshopRecordToStudentWorkshop,
} from "@/app/dashboard/student/workshop/_components/workshop-data";

export default function InstructorWorkshopPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming",
  );
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const { data, isLoading, isError } = useGetWorkshops(1, 100);

  const workshops = useMemo(
    () => (data?.data?.workshops ?? []).map(mapWorkshopRecordToStudentWorkshop),
    [data],
  );

  const filteredWorkshops = useMemo(
    () => workshops.filter((workshop) => isWithinDateRange(workshop, dateRange)),
    [workshops, dateRange],
  );

  const todayWorkshops = useMemo(
    () =>
      filteredWorkshops
        .filter((workshop) => workshop.status === "upcoming" && workshop.label === "Today")
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime()),
    [filteredWorkshops],
  );

  const upcomingWorkshops = useMemo(
    () =>
      filteredWorkshops
        .filter((workshop) => workshop.status === "upcoming")
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime()),
    [filteredWorkshops],
  );

  const historyGroups = useMemo(() => {
    const completed = filteredWorkshops
      .filter((workshop) => workshop.status === "completed")
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    return groupWorkshopsByDate(completed);
  }, [filteredWorkshops]);

  return (
    <>
      <DashboardHeader
        title="Workshops"
        subTitle="Manage upcoming and completed workshop sessions."
      />

      <div className="flex flex-col gap-5 rounded-lg bg-white p-4 lg:p-8">
        <div className="grid w-full grid-cols-2 items-start rounded-lg border border-gray-200 bg-[#F6F6F6] p-1 shadow-sm sm:w-fit sm:flex">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
              activeTab === "upcoming"
                ? "bg-[#F86432] text-white shadow-sm"
                : "text-gray-500 hover:bg-gray-100/50 hover:text-gray-700"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
              activeTab === "completed"
                ? "bg-[#F86432] text-white shadow-sm"
                : "text-gray-500 hover:bg-gray-100/50 hover:text-gray-700"
            }`}
          >
            Completed
          </button>
        </div>

        <WorkshopDateFilter date={dateRange} onDateChange={setDateRange} />

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
            Failed to load workshops. Please try again.
          </div>
        ) : activeTab === "upcoming" ? (
          <div className="mt-4 flex flex-col gap-8">
            <WorkshopSchedule workshops={todayWorkshops} />
            <div>
              <h2 className="mb-4 text-lg font-bold text-gray-900">
                Upcoming workshops
              </h2>
              <WorkshopCalendar workshops={upcomingWorkshops} />
            </div>
          </div>
        ) : (
          <div className="mt-4 max-w-4xl">
            <WorkshopHistory groups={historyGroups} />
          </div>
        )}
      </div>
    </>
  );
}
