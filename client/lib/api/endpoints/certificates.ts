import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CertificateRecord {
  _id: string;
  student: { _id: string; name: string; email: string } | string;
  course: { _id: string; title: string; thumbnail?: { url: string } } | string;
  certificateId: string;
  issuedAt: string;
  status: "active" | "revoked";
}

export interface CertificateVerification {
  valid: boolean;
  certificateId: string;
  student: { _id: string; name: string };
  course: { _id: string; title: string };
  issuedAt: string;
  status: string;
}

export const certificatesApi = {
  issue: (studentId: string, courseId: string) =>
    apiClient<ApiResponse<CertificateRecord>>("/api/v1/certificate/issue", {
      method: "POST",
      body: JSON.stringify({ studentId, courseId }),
      requireAuth: true,
    }),

  getAll: (params?: { course?: string; student?: string; status?: string; page?: number; limit?: number }) => {
    const query = new URLSearchParams();
    if (params?.course) query.append("course", params.course);
    if (params?.student) query.append("student", params.student);
    if (params?.status) query.append("status", params.status);
    if (params?.page) query.append("page", String(params.page));
    if (params?.limit) query.append("limit", String(params.limit));
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse & { certificates: CertificateRecord[] }>(
      `/api/v1/certificate${qs}`,
      { method: "GET", requireAuth: true },
    );
  },

  getMine: () =>
    apiClient<ApiResponse<CertificateRecord[]>>("/api/v1/certificate/my", {
      method: "GET",
      requireAuth: true,
    }),

  verify: (certificateId: string) =>
    apiClient<ApiResponse<CertificateVerification>>(`/api/v1/certificate/verify/${certificateId}`, {
      method: "GET",
    }),

  revoke: (id: string) =>
    apiClient<ApiResponse<CertificateRecord>>(`/api/v1/certificate/${id}`, {
      method: "DELETE",
      requireAuth: true,
    }),
};
