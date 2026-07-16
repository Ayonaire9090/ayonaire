import { apiClient } from "../client";
import { ApiResponse } from "../types";

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
  billingAddress?: Record<string, any>;
  shippingAddress?: Record<string, any>;
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
  billingAddress?: Record<string, any>;
  shippingAddress?: Record<string, any>;
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

export const paymentsApi = {
  getAllPayments: (params?: { page?: number; limit?: number; search?: string }) => {
    const query = new URLSearchParams();
    if (params?.page) query.append("page", String(params.page));
    if (params?.limit) query.append("limit", String(params.limit));
    if (params?.search) query.append("search", params.search);
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse<{ data: any[]; total: number; page: number; limit: number }>>(
      `/api/v1/payment/get-all-payments${qs}`,
      { method: "GET", requireAuth: true },
    );
  },

  getAnalytics: () =>
    apiClient<ApiResponse<PaymentAnalytics>>("/api/v1/payment/analytics", {
      method: "GET",
      requireAuth: true,
    }),

  getStudentPurchases: (params?: { page?: number; limit?: number; status?: string }) => {
    const query = new URLSearchParams();
    if (params?.page) query.append("page", String(params.page));
    if (params?.limit) query.append("limit", String(params.limit));
    if (params?.status) query.append("status", params.status);
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse & { purchases: any[] }>(
      `/api/v1/payment/student-purchases${qs}`,
      { method: "GET", requireAuth: true },
    );
  },

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

  getPricingPlans: (params?: { course?: string; status?: string }) => {
    const query = new URLSearchParams();
    if (params?.course) query.append("course", params.course);
    if (params?.status) query.append("status", params.status);
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiClient<ApiResponse<PricingPlan[]>>(`/api/v1/payment/pricing-plans${qs}`, {
      method: "GET",
      requireAuth: true,
    });
  },

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
