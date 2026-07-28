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
    onSuccess: (res) => {
      // Invalidate profile query to refetch fresh data
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.profile() });

      // Optimistically update the store so the new photo shows immediately
      if (user && res.data?.profile) {
        setUser({ ...user, profile: res.data.profile });
      }
    },
  });
};

export const useEditProfileMutation = () => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

  return useMutation({
    mutationFn: (formData: FormData) => usersApi.editProfile(formData),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.profile() });
      // The backend returns only the changed fields, not a full user object,
      // so merge them into the existing user rather than replacing it. The
      // `profile` field is nullable here even when this edit didn't touch
      // the photo, so only apply it when truthy to avoid clobbering an
      // existing avatar.
      if (user && res.data) {
        const { profile, ...rest } = res.data;
        setUser({ ...user, ...rest, ...(profile ? { profile } : {}) });
      }
    },
  });
};
