"use client";

import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { Plus } from "lucide-react";

export const AssignmentsPageHeader = () => {
  return (
    <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
      <DashboardSearch />
      <AdminDashboardButton title="Create Assignment" icon={Plus} />
    </div>
  );
};
