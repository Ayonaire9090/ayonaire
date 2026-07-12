import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  coursesApi,
  CreateCategoryPayload,
  CreateCoursePayload,
  EditCoursePayload,
  AssignInstructorCoursePayload
} from "@/lib/api/endpoints/courses";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetCourses = (page?: number, limit?: number) => {
  return useQuery({
    queryKey: [...queryKeys.courses.all, "list", { page, limit }] as const,
    queryFn: () => coursesApi.getAll(page, limit),
  });
};

export const useGetCourseById = (courseId: string) => {
  return useQuery({
    queryKey: queryKeys.courses.detail(courseId),
    queryFn: () => coursesApi.getById(courseId),
    enabled: !!courseId,
  });
};

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateCategoryPayload) => coursesApi.createCategory(payload),
    onSuccess: () => {
      // Typically you'd invalidate a categories query if you had one
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.all });
    },
  });
};

export const useCreateCourseMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateCoursePayload) => coursesApi.createCourse(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.all });
    },
  });
};

export const useEditCourseMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: EditCoursePayload) => coursesApi.editCourse(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.detail(variables.courseId) });
    },
  });
};

export const useAssignInstructorToCourseMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AssignInstructorCoursePayload) => coursesApi.assignInstructor(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.detail(variables.courseId) });
    },
  });
};
