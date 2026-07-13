import { apiClient } from "../client";
import { ApiResponse, PaginatedResponse } from "../types";

export interface CreateWorkshopPayload {
  title: string;
  description: string;
  platform: string;
  status: string;
  startDate: string;
  endDate: string;
}

// Shape returned by the backend for a single workshop. NOTE: field names
// beyond CreateWorkshopPayload (_id, createdBy, createdAt) are a best-effort
// guess following the same convention as QuizRecord - confirm against the
// real response and adjust once the backend confirms it.
export interface WorkshopRecord {
  _id: string;
  title: string;
  description?: string;
  platform?: string;
  status?: string;
  startDate: string;
  endDate: string;
  createdBy?: string | { _id: string; name: string };
  createdAt?: string;
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

    return apiClient<PaginatedResponse<WorkshopRecord>>(`/api/v1/workshop${queryString}`, {
      method: "GET",
      requireAuth: true,
    });
  },

  getById: (id: string) =>
    apiClient<ApiResponse<WorkshopRecord>>(`/api/v1/workshop/${id}`, {
      method: "GET",
      requireAuth: true,
    }),
};
