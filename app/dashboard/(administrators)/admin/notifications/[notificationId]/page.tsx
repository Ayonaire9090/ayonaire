"use client";

import { useParams, useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChevronRight } from "lucide-react";
import { useGetNotificationById } from "@/hooks/api/use-notifications";
import { NotificationStatusBadge, mapNotificationToNotificationData } from "../_components/notifications-data";

export default function AdminNotificationDetailPage() {
  const { notificationId } = useParams<{ notificationId: string }>();
  const router = useRouter();

  const { data, isLoading, isError } = useGetNotificationById(notificationId);
  const notification = data?.data;
  const notificationData = notification ? mapNotificationToNotificationData(notification) : null;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-gray-400">
        Loading notification...
      </div>
    );
  }

  if (isError || !notification || !notificationData) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-red-500">
        Notification not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0 pb-4">
      <DashboardHeader
        title={notificationData.name}
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Notifications <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">{notificationData.name}</span>
          </div>
        }
      />

      <div className="mt-4">
        <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-[20px] font-semibold text-gray-900">{notificationData.name}</h2>
              <NotificationStatusBadge status={notificationData.status} notificationId={notification._id} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Type</span>
                <span className="font-medium text-gray-900 text-[15px] capitalize">{notification.type}</span>
              </div>
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Channel</span>
                <span className="font-medium text-gray-900 text-[15px] capitalize">{notification.channel}</span>
              </div>
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Recipients</span>
                <span className="font-medium text-gray-900 text-[15px] capitalize">
                  {notification.recipientType}
                </span>
              </div>
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Course</span>
                <span className="font-medium text-gray-900 text-[15px]">{notificationData.course}</span>
              </div>
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Send Option</span>
                <span className="font-medium text-gray-900 text-[15px] capitalize">
                  {notification.sendOption}
                </span>
              </div>
              {notification.scheduledAt && (
                <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                  <span className="text-[13px] text-gray-500">Scheduled At</span>
                  <span className="font-medium text-gray-900 text-[15px]">
                    {new Date(notification.scheduledAt).toLocaleString()}
                  </span>
                </div>
              )}
              {notification.sentAt && (
                <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                  <span className="text-[13px] text-gray-500">Sent At</span>
                  <span className="font-medium text-gray-900 text-[15px]">
                    {new Date(notification.sentAt).toLocaleString()}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900 text-[15px]">Message</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed whitespace-pre-wrap">
                {notification.message}
              </p>
            </div>

            {(notification.stats.successCount > 0 || notification.stats.failedCount > 0) && (
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-[13px] text-gray-500">Delivered</span>
                  <span className="font-semibold text-[#24A164] text-[16px]">
                    {notification.stats.successCount}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-gray-500">Failed</span>
                  <span className="font-semibold text-[#FF5A5F] text-[16px]">
                    {notification.stats.failedCount}
                  </span>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => router.push("/dashboard/admin/notifications")}
            className="text-gray-600 hover:text-gray-900 text-[14px] font-medium self-start"
          >
            ← Back to Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
