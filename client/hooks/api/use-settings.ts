import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { settingsApi, SettingCategory } from "@/lib/api/endpoints/settings";

const settingsKey = ["settings"] as const;

export const useGetAllSettings = () => {
  return useQuery({
    queryKey: [...settingsKey, "all"] as const,
    queryFn: () => settingsApi.getAll(),
  });
};

export const useGetSettingsByCategory = (category: SettingCategory) => {
  return useQuery({
    queryKey: [...settingsKey, category] as const,
    queryFn: () => settingsApi.getByCategory(category),
    enabled: !!category,
  });
};

export const useUpdateSettingsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ category, data }: { category: SettingCategory; data: Record<string, any> }) =>
      settingsApi.updateByCategory(category, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: settingsKey });
      queryClient.invalidateQueries({ queryKey: [...settingsKey, variables.category] });
    },
  });
};
