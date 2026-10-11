import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  askForHelpApi,
  GetAskForHelpQuestionsParams,
} from "@/lib/api/endpoints/ask-for-help";

const askForHelpKey = ["ask-for-help"] as const;

export const useGetAskForHelpQuestions = (
  params?: GetAskForHelpQuestionsParams,
) => {
  return useQuery({
    queryKey: [...askForHelpKey, "list", params ?? {}] as const,
    queryFn: () => askForHelpApi.getAll(params),
  });
};

export const useCreateAskForHelpQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => askForHelpApi.create(formData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: askForHelpKey }),
  });
};

export const useEditAskForHelpQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => askForHelpApi.edit(formData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: askForHelpKey }),
  });
};

export const useDeleteAskForHelpQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (questionId: string) => askForHelpApi.delete(questionId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: askForHelpKey }),
  });
};

export const useLikeAskForHelpQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (questionId: string) => askForHelpApi.like(questionId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: askForHelpKey }),
  });
};

export const useAnswerAskForHelpQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ questionId, text }: { questionId: string; text: string }) =>
      askForHelpApi.answer(questionId, text),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: askForHelpKey }),
  });
};

export const useDeleteAskForHelpAnswerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      questionId,
      answerId,
    }: {
      questionId: string;
      answerId: string;
    }) => askForHelpApi.deleteAnswer(questionId, answerId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: askForHelpKey }),
  });
};

export const useShareAskForHelpQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (questionId: string) => askForHelpApi.share(questionId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: askForHelpKey }),
  });
};

export const useResolveAskForHelpQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      questionId,
      resolved,
    }: {
      questionId: string;
      resolved: boolean;
    }) => askForHelpApi.resolve(questionId, resolved),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: askForHelpKey }),
  });
};
