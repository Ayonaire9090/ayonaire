import { useQuery } from "@tanstack/react-query";
import { enrollmentApi } from "@/lib/api/endpoints/enrollment";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetEnrolledCourses = () => {
  return useQuery({
    queryKey: queryKeys.enrollment.enrolledCourses(),
    queryFn: () => enrollmentApi.getEnrolledCourses(),
  });
};
