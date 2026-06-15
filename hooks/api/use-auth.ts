import { useMutation, useQuery } from "@tanstack/react-query";
import { authApi, LoginPayload, RegisterPayload } from "@/lib/api/endpoints/auth";
import { useAuthStore } from "@/store/auth.store";
import { queryKeys } from "@/lib/api/query-keys";

export const useLoginMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (payload: LoginPayload) => authApi.login(payload),
    onSuccess: (data) => {
      // Save token and user details on successful login
      if (data.success && data.token) {
        setAuth(data.token, data.user);
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
