"use client";

import { useMemo } from "react";
import { useGetNotifications } from "@/hooks/api/use-notifications";

export const HistoryCards = () => {
  const { data } = useGetNotifications();
  const notifications = data?.notifications ?? [];

  const totals = useMemo(() => {
    const sent = notifications.filter((n) => n.status === "sent" || n.sentAt);
    const success = sent.reduce((sum, n) => sum + (n.stats?.successCount ?? 0), 0);
    const failed = sent.reduce((sum, n) => sum + (n.stats?.failedCount ?? 0), 0);
    const recipients = success + failed;
    const deliveryRate = recipients > 0 ? (success / recipients) * 100 : 0;

    return {
      totalSent: sent.length,
      recipients,
      success,
      failed,
      deliveryRate,
    };
  }, [notifications]);

  const historyCardItems = [
    {
      title: "Total Sent",
      description: totals.totalSent.toLocaleString(),
      textColor: "text-black",
    },
    {
      title: "Recipients",
      description: totals.recipients.toLocaleString(),
      textColor: "text-[#197FE6]",
    },
    {
      title: "Success",
      description: totals.success.toLocaleString(),
      textColor: "text-[#009F42]",
    },
    {
      title: "Failed",
      description: totals.failed.toLocaleString(),
      textColor: "text-[#EF4444]",
    },
    {
      title: "Delivery Rate",
      description: `${totals.deliveryRate.toFixed(1)}%`,
      textColor: "text-[#F59E0B]",
    },
  ];

  return (
    <div className="w-full flex flex-1 items-center md:grid md:grid-cols-2 lg:grid-cols-5 gap-3 overflow-x-auto hide-scrollbar my-3">
      {historyCardItems.map((item, index) => (
        <HistoryCard key={index} {...item} />
      ))}
    </div>
  );
};

const HistoryCard = ({
  title,
  description,
  textColor,
}: {
  title: string;
  description: string;
  textColor: string;
}) => {
  return (
    <div className="flex w-full h-[110px] md:h-full min-w-[200px] md:max-w-full flex-col justify-center items-center gap-3 bg-white p-2 md:p-4 rounded-lg">
      <p className="text-gray-600 text-[16px]">{title}</p>
      <p className={`${textColor} text-xl font-bold`}>{description}</p>
    </div>
  );
};
