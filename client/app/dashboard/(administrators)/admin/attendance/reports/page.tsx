import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { ChevronRight, Upload } from "lucide-react";
import { AttendanceReportsFilters } from "./_components/attendance-reports-filters";
import { AttendanceReportsStats } from "./_components/attendance-reports-stats";
import { AttendanceReportsTable } from "./_components/attendance-reports-table";
import { AttendanceReportsList } from "./_components/attendance-reports-list";
import { AttendanceReportsProvider } from "./_components/attendance-reports-context";

export default function AdminAttendanceReportsPage() {
  return (
    <div className="flex flex-col gap-5 pb-4 lg:pb-8">
      <DashboardHeader
        title="Attendance Reports"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">Attendance Report</span>
          </div>
        }
      />
      <div className="w-full flex justify-between items-start">
        <DashboardSearch />
        <AdminDashboardButton title="Export Reports" icon={Upload} />
      </div>
      <AttendanceReportsProvider>
        {/* Filters */}
        <AttendanceReportsFilters />
        {/* Stats */}
        <AttendanceReportsStats />
        {/* Real Data Views */}
        <AttendanceReportsTable />
        <AttendanceReportsList />
      </AttendanceReportsProvider>
    </div>
  );
}
