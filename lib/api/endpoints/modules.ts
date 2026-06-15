import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateModulePayload {
  title: string;
  description?: string;
  course: string;
  order: number;
}

export const modulesApi = {
  create: (payload: CreateModulePayload) =>
    apiClient<ApiResponse>("/api/v1/module/create", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),
};
