import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Upload } from "lucide-react";
import { AttendanceList } from "./_components/attendance-list";
import { AttendanceTable } from "./_components/attendance-table";

export default function AdminAttendanceListPage() {
  return (
    <div className="flex flex-col gap-5 pb-4 lg:pb-8">
      <DashboardHeader
        title="Attendance List"
        subTitle="Manage and monitor student attendance records"
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

        <AdminDashboardButton title="Export Attendance" icon={Upload} />
      </div>

      <AttendanceTable />
      <AttendanceList />
    </div>
  );
}
