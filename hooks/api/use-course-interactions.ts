import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CourseQuestion,
  courseInteractionsApi,
  LearningReminder,
} from "@/lib/api/endpoints/course-interactions";
import { queryKeys } from "@/lib/api/query-keys";
import { ApiResponse } from "@/lib/api/types";
import { useAuthStore } from "@/store/auth.store";

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
    onMutate: async (variables) => {
      const user = useAuthStore.getState().user;
      if (!user) return {};

      const queryKey = queryKeys.courseInteractions.questions(courseId, lessonId);
      await queryClient.cancelQueries({ queryKey });
      const optimisticAnswer = {
        id: `optimistic-${Date.now()}`,
        text: variables.text,
        author: {
          id: user._id,
          name: user.name,
          profile: user.profile ?? null,
        },
        createdAt: new Date().toISOString(),
      };

      queryClient.setQueryData<ApiResponse<{ questions: CourseQuestion[] }>>(
        queryKey,
        (old) => {
          if (!old?.data) return old;
          return {
            ...old,
            data: {
              ...old.data,
              questions: old.data.questions.map((question) =>
                question.id === variables.questionId
                  ? {
                      ...question,
                      answers: [...question.answers, optimisticAnswer],
                      commentCount: question.commentCount + 1,
                    }
                  : question,
              ),
            },
          };
        },
      );

      return { queryKey };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.courseInteractions.questions(courseId, lessonId),
      });
    },
    onError: (_error, _variables, context) => {
      if (context?.queryKey) {
        queryClient.invalidateQueries({ queryKey: context.queryKey });
      }
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
    onMutate: async (questionId) => {
      const user = useAuthStore.getState().user;
      if (!user) return {};

      const queryKey = queryKeys.courseInteractions.questions(courseId, lessonId);
      await queryClient.cancelQueries({ queryKey });

      queryClient.setQueryData<ApiResponse<{ questions: CourseQuestion[] }>>(
        queryKey,
        (old) => {
          if (!old?.data) return old;
          return {
            ...old,
            data: {
              ...old.data,
              questions: old.data.questions.map((question) => {
                if (question.id !== questionId) return question;
                const hasUpvoted = question.upvotes.includes(user._id);
                const upvotes = hasUpvoted
                  ? question.upvotes.filter((id) => id !== user._id)
                  : [...question.upvotes, user._id];
                return {
                  ...question,
                  upvotes,
                  upvoteCount: upvotes.length,
                };
              }),
            },
          };
        },
      );

      return { queryKey };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.courseInteractions.questions(courseId, lessonId),
      });
    },
    onError: (_error, _variables, context) => {
      if (context?.queryKey) {
        queryClient.invalidateQueries({ queryKey: context.queryKey });
      }
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
