import { useAuthStore } from "@/store/auth.store";

export interface RequestOptions extends RequestInit {
  token?: string; // Optional token to override the store
  requireAuth?: boolean; // If true, throws if no token is found (defaults to true for most, but maybe false for some)
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

// Dedupe concurrent 401s during the same expired-token window into a single
// refresh call, instead of every in-flight request firing its own.
let refreshPromise: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
  if (refreshPromise) return refreshPromise;

  refreshPromise = (async () => {
    const { refreshToken, user, setAuth, clearAuth } = useAuthStore.getState();
    if (!refreshToken) {
      clearAuth();
      return null;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/auth/refresh-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (!res.ok) {
        clearAuth();
        return null;
      }

      const json = await res.json();
      const data = json.data ?? json;
      const newToken: string | undefined = data.accessToken || data.token;
      const newRefreshToken: string | undefined = data.refreshToken;
      const newUser = data.user ?? user;

      if (!newToken || !newUser) {
        clearAuth();
        return null;
      }

      setAuth(newToken, newUser, newRefreshToken ?? refreshToken);
      return newToken;
    } catch {
      clearAuth();
      return null;
    }
  })();

  try {
    return await refreshPromise;
  } finally {
    refreshPromise = null;
  }
}

async function performRequest<T>(
  endpoint: string,
  options: RequestOptions,
  isRetry: boolean,
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

    if (response.status === 401) {
      // Only a request that was actually authenticated is a candidate for
      // "your session expired" - a public/unauthenticated call 401ing for
      // its own reasons shouldn't nuke an unrelated active session.
      const wasAuthedRequest = requireAuth || !!token;

      if (wasAuthedRequest && !isRetry) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          return performRequest<T>(endpoint, options, true);
        }
        // refreshAccessToken() already cleared auth on failure.
      } else if (wasAuthedRequest && isRetry) {
        // Retried with a freshly-refreshed token and still got 401 - the
        // session is genuinely dead, not just a stale access token.
        useAuthStore.getState().clearAuth();
      }
    }

    const error: any = new Error(errorMessage);
    error.status = response.status;
    error.errors = errors;
    throw error;
  }

  return response.json();
}

export function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  return performRequest<T>(endpoint, options, false);
}
