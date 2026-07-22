import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  coursesApi,
  CreateCategoryPayload,
  CreateCoursePayload,
  EditCoursePayload,
  AssignInstructorCoursePayload,
  GetCoursesParams,
} from "@/lib/api/endpoints/courses";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetCourses = (params: GetCoursesParams = {}) => {
  return useQuery({
    queryKey: [...queryKeys.courses.all, "list", params] as const,
    queryFn: () => coursesApi.getAll(params),
  });
};

export const useGetCourseById = (courseId: string) => {
  return useQuery({
    queryKey: queryKeys.courses.detail(courseId),
    queryFn: () => coursesApi.getById(courseId),
    enabled: !!courseId,
  });
};

export const useGetCourseCategories = () => {
  return useQuery({
    queryKey: [...queryKeys.courses.all, "categories"] as const,
    queryFn: () => coursesApi.getCategories(),
  });
};

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateCategoryPayload) => coursesApi.createCategory(payload),
    onSuccess: () => {
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

export const useDeleteCourseMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId: string) => coursesApi.deleteCourse(courseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.all });
    },
  });
};

export const useTogglePublishMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId: string) => coursesApi.togglePublish(courseId),
    onSuccess: (_, courseId) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.detail(courseId) });
    },
  });
};
