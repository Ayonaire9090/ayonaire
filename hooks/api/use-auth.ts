import { useMutation, useQuery } from "@tanstack/react-query";
import { authApi, LoginPayload, RegisterPayload } from "@/lib/api/endpoints/auth";
import {
  AcceptInvitePayload,
  VerifyEmailPayload,
  ResendVerificationEmailPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
} from "@/lib/api/types";
import { useAuthStore } from "@/store/auth.store";
import { queryKeys } from "@/lib/api/query-keys";

export const useLoginMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (payload: LoginPayload) => authApi.login(payload),
    onSuccess: (res) => {
      const token = res.token || res.data?.token || res.data?.accessToken;
      const user = res.user || res.data?.user;
      const refreshToken = res.data?.refreshToken;
      // Save token and user details on successful login
      if (res.success && token && user) {
        setAuth(token, user, refreshToken);
      }
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => authApi.register(payload),
  });
};

export const useGetProfile = () => {
  const token = useAuthStore((state) => state.token);
  const setUser = useAuthStore((state) => state.setUser);

  return useQuery({
    queryKey: queryKeys.auth.profile(),
    queryFn: async () => {
      const data = await authApi.getProfile();
      if (data.success && data.user) {
        setUser(data.user);
      }
      return data;
    },
    // Only run if we have a token
    enabled: !!token,
  });
};

export const useLogoutMutation = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth);

  return useMutation({
    mutationFn: (payload: { allDevices?: boolean } = {}) => {
      const refreshToken = useAuthStore.getState().refreshToken ?? "";
      return authApi.logout({ refreshToken, allDevices: payload.allDevices });
    },
    onSuccess: () => {
      clearAuth();
    },
  });
};

export const useAcceptInviteMutation = () => {
  return useMutation({
    mutationFn: ({ token, payload }: { token: string; payload: AcceptInvitePayload }) =>
      authApi.acceptInvite(token, payload),
  });
};

export const useVerifyEmailMutation = () => {
  return useMutation({
    mutationFn: (payload: VerifyEmailPayload) => authApi.verifyEmailPost(payload),
  });
};

export const useResendVerificationEmailMutation = () => {
  return useMutation({
    mutationFn: (payload: ResendVerificationEmailPayload) =>
      authApi.resendVerificationEmail(payload),
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: ForgotPasswordPayload) => authApi.forgotPassword(payload),
  });
};

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload: ResetPasswordPayload) => authApi.resetPassword(payload),
  });
};
