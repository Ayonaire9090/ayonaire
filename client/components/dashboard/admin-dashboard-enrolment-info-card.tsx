"use client";

import { ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useGetAllEnrollments } from "@/hooks/api/use-enrollment";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="w-full bg-white rounded-xl p-2 lg:p-4">
      <div className="flex items-start justify-between gap-4 pb-4">
        <div>
          <h3 className="text-[18px] font-semibold text-gray-900">
            Recent Enrollments
          </h3>
          <p className="mt-1 text-[14px] text-gray-500">
            Latest student access activity
          </p>
        </div>
        <Link
          href="/dashboard/admin/enrollments"
          className="shrink-0 text-[14px] font-medium text-primary hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white">
        <Table className="min-w-[560px] border-none">
          <TableHeader className="bg-[#FAFAFA]">
            <TableRow className="border-b border-gray-100 hover:bg-transparent">
              <TableHead className="h-11 pl-4 text-[13px] font-medium text-gray-500">
                Student
              </TableHead>
              <TableHead className="h-11 text-[13px] font-medium text-gray-500">
                Course
              </TableHead>
              <TableHead className="h-11 text-[13px] font-medium text-gray-500">
                Time
              </TableHead>
              <TableHead className="h-11 pr-4 text-right text-[13px] font-medium text-gray-500">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentEnrolments.length === 0 ? (
              <TableRow className="border-none hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="py-10 text-center text-[14px] text-gray-400"
                >
                  No enrollments yet
                </TableCell>
              </TableRow>
            ) : (
              recentEnrolments.map((enrolment) => (
                <TableRow
                  key={enrolment.id}
                  className="border-b border-gray-100 last:border-0 bg-white hover:bg-gray-50/70 transition-colors"
                >
                  <TableCell className="py-3 pl-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-9 shrink-0">
                        <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
                          {enrolment.studentName.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="max-w-[150px] truncate text-[14px] font-semibold text-gray-900">
                        {enrolment.studentName}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <span className="block max-w-[180px] truncate text-[14px] font-medium text-gray-700">
                      {enrolment.courseName}
                    </span>
                  </TableCell>
                  <TableCell className="py-3">
                    <span className="inline-flex items-center gap-1 text-[14px] font-medium text-gray-500">
                      <Clock className="size-3.5 text-gray-400" />
                      {enrolment.timeAgo}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 pr-4 text-right">
                    <Link
                      href="/dashboard/admin/enrollments"
                      aria-label={`View enrollment for ${enrolment.studentName}`}
                      className="inline-flex size-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                    >
                      <ChevronRight className="size-4" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
