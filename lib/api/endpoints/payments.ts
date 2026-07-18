import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Shape reflects the actual aggregation pipeline in the backend's
// payHistory service (payment.service.ts): student/course are always
// populated objects (via $lookup+$unwind), never raw ID strings, and the
// full Payment document (including orderStatus/billingAddress/shippingAddress/
// notes) is returned per row since the pipeline never $projects those away.
export interface Payment {
  _id: string;
  student: { _id: string; name: string; email?: string };
  course: { _id: string; title: string };
  enrollment?: string;
  amount: number;
  currency?: string;
  reference?: string;
  channel?: string;
  status: "pending" | "success" | "failed";
  orderStatus: string;
  paidAt?: string;
  billingAddress?: Record<string, unknown>;
  shippingAddress?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}

// Matches payment.controller.ts `paymentHistory` -> payHistory(), which
// returns { data: Payment[], total, page, limit } (not { payments, pagination }).
export interface PaymentListData {
  data: Payment[];
  total: number;
  page: number;
  limit: number;
}

// Matches the backend's PaymentHistoryRequest type exactly.
export interface GetPaymentsParams {
  page?: number;
  limit?: number;
  search?: string;
  order?: "asc" | "desc";
  sortBy?: string;
}

export interface PaymentAnalytics {
  totalRevenue: number;
  totalTransactions: number;
  platformFees: number;
  instructorPayouts: number;
  platformFeePercent: number;
  monthlyRevenue: { year: number; month: number; revenue: number }[];
}

export interface OrderNote {
  author?: { _id: string; name: string } | string;
  content: string;
  isPrivate: boolean;
  createdAt: string;
}

export interface OrderRecord {
  _id: string;
  student: { _id: string; name: string; email: string } | string;
  course: { _id: string; title: string } | string;
  amount: number;
  currency: string;
  reference: string;
  channel?: string;
  status: string;
  orderStatus: string;
  paidAt?: string;
  billingAddress?: Record<string, unknown>;
  shippingAddress?: Record<string, unknown>;
  notes?: OrderNote[];
  createdAt: string;
  purchaseHistory?: {
    _id: string;
    course: { _id: string; title: string } | string;
    amount: number;
    status: string;
    orderStatus: string;
    createdAt: string;
  }[];
}

export interface EditOrderPayload {
  orderId: string;
  billingAddress?: Record<string, unknown>;
  shippingAddress?: Record<string, unknown>;
}

export interface BulkOrderActionPayload {
  orderIds: string[];
  completed?: boolean;
  onhold?: boolean;
  cancelled?: boolean;
  processing?: boolean;
  delete?: boolean;
}

export interface PaymentGateway {
  _id: string;
  name: "stripe" | "paystack";
  isConnected: boolean;
  mode: "live" | "test";
  publicKey?: string;
  secretKeyLast4?: string;
  isPrimary: boolean;
  connectedAt?: string;
}

export interface ConnectGatewayPayload {
  name: "stripe" | "paystack";
  mode?: "live" | "test";
  publicKey?: string;
  secretKey: string;
  isPrimary?: boolean;
}

export interface PricingPlan {
  _id: string;
  course: { _id: string; title: string } | string;
  planType: string;
  price: number;
  duration: string;
  accessType: string;
  status: string;
  createdAt: string;
}

export interface CreatePricingPlanPayload {
  course: string;
  planType?: string;
  price: number;
  duration?: string;
  accessType?: string;
  status?: string;
}

function toQueryString(params: Record<string, any>): string {
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

  getAnalytics: () =>
    apiClient<ApiResponse<PaymentAnalytics>>("/api/v1/payment/analytics", {
      method: "GET",
      requireAuth: true,
    }),

  getStudentPurchases: (params?: { page?: number; limit?: number; status?: string }) =>
    apiClient<ApiResponse & { purchases: any[] }>(
      `/api/v1/payment/student-purchases${toQueryString(params ?? {})}`,
      { method: "GET", requireAuth: true },
    ),

  getSingleOrder: (orderId: string) =>
    apiClient<ApiResponse<OrderRecord>>(`/api/v1/payment/single-order/${orderId}`, {
      method: "GET",
      requireAuth: true,
    }),

  editOrder: (payload: EditOrderPayload) =>
    apiClient<ApiResponse>("/api/v1/payment/edit-order", {
      method: "PUT",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  bulkEditOrders: (payload: BulkOrderActionPayload) =>
    apiClient<ApiResponse>("/api/v1/payment/bulk-edit", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  addOrderNote: (orderId: string, content: string, isPrivate = true) =>
    apiClient<ApiResponse<OrderNote[]>>(`/api/v1/payment/single-order/${orderId}/notes`, {
      method: "POST",
      body: JSON.stringify({ content, isPrivate }),
      requireAuth: true,
    }),

  getGateways: () =>
    apiClient<ApiResponse<PaymentGateway[]>>("/api/v1/payment/gateways", {
      method: "GET",
      requireAuth: true,
    }),

  connectGateway: (payload: ConnectGatewayPayload) =>
    apiClient<ApiResponse<PaymentGateway>>("/api/v1/payment/gateways", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  disconnectGateway: (name: string) =>
    apiClient<ApiResponse<PaymentGateway>>(`/api/v1/payment/gateways/${name}`, {
      method: "DELETE",
      requireAuth: true,
    }),

  setPrimaryGateway: (name: string) =>
    apiClient<ApiResponse<PaymentGateway>>(`/api/v1/payment/gateways/${name}/set-primary`, {
      method: "PUT",
      requireAuth: true,
    }),

  getPricingPlans: (params?: { course?: string; status?: string }) =>
    apiClient<ApiResponse<PricingPlan[]>>(
      `/api/v1/payment/pricing-plans${toQueryString(params ?? {})}`,
      { method: "GET", requireAuth: true },
    ),

  createPricingPlan: (payload: CreatePricingPlanPayload) =>
    apiClient<ApiResponse<PricingPlan>>("/api/v1/payment/pricing-plans", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  deletePricingPlan: (planId: string) =>
    apiClient<ApiResponse>(`/api/v1/payment/pricing-plans/${planId}`, {
      method: "DELETE",
      requireAuth: true,
    }),
};
