import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  assignmentsApi,
  CreateAssignmentPayload,
  UpdateAssignmentPayload,
  GradeSubmissionPayload,
} from "@/lib/api/endpoints/assignments";
import { queryKeys } from "@/lib/api/query-keys";

const assignmentsKey = ["assignments"] as const;

export const useGetAssignments = (params?: {
  course?: string;
  status?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [...assignmentsKey, "list", params ?? {}] as const,
    queryFn: () => assignmentsApi.getAll(params),
  });
};

export const useGetAssignmentById = (assignmentId: string) => {
  return useQuery({
    queryKey: [...assignmentsKey, "detail", assignmentId] as const,
    queryFn: () => assignmentsApi.getById(assignmentId),
    enabled: !!assignmentId,
  });
};

export const useCreateAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateAssignmentPayload) => assignmentsApi.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: assignmentsKey });
    },
  });
};

export const useUpdateAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ assignmentId, payload }: { assignmentId: string; payload: UpdateAssignmentPayload }) =>
      assignmentsApi.update(assignmentId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: assignmentsKey });
    },
  });
};

export const useDeleteAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (assignmentId: string) => assignmentsApi.remove(assignmentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: assignmentsKey });
    },
  });
};

export const useSubmitAssignmentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ assignmentId, payload }: { assignmentId: string; payload: { text?: string; file?: File } }) =>
      assignmentsApi.submit(assignmentId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: assignmentsKey });
    },
  });
};

export const useGetAssignmentSubmissions = (assignmentId: string) => {
  return useQuery({
    queryKey: [...assignmentsKey, "submissions", assignmentId] as const,
    queryFn: () => assignmentsApi.getSubmissions(assignmentId),
    enabled: !!assignmentId,
  });
};

export const useGradeSubmissionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ submissionId, payload }: { submissionId: string; payload: GradeSubmissionPayload }) =>
      assignmentsApi.grade(submissionId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: assignmentsKey });
    },
  });
};
