"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { AppLoadingSpinner } from "../app-loaing-spinner";
import { normalizeDashboardRole } from "@/lib/auth/roles";

interface GuestGuardProps {
  children: React.ReactNode;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    if (token && user) {
      router.replace(`/dashboard/${normalizeDashboardRole(user.role)}`);
    }
  }, [isHydrated, token, user, router]);

  if (!isHydrated) {
    return <AppLoadingSpinner />;
  }

  // If the user is logged in, show a spinner while redirecting
  if (token && user) {
    return <AppLoadingSpinner />;
  }

  return <>{children}</>;
}
