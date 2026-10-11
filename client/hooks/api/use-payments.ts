import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  paymentsApi,
  GetPaymentsParams,
  EditOrderPayload,
  BulkOrderActionPayload,
  ConnectGatewayPayload,
  CreatePricingPlanPayload,
} from "@/lib/api/endpoints/payments";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetAllPayments = (params: GetPaymentsParams = {}) =>
  useQuery({
    queryKey: queryKeys.payments.list(params),
    queryFn: () => paymentsApi.getAllPayments(params),
  });

export const useGetPaymentAnalytics = () => {
  return useQuery({
    queryKey: queryKeys.payments.analytics(),
    queryFn: () => paymentsApi.getAnalytics(),
  });
};

export const useGetStudentPurchases = (params?: { page?: number; limit?: number; status?: string }) => {
  return useQuery({
    queryKey: queryKeys.payments.studentPurchases(params),
    queryFn: () => paymentsApi.getStudentPurchases(params),
  });
};

export const useGetSingleOrder = (orderId: string) =>
  useQuery({
    queryKey: queryKeys.payments.detail(orderId),
    queryFn: () => paymentsApi.getSingleOrder(orderId),
    enabled: !!orderId,
  });

export const useEditOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: EditOrderPayload) => paymentsApi.editOrder(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.payments.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.payments.detail(variables.orderId),
      });
    },
  });
};

export const useBulkEditOrdersMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: BulkOrderActionPayload) => paymentsApi.bulkEditOrders(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.payments.all }),
  });
};

export const useAddOrderNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ orderId, content, isPrivate }: { orderId: string; content: string; isPrivate?: boolean }) =>
      paymentsApi.addOrderNote(orderId, content, isPrivate),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.payments.detail(variables.orderId) });
    },
  });
};

export const useGetGateways = () => {
  return useQuery({
    queryKey: queryKeys.payments.gateways(),
    queryFn: () => paymentsApi.getGateways(),
  });
};

export const useConnectGatewayMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: ConnectGatewayPayload) => paymentsApi.connectGateway(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.payments.gateways() }),
  });
};

export const useDisconnectGatewayMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (name: string) => paymentsApi.disconnectGateway(name),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.payments.gateways() }),
  });
};

export const useSetPrimaryGatewayMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (name: string) => paymentsApi.setPrimaryGateway(name),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.payments.gateways() }),
  });
};

export const useGetPricingPlans = (params?: { course?: string; status?: string }) => {
  return useQuery({
    queryKey: queryKeys.payments.pricingPlans(params),
    queryFn: () => paymentsApi.getPricingPlans(params),
  });
};

export const useCreatePricingPlanMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreatePricingPlanPayload) => paymentsApi.createPricingPlan(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.payments.pricingPlans() }),
  });
};

export const useDeletePricingPlanMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (planId: string) => paymentsApi.deletePricingPlan(planId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.payments.pricingPlans() }),
  });
};
