"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AppDropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  variant?: "white" | "gray";
  align?: "start" | "center" | "end";
  className?: string; // Optional custom styling for the root
  contentClassName?: string; // Optional custom styling for the content box
}

export function AppDropdown({
  trigger,
  children,
  variant = "white",
  align = "end",
  contentClassName = "",
}: AppDropdownProps) {
  const baseContentStyles = "rounded-xl border-gray-200 shadow-sm";

  const variantStyles = {
    white: "bg-white p-0 py-2 w-[180px]",
    gray: "bg-[#F6F6F6] p-1 w-32",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className={`${baseContentStyles} ${variantStyles[variant]} ${contentClassName}`}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface AppDropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "menu" | "danger-menu" | "badge" | "active-badge";
  asChild?: boolean;
}

export function AppDropdownItem({
  children,
  onClick,
  className = "",
  variant = "menu",
  asChild = false,
}: AppDropdownItemProps) {
  const variantStyles = {
    "menu":
      "cursor-pointer text-[15px] text-gray-600 font-normal px-4 py-2 hover:bg-gray-50 focus:bg-gray-50",
    "danger-menu":
      "cursor-pointer text-[15px] text-red-500 font-normal px-4 py-2 hover:bg-red-50 focus:bg-red-50 focus:text-red-600",
    "badge":
      "text-gray-500 text-xs justify-center hover:bg-gray-100 rounded-lg cursor-pointer my-0.5",
    "active-badge":
      "bg-gray-600 text-white text-xs justify-center rounded-lg cursor-pointer focus:bg-gray-700 focus:text-white my-0.5",
  };

  return (
    <DropdownMenuItem
      onClick={onClick}
      asChild={asChild}
      className={`${variantStyles[variant]} ${className}`}
    >
      {children}
    </DropdownMenuItem>
  );
}

export function AppDropdownSeparator({ className = "" }: { className?: string }) {
  return <div className={`mx-4 my-1 h-px bg-gray-100 ${className}`} />;
}
