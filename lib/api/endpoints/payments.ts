import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Confirmed 2026-07-14 against the live Swagger spec
// (https://ayonaire.onrender.com/api-docs/), tag "Payments". student/course/
// enrollment are plain ID strings per the documented schema, though handled
// defensively in case a populated response comes back.
//
// NOTE: get-all-payments's response is documented only as
// { success, data: object } with no defined properties (confirmed live to
// require an admin token - our test account got 403, so the actual shape of
// `data` is unverified). Guessed as { payments: Payment[], pagination }
// following this backend's established pattern for other paginated list
// endpoints (workshops -> data.workshops, announcements -> data.announcement).
// Needs confirmation once an admin account is available.
export interface Payment {
  _id: string;
  student: string | { _id: string; name: string; email?: string };
  course: string | { _id: string; title: string };
  enrollment?: string;
  amount: number;
  currency?: string;
  reference?: string;
  channel?: string;
  status?: "pending" | "successful" | "failed";
  paidAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PaymentListData {
  payments: Payment[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface GetPaymentsParams {
  page?: number;
  limit?: number;
  search?: string;
  order?: "asc" | "desc";
  sortBy?: string;
}

export interface EditOrderPayload {
  orderId: string;
  billingAddress?: Record<string, unknown>;
  shippingAddress?: Record<string, unknown>;
}

function toQueryString(params: GetPaymentsParams): string {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) query.append(key, String(value));
  });
  const qs = query.toString();
  return qs ? `?${qs}` : "";
}

export const paymentsApi = {
  getAllPayments: (params: GetPaymentsParams = {}) =>
    apiClient<ApiResponse<PaymentListData>>(
      `/api/v1/payment/get-all-payments${toQueryString(params)}`,
      { method: "GET", requireAuth: true },
    ),

  getSingleOrder: (orderId: string) =>
    apiClient<ApiResponse<Payment>>(`/api/v1/payment/single-order/${orderId}`, {
      method: "GET",
      requireAuth: true,
    }),

  editOrder: (payload: EditOrderPayload) =>
    apiClient<ApiResponse>("/api/v1/payment/edit-order", {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),
};
