"use client";

import { useMessagingRealtimeSync } from "@/hooks/socket/use-messaging-realtime-sync";

export default function InstructorMessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useMessagingRealtimeSync();
  return children;
}
