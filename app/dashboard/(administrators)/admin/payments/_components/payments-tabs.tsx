"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Overview", href: "/dashboard/admin/payments" },
  {
    name: "Payment Gateways",
    href: "/dashboard/admin/payments/payment-gateways",
  },
  { name: "Pricing Plans", href: "/dashboard/admin/payments/pricing-plans" },
  {
    name: "Student Purchases",
    href: "/dashboard/admin/payments/student-purchases",
  },
];

export function PaymentsTabs() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 overflow-x-auto rounded-xl bg-gray-50 p-1.5 w-fit max-w-full">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all",
              isActive
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900",
            )}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
