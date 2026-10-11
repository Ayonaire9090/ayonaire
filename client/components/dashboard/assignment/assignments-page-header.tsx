"use client";

import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface AssignmentsPageHeaderProps {
  editRoute?: string;
  title?: string;
  placeholder?: string;
}
export const AssignmentsPageHeader = ({
  editRoute = "/dashboard/admin/assignments/create",
  title = "Create Assignment",
  placeholder = "Search assignments...",
}: AssignmentsPageHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
      <DashboardSearch placeholder={placeholder} />
      <AdminDashboardButton
        onClick={() => router.push(editRoute)}
        title={title}
        icon={Plus}
      />
    </div>
  );
};
