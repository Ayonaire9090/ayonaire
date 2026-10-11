"use client";

import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export const StudentQuizPageHeader = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
      <DashboardSearch />
    </div>
  );
};
