import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { ChevronRight, Plus } from "lucide-react";
import { AttendanceViewStats } from "./_components/attendance-view-stats";
import { AttendanceViewTable } from "./_components/attendance-view-table";
import { AttendanceViewList } from "./_components/attendance-view-List";

export default function AdminClassAttendanceView() {
  return (
    <div className="flex flex-col gap-5 pb-4 lg:pb-8">
      <DashboardHeader
        title="Class Attendance View"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Attendance Management <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">Class View</span>
          </div>
        }
      />
      <div className="w-full flex justify-between items-start">
        <DashboardSearch />
        <AdminDashboardButton title="Add New Log" icon={Plus} />
      </div>
      {/* Stats */}
      <AttendanceViewStats />
      <AttendanceViewTable />
      <AttendanceViewList />
    </div>
  );
}
