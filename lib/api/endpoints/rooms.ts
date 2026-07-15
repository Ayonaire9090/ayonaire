import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface RoomParticipant {
  id: string;
  name: string;
  profile?: { url: string; publicId: string } | null;
}

export interface RoomLastMessage {
  text?: string;
  senderId: string;
  hasMedia: boolean;
  hasFile: boolean;
  createdAt: string;
}

export interface RoomRecord {
  id: string;
  name?: string;
  description?: string;
  isGroup: boolean;
  profile?: { url: string; publicId: string };
  roomCreator: string;
  participants: RoomParticipant[];
  createdAt: string;
  updatedAt: string;
  lastMessage: RoomLastMessage | null;
}

export const roomsApi = {
  list: () =>
    apiClient<ApiResponse<RoomRecord[]>>("/api/v1/room", {
      method: "GET",
      requireAuth: true,
    }),

  createGroup: (formData: FormData) =>
    apiClient<ApiResponse<RoomRecord>>("/api/v1/room", {
      method: "POST",
      body: formData,
      requireAuth: true,
    }),

  createDM: (otherUserId: string) =>
    apiClient<ApiResponse<RoomRecord>>("/api/v1/room/dm", {
      method: "POST",
      body: JSON.stringify({ otherUserId }),
      requireAuth: true,
    }),
};
