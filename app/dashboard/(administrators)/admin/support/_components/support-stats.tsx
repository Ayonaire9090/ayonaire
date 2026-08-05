"use client";

import { useMemo } from "react";
import { useGetSupportTickets } from "@/hooks/api/use-support";

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
    { label: "Open", value: counts.open, color: "text-[#EF4444]" },
    { label: "In Progress", value: counts.inProgress, color: "text-[#F59E0B]" },
    { label: "Resolved", value: counts.resolved, color: "text-[#24A164]" },
    { label: "Closed", value: counts.closed, color: "text-gray-500" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-[16px] bg-white shadow-sm px-5 py-5">
          <p className="text-sm text-gray-500">{card.label}</p>
          <p className={`text-3xl font-bold tabular-nums mt-2 ${card.color}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};
