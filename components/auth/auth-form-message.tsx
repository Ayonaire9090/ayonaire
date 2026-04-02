"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";

interface AuthFormMessageProps {
  type: "success" | "error";
  message: string;
  className?: string;
}

export function AuthFormMessage({
  type,
  message,
  className,
}: AuthFormMessageProps) {
  if (!message) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm p-3 rounded-lg",
        type === "error" && "bg-rose-50 text-rose-800",
        type === "success" && "bg-emerald-50 text-emerald-800",
        className,
      )}
    >
      {type === "error" ? (
        <XCircle className="w-4 h-4 shrink-0" />
      ) : (
        <CheckCircle className="w-4 h-4 shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );
}
