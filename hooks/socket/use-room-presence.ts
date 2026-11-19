"use client";

import { useEffect, useState } from "react";
import { getMessagingSocket } from "@/lib/socket/messaging-socket";

export function useRoomPresence(roomId: string) {
  const [online, setOnline] = useState<string[] | null>(null);
  useEffect(() => {
    const socket = getMessagingSocket();
    const onPresence = (payload: { roomId: string; userIds: string[] }) => { if (payload.roomId === roomId) setOnline(payload.userIds); };
    const join = () => socket.emit("room:join", { roomId }, (result: { success: boolean }) => { if (result?.success) socket.emit("room:presence:request", { roomId }); });
    socket.on("room:presence", onPresence);
    socket.on("connect", join);
    if (socket.connected) join();
    return () => { socket.off("room:presence", onPresence); socket.off("connect", join); setOnline(null); };
  }, [roomId]);
  return online;
}
