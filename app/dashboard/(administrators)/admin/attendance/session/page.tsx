import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { ChevronRight, Plus } from "lucide-react";
import { AttendanceSessionViewStats } from "./_components/attendance-session-stats";
import { AttendanceSessionTable } from "./_components/attendance-session-table";
import { AttendanceSessionList } from "./_components/attendance-session-list";
import { AttendanceSessionProvider } from "./_components/attendance-session-context";

export default function AdminAttendanceSessionPage() {
  return (
    <div className="flex flex-col gap-5 pb-4 lg:pb-8">
      <DashboardHeader
        title="Session Attendance View"
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Attendance Management <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Class <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">Session</span>
          </div>
        }
      />
      <div className="w-full flex justify-between items-start">
        <DashboardSearch />
        <AdminDashboardButton title="Add New Log" icon={Plus} />
      </div>
      <AttendanceSessionViewStats />
      <AttendanceSessionProvider>
        <AttendanceSessionTable />
        <AttendanceSessionList />
      </AttendanceSessionProvider>
    </div>
  );
}
