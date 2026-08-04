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
      // A new (empty) module won't show up on the course page otherwise -
      // that page reads modules from the lesson-content endpoints, not
      // the modules endpoint above.
      queryClient.invalidateQueries({
        queryKey: queryKeys.lessons.instructorCourseContent(variables.courseId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.lessons.courseContent(variables.courseId),
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
