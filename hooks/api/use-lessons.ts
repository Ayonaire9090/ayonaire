import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  lessonsApi,
  UploadLessonPayload,
  UploadLessonVideoPayload,
  UpdateLastLessonPayload,
  MarkLessonCompletedPayload,
} from "@/lib/api/endpoints/lessons";
import { queryKeys } from "@/lib/api/query-keys";

export const useUploadLessonMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UploadLessonPayload) => lessonsApi.upload(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.lessons.all });
    },
  });
};

export const useUploadLessonVideoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UploadLessonVideoPayload) => lessonsApi.uploadVideo(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.lessons.all });
    },
  });
};

export const useMarkLessonCompletedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: MarkLessonCompletedPayload) => lessonsApi.markCompleted(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.lessons.courseContent(variables.courseId),
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.enrollment.all });
    },
  });
};

export const useUpdateLastLessonMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateLastLessonPayload) => lessonsApi.updateLastLesson(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.lessons.resumeLast(variables.courseId) });
    },
  });
};

export const useResumeLastLesson = (courseId: string) => {
  return useQuery({
    queryKey: queryKeys.lessons.resumeLast(courseId),
    queryFn: () => lessonsApi.resumeLastLesson(courseId),
    enabled: !!courseId,
  });
};

export const useCourseContent = (courseId: string) => {
  return useQuery({
    queryKey: queryKeys.lessons.courseContent(courseId),
    queryFn: () => lessonsApi.getCourseContent(courseId),
    enabled: !!courseId,
  });
};
