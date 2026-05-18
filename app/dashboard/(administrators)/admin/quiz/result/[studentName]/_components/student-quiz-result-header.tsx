"use client";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export const StudentQuizResultHeader = () => {
  return (
    <div className="w-full flex justify-between items-start gap-3">
      <DashboardSearch />
      <div className="flex items-center gap-3">
        <Button
          onClick={() => alert("Implement Result Printing")}
          variant="outline"
          className={`py-5! flex items-center cursor-pointer justify-center gap-2 
                rounded-lg bg-white 
                text-gray-500 focus:outline-0! shadow-0`}
        >
          Print Result
        </Button>
        <AdminDashboardButton title="Export Result" icon={Upload} />
      </div>
    </div>
  );
};
