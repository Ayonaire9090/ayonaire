import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { modulesApi, CreateModulePayload } from "@/lib/api/endpoints/modules";
import { queryKeys } from "@/lib/api/query-keys";

export const useCreateModuleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateModulePayload) => modulesApi.create(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.modules.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.modules.forCourse(variables.courseId),
      });
    },
  });
};

export const useGetModulesForCourse = (courseId: string) => {
  return useQuery({
    queryKey: queryKeys.modules.forCourse(courseId),
    queryFn: () => modulesApi.getForCourse(courseId),
    enabled: !!courseId,
  });
};
