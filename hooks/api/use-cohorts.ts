import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  cohortsApi,
  CreateCohortPayload,
  AssignStudentPayload,
  AssignInstructorPayload
} from "@/lib/api/endpoints/cohorts";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetCohorts = (course?: string) => {
  return useQuery({
    queryKey: [...queryKeys.cohorts.all, "list", course] as const,
    queryFn: () => cohortsApi.getAll(course),
  });
};

export const useCreateCohortMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateCohortPayload) => cohortsApi.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cohorts.all });
    },
  });
};

export const useAssignStudentToCohortMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AssignStudentPayload) => cohortsApi.assignStudent(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cohorts.all });
    },
  });
};

export const useAssignInstructorToCohortMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AssignInstructorPayload) => cohortsApi.assignInstructor(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cohorts.all });
    },
  });
};
