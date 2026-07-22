"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  AttendanceAnalyticsCard,
  ActionListCard,
} from "./attendance-analytics-card";
import { useGetAttendanceSessions } from "@/hooks/api/use-attendance";

export const AttendanceAnalytics = () => {
  const { data } = useGetAttendanceSessions({ limit: 100 });
  const sessions = data?.sessions ?? [];

  const today = new Date().toDateString();
  const sessionsToday = sessions.filter((s) => new Date(s.date).toDateString() === today);
  const avgRate =
    sessions.length > 0
      ? Math.round(sessions.reduce((sum, s) => sum + s.attendanceRate, 0) / sessions.length)
      : 0;
  const pendingApprovals = sessions.filter((s) => s.approvalStatus === "pending").length;

  const statsData = [
    {
      heading: "Sessions Today",
      title: String(sessionsToday.length),
      description: "Logged today",
      statusBadge: { label: "Info", variant: "info" as const },
    },
    {
      heading: "Attendance Rate",
      title: `${avgRate}%`,
      description: "Average across all sessions",
      statusBadge: { label: "Normal", variant: "normal" as const },
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full -mt-2">
      <div className="lg:col-span-2">
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {statsData.map((stat, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-[80%] sm:basis-[45%]"
                >
                  <AttendanceAnalyticsCard {...stat} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4">
          {statsData.map((stat, i) => (
            <AttendanceAnalyticsCard key={i} {...stat} />
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <ActionListCard
          title="Pending Approvals"
          badge={{ label: "Pending", variant: "pending" }}
          value={String(pendingApprovals)}
          items={[]}
        />
      </div>
    </div>
  );
};
