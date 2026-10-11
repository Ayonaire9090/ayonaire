import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  workshopsApi,
  CreateWorkshopPayload,
  EditWorkshopPayload,
} from "@/lib/api/endpoints/workshops";
import { queryKeys } from "@/lib/api/query-keys";

export const useCreateWorkshopMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateWorkshopPayload) => workshopsApi.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workshops.all });
    },
  });
};

export const useGetWorkshops = (page?: number, limit?: number) => {
  return useQuery({
    // Adding page/limit to query key so React Query caches pages independently
    queryKey: [...queryKeys.workshops.all, "list", { page, limit }] as const,
    queryFn: () => workshopsApi.getAll(page, limit),
  });
};

export const useGetWorkshopById = (id: string) => {
  return useQuery({
    queryKey: queryKeys.workshops.detail(id),
    queryFn: () => workshopsApi.getById(id),
    enabled: !!id,
  });
};

export const useEditWorkshopMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: EditWorkshopPayload) => workshopsApi.edit(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workshops.all });
    },
  });
};

export const useDeleteWorkshopMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => workshopsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.workshops.all });
    },
  });
};
