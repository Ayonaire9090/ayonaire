import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface MessageSender {
  id: string;
  name: string;
  profile?: { url: string; publicId: string } | null;
}

export interface MessageRecord {
  id: string;
  senderId: MessageSender;
  roomId: string;
  text: string;
  media?: { url: string; publicId: string };
  file?: { url: string; publicId: string };
  createdAt: string;
}

export interface GetMessagesResult {
  messages: MessageRecord[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const messagesApi = {
  send: (formData: FormData) =>
    apiClient<ApiResponse<MessageRecord>>("/api/v1/message/send", {
      method: "POST",
      body: formData,
      requireAuth: true,
    }),

  getForRoom: (roomId: string, page = 1, limit = 50) =>
    apiClient<ApiResponse<GetMessagesResult>>(
      `/api/v1/message/${roomId}?page=${page}&limit=${limit}`,
      {
        method: "GET",
        requireAuth: true,
      },
    ),
};
