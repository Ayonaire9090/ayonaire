import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  CircleCheckBig,
  EllipsisVertical,
  FileText,
  LucideIcon,
  Star,
  UserPlus,
} from "lucide-react";

const RecentActivities = [
  {
    title: "New Students Enrollment",
    description: `Sarah Jenkins has enrolled in "Advanced Web Development".`,
    timeStamp: "2 mins ago",
    icon: UserPlus,
    iconColor: "text-[#F86432]",
    iconBg: "bg-[#F86432]/10",
  },
  {
    title: "Assignment Submission",
    description: `Marcus Aurelius submitted "Module 3: React Hooks".`,
    timeStamp: "15 seconds ago",
    icon: FileText,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
  },
  {
    title: "Quiz Completed",
    description: `Elena Gilbert scored 95% on "Intro to TypeScript".`,
    timeStamp: "25 mins ago",
    icon: CircleCheckBig,
    iconColor: "text-[#10B981]",
    iconBg: "bg-[#10B981]/10",
  },
  {
    title: "Course Review",
    description: `New 5-star review from David Miller on "UI/UX Design".`,
    timeStamp: "5 seconds ago",
    icon: Star,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
  },
  {
    title: "New Student Enrollment",
    description: `James Wilson has enrolled in "Data Science Fundamentals".`,
    timeStamp: "Yesterday",
    icon: UserPlus,
    iconColor: "text-[#A855F7]",
    iconBg: "bg-[#A855F7]/10",
  },
];

interface InstructorDashboardRecentActivityFeedProps {
  title?: string;
  showBadge?: boolean;
  className?: string;
}
export const InstructorDashboardRecentActivityFeed = ({
  title = "Recent Activity Feed",
  showBadge = false,
  className,
}: InstructorDashboardRecentActivityFeedProps) => {
  return (
    <div className={cn("rounded-2xl bg-white overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#FFF5F1]">
        <div className="flex items-center justify-between gap-2 w-full">
          {/* <div className="p-1.5 rounded-lg">
            <CalendarClock className="size-5 text-[#F86432]" />
          </div> */}
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

      {/* Action Items */}
      <div className="flex flex-col">
        {RecentActivities.map((action, index) => (
          <PendingActionItem
            key={index}
            title={action.title}
            description={action.description}
            timeStamp={action.timeStamp}
            icon={action.icon}
            iconColor={action.iconColor}
            iconBg={action.iconBg}
            isLast={index === RecentActivities.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

interface PendingActionItemProps {
  title: string;
  description: string;
  timeStamp: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  isLast?: boolean;
}

const PendingActionItem = ({
  title,
  description,
  timeStamp,
  iconColor,
  icon: Icon,
  iconBg,
  isLast,
}: PendingActionItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4 hover:bg-gray-50/50 transition-colors cursor-pointer">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${iconBg}`}>
            <Icon size={20} className={iconColor} />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-base">{title}</p>
            <p className="text-sm text-gray-400 mt-0.5">{description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <EllipsisVertical />
          <p className="text-[13px] text-gray-400">{timeStamp}</p>
        </div>
      </div>
      {!isLast && <div className="mx-5 border-b-2 border-gray-100" />}
    </div>
  );
};
