import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Calendar } from "@/components/ui/calendar";
import { Plus, Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AttendanceAnalytics } from "./_components/attendance-analytics";
import { AttendanceTrendAndActions } from "./_components/attendance-trend-and-actions";
import { AttendanceActivityLogs } from "./_components/attendance-activity-logs";
import { AttendanceLiveAlerts } from "./_components/attendance-live-alerts";

export default function AdminAttendanceDashboardPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8">
      <DashboardHeader
        title="Attendance Dashboard"
        subTitle="Monitor student attendance and manage attendance records"
      />

      <div className="flex justify-between items-center mt-2">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2.5 px-4 h-11 bg-white border-0 hover:bg-gray-50 rounded-2xl text-gray-500 font-medium text-[14px] transition-colors outline-none w-fit">
              <CalendarIcon className="size-4.5 text-gray-400" />
              <span>Feb 28, 2026</span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-auto p-0 bg-white border-none rounded-xl shadow-lg"
          >
            <Calendar mode="single" />
          </PopoverContent>
        </Popover>

        <AdminDashboardButton title="Add New Log" icon={Plus} />
      </div>
      <AttendanceAnalytics />
      <AttendanceTrendAndActions />
      <AttendanceActivityLogs />
      <AttendanceLiveAlerts />
    </div>
  );
}
