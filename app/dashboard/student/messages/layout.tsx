"use client";

import { useMessagingRealtimeSync } from "@/hooks/socket/use-messaging-realtime-sync";
import { StudentMessagesNavRail } from "./_components/student-messages-nav-rail";

export default function StudentMessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useMessagingRealtimeSync();
  return (
    <>
      <StudentMessagesNavRail />
      {children}
    </>
  );
}
