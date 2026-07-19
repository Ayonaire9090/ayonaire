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

  // FormData bodies must NOT have an explicit Content-Type - the browser
  // needs to set it itself (including the multipart boundary).
  const isFormData = typeof FormData !== "undefined" && rest.body instanceof FormData;

  const mergedHeaders: Record<string, string> = {
    ...(!isFormData && { "Content-Type": "application/json" }),
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
    ...(headers as Record<string, string> | undefined),
  };

  // Strip out any explicitly-undefined header values (e.g. legacy callers
  // passing `{ "Content-Type": undefined }` to opt out of the JSON default).
  for (const key of Object.keys(mergedHeaders)) {
    if (mergedHeaders[key] === undefined) delete mergedHeaders[key];
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...rest,
    headers: mergedHeaders,
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
      // Optional: Clear auth state
      useAuthStore.getState().clearAuth();

      // Optionally: Reload Window or redirect: Commented for now
      // if (typeof window !== "undefined") {
      //   window.location.reload(); // refresh for now
      //   // window.location.href = "/auth"; // Or wherever your login page is
      // }
    }

    const error: any = new Error(errorMessage);
    error.status = response.status;
    error.errors = errors;
    throw error;
  }

  return response.json();
}
