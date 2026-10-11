import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  invitesApi, 
  AcceptInvitePayload, 
  InviteUsersPayload 
} from "@/lib/api/endpoints/invites";
import { queryKeys } from "@/lib/api/query-keys";

export const useAcceptInviteMutation = () => {
  return useMutation({
    mutationFn: ({ token, payload }: { token: string; payload: AcceptInvitePayload }) => 
      invitesApi.acceptInvite(token, payload),
  });
};

export const useInviteUsersMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: InviteUsersPayload) => invitesApi.inviteUsers(payload),
    onSuccess: () => {
      // Invalidate users or cohorts list if needed
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
    },
  });
};

export const useBulkInviteCsvMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => invitesApi.bulkInviteCsv(formData),
    onSuccess: () => {
      // Invalidate users or cohorts list if needed
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
    },
  });
};
