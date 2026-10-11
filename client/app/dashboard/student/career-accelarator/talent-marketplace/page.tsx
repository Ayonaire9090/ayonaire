"use client";

import { useState } from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import { CareerAcceleratorSidebarContent } from "../_components/career-accelerator-sidebar-content";
import { StudentDashboardHeader } from "../../_components/student-dashboard-header";
import { CareerJobList } from "../_components/career-job-list";
import { useBrowseMarketplace } from "@/hooks/api/use-career";

export default function StudentTalentMarketplacePage() {
  const [keywords, setKeywords] = useState("");
  const { data, isLoading, isError } = useBrowseMarketplace({ keywords });

  return (
    <>
      <CareerAcceleratorSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />

        <div className="lg:bg-white flex flex-1 flex-col lg:my-6 lg:rounded-3xl lg:p-8 lg:min-w-4xl lg:mx-auto pb-24">
          <div className="p-4 lg:p-0 mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Talent Marketplace
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Browse freelance and job opportunities from the talent marketplace.
            </p>
          </div>

          <div className="px-4 lg:px-0">
            <CareerJobList
              jobs={data?.data ?? []}
              isLoading={isLoading}
              isError={isError}
              onSearch={setKeywords}
              emptyMessage="No marketplace listings found. Try a different search."
            />
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
