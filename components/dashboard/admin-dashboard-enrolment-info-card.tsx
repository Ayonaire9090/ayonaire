"use client";

import { Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useGetAllEnrollments } from "@/hooks/api/use-enrollment";

export const AdminDashboardEnrolmentInfoCard = () => {
  const { data } = useGetAllEnrollments({ limit: 20 });
  const enrollments = data?.enrollments ?? [];

  const recentEnrolments = useMemo(() => {
    return [...enrollments]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 3)
      .map((enrollment) => {
        const student =
          typeof enrollment.student === "string" ? null : enrollment.student;
        const course =
          typeof enrollment.course === "string" ? null : enrollment.course;
        return {
          id: enrollment._id,
          studentName: student?.name ?? "Unknown Student",
          courseName: course?.title ?? "Unknown Course",
          timeAgo: enrollment.createdAt
            ? formatDistanceToNow(new Date(enrollment.createdAt), {
                addSuffix: true,
              })
            : "",
        };
      });
  }, [enrollments]);

  return (
    <div className="rounded-2xl bg-white overflow-hidden py-5 px-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Enrollments
        </h3>
        <Link
          href="/dashboard/admin/enrollments"
          className="text-sm font-medium text-primary hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Enrolment List */}
      <div className="space-y-2">
        {recentEnrolments.length === 0 ? (
          <p className="py-6 text-center text-sm text-gray-400">
            No enrollments yet
          </p>
        ) : (
          recentEnrolments.map((enrolment) => (
            <Link
              key={enrolment.id}
              href="/dashboard/admin/enrollments"
              className="flex items-center justify-between py-4 bg-[#FBFBFB] hover:bg-[#F5F5F5] transition-colors cursor-pointer -mx-2 px-2 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Avatar className="size-11 shrink-0">
                  <AvatarFallback>
                    {enrolment.studentName.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {enrolment.studentName}{" "}
                    <span className="text-gray-400">→</span>{" "}
                    {enrolment.courseName}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock className="size-3.5 text-gray-400" />
                    <span className="text-xs text-gray-400">
                      {enrolment.timeAgo}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight className="size-4 text-gray-400 shrink-0" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
