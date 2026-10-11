"use client";

import { Banknote, UserPlus, ShieldCheck, AlertTriangle, LucideIcon } from "lucide-react";
import Link from "next/link";
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
      icon: Banknote,
      href: "/dashboard/admin/payments",
    },
    {
      title: "Pending Enrollments",
      description: "Awaiting course start",
      count: enrollments.filter((e) => !e.completed && !e.progress).length,
      icon: UserPlus,
      href: "/dashboard/admin/enrollments",
    },
    {
      title: "Instructor Approvals",
      description: "New profile validation",
      count: instructors.filter((i) => i.applicationStatus === "pending").length,
      icon: ShieldCheck,
      href: "/dashboard/admin/instructor-approvals",
    },
    {
      title: "Failed Payments",
      description: "Transactions that need follow-up",
      count: payments.filter((p) => p.status === "failed").length,
      icon: AlertTriangle,
      href: "/dashboard/admin/payments",
    },
  ];

  const totalPending = pendingActions.reduce((sum, a) => sum + a.count, 0);

  return (
    <div className="rounded-2xl bg-white border border-gray-100 p-5 flex flex-col gap-1">
      {/* Header */}
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        Pending Actions Queue
      </h3>

      {/* Action Items */}
      <div className="flex flex-col">
        {pendingActions.map((action, index) => (
          <PendingActionItem
            key={index}
            title={action.title}
            description={action.description}
            count={action.count}
            icon={action.icon}
            href={action.href}
          />
        ))}
      </div>

      {/* Status */}
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-gray-100">
        <span className="text-sm text-gray-500">Status</span>
        <span className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <span
            className={`size-2 rounded-full ${
              totalPending === 0 ? "bg-[#24A164]" : "bg-[#F59E0B]"
            }`}
          />
          {totalPending === 0 ? "All Clear" : `${totalPending} Awaiting Action`}
        </span>
      </div>
    </div>
  );
};

interface PendingActionItemProps {
  title: string;
  description: string;
  count: number;
  icon: LucideIcon;
  href: string;
}

const PendingActionItem = ({
  title,
  description,
  count,
  icon: Icon,
  href,
}: PendingActionItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between py-3 hover:bg-gray-50/50 transition-colors rounded-lg -mx-2 px-2"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center justify-center size-9 rounded-lg bg-gray-50 border border-gray-100 shrink-0">
          <Icon className="size-4 text-gray-600" />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 text-[14px] truncate">{title}</p>
          <p className="text-[12.5px] text-gray-400 truncate">{description}</p>
        </div>
      </div>
      <div className="text-right shrink-0 pl-3">
        <p className="font-semibold text-gray-900 text-[14px] tabular-nums">{count}</p>
        <p className="text-[12px] text-gray-400">Pending</p>
      </div>
    </Link>
  );
};
