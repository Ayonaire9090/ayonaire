import { apiClient } from "../client";
import {
  LoginResponse,
  AuthRegisterResponse,
  ApiResponse,
  UserProfile,
  VerifyEmailPayload,
  ResendVerificationEmailPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  AcceptInvitePayload,
  LogoutPayload,
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

  logout: (payload: LogoutPayload) =>
    apiClient<ApiResponse>("/api/v1/auth/logout", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  acceptInvite: (token: string, payload: AcceptInvitePayload) =>
    apiClient<ApiResponse<{ _id: string; name: string; email: string; status: string; createdAt: string }>>(
      `/api/v1/auth/accept-invite/${token}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    ),

  verifyEmail: (token: string) =>
    apiClient<ApiResponse>(`/api/v1/auth/verify-email?token=${token}`, {
      method: "GET",
    }),

  verifyEmailPost: (payload: VerifyEmailPayload) =>
    apiClient<ApiResponse>("/api/v1/auth/verify-email", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  resendVerificationEmail: (payload: ResendVerificationEmailPayload) =>
    apiClient<ApiResponse>("/api/v1/auth/resend-verification-email", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  forgotPassword: (payload: ForgotPasswordPayload) =>
    apiClient<ApiResponse>("/api/v1/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  resetPassword: (payload: ResetPasswordPayload) =>
    apiClient<ApiResponse>("/api/v1/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
