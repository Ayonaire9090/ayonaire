import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  paymentsApi,
  EditOrderPayload,
  BulkOrderActionPayload,
  ConnectGatewayPayload,
  CreatePricingPlanPayload,
} from "@/lib/api/endpoints/payments";

const paymentsKey = ["payments"] as const;

export const useGetAllPayments = (params?: { page?: number; limit?: number; search?: string }) => {
  return useQuery({
    queryKey: [...paymentsKey, "all", params ?? {}] as const,
    queryFn: () => paymentsApi.getAllPayments(params),
  });
};

export const useGetPaymentAnalytics = () => {
  return useQuery({
    queryKey: [...paymentsKey, "analytics"] as const,
    queryFn: () => paymentsApi.getAnalytics(),
  });
};

export const useGetStudentPurchases = (params?: { page?: number; limit?: number; status?: string }) => {
  return useQuery({
    queryKey: [...paymentsKey, "student-purchases", params ?? {}] as const,
    queryFn: () => paymentsApi.getStudentPurchases(params),
  });
};

export const useGetSingleOrder = (orderId: string) => {
  return useQuery({
    queryKey: [...paymentsKey, "order", orderId] as const,
    queryFn: () => paymentsApi.getSingleOrder(orderId),
    enabled: !!orderId,
  });
};

export const useEditOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: EditOrderPayload) => paymentsApi.editOrder(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: paymentsKey });
      queryClient.invalidateQueries({ queryKey: [...paymentsKey, "order", variables.orderId] });
    },
  });
};

export const useBulkEditOrdersMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: BulkOrderActionPayload) => paymentsApi.bulkEditOrders(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: paymentsKey }),
  });
};

export const useAddOrderNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ orderId, content, isPrivate }: { orderId: string; content: string; isPrivate?: boolean }) =>
      paymentsApi.addOrderNote(orderId, content, isPrivate),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [...paymentsKey, "order", variables.orderId] });
    },
  });
};

export const useGetGateways = () => {
  return useQuery({
    queryKey: [...paymentsKey, "gateways"] as const,
    queryFn: () => paymentsApi.getGateways(),
  });
};

export const useConnectGatewayMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: ConnectGatewayPayload) => paymentsApi.connectGateway(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [...paymentsKey, "gateways"] }),
  });
};

export const useDisconnectGatewayMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (name: string) => paymentsApi.disconnectGateway(name),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [...paymentsKey, "gateways"] }),
  });
};

export const useSetPrimaryGatewayMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (name: string) => paymentsApi.setPrimaryGateway(name),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [...paymentsKey, "gateways"] }),
  });
};

export const useGetPricingPlans = (params?: { course?: string; status?: string }) => {
  return useQuery({
    queryKey: [...paymentsKey, "pricing-plans", params ?? {}] as const,
    queryFn: () => paymentsApi.getPricingPlans(params),
  });
};

export const useCreatePricingPlanMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreatePricingPlanPayload) => paymentsApi.createPricingPlan(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [...paymentsKey, "pricing-plans"] }),
  });
};

export const useDeletePricingPlanMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (planId: string) => paymentsApi.deletePricingPlan(planId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [...paymentsKey, "pricing-plans"] }),
  });
};
