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
  replyTo?: {
    id: string;
    text: string;
    senderId: MessageSender;
  } | null;
  media?: { url: string; publicId: string };
  file?: { url: string; publicId: string };
  reactions: {
    emoji: string;
    users: MessageSender[];
    count: number;
  }[];
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

  react: (payload: { messageId: string; emoji: string }) =>
    apiClient<ApiResponse<MessageRecord>>(
      `/api/v1/message/${payload.messageId}/reactions`,
      {
        method: "POST",
        body: JSON.stringify({ emoji: payload.emoji }),
        requireAuth: true,
      },
    ),

  delete: (messageId: string) =>
    apiClient<ApiResponse<{ id: string; roomId: string }>>(
      `/api/v1/message/${messageId}`,
      {
        method: "DELETE",
        requireAuth: true,
      },
    ),

  getForRoom: (roomId: string, page = 1, limit = 50) =>
    apiClient<ApiResponse<GetMessagesResult>>(
      `/api/v1/message/${roomId}?page=${page}&limit=${limit}`,
      {
        method: "GET",
        requireAuth: true,
      },
    ),
};
