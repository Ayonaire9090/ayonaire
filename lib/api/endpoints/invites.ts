import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface AcceptInvitePayload {
  name: string;
  password: string;
}

export interface InviteUsersPayload {
  emails: string[];
  cohortId?: string;
  courseId?: string;
}

export const invitesApi = {
  acceptInvite: (token: string, payload: AcceptInvitePayload) =>
    apiClient<ApiResponse>(`/api/v1/auth/accept-invite/${token}`, {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  inviteUsers: (payload: InviteUsersPayload) =>
    apiClient<ApiResponse>("/api/v1/auth/invite", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  bulkInviteCsv: (formData: FormData) =>
    apiClient<ApiResponse>("/api/v1/auth/invite/csv", {
      method: "POST",
      body: formData,
      headers: { "Content-Type": undefined as any },
      requireAuth: true,
    }),
};
