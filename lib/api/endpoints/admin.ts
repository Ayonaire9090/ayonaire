import { apiClient } from "../client";
import { UserProfile, PaginatedResponse, ApiResponse } from "../types";

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  phoneNumber?: string;
  role?: string;
}

export const adminApi = {
  getUsers: () =>
    apiClient<{ success: boolean; count: number; users: UserProfile[] }>(
      "/api/v1/user/non-admin-users",
      {
        method: "GET",
        requireAuth: true,
      }
    ),

  updateUser: (id: string, payload: UpdateUserPayload) =>
    apiClient<{ success: boolean; message: string; user?: UserProfile }>(
      `/api/v1/user/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ id, ...payload }),
        requireAuth: true,
      }
    ),

  suspendUser: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/user/${id}/suspend-user`, {
      method: "PUT",
      requireAuth: true,
    }),

  deactivateUser: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/user/${id}/deativate-user`, {
      method: "PUT",
      requireAuth: true,
    }),

  assignRole: (id: string, role: string) =>
    apiClient<{ success: boolean; message: string; user: UserProfile }>(
      `/api/v1/user/${id}/assign-role`,
      {
        method: "PUT",
        body: JSON.stringify({ id, role }),
        requireAuth: true,
      }
    ),

  getLoginHistory: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/user/${id}/login-history`, {
      method: "GET",
      requireAuth: true,
    }),

  getUserActivity: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/user/${id}/user-activity-history`, {
      method: "GET",
      requireAuth: true,
    }),
};
