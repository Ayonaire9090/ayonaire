"use client";

import { useMessagingRealtimeSync } from "@/hooks/socket/use-messaging-realtime-sync";
import "@/app/dashboard/student/messages/messaging.css";

export default function InstructorMessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useMessagingRealtimeSync();
  return children;
}
