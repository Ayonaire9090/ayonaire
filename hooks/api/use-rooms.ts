import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { roomsApi } from "@/lib/api/endpoints/rooms";
import { queryKeys } from "@/lib/api/query-keys";
import { useAuthStore } from "@/store/auth.store";

export const useGetRooms = () => {
  const token = useAuthStore((state) => state.token);
  return useQuery({
    queryKey: queryKeys.rooms.all,
    queryFn: () => roomsApi.list(),
    refetchInterval: 30000,
    enabled: !!token,
  });
};

export const useCreateGroupMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => roomsApi.createGroup(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all });
    },
  });
};

export const useCreateDMMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (otherUserId: string) => roomsApi.createDM(otherUserId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all });
    },
  });
};

export const useCreateCourseRoomMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId: string) => roomsApi.createCourseRoom(courseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all });
    },
  });
};
