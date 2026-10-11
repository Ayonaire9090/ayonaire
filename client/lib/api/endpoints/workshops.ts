import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateWorkshopPayload {
  title: string;
  description: string;
  platform: {
    name: string;
    link: string;
    type: string;
  };
  startDate: string;
  endDate: string;
}

export interface EditWorkshopPayload extends Partial<CreateWorkshopPayload> {
  workShopId: string;
}

export interface WorkshopRecord {
  id: string;
  title: string;
  description: string;
  platform: {
    name: string;
    link: string;
    type: string;
  };
  status: "live" | "upcoming" | "completed";
  createdBy?: {
    id: string;
    name: string;
  } | null;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkshopListData {
  workshops: WorkshopRecord[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const workshopsApi = {
  create: (payload: CreateWorkshopPayload) =>
    apiClient<ApiResponse<WorkshopRecord>>("/api/v1/workshop", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getAll: (page?: number, limit?: number) => {
    const queryParams = new URLSearchParams();
    if (page) queryParams.append("page", page.toString());
    if (limit) queryParams.append("limit", limit.toString());

    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

    return apiClient<ApiResponse<WorkshopListData>>(`/api/v1/workshop${queryString}`, {
      method: "GET",
      requireAuth: true,
    });
  },

  getById: (id: string) =>
    apiClient<ApiResponse<WorkshopRecord>>(`/api/v1/workshop/${id}`, {
      method: "GET",
      requireAuth: true,
    }),

  edit: ({ workShopId, ...payload }: EditWorkshopPayload) =>
    apiClient<ApiResponse<WorkshopRecord>>(`/api/v1/workshop/${workShopId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  delete: (id: string) =>
    apiClient<ApiResponse>(`/api/v1/workshop/${id}`, {
      method: "DELETE",
      requireAuth: true,
    }),
};
