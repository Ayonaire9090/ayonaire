"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { AppLoadingSpinner } from "../app-loaing-spinner";
import { getDashboardRole } from "@/lib/auth/roles";
import { useGetProfile } from "@/hooks/api/use-auth";

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
  const profileQuery = useGetProfile();

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
      const userRole = getDashboardRole(user.role);
      if (!userRole) return;

      if (!allowedRoles.includes(userRole)) {
        // User is authenticated but doesn't have the right role
        // Redirect them to their appropriate dashboard based on their actual role
        const target = `/dashboard/${userRole}`;
        
        // Prevent infinite redirect loops
        if (!pathname.startsWith(target)) {
          router.replace(target);
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
  const userRole = getDashboardRole(user?.role);
  if (token && user && !userRole && profileQuery.isFetching) {
    return <AppLoadingSpinner />;
  }

  const isAuthorized =
    token && user && (!allowedRoles || (userRole && allowedRoles.includes(userRole)));

  if (!isAuthorized) {
    return <AppLoadingSpinner />;
  }

  return <>{children}</>;
}
