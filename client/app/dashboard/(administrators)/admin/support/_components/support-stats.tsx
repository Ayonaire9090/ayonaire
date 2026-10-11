"use client";

import { useMemo } from "react";
import { Inbox, Loader2, CheckCircle2, Archive } from "lucide-react";
import { useGetSupportTickets } from "@/hooks/api/use-support";
import { StatCard } from "@/components/dashboard/stat-card";

export const SupportStats = () => {
  const { data } = useGetSupportTickets({ limit: 200 });
  const tickets = data?.tickets ?? [];

  const counts = useMemo(() => {
    return {
      open: tickets.filter((t) => t.status === "open").length,
      inProgress: tickets.filter((t) => t.status === "in-progress").length,
      resolved: tickets.filter((t) => t.status === "resolved").length,
      closed: tickets.filter((t) => t.status === "closed").length,
    };
  }, [tickets]);

  const cards = [
    { label: "Open", value: counts.open, icon: Inbox, iconBg: "bg-[#EF4444]" },
    { label: "In Progress", value: counts.inProgress, icon: Loader2, iconBg: "bg-[#F59E0B]" },
    { label: "Resolved", value: counts.resolved, icon: CheckCircle2, iconBg: "bg-[#24A164]" },
    { label: "Closed", value: counts.closed, icon: Archive, iconBg: "bg-gray-500" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <StatCard
          key={card.label}
          label={card.label}
          value={String(card.value)}
          icon={card.icon}
          iconBg={card.iconBg}
        />
      ))}
    </div>
  );
};
