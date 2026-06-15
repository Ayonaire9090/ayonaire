import { apiClient } from "../client";
import {
  LoginResponse,
  AuthRegisterResponse,
  ApiResponse,
  UserProfile,
} from "../types";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

export const authApi = {
  login: (payload: LoginPayload) =>
    apiClient<LoginResponse>("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  register: (payload: RegisterPayload) =>
    apiClient<AuthRegisterResponse>("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  getProfile: () =>
    apiClient<{ success: boolean; user: UserProfile }>(
      "/api/v1/auth/get-profile",
      {
        method: "POST",
        requireAuth: true,
      },
    ),

  refreshToken: (refreshToken: string) =>
    apiClient<LoginResponse>("/api/v1/auth/refresh-token", {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    }),
};
