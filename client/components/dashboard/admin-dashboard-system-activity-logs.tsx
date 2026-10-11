"use client";

import { useMemo } from "react";
import {
  History,
  Filter,
  CheckCircle2,
  GraduationCap,
  UserCog,
  LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { useGetAllPayments } from "@/hooks/api/use-payments";
import { useGetAllEnrollments } from "@/hooks/api/use-enrollment";
import { useGetAllInstructorProfiles } from "@/hooks/api/use-instructor";

interface ActivityLog {
  id: string;
  icon: LucideIcon;
  iconColor: string;
  iconBorderColor: string;
  message: React.ReactNode;
  createdAt: string;
}

export const AdminDashboardSystemActivityLogs = () => {
  const { data: paymentsData } = useGetAllPayments({ limit: 10 });
  const { data: enrollmentsData } = useGetAllEnrollments({ limit: 10 });
  const { data: instructorData } = useGetAllInstructorProfiles();

  const activityLogs = useMemo<ActivityLog[]>(() => {
    const logs: ActivityLog[] = [];

    for (const payment of paymentsData?.data?.data ?? []) {
      if (payment.status !== "success") continue;
      logs.push({
        id: `payment-${payment._id}`,
        icon: CheckCircle2,
        iconColor: "text-emerald-500",
        iconBorderColor: "border-emerald-200",
        message: (
          <>
            <span className="font-semibold">{payment.student.name}</span>{" "}
            completed payment for{" "}
            <span className="text-primary font-medium">
              {payment.course.title}
            </span>
          </>
        ),
        createdAt: payment.createdAt ?? payment.paidAt ?? "",
      });
    }

    for (const enrollment of enrollmentsData?.enrollments ?? []) {
      const student =
        typeof enrollment.student === "string" ? null : enrollment.student;
      const course =
        typeof enrollment.course === "string" ? null : enrollment.course;
      logs.push({
        id: `enrollment-${enrollment._id}`,
        icon: GraduationCap,
        iconColor: "text-blue-500",
        iconBorderColor: "border-blue-200",
        message: (
          <>
            <span className="font-semibold">
              {student?.name ?? "A student"}
            </span>{" "}
            enrolled in{" "}
            <span className="text-primary font-medium">
              {course?.title ?? "a course"}
            </span>
          </>
        ),
        createdAt: enrollment.createdAt,
      });
    }

    for (const instructor of instructorData?.data ?? []) {
      if (instructor.applicationStatus !== "pending") continue;
      const applicant =
        typeof instructor.instructorId === "string"
          ? null
          : instructor.instructorId;
      logs.push({
        id: `instructor-${instructor._id}`,
        icon: UserCog,
        iconColor: "text-amber-500",
        iconBorderColor: "border-amber-200",
        message: (
          <>
            <span className="font-semibold">
              {applicant?.name ?? "An applicant"}
            </span>{" "}
            applied to become an instructor
          </>
        ),
        createdAt: instructor.createdAt ?? "",
      });
    }

    return logs
      .filter((log) => log.createdAt)
      .sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 6);
  }, [paymentsData, enrollmentsData, instructorData]);

  return (
    <div className="rounded-2xl bg-white overflow-hidden p-4 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 gap-3">
        <div className="flex items-center gap-2">
          <History className="size-5 text-primary shrink-0" />
          <h3 className="text-base lg:text-lg font-semibold text-gray-900">
            System Activity Feed
          </h3>
        </div>
        <button
          onClick={() => toast.info("Filtering the activity feed isn't available yet.")}
          className="flex items-center shrink-0 gap-1.5 text-xs font-semibold text-gray-900 border border-gray-200 rounded-md px-2 py-1 bg-[#F5F5F5] hover:bg-[#ececec] transition-colors"
        >
          <Filter className="size-2" />
          Filter Logs
        </button>
      </div>

      {/* Timeline */}
      {activityLogs.length === 0 ? (
        <p className="py-6 text-center text-sm text-gray-400">
          No recent activity
        </p>
      ) : (
        <div className="relative">
          {activityLogs.map((log, index) => (
            <div key={log.id} className="flex items-start gap-4 relative">
              {/* Timeline line */}
              {index < activityLogs.length - 1 && (
                <div className="absolute left-[17px] top-[38px] w-0.5 h-[calc(100%-10px)] bg-blue-100" />
              )}

              {/* Icon */}
              <div
                className={`relative z-10 flex items-center justify-center size-[36px] rounded-full border-2 ${log.iconBorderColor} bg-white shrink-0`}
              >
                <log.icon className={`size-4 ${log.iconColor}`} />
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="w-full flex-1 flex flex-col items-start gap-2 bg-[#F5F5F5] p-3 rounded-lg">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {log.message}
                    </p>
                    <span className="text-xs text-gray-400 shrink-0 ml-4 tabular-nums">
                      {format(new Date(log.createdAt), "HH:mm")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
