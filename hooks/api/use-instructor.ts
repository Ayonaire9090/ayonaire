import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { 
  instructorApi, 
  ApplyInstructorPayload, 
  RejectInstructorPayload 
} from "@/lib/api/endpoints/instructor";
import { queryKeys } from "@/lib/api/query-keys";

export const useApplyInstructorMutation = () => {
  return useMutation({
    mutationFn: (payload: ApplyInstructorPayload) => instructorApi.apply(payload),
  });
};

export const useApproveInstructorMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (applicationId: string) => instructorApi.approve(applicationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.instructor.profiles() });
    },
  });
};

export const useRejectInstructorMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RejectInstructorPayload) => instructorApi.reject(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.instructor.profiles() });
    },
  });
};

export const useGetInstructorProfile = (instructorId: string) => {
  return useQuery({
    queryKey: queryKeys.instructor.profile(instructorId),
    queryFn: () => instructorApi.getProfile(instructorId),
    enabled: !!instructorId,
  });
};

export const useGetAllInstructorProfiles = () => {
  return useQuery({
    queryKey: queryKeys.instructor.profiles(),
    queryFn: () => instructorApi.getAllProfiles(),
  });
};
