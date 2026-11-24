"use client";

import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getMessagingSocket, joinRoom, leaveRoom } from "@/lib/socket/messaging-socket";
import { queryKeys } from "@/lib/api/query-keys";
import { ApiResponse } from "@/lib/api/types";
import { MessageRecord, GetMessagesResult } from "@/lib/api/endpoints/messages";
import { RoomRecord } from "@/lib/api/endpoints/rooms";
import { useGetRooms } from "@/hooks/api/use-rooms";
import { useAuthStore } from "@/store/auth.store";

const sortMessagesByCreatedAt = (messages: MessageRecord[]) =>
  [...messages].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );

// Mount once for the whole messages section (see messages/layout.tsx).
// Joins every room the user belongs to so conversation previews update
// live even when that conversation isn't the one currently open, and
// patches both the open thread's message list and the room list's
// preview/ordering as new messages broadcast in over the socket.
export function useMessagingRealtimeSync() {
  const queryClient = useQueryClient();
  const { data: roomsData } = useGetRooms();
  const rooms = roomsData?.data ?? [];
  const joinedRoomIds = useRef(new Set<string>());

  useEffect(() => {
    let token = useAuthStore.getState().token;
    return useAuthStore.subscribe((state) => {
      if (state.token === token) return;
      token = state.token;
      joinedRoomIds.current.clear();
      for (const key of [queryKeys.rooms.all, queryKeys.messages.all, ["room-pins"], ["message-thread"], ["room-events"], ["message-search"], ["assigned-instructors"]]) clientRemove(key);
    });
    function clientRemove(key: readonly unknown[]) { queryClient.removeQueries({ queryKey: key }); }
  }, [queryClient]);

  useEffect(() => {
    const currentIds = new Set(rooms.map((room) => room.id));
    for (const id of joinedRoomIds.current) {
      if (!currentIds.has(id)) { leaveRoom(id); joinedRoomIds.current.delete(id); }
    }
    for (const room of rooms) {
      if (!joinedRoomIds.current.has(room.id)) {
        joinRoom(room.id);
        joinedRoomIds.current.add(room.id);
      }
    }
  }, [rooms]);

  useEffect(() => {
    const socket = getMessagingSocket();
    const rejoinRooms = () => {
      for (const roomId of joinedRoomIds.current) socket.emit("room:join", { roomId });
      // Events emitted while disconnected cannot be replayed by Socket.IO.
      // Refresh cached conversations after reconnecting to catch up.
      void queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.messages.all });
    };
    socket.on("connect", rejoinRooms);

    const handleNewMessage = (message: MessageRecord) => {
      queryClient.invalidateQueries({ queryKey: ["message-thread", message.roomId] });
      const room = queryClient.getQueryData<ApiResponse<RoomRecord[]>>(queryKeys.rooms.all)?.data?.find((item) => item.id === message.roomId);
      if (typeof window !== "undefined" && document.hidden && "Notification" in window && Notification.permission === "granted" && !room?.muted && message.senderId.id !== useAuthStore.getState().user?._id) {
        try {
          const notification = new Notification("Ayonaire message", { body: `${message.senderId.name} sent a message` });
          notification.onclick = () => { window.focus(); notification.close(); };
        } catch { /* Some browsers require a service worker for notifications. */ }
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all });
      queryClient.invalidateQueries({ queryKey: ["message-search", message.roomId] });
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(message.roomId),
        (old) => {
          if (!old?.data) return old;
          if (old.data.messages.some((m) => m.id === message.id)) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: sortMessagesByCreatedAt([...old.data.messages, message]),
            },
          };
        },
      );

      queryClient.setQueryData<ApiResponse<RoomRecord[]>>(
        queryKeys.rooms.all,
        (old) => {
          if (!old?.data) return old;
          const updated = old.data.map((room) =>
            room.id === message.roomId
              ? {
                  ...room,
                  lastMessage: {
                    text: message.text || undefined,
                    senderId: message.senderId.id,
                    hasMedia: !!message.media,
                    hasFile: !!message.file,
                    createdAt: message.createdAt,
                  },
                  updatedAt: message.createdAt,
                }
              : room,
          );
          updated.sort(
            (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
          );
          return { ...old, data: updated };
        },
      );
    };

    const handleMessageReaction = (message: MessageRecord) => {
      queryClient.invalidateQueries({ queryKey: ["message-thread", message.roomId] });
      queryClient.invalidateQueries({ queryKey: ["room-pins", message.roomId] });
      queryClient.invalidateQueries({ queryKey: ["message-search", message.roomId] });
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(message.roomId),
        (old) => {
          if (!old?.data) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: old.data.messages.map((item) =>
                item.id === message.id ? message : item,
              ),
            },
          };
        },
      );
    };

    const handleMessageDeleted = (payload: { id: string; roomId: string }) => {
      queryClient.invalidateQueries({ queryKey: ["message-thread", payload.roomId] });
      queryClient.invalidateQueries({ queryKey: ["room-pins", payload.roomId] });
      queryClient.invalidateQueries({ queryKey: ["message-search", payload.roomId] });
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(payload.roomId),
        (old) => {
          if (!old?.data) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: old.data.messages.filter(
                (message) => message.id !== payload.id,
              ),
            },
          };
        },
      );
      queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all });
    };

    socket.on("message:new", handleNewMessage);
    socket.on("message:reaction", handleMessageReaction);
    socket.on("message:updated", handleMessageReaction);
    const handleRead = (payload: { roomId: string }) => { queryClient.invalidateQueries({ queryKey: queryKeys.messages.forRoom(payload.roomId) }); };
    socket.on("message:read", handleRead);
    const handleEventsUpdated = (payload: { roomId: string }) => { queryClient.invalidateQueries({ queryKey: ["room-events", payload.roomId] }); };
    socket.on("room:events-updated", handleEventsUpdated);
    const handleRoomSettings = () => { queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all }); };
    socket.on("room:settings-updated", handleRoomSettings);
    socket.on("message:deleted", handleMessageDeleted);
    return () => {
      socket.off("connect", rejoinRooms);
      socket.off("message:new", handleNewMessage);
      socket.off("message:reaction", handleMessageReaction);
      socket.off("message:updated", handleMessageReaction);
      socket.off("message:read", handleRead);
      socket.off("room:events-updated", handleEventsUpdated);
      socket.off("room:settings-updated", handleRoomSettings);
      socket.off("message:deleted", handleMessageDeleted);
    };
  }, [queryClient]);
}
