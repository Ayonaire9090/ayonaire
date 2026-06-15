import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { adminApi, UpdateUserPayload } from "@/lib/api/endpoints/admin";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetAdminUsers = () => {
  return useQuery({
    queryKey: queryKeys.admin.users(),
    queryFn: () => adminApi.getUsers(),
  });
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateUserPayload }) =>
      adminApi.updateUser(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.admin.users() });
    },
  });
};

export const useSuspendUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => adminApi.suspendUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.admin.users() });
    },
  });
};

export const useDeactivateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => adminApi.deactivateUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.admin.users() });
    },
  });
};

export const useAssignRoleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, role }: { id: string; role: string }) => adminApi.assignRole(id, role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.admin.users() });
    },
  });
};

export const useGetUserLoginHistory = (id: string) => {
  return useQuery({
    queryKey: queryKeys.users.loginHistory(id),
    queryFn: () => adminApi.getLoginHistory(id),
    enabled: !!id,
  });
};

export const useGetUserActivity = (id: string) => {
  return useQuery({
    queryKey: queryKeys.users.activity(id),
    queryFn: () => adminApi.getUserActivity(id),
    enabled: !!id,
  });
};
