import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  courseInteractionsApi,
  LearningReminder,
} from "@/lib/api/endpoints/course-interactions";
import { queryKeys } from "@/lib/api/query-keys";

export const useCourseQuestions = (courseId: string, lessonId?: string) =>
  useQuery({
    queryKey: queryKeys.courseInteractions.questions(courseId, lessonId),
    queryFn: () => courseInteractionsApi.getQuestions(courseId, lessonId),
    enabled: !!courseId,
  });

export const useCreateCourseQuestionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: courseInteractionsApi.createQuestion,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.courseInteractions.questions(
          variables.courseId,
          variables.lessonId,
        ),
      });
    },
  });
};

export const useAnswerCourseQuestionMutation = (
  courseId: string,
  lessonId?: string,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: courseInteractionsApi.answerQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.courseInteractions.questions(courseId, lessonId),
      });
    },
  });
};

export const useUpvoteCourseQuestionMutation = (
  courseId: string,
  lessonId?: string,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: courseInteractionsApi.upvoteQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.courseInteractions.questions(courseId, lessonId),
      });
    },
  });
};

export const useCourseReviews = (courseId: string) =>
  useQuery({
    queryKey: queryKeys.courseInteractions.reviews(courseId),
    queryFn: () => courseInteractionsApi.getReviews(courseId),
    enabled: !!courseId,
  });

export const useCreateCourseReviewMutation = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: courseInteractionsApi.createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.courseInteractions.reviews(courseId),
      });
    },
  });
};

export const useLessonTranscription = (courseId: string, lessonId?: string) =>
  useQuery({
    queryKey: queryKeys.courseInteractions.transcription(courseId, lessonId),
    queryFn: () =>
      courseInteractionsApi.getTranscription(courseId, lessonId as string),
    enabled: !!courseId && !!lessonId,
  });

export const useLearningReminders = (courseId: string) =>
  useQuery({
    queryKey: queryKeys.courseInteractions.reminders(courseId),
    queryFn: () => courseInteractionsApi.getReminders(courseId),
    enabled: !!courseId,
  });

export const useCreateLearningReminderMutation = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: Omit<LearningReminder, "_id" | "course" | "user" | "createdAt">,
    ) => courseInteractionsApi.createReminder({ ...payload, courseId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.courseInteractions.reminders(courseId),
      });
    },
  });
};

export const useDeleteLearningReminderMutation = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reminderId: string) =>
      courseInteractionsApi.deleteReminder(courseId, reminderId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.courseInteractions.reminders(courseId),
      });
    },
  });
};

export const useAskCourseAssistantMutation = () =>
  useMutation({
    mutationFn: courseInteractionsApi.askAssistant,
  });
