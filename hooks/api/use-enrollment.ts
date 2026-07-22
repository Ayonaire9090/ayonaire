import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  enrollmentApi,
  GetAllEnrollmentsParams,
  EnrollStudentsPayload,
} from "@/lib/api/endpoints/enrollment";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetEnrolledCourses = () => {
  return useQuery({
    queryKey: queryKeys.enrollment.enrolledCourses(),
    queryFn: () => enrollmentApi.getEnrolledCourses(),
  });
};

export const useGetCompletedCourses = () => {
  return useQuery({
    queryKey: [...queryKeys.enrollment.all, "completed-courses"] as const,
    queryFn: () => enrollmentApi.getCompletedCourses(),
  });
};

export const useGetEnrolledCourseDetail = (courseId: string) => {
  return useQuery({
    queryKey: [...queryKeys.enrollment.all, "course", courseId] as const,
    queryFn: () => enrollmentApi.getCourseDetail(courseId),
    enabled: !!courseId,
  });
};

export const useGetAllEnrollments = (params: GetAllEnrollmentsParams = {}) => {
  return useQuery({
    queryKey: [...queryKeys.enrollment.all, "admin-all", params] as const,
    queryFn: () => enrollmentApi.getAllEnrollments(params),
  });
};

export const useEnrollStudentsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: EnrollStudentsPayload) => enrollmentApi.enrollStudents(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.enrollment.all });
    },
  });
};

export const useEnrollStudentsCsvMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ courseId, file }: { courseId: string; file: File }) =>
      enrollmentApi.enrollStudentsCsv(courseId, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.enrollment.all });
    },
  });
};
