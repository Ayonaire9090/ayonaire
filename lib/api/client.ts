import { useAuthStore } from "@/store/auth.store";

export interface RequestOptions extends RequestInit {
  token?: string; // Optional token to override the store
  requireAuth?: boolean; // If true, throws if no token is found (defaults to true for most, but maybe false for some)
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const {
    token: overrideToken,
    requireAuth = false,
    headers,
    ...rest
  } = options;

  // Get token from Zustand store directly (doesn't require React hook rules)
  const storeToken = useAuthStore.getState().token;
  const token = overrideToken || storeToken;

  if (requireAuth && !token) {
    throw new Error("Unauthorized: No token available");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
      ...headers,
    },
  });

  if (!response.ok) {
    let errorMessage = "Something went wrong";
    let errors: string[] = [];

    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.detail || errorMessage;
      errors = errorData.errors || [];
    } catch {
      // Failed to parse JSON error
      errorMessage = response.statusText || errorMessage;
    }

    // Handle 401 Unauthorized generically
    if (response.status === 401) {
      // Optional: Clear auth state and redirect to login
      useAuthStore.getState().clearAuth();
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login"; // Or wherever your login page is
      }
    }

    const error: any = new Error(errorMessage);
    error.status = response.status;
    error.errors = errors;
    throw error;
  }

  return response.json();
}
