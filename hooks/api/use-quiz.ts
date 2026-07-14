import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  quizApi,
  CreateQuizQuestionPayload,
  SubmitQuizPayload,
  CreateQuizPayload
} from "@/lib/api/endpoints/quiz";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetQuizzes = () => {
  return useQuery({
    queryKey: [...queryKeys.quiz.all, "list"] as const,
    queryFn: () => quizApi.getAll(),
  });
};

export const useGetQuizById = (quizId: string) => {
  return useQuery({
    queryKey: [...queryKeys.quiz.all, "detail", quizId] as const,
    queryFn: () => quizApi.getById(quizId),
    enabled: !!quizId,
  });
};

export const useCreateQuizQuestionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateQuizQuestionPayload) => quizApi.createQuestion(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.quiz.all });
    },
  });
};

export const useSubmitQuizMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: SubmitQuizPayload) => quizApi.submitQuiz(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.quiz.all });
    },
  });
};

export const useCreateQuizMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateQuizPayload) => quizApi.createQuiz(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.quiz.all });
    },
  });
};
