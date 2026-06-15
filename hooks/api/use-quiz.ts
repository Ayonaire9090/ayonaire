import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  quizApi, 
  CreateQuizQuestionPayload, 
  SubmitQuizPayload, 
  CreateQuizPayload 
} from "@/lib/api/endpoints/quiz";
import { queryKeys } from "@/lib/api/query-keys";

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
