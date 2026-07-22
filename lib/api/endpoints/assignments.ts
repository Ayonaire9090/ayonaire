import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface AssignmentRecord {
  _id: string;
  title: string;
  description: string;
  course: { _id: string; title: string } | null;
  cohort: { _id: string; name: string } | null;
  module: string;
  assignmentType: string;
  status: string;
  dueDate?: string | null;
  totalPoints: number;
  totalStudents: number;
  submissionsCount: number;
  createdAt: string;
}

export interface CreateAssignmentPayload {
  course: string;
  title: string;
  description: string;
  module: string;
  cohort?: string;
  instructions?: string;
  assignmentType?: string;
  status?: string;
  dueDate?: string;
  totalPoints?: number;
  materials?: File[];
}

export interface UpdateAssignmentPayload {
  title?: string;
  description?: string;
  instructions?: string;
  cohort?: string;
  assignmentType?: string;
  status?: string;
  dueDate?: string;
  totalPoints?: number;
}

export interface AssignmentSubmissionRecord {
  _id: string;
  assignment: string;
  student: { _id: string; name: string; email: string } | null;
  text?: string;
  file?: { url: string; publicId: string; name: string } | null;
  status: string;
  grade?: number;
  feedback?: string;
  createdAt: string;
}

export interface GradeSubmissionPayload {
  grade: number;
  feedback?: string;
}

export interface AllSubmissionRecord {
  _id: string;
  assignment: { _id: string; title: string } | null;
  student: { _id: string; name: string; email: string } | null;
  course: { _id: string; title: string } | null;
  text?: string;
  file?: { url: string; publicId: string; name: string } | null;
  status: string;
  grade?: number;
  feedback?: string;
  createdAt: string;
}

export interface GetAllSubmissionsParams {
  course?: string;
  assignment?: string;
  status?: string;
  page?: number;
  limit?: number;
}

const buildAssignmentFormData = (payload: CreateAssignmentPayload) => {
  const formData = new FormData();
  formData.append("course", payload.course);
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("module", payload.module);
  if (payload.cohort) formData.append("cohort", payload.cohort);
  if (payload.instructions) formData.append("instructions", payload.instructions);
  if (payload.assignmentType) formData.append("assignmentType", payload.assignmentType);
  if (payload.status) formData.append("status", payload.status);
  if (payload.dueDate) formData.append("dueDate", payload.dueDate);
  if (payload.totalPoints !== undefined)
    formData.append("totalPoints", String(payload.totalPoints));
  (payload.materials || []).forEach((file) => {
    formData.append("materials", file);
    formData.append("materialTitles", file.name);
  });
  return formData;
};

export const assignmentsApi = {
  getAll: (params?: { course?: string; status?: string; page?: number; limit?: number }) => {
    const query = new URLSearchParams();
    if (params?.course) query.append("course", params.course);
    if (params?.status) query.append("status", params.status);
    if (params?.page) query.append("page", String(params.page));
    if (params?.limit) query.append("limit", String(params.limit));
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse<AssignmentRecord[]> & { assignments: AssignmentRecord[] }>(
      `/api/v1/assignment${qs}`,
      { method: "GET", requireAuth: true },
    );
  },

  getById: (assignmentId: string) =>
    apiClient<ApiResponse<AssignmentRecord>>(`/api/v1/assignment/${assignmentId}`, {
      method: "GET",
      requireAuth: true,
    }),

  create: (payload: CreateAssignmentPayload) =>
    apiClient<ApiResponse>("/api/v1/assignment", {
      method: "POST",
      body: buildAssignmentFormData(payload),
      requireAuth: true,
    }),

  update: (assignmentId: string, payload: UpdateAssignmentPayload) =>
    apiClient<ApiResponse>(`/api/v1/assignment/${assignmentId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  remove: (assignmentId: string) =>
    apiClient<ApiResponse>(`/api/v1/assignment/${assignmentId}`, {
      method: "DELETE",
      requireAuth: true,
    }),

  submit: (assignmentId: string, payload: { text?: string; file?: File }) => {
    const formData = new FormData();
    if (payload.text) formData.append("text", payload.text);
    if (payload.file) formData.append("file", payload.file);
    return apiClient<ApiResponse>(`/api/v1/assignment/${assignmentId}/submit`, {
      method: "POST",
      body: formData,
      requireAuth: true,
    });
  },

  getSubmissions: (assignmentId: string) =>
    apiClient<ApiResponse<AssignmentSubmissionRecord[]>>(
      `/api/v1/assignment/${assignmentId}/submissions`,
      { method: "GET", requireAuth: true },
    ),

  getAllSubmissions: (params: GetAllSubmissionsParams = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) query.append(key, String(value));
    });
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<
      ApiResponse & {
        submissions: AllSubmissionRecord[];
        pagination: { total: number; page: number; limit: number; totalPages: number };
      }
    >(`/api/v1/assignment/submissions${qs}`, { method: "GET", requireAuth: true });
  },

  grade: (submissionId: string, payload: GradeSubmissionPayload) =>
    apiClient<ApiResponse>(`/api/v1/assignment/submission/${submissionId}/grade`, {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),
};
