import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  quizApi,
  CreateQuizQuestionPayload,
  SubmitQuizPayload,
  CreateQuizPayload,
  UpdateQuizPayload,
  GetQuizzesParams,
} from "@/lib/api/endpoints/quiz";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetQuizzes = (params: GetQuizzesParams = {}) => {
  return useQuery({
    queryKey: [...queryKeys.quiz.all, "list", params] as const,
    queryFn: () => quizApi.getAll(params),
  });
};

export const useGetQuizById = (quizId: string) => {
  return useQuery({
    queryKey: [...queryKeys.quiz.all, "detail", quizId] as const,
    queryFn: () => quizApi.getById(quizId),
    enabled: !!quizId,
  });
};

export const useGetQuizResults = (quizId: string) => {
  return useQuery({
    queryKey: [...queryKeys.quiz.all, "results", quizId] as const,
    queryFn: () => quizApi.getResults(quizId),
    enabled: !!quizId,
  });
};

export const useGetQuizQuestions = (quizId: string) => {
  return useQuery({
    queryKey: [...queryKeys.quiz.all, "questions", quizId] as const,
    queryFn: () => quizApi.getQuestions(quizId),
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

export const useUpdateQuizMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateQuizPayload) => quizApi.update(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.quiz.all });
    },
  });
};

export const useDeleteQuizMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (quizId: string) => quizApi.delete(quizId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.quiz.all });
    },
  });
};
