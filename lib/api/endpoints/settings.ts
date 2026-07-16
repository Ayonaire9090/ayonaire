import { apiClient } from "../client";
import { ApiResponse } from "../types";

export type SettingCategory =
  | "general"
  | "advanced"
  | "authentication"
  | "courses"
  | "design"
  | "email"
  | "license"
  | "monetization";

export const settingsApi = {
  getAll: () =>
    apiClient<ApiResponse<Record<SettingCategory, Record<string, any>>>>(
      "/api/v1/settings",
      { method: "GET", requireAuth: true },
    ),

  getByCategory: (category: SettingCategory) =>
    apiClient<ApiResponse<Record<string, any>>>(`/api/v1/settings/${category}`, {
      method: "GET",
      requireAuth: true,
    }),

  updateByCategory: (category: SettingCategory, data: Record<string, any>) =>
    apiClient<ApiResponse<Record<string, any>>>(`/api/v1/settings/${category}`, {
      method: "PUT",
      body: JSON.stringify(data),
      requireAuth: true,
    }),
};
