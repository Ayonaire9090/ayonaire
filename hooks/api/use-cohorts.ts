import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  cohortsApi, 
  CreateCohortPayload, 
  AssignStudentPayload, 
  AssignInstructorPayload 
} from "@/lib/api/endpoints/cohorts";
import { queryKeys } from "@/lib/api/query-keys";

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
