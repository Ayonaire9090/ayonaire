import { apiClient } from "../client";
import { UserProfile, PaginatedResponse, ApiResponse } from "../types";

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  phoneNumber?: string;
  role?: string;
}

// Paths corrected 2026-07-14 against the live Swagger spec
// (https://ayonaire.onrender.com/api-docs/) - the previous team had these
// under /api/v1/user/*, but the real routes are under /api/v1/auth/*.
export const adminApi = {
  getUsers: () =>
    apiClient<{ success: boolean; count: number; users: UserProfile[] }>(
      "/api/v1/auth/non-admin-users",
      {
        method: "GET",
        requireAuth: true,
      }
    ),

  updateUser: (id: string, payload: UpdateUserPayload) =>
    apiClient<{ success: boolean; message: string; user?: UserProfile }>(
      `/api/v1/auth/user/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ id, ...payload }),
        requireAuth: true,
      }
    ),

  suspendUser: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/auth/user/${id}/suspend-user`, {
      method: "PUT",
      requireAuth: true,
    }),

  deactivateUser: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/auth/user/${id}/deactivate-user`, {
      method: "PUT",
      requireAuth: true,
    }),

  activateUser: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/auth/user/${id}/activate-user`, {
      method: "PUT",
      requireAuth: true,
    }),

  deleteUser: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/auth/user/${id}`, {
      method: "DELETE",
      requireAuth: true,
    }),

  assignRole: (id: string, role: string) =>
    apiClient<{ success: boolean; message: string; user: UserProfile }>(
      `/api/v1/auth/user/${id}/assign-role`,
      {
        method: "PUT",
        body: JSON.stringify({ id, role }),
        requireAuth: true,
      }
    ),

  getLoginHistory: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/auth/user/${id}/login-history`, {
      method: "GET",
      requireAuth: true,
    }),

  getUserActivity: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/auth/user/${id}/user-activity-history`, {
      method: "GET",
      requireAuth: true,
    }),
};
