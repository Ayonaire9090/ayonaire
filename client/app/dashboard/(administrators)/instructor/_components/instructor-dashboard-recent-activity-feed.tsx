import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BellOff } from "lucide-react";

interface InstructorDashboardRecentActivityFeedProps {
  title?: string;
  showBadge?: boolean;
  className?: string;
}

// No backend endpoint currently returns a cross-course activity/notification
// feed (enrollments, submissions, quiz completions, reviews) for an
// instructor - only per-user login/activity history exists, scoped to admins.
// Rendering an honest empty state until that endpoint exists rather than
// fabricated names/timestamps.
export const InstructorDashboardRecentActivityFeed = ({
  title = "Recent Activity Feed",
  showBadge = false,
  className,
}: InstructorDashboardRecentActivityFeedProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white overflow-hidden border border-gray-100/80",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#FFF5F1] border-b border-[#F86432]/10">
        <div className="flex items-center gap-2">
          <h3 className="text-base lg:text-lg font-semibold text-gray-900">
            {title}
          </h3>
          {showBadge && (
            <Badge className="rounded-full bg-primary/20 text-primary">
              PRIORITY ACTIONS
            </Badge>
          )}
        </div>
      </div>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center gap-3 px-6 py-14 text-center">
        <div className="flex items-center justify-center size-12 rounded-full bg-gray-100">
          <BellOff className="size-5 text-gray-400" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-700">
            No recent activity yet
          </p>
          <p className="text-[13px] text-gray-400 max-w-[280px]">
            New enrollments, submissions, and reviews for your courses will
            show up here.
          </p>
        </div>
      </div>
    </div>
  );
};
