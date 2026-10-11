import { apiClient } from "../client";
import { ApiResponse, UserProfile } from "../types";

export const teamApi = {
  getAll: () =>
    apiClient<ApiResponse<UserProfile[]>>("/api/v1/team", {
      method: "GET",
      requireAuth: true,
    }),

  invite: (email: string, role: "admin" | "instructor" = "admin") =>
    apiClient<ApiResponse>("/api/v1/team/invite", {
      method: "POST",
      body: JSON.stringify({ email, role }),
      requireAuth: true,
    }),

  updateRole: (id: string, role: "admin" | "instructor" | "user") =>
    apiClient<ApiResponse<UserProfile>>(`/api/v1/team/${id}/role`, {
      method: "PUT",
      body: JSON.stringify({ role }),
      requireAuth: true,
    }),

  suspend: (id: string) =>
    apiClient<ApiResponse<UserProfile>>(`/api/v1/team/${id}/suspend`, {
      method: "PUT",
      requireAuth: true,
    }),

  remove: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/team/${id}`, {
      method: "DELETE",
      requireAuth: true,
    }),
};
