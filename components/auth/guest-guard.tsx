"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { AppLoadingSpinner } from "../app-loaing-spinner";

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
      const userRole = user.role === "user" ? "student" : user.role;
      if (userRole === "admin") {
        router.replace("/dashboard/admin");
      } else if (userRole === "instructor") {
        router.replace("/dashboard/instructor");
      } else {
        router.replace("/dashboard/student");
      }
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
