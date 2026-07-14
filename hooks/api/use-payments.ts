import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  paymentsApi,
  GetPaymentsParams,
  EditOrderPayload,
} from "@/lib/api/endpoints/payments";
import { queryKeys } from "@/lib/api/query-keys";

export const useGetAllPayments = (params: GetPaymentsParams = {}) =>
  useQuery({
    queryKey: queryKeys.payments.list(params),
    queryFn: () => paymentsApi.getAllPayments(params),
  });

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
