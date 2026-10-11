"use client";

import React, { useMemo } from "react";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";
import { useInstructorAnalytics } from "../../analytics-reporting/_components/instructor-analytics-data";

export const InstructorPerformanceAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
      <InstructorCoursePerformance />
      <InstructorCourseRecentEnrollments />
    </div>
  );
};

const completionBadge = (rate: number) => {
  if (rate >= 66)
    return "inline-flex items-center justify-center px-3 py-1 rounded-lg text-sm font-semibold bg-emerald-50 text-emerald-600";
  if (rate >= 33)
    return "inline-flex items-center justify-center px-3 py-1 rounded-lg text-sm font-semibold bg-orange-50 text-orange-500";
  return "inline-flex items-center justify-center px-3 py-1 rounded-lg text-sm font-semibold bg-red-50 text-red-500";
};

const InstructorCoursePerformance = () => {
  const { perCourse, isLoading } = useInstructorAnalytics();
  const topCourses = useMemo(
    () => [...perCourse].sort((a, b) => b.revenue - a.revenue).slice(0, 5),
    [perCourse],
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-[16px] p-6 border border-gray-100/50 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">
            Course Performance
          </h3>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          {isLoading ? (
            <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
          ) : topCourses.length === 0 ? (
            <p className="text-sm text-gray-400 py-6 text-center">No courses yet</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F6F6F6] text-gray-900 text-[15px] font-bold">
                  <th className="py-4 px-4 rounded-l-xl">Course Name</th>
                  <th className="py-4 px-4">Revenue</th>
                  <th className="py-4 px-4">Students</th>
                  <th className="py-4 px-4 rounded-r-xl">Completion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {topCourses.map((c) => (
                  <tr key={c.course._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-gray-900 text-[15px]">
                      {c.course.title}
                    </td>
                    <td className="py-4 px-4 font-bold text-gray-900 text-[15px]">
                      ${c.revenue.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-gray-500 font-medium text-[15px]">
                      {c.enrollmentCount.toLocaleString()}
                    </td>
                    <td className="py-4 px-4">
                      <span className={completionBadge(c.completionRate)}>
                        {c.completionRate}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

const InstructorCourseRecentEnrollments = () => {
  const { courses } = useInstructorAnalytics();
  const courseIds = useMemo(() => new Set(courses.map((c) => c._id)), [courses]);
  const courseTitleById = useMemo(
    () => new Map(courses.map((c) => [c._id, c.title])),
    [courses],
  );
  const enrollmentsQuery = useGetEnrolledCourses();

  const recentEnrollments = useMemo(() => {
    return (enrollmentsQuery.data?.data ?? [])
      .filter((enrollment) => {
        const courseId =
          typeof enrollment.course === "string" ? enrollment.course : enrollment.course?._id;
        return !!courseId && courseIds.has(courseId);
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 4)
      .map((enrollment) => {
        const courseId =
          typeof enrollment.course === "string" ? enrollment.course : enrollment.course?._id;
        const student = typeof enrollment.student === "string" ? null : enrollment.student;
        return {
          id: enrollment._id,
          studentName: student?.name ?? "Unknown Student",
          courseTitle: courseTitleById.get(courseId ?? "") ?? "Unknown Course",
          date: new Date(enrollment.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
        };
      });
  }, [enrollmentsQuery.data, courseIds, courseTitleById]);

  return (
    <div className="bg-white rounded-[16px] p-6 border border-gray-100/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Recent Enrollments</h3>
      </div>

      {enrollmentsQuery.isLoading ? (
        <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
      ) : recentEnrollments.length === 0 ? (
        <p className="text-sm text-gray-400 py-6 text-center">No enrollments yet</p>
      ) : (
        <div className="flex flex-col gap-3">
          {recentEnrollments.map((enrollment) => (
            <div
              key={enrollment.id}
              className="flex items-center justify-between border border-gray-100 rounded-[12px] p-4 bg-[#F6F6F6]"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-900 font-semibold text-[15px]">
                  {enrollment.studentName}
                </span>
                <span className="text-gray-500 text-sm">{enrollment.courseTitle}</span>
              </div>
              <span className="text-gray-400 text-xs font-semibold whitespace-nowrap">
                {enrollment.date}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
