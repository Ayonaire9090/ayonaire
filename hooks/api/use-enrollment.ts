import { useQuery } from "@tanstack/react-query";
import { enrollmentApi } from "@/lib/api/endpoints/enrollment";
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
