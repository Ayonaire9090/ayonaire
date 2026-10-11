import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CreateModulePayload {
  title: string;
  description: string;
  courseId: string;
  order: number;
}

export interface ModuleResponse {
  _id: string;
  title: string;
  description: string;
  order: number;
  lessons: string[];
}

export interface Module {
  _id: string;
  title: string;
  description: string;
  course: string;
  order: number;
  lessonsCount: number;
}

export const modulesApi = {
  create: (payload: CreateModulePayload) =>
    apiClient<ApiResponse<ModuleResponse>>("/api/v1/module/create", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getForCourse: (courseId: string) =>
    apiClient<ApiResponse<Module[]>>(`/api/v1/module?courseId=${courseId}`, {
      method: "GET",
      requireAuth: true,
    }),
};
