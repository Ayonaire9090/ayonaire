"use client";

import { useMemo } from "react";
import { useGetCourses } from "@/hooks/api/use-courses";

const STATUS_COLORS: Record<string, string> = {
  Active: "#22c55e",
  Draft: "#9ca3af",
  Archived: "#ef4444",
};

export const AnalyticsCourseBreakdown = () => {
  const { data } = useGetCourses({ limit: 200 });
  const courses = data?.courses ?? [];

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { Active: 0, Draft: 0, Archived: 0 };
    for (const course of courses) {
      const status = course.status ?? "Draft";
      counts[status] = (counts[status] ?? 0) + 1;
    }
    return counts;
  }, [courses]);

  const topCourses = useMemo(() => {
    return [...courses]
      .sort((a, b) => (b.enrollmentCount ?? 0) - (a.enrollmentCount ?? 0))
      .slice(0, 5);
  }, [courses]);

  const total = courses.length || 1;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-[16px]! px-5 py-5 space-y-4 bg-white shadow-sm">
        <p className="text-2xl font-semibold">Courses by Status</p>
        <div className="space-y-3">
          {Object.entries(statusCounts).map(([status, count]) => (
            <div key={status} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{status}</span>
                <span className="font-medium text-gray-900">{count}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${(count / total) * 100}%`,
                    backgroundColor: STATUS_COLORS[status] ?? "#F86432",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[16px]! px-5 py-5 space-y-4 bg-white shadow-sm">
        <p className="text-2xl font-semibold">Top Courses</p>
        {topCourses.length === 0 ? (
          <div className="flex h-[160px] items-center justify-center text-sm text-muted-foreground">
            No courses yet
          </div>
        ) : (
          <div className="space-y-3">
            {topCourses.map((course) => (
              <div
                key={course._id}
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
              >
                <span className="truncate text-sm font-medium text-gray-900 pr-4">
                  {course.title}
                </span>
                <span className="shrink-0 text-sm text-gray-500">
                  {(course.enrollmentCount ?? 0).toLocaleString()} enrolled
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
