import {
  UserPlus,
  ShieldCheck,
  BookOpenCheck,
  Award,
  Banknote,
  CalendarClock,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

const pendingActions = [
  {
    title: "Manual Payments",
    description: "Requires verification from bank receipt",
    count: "08",
    icon: "/assets/icons/money-notes.svg",
    iconBg: "bg-[#F86432]/10",
  },
  {
    title: "Pending Enrollments",
    description: "Awaiting course assignment",
    count: "05",
    icon: "/assets/icons/user-plus.svg",
    iconBg: "bg-[#3B82F6]/10",
  },
  {
    title: "Instructor Approvals",
    description: "New profile validation",
    count: "03",
    icon: "/assets/icons/green-shield.svg",
    iconBg: "bg-[#10B981]/10",
  },
  {
    title: "Course Approvals",
    description: "Content quality review",
    count: "02",
    icon: "/assets/icons/blue-book.svg",
    iconBg: "bg-[#3B82F6]/10",
  },
  {
    title: "Certificate Requests",
    description: "Final assessment verification",
    count: "07",
    icon: "/assets/icons/certificate-badge-star.svg",
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
            <CalendarClock className="size-5 text-[#F86432]" />
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-gray-900">
            Pending Actions Queue
          </h3>
        </div>
        <Badge
          variant="secondary"
          className="flex justify-center items-center text-[10px] font-bold tracking-wider text-[#F86432] border-0 bg-[#F86432]/10 rounded-full px-2.5 py-1.5 uppercase"
        >
          Priority Actions
        </Badge>
      </div>

      {/* Action Items */}
      <div className="flex flex-col">
        {pendingActions.map((action, index) => (
          <PendingActionItem
            key={index}
            title={action.title}
            description={action.description}
            count={action.count}
            icon={action.icon}
            iconBg={action.iconBg}
            isLast={index === pendingActions.length - 1}
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
  icon: string;
  iconBg: string;
  isLast?: boolean;
}

const PendingActionItem = ({
  title,
  description,
  count,
  icon,
  iconBg,
  isLast,
}: PendingActionItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4 hover:bg-gray-50/50 transition-colors cursor-pointer">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${iconBg}`}>
            <Image src={icon} alt={title} width={20} height={20} />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-base">{title}</p>
            <p className="text-sm text-gray-400 mt-0.5">{description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <div className="bg-[#F6F6F6] rounded-lg p-2 min-w-[35px] text-center">
            <p className="text-lg font-bold text-gray-900 tabular-nums leading-none">
              {count}
            </p>
          </div>
          <p className="text-[13px] text-gray-400">Pending</p>
        </div>
      </div>
      {!isLast && <div className="mx-5 border-b-2 border-gray-100" />}
    </div>
  );
};
