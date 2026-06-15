import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateWorkshopPayload {
  title: string;
  description: string;
  platform: string;
  status: string;
  startDate: string;
  endDate: string;
}

export const workshopsApi = {
  create: (payload: CreateWorkshopPayload) =>
    apiClient<ApiResponse>("/api/v1/workshop", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getAll: (page?: number, limit?: number) => {
    const queryParams = new URLSearchParams();
    if (page) queryParams.append("page", page.toString());
    if (limit) queryParams.append("limit", limit.toString());
    
    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";
    
    return apiClient<ApiResponse>(`/api/v1/workshop${queryString}`, {
      method: "GET",
      requireAuth: true,
    });
  },

  getById: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/workshop/${id}`, {
      method: "GET",
      requireAuth: true,
    }),
};
