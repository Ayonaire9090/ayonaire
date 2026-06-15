import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersApi } from "@/lib/api/endpoints/users";
import { queryKeys } from "@/lib/api/query-keys";
import { useAuthStore } from "@/store/auth.store";

export const useAddProfilePictureMutation = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

  return useMutation({
    mutationFn: (formData: FormData) => usersApi.addProfilePicture(formData),
    onSuccess: (data) => {
      // Invalidate profile query to refetch fresh data
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.profile() });
      
      // Optimistically update the store if we want to
      if (user && data.profile) {
        setUser({ ...user, profile: data.profile });
      }
    },
  });
};

export const useEditProfileMutation = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (formData: FormData) => usersApi.editProfile(formData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.profile() });
      if (data.user) {
        setUser(data.user);
      }
    },
  });
};
