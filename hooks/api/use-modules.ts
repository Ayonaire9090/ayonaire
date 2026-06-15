import { useMutation, useQueryClient } from "@tanstack/react-query";
import { modulesApi, CreateModulePayload } from "@/lib/api/endpoints/modules";
import { queryKeys } from "@/lib/api/query-keys";

export const useCreateModuleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateModulePayload) => modulesApi.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.modules.all });
    },
  });
};
