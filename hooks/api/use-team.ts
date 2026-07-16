import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { teamApi } from "@/lib/api/endpoints/team";

const teamKey = ["team"] as const;

export const useGetTeamMembers = () => {
  return useQuery({
    queryKey: teamKey,
    queryFn: () => teamApi.getAll(),
  });
};

export const useInviteTeamMemberMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, role }: { email: string; role?: "admin" | "instructor" }) =>
      teamApi.invite(email, role),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: teamKey }),
  });
};

export const useUpdateTeamMemberRoleMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, role }: { id: string; role: "admin" | "instructor" | "user" }) =>
      teamApi.updateRole(id, role),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: teamKey }),
  });
};

export const useSuspendTeamMemberMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => teamApi.suspend(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: teamKey }),
  });
};

export const useRemoveTeamMemberMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => teamApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: teamKey }),
  });
};
