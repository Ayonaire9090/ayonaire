"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { StudentFeedSidebarContent } from "../_components/student-feed-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { WorkshopDateFilter } from "./_components/workshop-date-filter";
import { WorkshopSchedule } from "./_components/workshop-schedule";
import { WorkshopCalendar } from "./_components/workshop-calendar";
import { WorkshopHistory } from "./_components/workshop-history";
import { useGetWorkshops } from "@/hooks/api/use-workshops";
import {
  groupWorkshopsByDate,
  isWithinDateRange,
  mapWorkshopRecordToStudentWorkshop,
} from "./_components/workshop-data";

export default function StudentWorkshopPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming",
  );
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    undefined,
  );

  const { data, isLoading, isError } = useGetWorkshops(1, 100);

  const workshops = useMemo(
    () => (data?.data?.workshops ?? []).map(mapWorkshopRecordToStudentWorkshop),
    [data],
  );

  const filteredWorkshops = useMemo(
    () => workshops.filter((w) => isWithinDateRange(w, dateRange)),
    [workshops, dateRange],
  );

  const todayWorkshops = useMemo(
    () =>
      filteredWorkshops
        .filter((w) => w.status === "upcoming" && w.label === "Today")
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime()),
    [filteredWorkshops],
  );

  const upcomingWorkshops = useMemo(
    () =>
      filteredWorkshops
        .filter((w) => w.status === "upcoming")
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime()),
    [filteredWorkshops],
  );

  const historyGroups = useMemo(() => {
    const completed = filteredWorkshops
      .filter((w) => w.status === "completed")
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    return groupWorkshopsByDate(completed);
  }, [filteredWorkshops]);

  return (
    <>
      <StudentFeedSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />

        <div className="lg:bg-white flex flex-1 flex-col lg:my-6 lg:rounded-3xl lg:p-8 lg:min-w-4xl lg:mx-auto pb-24">
          {/* Header Title */}
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 p-4 lg:p-0">
            Workshops
          </h1>

          <div className="flex flex-col gap-5">
            {/* Tabs */}
            <div className="grid grid-cols-2 lg:flex items-start bg-white lg:bg-[#F6F6F6] lg:border lg:border-gray-200 rounded-xl p-1 w-[95%] mx-auto lg:mx-0 lg:w-fit shadow-sm lg:shadow-none">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "upcoming"
                    ? "bg-[#F86432] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "completed"
                    ? "bg-[#F86432] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                }`}
              >
                Completed
              </button>
            </div>

            <div className="mt-2">
              <WorkshopDateFilter date={dateRange} onDateChange={setDateRange} />
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : isError ? (
              <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
                Failed to load workshops. Please try again.
              </div>
            ) : (
              <>
                {activeTab === "upcoming" && (
                  <div className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-6">
                    {/* Top Schedule Cards */}
                    <WorkshopSchedule workshops={todayWorkshops} />

                    {/* Bottom Calendar Cards */}
                    <div className="mt-2">
                      <h2 className="text-lg font-bold text-gray-900 mb-4 bg-white lg:bg-transparent px-4 lg:px-0">
                        Upcoming workshops
                      </h2>
                      <WorkshopCalendar workshops={upcomingWorkshops} />
                    </div>
                  </div>
                )}

                {activeTab === "completed" && (
                  <div className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-6 lg:max-w-4xl">
                    <WorkshopHistory groups={historyGroups} />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
