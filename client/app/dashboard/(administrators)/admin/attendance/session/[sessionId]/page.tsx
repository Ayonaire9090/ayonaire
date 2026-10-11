"use client";

import { useParams } from "next/navigation";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { ChevronRight, Plus } from "lucide-react";
import { toast } from "sonner";
import { AttendanceSessionViewStats } from "../_components/attendance-session-stats";
import { AttendanceSessionTable } from "../_components/attendance-session-table";
import { AttendanceSessionList } from "../_components/attendance-session-list";
import { AttendanceSessionProvider } from "../_components/attendance-session-context";
import { mapSessionRecordsToAttendanceData } from "../_components/attendance-session-data";
import { useGetAttendanceSessionById } from "@/hooks/api/use-attendance";

export default function AdminAttendanceSessionPage() {
  const params = useParams<{ sessionId: string }>();
  const sessionId = params.sessionId;
  const { data, isLoading, isError } = useGetAttendanceSessionById(sessionId);
  const session = data?.data;
  const records = session ? mapSessionRecordsToAttendanceData(session.records) : [];

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
        <AdminDashboardButton
          title="Add New Log"
          icon={Plus}
          onClick={() =>
            toast.info(
              "Manually adding a roster entry isn't available yet - needs a backend endpoint.",
            )
          }
        />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError || !session ? (
        <div className="bg-white rounded-2xl p-8 text-center text-sm text-red-500">
          Couldn&apos;t load this attendance session. It may not exist.
        </div>
      ) : (
        <>
          <AttendanceSessionViewStats session={session} />
          <AttendanceSessionProvider records={records}>
            <AttendanceSessionTable />
            <AttendanceSessionList />
          </AttendanceSessionProvider>
        </>
      )}
    </div>
  );
}
