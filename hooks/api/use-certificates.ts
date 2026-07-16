import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { certificatesApi } from "@/lib/api/endpoints/certificates";

const certificatesKey = ["certificates"] as const;

export const useGetCertificates = (params?: {
  course?: string;
  student?: string;
  status?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: [...certificatesKey, "list", params ?? {}] as const,
    queryFn: () => certificatesApi.getAll(params),
  });
};

export const useGetMyCertificates = () => {
  return useQuery({
    queryKey: [...certificatesKey, "mine"] as const,
    queryFn: () => certificatesApi.getMine(),
  });
};

export const useVerifyCertificate = (certificateId: string) => {
  return useQuery({
    queryKey: [...certificatesKey, "verify", certificateId] as const,
    queryFn: () => certificatesApi.verify(certificateId),
    enabled: !!certificateId,
  });
};

export const useIssueCertificateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ studentId, courseId }: { studentId: string; courseId: string }) =>
      certificatesApi.issue(studentId, courseId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: certificatesKey }),
  });
};

export const useRevokeCertificateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => certificatesApi.revoke(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: certificatesKey }),
  });
};
