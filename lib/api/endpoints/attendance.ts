import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface AttendanceRecordInput {
  student: string;
  status: "present" | "absent" | "late" | "unmarked";
  timeIn?: string;
  timeOut?: string;
  notes?: string;
}

export interface AttendanceSessionSummary {
  _id: string;
  title: string;
  course: { _id: string; title: string } | string;
  cohort?: { _id: string; name: string } | string | null;
  date: string;
  instructor?: { _id: string; name: string } | string;
  presentCount: number;
  absentCount: number;
  attendanceRate: number;
  approvalStatus: string;
  createdAt: string;
}

export interface AttendanceSessionDetail extends Omit<AttendanceSessionSummary, "presentCount" | "absentCount" | "attendanceRate"> {
  records: (AttendanceRecordInput & { student: { _id: string; name: string; email: string } })[];
}

export interface CreateAttendanceSessionPayload {
  course: string;
  cohort?: string;
  title: string;
  date: string;
  records: AttendanceRecordInput[];
}

export interface AttendanceReportEntry {
  student: { _id: string; name: string; email: string };
  sessionsAttended: number;
  sessionsMissed: number;
  totalSessions: number;
  attendanceRate: number;
  status: "good-standing" | "at-risk" | "critical";
}

export const attendanceApi = {
  create: (payload: CreateAttendanceSessionPayload) =>
    apiClient<ApiResponse<AttendanceSessionDetail>>("/api/v1/attendance", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  getAll: (params?: { course?: string; cohort?: string; approvalStatus?: string; page?: number; limit?: number }) => {
    const query = new URLSearchParams();
    if (params?.course) query.append("course", params.course);
    if (params?.cohort) query.append("cohort", params.cohort);
    if (params?.approvalStatus) query.append("approvalStatus", params.approvalStatus);
    if (params?.page) query.append("page", String(params.page));
    if (params?.limit) query.append("limit", String(params.limit));
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse & { sessions: AttendanceSessionSummary[] }>(
      `/api/v1/attendance${qs}`,
      { method: "GET", requireAuth: true },
    );
  },

  getById: (sessionId: string) =>
    apiClient<ApiResponse<AttendanceSessionDetail>>(`/api/v1/attendance/${sessionId}`, {
      method: "GET",
      requireAuth: true,
    }),

  update: (sessionId: string, payload: Partial<CreateAttendanceSessionPayload>) =>
    apiClient<ApiResponse<AttendanceSessionDetail>>(`/api/v1/attendance/${sessionId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  approve: (sessionId: string, approve: boolean) =>
    apiClient<ApiResponse<AttendanceSessionDetail>>(`/api/v1/attendance/${sessionId}/approve`, {
      method: "PUT",
      body: JSON.stringify({ approve }),
      requireAuth: true,
    }),

  remove: (sessionId: string) =>
    apiClient<ApiResponse>(`/api/v1/attendance/${sessionId}`, {
      method: "DELETE",
      requireAuth: true,
    }),

  getReport: (params?: { course?: string; cohort?: string }) => {
    const query = new URLSearchParams();
    if (params?.course) query.append("course", params.course);
    if (params?.cohort) query.append("cohort", params.cohort);
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse<AttendanceReportEntry[]>>(`/api/v1/attendance/reports${qs}`, {
      method: "GET",
      requireAuth: true,
    });
  },
};
