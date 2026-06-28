"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { BellDot } from "lucide-react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { useLogoutMutation } from "@/hooks/api/use-auth";
import { useAuthStore } from "@/store/auth.store";

export const DashboardUserDropDown = ({
  children,
  align = "end",
  sideOffset = 8,
  side,
  className,
}: {
  children: React.ReactNode;
  align?: DropdownMenuContentProps["align"];
  sideOffset?: number;
  side?: DropdownMenuContentProps["side"];
  className?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const logoutMutation = useLogoutMutation();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const handleLogout = async () => {
    // Attempt to hit the logout endpoint, and clear the auth store regardless of success
    try {
      await logoutMutation.mutateAsync({ refreshToken: "" });
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      clearAuth();
      router.push("/auth");
    }
  };

  const profilePath = pathname.includes("/admin")
    ? "admin"
    : pathname.includes("instructor")
      ? "instructor"
      : pathname.includes("/student")
        ? "student"
        : "";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className={`w-48 rounded-xl border-0 bg-[#F2F2F2] shadow-sm p-2 space-y-1 ${className || ""}`}
      >
        <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
          <Image
            src="/assets/icons/user-solid.svg"
            alt="View Profile"
            width={20}
            height={20}
            className="h-5 w-5 text-gray-700"
          />
          <button
            onClick={() => router.push(`/dashboard/${profilePath}/profile`)}
            className="flex w-full! h-full! cursor-pointer bg-transparent! flex-start! items-start"
          >
            View Profile
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
          <Image
            src="/assets/icons/account-solid.svg"
            alt="My account"
            width={20}
            height={20}
            className="h-5 w-5 text-gray-700"
          />
          <button
            onClick={() =>
              router.push(`/dashboard/${profilePath}/profile/edit`)
            }
            className="flex w-full! h-full! cursor-pointer bg-transparent! flex-start! items-start"
          >
            My account
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white">
          <BellDot
            className="bg-[#222222] p-1 rounded-full text-white font-bold w-5.5! h-5.5!"
            strokeWidth={2.7}
          />
          Notifications
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium text-red-500 hover:bg-white focus:bg-white hover:text-red-500 focus:text-red-500"
        >
          <Image
            src="/assets/icons/round-logout.svg"
            alt="Logout"
            width={20}
            height={20}
            className="h-5 w-5 text-[#EF4444]"
          />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
