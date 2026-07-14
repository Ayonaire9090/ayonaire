"use client";

import { useMessagingRealtimeSync } from "@/hooks/socket/use-messaging-realtime-sync";

export default function StudentMessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useMessagingRealtimeSync();
  return <>{children}</>;
}
