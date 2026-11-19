"use client";

import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { roomsApi } from "@/lib/api/endpoints/rooms";
import { messagesApi } from "@/lib/api/endpoints/messages";
import { queryKeys } from "@/lib/api/query-keys";

export function useChatFeatures(roomId: string, lastMessageId?: string) {
  const client = useQueryClient();
  const pins = useQuery({ queryKey: ["room-pins", roomId], queryFn: () => roomsApi.pinnedMessages(roomId), enabled: !!roomId });
  const preference = useMutation({ mutationFn: ({ name, enabled }: { name: "muted" | "pinned"; enabled: boolean }) => roomsApi.setPreference(roomId, name, enabled), onSuccess: () => client.invalidateQueries({ queryKey: queryKeys.rooms.all }) });
  const pin = useMutation({ mutationFn: ({ messageId, pinned }: { messageId: string; pinned: boolean }) => messagesApi.pin(messageId, pinned), onSuccess: () => { client.invalidateQueries({ queryKey: ["room-pins", roomId] }); client.invalidateQueries({ queryKey: queryKeys.messages.forRoom(roomId) }); } });
  const edit = useMutation({ mutationFn: ({ messageId, text }: { messageId: string; text: string }) => messagesApi.edit(messageId, text), onSuccess: () => { client.invalidateQueries({ queryKey: ["room-pins", roomId] }); client.invalidateQueries({ queryKey: queryKeys.messages.forRoom(roomId) }); } });
  useEffect(() => {
    if (!roomId || !lastMessageId) return;
    const mark = () => { if (document.visibilityState === "visible") void roomsApi.markRead(roomId).then(() => client.invalidateQueries({ queryKey: queryKeys.rooms.all })).catch(() => {}); };
    mark(); document.addEventListener("visibilitychange", mark);
    return () => document.removeEventListener("visibilitychange", mark);
  }, [roomId, lastMessageId, client]);
  return { pins, preference, pin, edit };
}
