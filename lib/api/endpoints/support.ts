import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface SupportTicketReply {
  author: { _id: string; name: string; role?: string } | string;
  message: string;
  createdAt: string;
}

export interface SupportTicket {
  _id: string;
  user: { _id: string; name: string; email: string } | string;
  subject: string;
  message: string;
  category: string;
  priority: "low" | "medium" | "high";
  status: "open" | "in-progress" | "resolved" | "closed";
  replies: SupportTicketReply[];
  createdAt: string;
}

export interface CreateTicketPayload {
  subject: string;
  message: string;
  category?: string;
  priority?: string;
}

export const supportApi = {
  create: (payload: CreateTicketPayload) =>
    apiClient<ApiResponse<SupportTicket>>("/api/v1/support", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getAll: (params?: { status?: string; priority?: string; page?: number; limit?: number }) => {
    const query = new URLSearchParams();
    if (params?.status) query.append("status", params.status);
    if (params?.priority) query.append("priority", params.priority);
    if (params?.page) query.append("page", String(params.page));
    if (params?.limit) query.append("limit", String(params.limit));
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse & { tickets: SupportTicket[] }>(
      `/api/v1/support${qs}`,
      { method: "GET", requireAuth: true },
    );
  },

  getById: (ticketId: string) =>
    apiClient<ApiResponse<SupportTicket>>(`/api/v1/support/${ticketId}`, {
      method: "GET",
      requireAuth: true,
    }),

  reply: (ticketId: string, message: string) =>
    apiClient<ApiResponse<SupportTicket>>(`/api/v1/support/${ticketId}/reply`, {
      method: "POST",
      body: JSON.stringify({ message }),
      requireAuth: true,
    }),

  updateStatus: (ticketId: string, status: string) =>
    apiClient<ApiResponse<SupportTicket>>(`/api/v1/support/${ticketId}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
      requireAuth: true,
    }),
};
