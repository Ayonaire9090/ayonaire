import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface NotificationRecord {
  _id: string;
  name: string;
  message: string;
  type: string;
  recipientType: string;
  recipients?: string[];
  course?: { _id: string; title: string } | string | null;
  cohort?: { _id: string; name: string } | string | null;
  channel: string;
  sendOption: string;
  scheduledAt?: string;
  isRecurringTemplate: boolean;
  status: string;
  sentAt?: string;
  stats: { successCount: number; failedCount: number };
  createdAt: string;
}

export interface CreateNotificationPayload {
  name: string;
  message: string;
  type?: string;
  recipientType?: string;
  recipients?: string[];
  course?: string;
  cohort?: string;
  channel?: string;
  sendOption?: string;
  scheduledAt?: string;
  isRecurringTemplate?: boolean;
  status?: string;
}

export interface UpdateNotificationPayload {
  name?: string;
  message?: string;
  status?: string;
  scheduledAt?: string;
}

const buildQuery = (params?: Record<string, string | undefined>) => {
  if (!params) return "";
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) query.append(key, value);
  });
  const qs = query.toString();
  return qs ? `?${qs}` : "";
};

export const notificationsApi = {
  getAll: (params?: { type?: string; status?: string; channel?: string; isRecurringTemplate?: string }) =>
    apiClient<ApiResponse & { notifications: NotificationRecord[] }>(
      `/api/v1/notification${buildQuery(params)}`,
      { method: "GET", requireAuth: true },
    ),

  getById: (id: string) =>
    apiClient<ApiResponse<NotificationRecord>>(`/api/v1/notification/${id}`, {
      method: "GET",
      requireAuth: true,
    }),

  create: (payload: CreateNotificationPayload) =>
    apiClient<ApiResponse<NotificationRecord>>("/api/v1/notification", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  update: (id: string, payload: UpdateNotificationPayload) =>
    apiClient<ApiResponse<NotificationRecord>>(`/api/v1/notification/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  remove: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/notification/${id}`, {
      method: "DELETE",
      requireAuth: true,
    }),

  send: (id: string) =>
    apiClient<ApiResponse<NotificationRecord>>(`/api/v1/notification/${id}/send`, {
      method: "POST",
      requireAuth: true,
    }),
};

// Email Broadcast is the same backend Notification system with
// channel="email" — the backend also mounts the identical router at
// /api/v1/email-broadcast for a semantically-named endpoint.
export const emailBroadcastApi = {
  send: (payload: Omit<CreateNotificationPayload, "channel" | "type">) =>
    apiClient<ApiResponse<NotificationRecord>>("/api/v1/email-broadcast", {
      method: "POST",
      body: JSON.stringify({ ...payload, channel: "email", type: "email", sendOption: "now" }),
      requireAuth: true,
    }),

  getHistory: () =>
    apiClient<ApiResponse & { notifications: NotificationRecord[] }>(
      "/api/v1/email-broadcast?channel=email&status=sent",
      { method: "GET", requireAuth: true },
    ),
};
