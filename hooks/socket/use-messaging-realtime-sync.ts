"use client";

import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getMessagingSocket, joinRoom } from "@/lib/socket/messaging-socket";
import { queryKeys } from "@/lib/api/query-keys";
import { ApiResponse } from "@/lib/api/types";
import { MessageRecord, GetMessagesResult } from "@/lib/api/endpoints/messages";
import { RoomRecord } from "@/lib/api/endpoints/rooms";
import { useGetRooms } from "@/hooks/api/use-rooms";

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
    for (const room of rooms) {
      if (!joinedRoomIds.current.has(room.id)) {
        joinRoom(room.id);
        joinedRoomIds.current.add(room.id);
      }
    }
  }, [rooms]);

  useEffect(() => {
    const socket = getMessagingSocket();

    const handleNewMessage = (message: MessageRecord) => {
      queryClient.setQueryData<ApiResponse<GetMessagesResult>>(
        queryKeys.messages.forRoom(message.roomId),
        (old) => {
          if (!old?.data) return old;
          if (old.data.messages.some((m) => m.id === message.id)) return old;
          return {
            ...old,
            data: {
              ...old.data,
              messages: [...old.data.messages, message],
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

    socket.on("message:new", handleNewMessage);
    return () => {
      socket.off("message:new", handleNewMessage);
    };
  }, [queryClient]);
}
