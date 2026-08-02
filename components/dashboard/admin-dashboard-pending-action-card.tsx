"use client";

import { CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { useGetAllPayments } from "@/hooks/api/use-payments";
import { useGetAllEnrollments } from "@/hooks/api/use-enrollment";
import { useGetAllInstructorProfiles } from "@/hooks/api/use-instructor";

export const AdminDashboardPendingActionCard = () => {
  const { data: paymentsData } = useGetAllPayments({ limit: 200 });
  const { data: enrollmentsData } = useGetAllEnrollments({ limit: 200 });
  const { data: instructorData } = useGetAllInstructorProfiles();

  const payments = paymentsData?.data?.data ?? [];
  const enrollments = enrollmentsData?.enrollments ?? [];
  const instructors = instructorData?.data ?? [];

  const pendingActions = [
    {
      title: "Manual Payments",
      description: "Requires verification from bank receipt",
      count: payments.filter((p) => p.status === "pending").length,
      icon: "/assets/icons/money-notes.svg",
      iconBg: "bg-[#F86432]/10",
      href: "/dashboard/admin/payments",
    },
    {
      title: "Pending Enrollments",
      description: "Awaiting course start",
      count: enrollments.filter((e) => !e.completed && !e.progress).length,
      icon: "/assets/icons/user-plus.svg",
      iconBg: "bg-[#3B82F6]/10",
      href: "/dashboard/admin/enrollments",
    },
    {
      title: "Instructor Approvals",
      description: "New profile validation",
      count: instructors.filter((i) => i.applicationStatus === "pending").length,
      icon: "/assets/icons/green-shield.svg",
      iconBg: "bg-[#10B981]/10",
      href: "/dashboard/admin/instructor-approvals",
    },
    {
      title: "Failed Payments",
      description: "Transactions that need follow-up",
      count: payments.filter((p) => p.status === "failed").length,
      icon: "/assets/icons/clock.svg",
      iconBg: "bg-[#EF4444]/10",
      href: "/dashboard/admin/payments",
    },
  ];

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
            href={action.href}
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
  count: number;
  icon: string;
  iconBg: string;
  href: string;
  isLast?: boolean;
}

const PendingActionItem = ({
  title,
  description,
  count,
  icon,
  iconBg,
  href,
  isLast,
}: PendingActionItemProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={href}
        className="flex items-center justify-between px-5 py-4 hover:bg-gray-50/50 transition-colors cursor-pointer"
      >
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
      </Link>
      {!isLast && <div className="mx-5 border-b-2 border-gray-100" />}
    </div>
  );
};
