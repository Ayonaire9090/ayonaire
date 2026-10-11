import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  attendanceApi,
  CreateAttendanceSessionPayload,
} from "@/lib/api/endpoints/attendance";

const attendanceKey = ["attendance"] as const;

export const useGetAttendanceSessions = (params?: {
  course?: string;
  cohort?: string;
  approvalStatus?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [...attendanceKey, "list", params ?? {}] as const,
    queryFn: () => attendanceApi.getAll(params),
  });
};

export const useGetAttendanceSessionById = (sessionId: string) => {
  return useQuery({
    queryKey: [...attendanceKey, "detail", sessionId] as const,
    queryFn: () => attendanceApi.getById(sessionId),
    enabled: !!sessionId,
  });
};

export const useGetAttendanceReport = (params?: { course?: string; cohort?: string }) => {
  return useQuery({
    queryKey: [...attendanceKey, "report", params ?? {}] as const,
    queryFn: () => attendanceApi.getReport(params),
  });
};

export const useCreateAttendanceSessionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateAttendanceSessionPayload) => attendanceApi.create(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: attendanceKey }),
  });
};

export const useUpdateAttendanceSessionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ sessionId, payload }: { sessionId: string; payload: Partial<CreateAttendanceSessionPayload> }) =>
      attendanceApi.update(sessionId, payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: attendanceKey }),
  });
};

export const useApproveAttendanceSessionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ sessionId, approve }: { sessionId: string; approve: boolean }) =>
      attendanceApi.approve(sessionId, approve),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: attendanceKey }),
  });
};

export const useDeleteAttendanceSessionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (sessionId: string) => attendanceApi.remove(sessionId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: attendanceKey }),
  });
};
