"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { AppLoadingSpinner } from "../app-loaing-spinner";

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait for Zustand to hydrate the state from localStorage
  useEffect(() => {
    setIsHydrated(true);
  }, [isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;

    if (!token || !user) {
      // User is not authenticated, redirect to signin
      // You can append ?redirect=pathname if you want to redirect them back after login
      router.replace(`/auth?mode=signin`);
      return;
    }

    if (allowedRoles && allowedRoles.length > 0) {
      if (!allowedRoles.includes(user.role)) {
        // User is authenticated but doesn't have the right role
        // Redirect them to their appropriate dashboard based on their actual role
        if (user.role === "admin") {
          router.replace("/dashboard/admin");
        } else if (user.role === "instructor") {
          router.replace("/dashboard/instructor");
        } else {
          router.replace("/dashboard/student");
        }
      }
    }
  }, [isHydrated, token, user, allowedRoles, router, pathname]);

  // Show nothing or a loading spinner while checking auth
  if (!isHydrated) {
    return <AppLoadingSpinner />;
  }

  // If we reach here, either we are still waiting for the useEffect to redirect,
  // or the user is fully authorized. We should only render children if authorized.
  const isAuthorized =
    token && user && (!allowedRoles || allowedRoles.includes(user.role));

  if (!isAuthorized) {
    return <AppLoadingSpinner />;
  }

  return <>{children}</>;
}
