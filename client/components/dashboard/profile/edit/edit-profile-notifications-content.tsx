"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Trash2, EyeOff } from "lucide-react";
import Image from "next/image";

const notificationTabs = ["Unread", "Read", "View All"] as const;
type NotificationTab = (typeof notificationTabs)[number];

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  category: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New Student Enrollment",
    description: 'Sarah Jenkins has enrolled in "Advanced Web Development".',
    time: "1min",
    category: "introduction",
    read: false,
  },
  {
    id: "2",
    title: "New Student Enrollment",
    description: 'Sarah Jenkins has enrolled in "Advanced Web Development".',
    time: "1min",
    category: "introduction",
    read: false,
  },
  {
    id: "3",
    title: "New Student Enrollment",
    description: 'Sarah Jenkins has enrolled in "Advanced Web Development".',
    time: "1min",
    category: "introduction",
    read: false,
  },
  {
    id: "4",
    title: "New Student Enrollment",
    description: 'Sarah Jenkins has enrolled in "Advanced Web Development".',
    time: "1min",
    category: "introduction",
    read: false,
  },
  {
    id: "5",
    title: "New Student Enrollment",
    description: 'Sarah Jenkins has enrolled in "Advanced Web Development".',
    time: "1min",
    category: "introduction",
    read: true,
  },
  {
    id: "6",
    title: "New Student Enrollment",
    description: 'Sarah Jenkins has enrolled in "Advanced Web Development".',
    time: "1min",
    category: "introduction",
    read: true,
  },
  {
    id: "7",
    title: "New Student Enrollment",
    description: 'Sarah Jenkins has enrolled in "Advanced Web Development".',
    time: "1min",
    category: "introduction",
    read: true,
  },
  {
    id: "8",
    title: "New Student Enrollment",
    description: 'Sarah Jenkins has enrolled in "Advanced Web Development".',
    time: "1min",
    category: "introduction",
    read: true,
  },
];

function NotificationItem({
  notification,
  isFirst,
  onDelete,
  onMarkRead,
}: {
  notification: Notification;
  isFirst?: boolean;
  onDelete: (id: string) => void;
  onMarkRead: (id: string) => void;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 md:gap-4 py-3.5 px-3 md:px-4 rounded-xl transition-colors group",
        isFirst && !notification.read ? "bg-gray-100" : "hover:bg-gray-50",
      )}
    >
      {/* Icon */}
      <div className="size-9 md:size-10 rounded-full bg-gray-100 group-first:bg-white flex items-center justify-center shrink-0 mt-0.5">
        <Image
          src="/assets/icons/thumbs-up.svg"
          alt="thumbs up icon"
          width={20}
          height={20}
          className="size-4 md:size-[18px] text-gray-400"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] md:text-[14px] font-bold text-gray-900 leading-snug">
          {notification.title}
        </p>
        <p className="text-[12px] md:text-[13px] text-gray-500 mt-0.5 leading-snug">
          {notification.description}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-[11px] md:text-[12px] text-gray-400">
            {notification.time}
          </span>
          <span className="text-[11px] md:text-[12px] text-gray-300">·</span>
          <span className="text-[11px] md:text-[12px] text-gray-400">
            {notification.category}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 shrink-0 mt-1">
        <button
          onClick={() => onDelete(notification.id)}
          className="size-8 flex items-center justify-center rounded-lg text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors"
          aria-label="Delete notification"
        >
          <Trash2 className="size-4" />
        </button>
        {!notification.read && (
          <button
            onClick={() => onMarkRead(notification.id)}
            className="size-8 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Mark as read"
          >
            <EyeOff className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export const EditProfileNotificationsContent = () => {
  const [activeTab, setActiveTab] = useState<NotificationTab>("Unread");
  const [notifications, setNotifications] =
    useState<Notification[]>(mockNotifications);

  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === "Unread") return !n.read;
    if (activeTab === "Read") return n.read;
    return true; // View All
  });

  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleMarkRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div>
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900">
          Notifications Settings
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-1">
          {notificationTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 text-[13px] md:text-[14px] font-medium rounded-lg transition-colors",
                activeTab === tab
                  ? "border border-primary text-primary bg-transparent"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50",
              )}
            >
              {tab}
              {tab === "Unread" && unreadCount > 0 && (
                <span className="ml-1.5 text-[11px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-semibold">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Sub header */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 mb-1">
        <span className="text-[13px] md:text-[14px] font-semibold text-gray-700">
          Notification
        </span>
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="text-[13px] md:text-[14px] font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Mark as Read
          </button>
        )}
      </div>

      {/* Notification list */}
      <div className="flex flex-col gap-0.5">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification, index) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              isFirst={index === 0}
              onDelete={handleDelete}
              onMarkRead={handleMarkRead}
            />
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-[14px] text-gray-400">
              No {activeTab.toLowerCase()} notifications.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
