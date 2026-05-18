import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  AttendanceAnalyticsCard,
  ActionListCard,
} from "./attendance-analytics-card";

const STATS_DATA = [
  {
    heading: "Total Classes Today",
    title: "12",
    rate: "+2 vs yesterday ↑",
    description: "Scheduled classes",
    statusBadge: { label: "Info", variant: "info" as const },
  },
  {
    heading: "Sessions Today",
    title: "8",
    rate: "steady →",
    description: "Completed sessions",
    statusBadge: { label: "Info", variant: "info" as const },
  },
  {
    heading: "Attendance Rate",
    title: "86%",
    rate: "-4% ↓",
    description: "Average rate",
    statusBadge: { label: "Normal", variant: "normal" as const },
  },
  {
    heading: "Avg Weekly Rate",
    title: "82%",
    rate: "+1% ↑",
    description: "Average for the current week",
    statusBadge: { label: "Normal", variant: "normal" as const },
  },
];

export const AttendanceAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full -mt-2">
      {/* Stat Cards Container */}
      <div className="lg:col-span-2">
        {/* Mobile / Tablet Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {STATS_DATA.map((stat, i) => (
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

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STATS_DATA.map((stat, i) => (
            <AttendanceAnalyticsCard key={i} {...stat} />
          ))}
        </div>
      </div>

      {/* Action List 1 */}
      <div className="lg:col-span-1">
        <ActionListCard
          title="Pending Approvals"
          badge={{ label: "Pending", variant: "pending" }}
          value="4"
          items={[
            "Review Pending",
            "Bulk Approve",
            "Bulk Reject",
            "Request Correction",
          ]}
        />
      </div>

      {/* Action List 2 */}
      <div className="lg:col-span-1">
        <ActionListCard
          title="Missing Logs"
          badge={{ label: "Missing", variant: "missing" }}
          value="3"
          items={[
            "Assign Admin",
            "Mark Attendance",
            "Notify Instructor",
            "Create Task",
          ]}
        />
      </div>
    </div>
  );
};
