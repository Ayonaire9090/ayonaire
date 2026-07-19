import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { roomsApi } from "@/lib/api/endpoints/rooms";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetRooms = () => {
  return useQuery({
    queryKey: queryKeys.rooms.all,
    queryFn: () => roomsApi.list(),
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
