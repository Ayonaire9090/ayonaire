import {
  LucideIcon,
  MonitorSmartphone,
  UserPlus,
  ShieldCheck,
  BookOpenCheck,
  Award,
} from "lucide-react";

const pendingActions = [
  {
    title: "Manual Payments",
    description: "Requires verification from bank receipt",
    count: "08",
    icon: MonitorSmartphone,
    iconColor: "text-[#F86432]",
    iconBg: "bg-[#F86432]/10",
  },
  {
    title: "Pending Enrollments",
    description: "Awaiting course assignment",
    count: "05",
    icon: UserPlus,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
  },
  {
    title: "Instructor Approvals",
    description: "New profile validation",
    count: "03",
    icon: ShieldCheck,
    iconColor: "text-[#10B981]",
    iconBg: "bg-[#10B981]/10",
  },
  {
    title: "Course Approvals",
    description: "Content quality review",
    count: "02",
    icon: BookOpenCheck,
    iconColor: "text-[#3B82F6]",
    iconBg: "bg-[#3B82F6]/10",
  },
  {
    title: "Certificate Requests",
    description: "Final assessment verification",
    count: "07",
    icon: Award,
    iconColor: "text-[#A855F7]",
    iconBg: "bg-[#A855F7]/10",
  },
];

export const AdminDashboardPendingActionCard = () => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#FFF5F1]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg">
            <MonitorSmartphone className="size-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Pending Actions Queue
          </h3>
        </div>
        <span className="text-xs font-bold tracking-wider text-primary border-0 bg-[#F59E0B]/20 rounded-full px-3 py-1 uppercase">
          Priority Actions
        </span>
      </div>

      {/* Action Items */}
      <div className="divide-y divide-gray-100">
        {pendingActions.map((action, index) => (
          <PendingActionItem
            key={index}
            title={action.title}
            description={action.description}
            count={action.count}
            icon={action.icon}
            iconColor={action.iconColor}
            iconBg={action.iconBg}
          />
        ))}
      </div>
    </div>
  );
};

interface PendingActionItemProps {
  title: string;
  description: string;
  count: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

const PendingActionItem = ({
  title,
  description,
  count,
  icon: Icon,
  iconColor,
  iconBg,
}: PendingActionItemProps) => {
  return (
    <div className="flex items-center justify-between px-5 py-4 hover:bg-gray-50/50 transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl ${iconBg}`}>
          <Icon className={`size-5 ${iconColor}`} />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{title}</p>
          <p className="text-xs text-gray-400 mt-0.5">{description}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-semibold text-gray-800 tabular-nums">
          {count}
        </p>
        <p className="text-xs text-gray-400">Pending</p>
      </div>
    </div>
  );
};
